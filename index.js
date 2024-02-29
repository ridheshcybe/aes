import Mod from './Lib.js';
const input = document.getElementById("in");
const pwd = document.getElementById("pwd");
const out = document.getElementById("out");
const bs = document.getElementById("blocksize");
const enc = document.getElementById("enc");
const dec = document.getElementById("dec");

enc.onclick = () => {
    let blockS = 16;
    switch (bs.value) {
        case 128:
            blockS = 16
            break;
        case 192:
            blockS = 24
            break;
        case 256:
            blockS = 32
            break;
    }

    out.innerText = Mod.encrypt(input.value, crypto.randomUUID().slice(0, blockS), pwd.value, parseInt(bs.value));

}
dec.onclick = () => {
    let blockS = 16;
    switch (bs.value) {
        case 128:
            blockS = 16
            break;
        case 192:
            blockS = 24
            break;
        case 256:
            blockS = 32
            break;
    }

    out.innerText = Mod.decrypt(input.value, pwd.value, parseInt(bs.value));

}
console.log(Mod);