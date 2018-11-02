const MenuController = require('../controllers/MenuController');

// #1
describe("MenuController", () => {
    describe("exists?", () => {
        it("should be defined.", () => {
            expect(MenuController).toBeDefined();
        });
    });
});