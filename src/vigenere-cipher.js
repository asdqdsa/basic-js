const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.errorMessage = 'Incorrect arguments!';
  }

  encrypt(text, key) {
    if (text == null || key == null) throw new Error(this.errorMessage);
    const output = this.parseText(text, key);
    if (!this.isDirect) return output.split('').reverse().join('');
    return output;
  }

  decrypt(text, key) {
    const isEncripted = true;
    if (text == null || key == null) throw new Error(this.errorMessage);
    const output = this.parseText(text, key, isEncripted);
    if (!this.isDirect) return output.split('').reverse().join('');
    return output;
  }

  parseText(str, strKey, isEncripted) {
    let output = '';
    for (let i = 0, j = 0; i < str.length; i += 1) {
      if (j === strKey.length) j = 0;
      if (str[i] !== ' ') {
        output += this.rotChar(str[i], strKey[j], isEncripted);
        j += 1;
      } else output += str[i];
    }
    return output;
  }

  rotChar(char, key, isEncripted = false) {
    let charToCap = char.toUpperCase();
    let keyToCap = key.toUpperCase();
    let shiftABC = keyToCap.charCodeAt(0) - 65;
    const codeChar = charToCap.charCodeAt(0);

    if (isEncripted) shiftABC *= -1;
    if (64 < codeChar && codeChar < 91) {
      let outputIdx = (codeChar - 65 + shiftABC) % 26;
      if (outputIdx < 0) outputIdx += 26;
      charToCap = String.fromCharCode(outputIdx + 65);
    }
    return charToCap;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
