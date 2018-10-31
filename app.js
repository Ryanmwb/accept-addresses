const inquirer = require('inquirer');
const MenuController = require('./controllers/MenuController');
const menu = new MenuController();

menu.clear();
menu.main();

/* const questions = [
    {
        type: "list",
        name: "q1",
        message: "Are you hungry?: ",
        choices: [
            "Yes",
            "No"
      ]
    },
    {
        type: "input",
        name: "q2",
        message: "What's your name?: ", 
    }
  ]

  inquirer.prompt(questions).then((answers) => {
    if (answers.q1 === "Yes") {
      console.log("Get up and eat " + answers.q2 + "!");
    } else {
      console.log("Get back to work " + answers.q2 + "!");
    }
  })
  .catch((err) => {
      console.log(err);
  });

  */