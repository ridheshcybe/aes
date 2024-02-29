var rounds = [
    [10, 12, 14],
    [12, 12, 14],
    [14, 14, 14],
];
var Sbox = [
    99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118,
    202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192,
    183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4,
    199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44,
    26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32,
    252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77,
    51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56,
    245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23,
    196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70,
    238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172,
    98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244,
    234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31,
    75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134,
    193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206,
    85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84,
    187, 22,
];
var ShiftRowTab = [
    [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11, 0],
    [
        0, 5, 10, 15, 4, 9, 14, 19, 8, 13, 18, 23, 12, 17, 22, 3, 16, 21, 2, 7, 20,
        1, 6, 11, 0,
    ],
    [
        0, 5, 14, 19, 4, 9, 18, 23, 8, 13, 22, 27, 12, 17, 26, 31, 16, 21, 30, 3,
        20, 25, 2, 7, 24, 29, 6, 11, 28, 1, 10, 15, 0,
    ],
];
var Sbox_Inv = [
    82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124,
    227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123,
    148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161,
    102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246,
    100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72,
    80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0,
    140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202,
    63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220,
    234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53,
    133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137,
    111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154,
    219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18,
    16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122,
    159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187,
    60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85,
    33, 12, 125,
];
var ShiftRowTab_Inv = [
    [0, 13, 10, 7, 4, 1, 14, 11, 8, 5, 2, 15, 12, 9, 6, 3],
    [
        0, 21, 18, 15, 4, 1, 22, 19, 8, 5, 2, 23, 12, 9, 6, 3, 16, 13, 10, 7, 20,
        17, 14, 11,
    ],
    [
        0, 29, 22, 19, 4, 1, 26, 23, 8, 5, 30, 27, 12, 9, 2, 31, 16, 13, 6, 3, 20,
        17, 10, 7, 24, 21, 14, 11, 28, 25, 18, 15,
    ],
];
var xtime = new Array(256);
for (var i = 0; i < 128; i++) {
    xtime[i] = i << 1;
    xtime[128 + i] = (i << 1) ^ 0x1b;
}
function expandKey(key) {
    var kl = key.length;
    var Rcon = 1;
    var ks = 15 << 5;
    var keyA = key
        .slice(0)
        .split("")
        .map(function (e) { return e.charCodeAt(0); });
    for (var i = kl; i < ks; i += 4) {
        var temp = keyA.slice(i - 4, i);
        if (i % kl == 0) {
            temp = [
                Sbox[temp[1]] ^ Rcon,
                Sbox[temp[2]],
                Sbox[temp[3]],
                Sbox[temp[0]],
            ];
            if ((Rcon <<= 1) >= 256)
                Rcon ^= 0x11b;
        }
        else if (kl > 24 && i % kl == 16) {
            temp = [Sbox[temp[0]], Sbox[temp[1]], Sbox[temp[2]], Sbox[temp[3]]];
        }
        for (var j = 0; j < 4; j++) {
            keyA[i + j] = keyA[i + j - kl] ^ temp[j];
        }
    }
    return keyA;
}
function subBytes(state, sbox) {
    for (var i = state.length - 1; i >= 0; i--) {
        state[i] = sbox[state[i]];
    }
}
function addRoundKey(state, rkey) {
    for (var i = state.length - 1; i >= 0; i--) {
        state[i] ^= rkey[i];
    }
}
function shiftRows(state, shifttab) {
    var h = state.slice(0);
    for (var i = state.length - 1; i >= 0; i--) {
        state[i] = h[shifttab[i]];
    }
}
function mixColumns(state) {
    for (var i = state.length - 4; i >= 0; i -= 4) {
        var s0 = state[i + 0];
        var s1 = state[i + 1];
        var s2 = state[i + 2];
        var s3 = state[i + 3];
        var h = s0 ^ s1 ^ s2 ^ s3;
        state[i + 0] ^= h ^ xtime[s0 ^ s1];
        state[i + 1] ^= h ^ xtime[s1 ^ s2];
        state[i + 2] ^= h ^ xtime[s2 ^ s3];
        state[i + 3] ^= h ^ xtime[s3 ^ s0];
    }
}
function mixColumns_Inv(state) {
    for (var i = state.length - 4; i >= 0; i -= 4) {
        var s0 = state[i + 0];
        var s1 = state[i + 1];
        var s2 = state[i + 2];
        var s3 = state[i + 3];
        var h = s0 ^ s1 ^ s2 ^ s3;
        var xh = xtime[h];
        var h1 = xtime[xtime[xh ^ s0 ^ s2]] ^ h;
        var h2 = xtime[xtime[xh ^ s1 ^ s3]] ^ h;
        state[i + 0] ^= h1 ^ xtime[s0 ^ s1];
        state[i + 1] ^= h2 ^ xtime[s1 ^ s2];
        state[i + 2] ^= h1 ^ xtime[s2 ^ s3];
        state[i + 3] ^= h2 ^ xtime[s3 ^ s0];
    }
}
function cryptEnc(block, strkey) {
    var bB = block.length;
    var bBi = 0;
    var kBi = 0;
    switch (bB) {
        case 32:
            bBi++;
        case 24:
            bBi++;
        case 16:
            break;
        default:
            throw new Error("Crypt: Unsupported block size: " + block.length);
    }
    switch (strkey.length) {
        case 32:
            kBi++;
        case 24:
            kBi++;
        case 16:
            break;
        default:
            throw new Error("Crypt: Unsupported key size: " + strkey.length);
    }
    var r = rounds[bBi][kBi];
    var key = expandKey(strkey);
    var end = r * bB;
    addRoundKey(block, key.slice(0, bB));
    var SRT = ShiftRowTab[bBi];
    var i = bB;
    for (i = bB; i < end; i += bB) {
        subBytes(block, Sbox);
        shiftRows(block, SRT);
        mixColumns(block);
        addRoundKey(block, key.slice(i, i + bB));
    }
    subBytes(block, Sbox);
    shiftRows(block, SRT);
    addRoundKey(block, key.slice(i, i + bB));
}
function cryptDec(block, strkey) {
    var bB = block.length;
    var bBi = 0;
    var kBi = 0;
    switch (bB) {
        case 32:
            bBi++;
        case 24:
            bBi++;
        case 16:
            break;
        default:
            throw new Error("Crypt: Unsupported block size: " + block.length);
    }
    switch (strkey.length) {
        case 32:
            kBi++;
        case 24:
            kBi++;
        case 16:
            break;
        default:
            throw new Error("Crypt: Unsupported key size: " + strkey.length);
    }
    var r = rounds[bBi][kBi];
    var key = expandKey(strkey);
    var end = r * bB;
    addRoundKey(block, key.slice(end, end + bB));
    var SRT = ShiftRowTab_Inv[bBi];
    shiftRows(block, SRT);
    subBytes(block, Sbox_Inv);
    for (var i = end - bB; i >= bB; i -= bB) {
        addRoundKey(block, key.slice(i, i + bB));
        mixColumns_Inv(block);
        shiftRows(block, SRT);
        subBytes(block, Sbox_Inv);
    }
    addRoundKey(block, key.slice(0, bB));
}
export function encrypt(textin, IV, key, cipher) {
    if (!textin)
        throw new Error("Crypt: textin not possible");
    var text = textin.split("").map(function (e) { return e.charCodeAt(0); });
    var blockS = 16;
    switch (cipher) {
        case 128:
            blockS = 16;
            break;
        case 192:
            blockS = 24;
            break;
        case 256:
            blockS = 32;
            break;
        default:
            throw new Error("Invalid block size");
    }
    var chunkS = blockS;
    if (!IV)
        throw new Error("crypt: IV is required for mode: CBC");
    if (IV.length != blockS)
        throw new Error("crypt: IV must be ".concat(blockS, " bytes long for ").concat(cipher));
    var iv = IV.slice(0)
        .split("")
        .map(function (e) { return e.charCodeAt(0); });
    var chunks = Math.ceil(text.length / chunkS);
    while (text.length < chunks * chunkS)
        text.push(0);
    var out = [];
    for (var i = 0; i < chunks; i++) {
        for (var j = 0; j < chunkS; j++) {
            iv[j] = text[i * chunkS + j] ^ iv[j];
        }
        cryptEnc(iv, key);
        for (var j = 0; j < chunkS; j++) {
            out.push(iv[j]);
        }
    }
    return "".concat(out.map(function (e) { return String.fromCharCode(e); }).join(""), ":():").concat(IV);
}
export function decrypt(combined, key, cipher) {
    var out = [];
    var split = combined.split(":():");
    var textin = split[0];
    var IV = split[1];
    if (!textin)
        throw new Error("Crypt: textin not possible");
    var text = textin.split("").map(function (e) { return e.charCodeAt(0); });
    var blockS = 16;
    switch (cipher) {
        case 128:
            blockS = 16;
            break;
        case 192:
            blockS = 24;
            break;
        case 256:
            blockS = 32;
            break;
        default:
            throw new Error("Invalid block size");
    }
    var chunkS = blockS;
    var iv = IV.slice(0)
        .split("")
        .map(function (e) { return e.charCodeAt(0); });
    var chunks = Math.ceil(text.length / chunkS);
    while (text.length < chunks * chunkS)
        text.push(0);
    for (var i = 0; i < chunks; i++) {
        var temp = iv;
        iv = new Array(chunkS);
        for (var j = 0; j < chunkS; j++) {
            iv[j] = text[i * chunkS + j];
        }
        var decr = iv.slice(0);
        cryptDec(decr, key);
        for (var j = 0; j < chunkS; j++) {
            out.push(temp[j] ^ decr[j]);
        }
    }
    var last = 0;
    do {
        last = out.pop() || 0;
    } while (last == 0);
    out.push(last);
    return out.map(function (e) { return String.fromCharCode(e); }).join("");
}
export default {
    encrypt: encrypt,
    decrypt: decrypt
};
