const ContactController = require("../controllers/ContactController")
const sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {
    beforeEach((done) => {
        this.book = new ContactController();
        //Before each test, we want to clear the test database of any entries created
        sequelize.sync({force: true}).then((res) => {
            done();
        })
        .catch((err) => {
            done();
        });
    });
    it("Should be defined", () => {
        expect(ContactController).toBeDefined();
    });
    describe("#addContact()", () => {

        it("should add a single contact into the book", (done) => {
            this.book.addContact("Alice", "001-101-1010", "ryanmwb")
            .then((contact) => {
                expect(contact.name).toBe("Alice");
                expect(contact.phone).toBe("001-101-1010");
                expect(contact.phone).toBe("ryanmwb")
                done();
            })
            .catch((err) => {
                done();
            });
        });
    });
});