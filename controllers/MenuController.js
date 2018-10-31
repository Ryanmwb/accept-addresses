const inquirer = require('inquirer');

module.exports = class MenuController {
    constructor(){
        this.mainMenuQuestions = [
            {
                type: 'list', 
                name: 'mainMenuChoice',
                message: 'Please choose from an option below: ',
                choices: [
                    "Add new contact", 
                    'Exit'
                ]
            },
            {
                type: 'list',
                name: 'timeChoice',
                message: 'Would you like to know the date and time?: ',
                choices: [
                    'Yes',
                    'No'
                ]
            }
        ];
        this.getDate =  new Date(); //getHours()+":"+getMinutes()+" "+getMonth()+","+getDay()+","+getFullYear();
        this.contacts = [];
    }

    main(){
        console.log(`Welcome to AddressBloc!`);
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
        switch(response.mainMenuChoice){
            case "Add new contact":
                this.addContact();
            break;
            case "Exit":
                this.exit();
            default:
                console.log("Invalid input");
                this.main();
            }
        if(response.timeChoice == 'Yes'){
            this.tellTime();
            this.main();
        }else if(response.timeChoice == 'No'){
            console.log("then I won't tell you the time.")
            this.main();
        }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    clear(){
        console.log('\x1Bc');
    }

    addContact(){
        this.clear();
        console.log('addContact called');
        this.main();
    }

    exit(){
        console.log('thanks for using AddressBloc!');
        process.exit();
    }

    tellTime(){
        console.log('The time and date is --> '+ this.getDate)
    }
}