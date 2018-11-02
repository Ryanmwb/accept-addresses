const MenuController = require('../controllers/MenuController');

// #1
describe("MenuController", () => {
    describe("exists?", () => {
        it("should be defined.", () => {
            expect(MenuController).toBeDefined();
        });
    });
    describe("#getContactCount()", () => {
 // #2
        beforeEach(() => {
            this.menu = new MenuController();
        });

        it("should return 0 when no contacts are in the book", () => {
            expect(this.menu.getContactCount()).toBe(0);
        });

        it("Should return 1 when there is exactly one contact in the book", () => {
            this.menu.book.addContact("Bob", "555-555-5555");
            expect(this.menu.getContactCount()).toBe(1)
        });
    });
});