/**
 * Dummy function #1 – to be replaced later.
 * @returns {string}
 */
export function dummyOne() {
  return 'dummyOne';
}

/**
 * Dummy function #2 – to be replaced later.
 * @returns {number}
 */
export function dummyTwo() {
  return 42;
}

// Exporting for CommonJS environments as well
module.exports = {
  dummyOne,
  dummyTwo,
};
