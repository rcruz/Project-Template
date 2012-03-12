var libPath = "../../lib/",
    sample = require(libPath + "sample");

describe("sample", function () {

    it("has a test function that returns a string", function () {
        expect(sample.testFunction()).toEqual("Hello Pomegranate");
    });
});
