var home= require("../model/home");

describe("test de la page home", function () {
    it("test requete sql", function () {
        var page= home.getAll();
        expect(page).toBedefined;
    });
});