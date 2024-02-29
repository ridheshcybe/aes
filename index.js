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

    const password = pwd.value;
    const inputval = input.value;
    const Size = parseInt(bs.value);
    const iv = crypto.randomUUID().slice(0, blockS);

    if (![128, 192, 256].includes(Size)) {
        return out.innerText = `Crypt error: Invalid size should be 128/192/256 it is ${Size}`
    }

    if (password.length !== 16) {
        return out.innerText = `Crypt error: password must be 16 characters`
    }

    try {
        const encrypted = Mod.encrypt(inputval, iv, password, Size)
        out.innerText = encrypted || `Crypt error Decrypt: input: ${inputval}\n password: ${password}\n size: ${Size}`;;
    } catch (err) {
        out.innetText = JSON.stringify(err);
    }
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

    const password = pwd.value;
    const inputval = input.value;
    const Size = parseInt(bs.value);

    if (![128, 192, 256].includes(Size)) {
        return out.innerText = `Crypt error: Invalid size should be 128/192/256 it is ${Size}`
    }

    if (password.length !== 16) {
        return out.innerText = `Crypt error: password must be 16 characters`
    }

    try {
        out.innerText = Mod.decrypt(inputval, password, Size) || `Crypt error Decrypt: input: ${inputval}\n password: ${password}\n size: ${Size}`;
    } catch (err) {
        out.innetText = JSON.stringify(err);
    }
}