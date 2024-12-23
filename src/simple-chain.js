const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  list: [],

  clearChain() {
    this.list = [];
  },

  getLength() {
    return this.list.length;
  },

  addLink(value = '') {
    this.list.push(value);
    return this;
  },

  removeLink(position) {
    if (
      position >= this.getLength() ||
      position < 1 ||
      !Number.isInteger(position)
    ) {
      this.clearChain();
      throw new Error("You can't remove incorrect link!");
    }
    this.list.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.list.reverse();
    return this;
  },

  finishChain() {
    const result = this.list.map((val) => `( ${val} )`).join('~~');
    this.clearChain();
    return result;
  },
};

module.exports = {
  chainMaker,
};
