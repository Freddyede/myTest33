import {add, sub} from "../../src/services/Calculatrice";

describe('Calculatrice', function () {
    it('should be equal to 3', function () {
        expect(add(2, 1)).toEqual(3);
    });
    it('should be equal to 1', function () {
        expect(sub(2, 1)).toEqual(1);
    });
});