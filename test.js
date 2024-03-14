import node from './node.js';

const encrypttext = 'hi';
const key = crypto.randomUUID().slice(0, 32);
const iv = crypto.randomUUID().slice(0, 32);

try {
    const encrypted = node(true, encrypttext, key, iv);
    const decrypted = node(false, encrypted, key, iv);
    if (decrypted == encrypttext) {
        console.log("Encrypted successfully")
    } else {
        console.log("Failed encrypting result is not same as encrypttext")
    }
} catch (error) {
    console.error("Encrypted failed " + error);
}