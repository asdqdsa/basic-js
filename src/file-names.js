const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // map with repetitions
  const map = {};
  // clone name list
  const namesList = names.map((val) => val);

  for (let i = 0; i < names.length; i += 1) {
    // populate map
    if (!map[names[i]]) map[names[i]] = 0;
    map[names[i]] += 1;

    // check next name
    for (let j = i + 1; j <= names.length; j += 1) {
      // add suffix according to map count to the list
      if (map[names[j]] > 0) namesList[j] = `${names[j]}(${map[names[j]]})`;

      // travers back to handle additional suffix
      for (let k = j - 1; k >= 0; k -= 1) {
        // checks for a match in clone name list
        if (namesList[k] === namesList[j]) {
          namesList[j] = `${names[j]}(${map[names[i]]})`;
        }
      }
    }
  }

  return namesList;
}
module.exports = {
  renameFiles,
};
