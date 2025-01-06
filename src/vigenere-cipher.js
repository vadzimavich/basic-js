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
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = messageUpper[i];
      if (this.alphabet.includes(messageChar)) {
        const keyChar = keyUpper[keyIndex % keyUpper.length];
        const messageIndex = this.alphabet.indexOf(messageChar);
        const keyIndexVal = this.alphabet.indexOf(keyChar);
        const encryptedIndex = (messageIndex + keyIndexVal) % 26;
        encryptedMessage += this.alphabet[encryptedIndex];
        keyIndex++;
      } else {
        encryptedMessage += message[i];
      }
    }

    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let decryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = messageUpper[i];
      if (this.alphabet.includes(messageChar)) {
        const keyChar = keyUpper[keyIndex % keyUpper.length];
        const messageIndex = this.alphabet.indexOf(messageChar);
        const keyIndexVal = this.alphabet.indexOf(keyChar);
        const decryptedIndex = (messageIndex - keyIndexVal + 26) % 26;
        decryptedMessage += this.alphabet[decryptedIndex];
        keyIndex++;
      } else {
        decryptedMessage += message[i];
      }
    }

    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
