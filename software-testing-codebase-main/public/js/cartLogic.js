/**
 * UNIT TEST: Testing logic in isolation without a database
 * Calculates total price of items in cart and applies discount if valid.
 * @param {Array} cartItems - Array of objects with price property
 * @param {string} discountCode - Optional discount code
 * @returns {number} - Total price
 */
function calculateTotal(cartItems, discountCode) {
    // STUDENT: Implement your solution below
    // requirements:
    // 1. Sum up the 'price' of all items in cartItems
    // 2. If discountCode is "KUDOS10", apply 10% discount
    // 3. Return the total as a number with 2 decimal places

    // ANSWER BEGIN

    // function to sum up all items in the array
    const sum = cartItems.reduce((total, item) => total + (item.price || 0), 0);
    // check if the discount code is valid and apply discount if it is
    if (discountCode === "KUDOS10") {
        // apply 10% discount and return the total with 2 decimal places
        return parseFloat((sum * 0.9).toFixed(2));
    }
    return parseFloat(sum.toFixed(2));
    // END OF ANSWER
}

/**
 * Removes the first instance of an item with the given id from the cart.
 * @param {Array} cartItems
 * @param {number} itemId
 * @returns {Array} New cart array
 */
function removeItem(cartItems, itemId) {
    // STUDENT: Implement removeItem below
    // requirements:
    // 1. Find the index of the first item with 'id' === itemId
    const index = cartItems.findIndex((item) => item.id === itemId);
    // 2. If found, remove it from the array (splice or filter)
    // 3. Return the modified array/new array
    if (index !== -1) {
        cartItems.splice(index, 1);
    }
    // ANSWER BEGIN
    return cartItems;
    // END OF ANSWER
}

/**
 * Validates a discount code.
 * @param {string} code
 * @returns {boolean} True if valid
 */
function isValidDiscount(code) {
    // STUDENT: Implement isValidDiscount below
    // requirements:
    // 1. Return true if code is "KUDOS10"
    // 2. Return false otherwise

    // ANSWER BEGIN
    const code = code.trim(); // remove whitespace
    if (code === "KUDOS10") {
        return true;
    }
    return false;
    // END OF ANSWER
}

// UMD Wrapper for both Node.js and Browser compatibility
if (typeof module !== "undefined" && module.exports) {
    module.exports = { calculateTotal, removeItem, isValidDiscount };
} else {
    window.calculateTotal = calculateTotal;
    window.removeItem = removeItem;
    window.isValidDiscount = isValidDiscount;
}
