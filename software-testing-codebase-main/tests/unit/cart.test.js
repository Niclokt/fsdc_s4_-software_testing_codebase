const {
    calculateTotal,
    removeItem,
    isValidDiscount,
} = require("../../public/js/cartLogic");

// UNIT TEST: Testing logic in isolation without a database
describe("Cart Logic Unit Tests", () => {
    test("calculateTotal sums item prices correctly", () => {
        const cart = [{ price: 100 }, { price: 50 }];
        expect(calculateTotal(cart)).toBe(150.0);
    });

    test("calculateTotal handles floating point precision correctly (2 decimal places)", () => {
        const cart = [{ price: 0.1 }, { price: 0.2 }];
        expect(calculateTotal(cart)).toBe(0.3);
    });

    test("calculateTotal handles items without price safely", () => {
        const cart = [{ price: 100 }, { name: "Free Gift" }];
        expect(calculateTotal(cart)).toBe(100.0);
    });

    test('calculateTotal applies "KUDOS10" discount correctly', () => {
        const cart = [{ price: 100 }];
        // 100 * 0.9 = 90
        expect(calculateTotal(cart, "KUDOS10")).toBe(90.0);
    });

    test("calculateTotal is case sensitive for discount codes", () => {
        const cart = [{ price: 100 }];
        expect(calculateTotal(cart, "kudos10")).toBe(100.0);
    });

    test("calculateTotal ignores invalid discount codes", () => {
        const cart = [{ price: 100 }];
        expect(calculateTotal(cart, "INVALID")).toBe(100.0);
    });

    test("calculateTotal handles empty cart", () => {
        expect(calculateTotal([])).toBe(0.0);
    });

    test("handles a single item in the cart", () => {
        const cart = [{ price: 50 }];
        expect(calculateTotal(cart)).toBe(50.0);
    });

    test("handles null or undefined cart items", () => {
        const cart = [{ price: 50 }, null, { price: 30 }];
        expect(calculateTotal(cart)).toBe(80.0);
    });

    test("handles empty string as discount code", () => {
        const cart = [{ price: 50 }, null, { price: 30 }];
        expect(calculateTotal(cart, "")).toBe(80.0);
    });

    test("handles large item prices", () => {
        const cart = [{ price: 1000000 }, { price: 500000 }];
        expect(calculateTotal(cart)).toBe(1500000.0);
    });

    test("handles duplicate items in the cart", () => {
        const cart = [{ price: 50 }, { price: 50 }];
        expect(calculateTotal(cart)).toBe(100.0);
    });

    test("returns nummeric type, not string", () => {
        const cart = [{ price: 50 }, { price: 50 }];
        expect(typeof calculateTotal(cart)).toBe("number");
    });
});

describe("Cart Logic Unit Test", () => {
    // 3. Edge Case: Floating Point Precision
    test("calculateTotal handles floating point precision correctly", () => {
        const cart = [{ price: 0.1 }, { price: 0.2 }]; // my test inputs to be here
        // call the funtion to be tested here
        // write "expect" --> enclose with the test function, then the parameters input
        // and then write the expected result
        expect(calculateTotal(cart)).toBe(0.3);
    });
});

describe("Remove Item Logic Unit Tests", () => {
    // STUDENT: Implement tests for removeItem
    // requirements:
    // 1. Test removing an existing item reduces array length
    // 2. Test removing a non-existing item does nothing

    // ANSWER BEGIN
    test("calculateTotal handles floating point precision correctly", () => {
        const cart = [{ price: 0.1 }, { price: 0.2 }]; // my test inputs to be here

        expect(calculateTotal(cart)).toBe(0.3);
        // call the funtion to be tested here
        // write "expect" --> enclose with the test function, then the parameters input
        // and then write the expected result
    });
    // END OF ANSWER
});

describe("Discount Validation Unit Tests", () => {
    // STUDENT: Implement tests for isValidDiscount
    // requirements:
    // 1. Test "KUDOS10" returns true
    // 2. Test other strings return false
    // ANSWER BEGIN
    // END OF ANSWER
});
