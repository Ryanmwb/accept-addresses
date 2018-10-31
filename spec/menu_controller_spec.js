const MenuController = require('../controllers/MenuController');

// #1
describe("MenuController", () => {
    describe("#getContactCount()", () => {
 // #2
        beforeEach(() => {
            this.menu = new MenuController();
        });

        it("should return 0 when no contacts are in the book", () => {
            expect(this.menu.getContactCount()).toBe(0);
        });

        it("Should return 1 when there is exactly one contact in the book", () => {
            menu.contacts.push("bob")
            expect(this.menu.getContactCount()).toBe(1)
        });
    });
});