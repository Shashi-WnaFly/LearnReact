import {sum} from "../Sum"
test("sum function takes two int arg and return sum", () => {

    const result = sum(5, 6);

    // Assertion 
    expect(result).toBe(11);
})