// test.js – placeholder functions
// TODO: replace with real implementation

/**
 * Returns a greeting string.
 * @param {string} name
 * @returns {string}
 */
export function greet(name) {
  return `Hello, ${name}!`;
}

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  return a + b;
}

// Exporting for CommonJS compatibility if needed
module.exports = {
  greet,
  add,
};
