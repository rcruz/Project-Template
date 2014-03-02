var root = __dirname + "/../../",
    main = require(root + "lib/main");

describe("main", function () {

    it("has a test function that returns a string", function () {
        expect(main.testFunction()).toEqual("Hello Pomegranate");
    });
});
