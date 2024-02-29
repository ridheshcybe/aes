for (
    var rounds = [
        [10, 12, 14],
        [12, 12, 14],
        [14, 14, 14],
    ],
    Sbox = [
        99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118,
        202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114,
        192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49,
        21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117,
        9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83,
        209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208,
        239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81,
        163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210,
        205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115,
        96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219,
        224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121,
        231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8,
        186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138,
        112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158,
        225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40,
        223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187,
        22,
    ],
    ShiftRowTab = [
        [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11, 0],
        [
            0, 5, 10, 15, 4, 9, 14, 19, 8, 13, 18, 23, 12, 17, 22, 3, 16, 21, 2, 7,
            20, 1, 6, 11, 0,
        ],
        [
            0, 5, 14, 19, 4, 9, 18, 23, 8, 13, 22, 27, 12, 17, 26, 31, 16, 21, 30,
            3, 20, 25, 2, 7, 24, 29, 6, 11, 28, 1, 10, 15, 0,
        ],
    ],
    Sbox_Inv = [
        82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251,
        124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203,
        84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8,
        46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114,
        248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146,
        108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132,
        144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6,
        208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58,
        145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115,
        150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223,
        110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190,
        27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90,
        244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95,
        96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239,
        160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97,
        23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125,
    ],
    ShiftRowTab_Inv = [
        [0, 13, 10, 7, 4, 1, 14, 11, 8, 5, 2, 15, 12, 9, 6, 3],
        [
            0, 21, 18, 15, 4, 1, 22, 19, 8, 5, 2, 23, 12, 9, 6, 3, 16, 13, 10, 7,
            20, 17, 14, 11,
        ],
        [
            0, 29, 22, 19, 4, 1, 26, 23, 8, 5, 30, 27, 12, 9, 2, 31, 16, 13, 6, 3,
            20, 17, 10, 7, 24, 21, 14, 11, 28, 25, 18, 15,
        ],
    ],
    xtime = Array(256),
    i = 0;
    i < 128;
    i++
)
    (xtime[i] = i << 1), (xtime[128 + i] = (i << 1) ^ 27);
function expandKey(_) {
    for (
        var $ = _.length,
        e = 1,
        t = _.slice(0)
            .split("")
            .map(function (_) {
                return _.charCodeAt(0);
            }),
        r = $;
        r < 480;
        r += 4
    ) {
        var o = t.slice(r - 4, r);
        r % $ == 0
            ? ((o = [Sbox[o[1]] ^ e, Sbox[o[2]], Sbox[o[3]], Sbox[o[0]]]),
                (e <<= 1) >= 256 && (e ^= 283))
            : $ > 24 &&
            r % $ == 16 &&
            (o = [Sbox[o[0]], Sbox[o[1]], Sbox[o[2]], Sbox[o[3]]]);
        for (var n = 0; n < 4; n++) t[r + n] = t[r + n - $] ^ o[n];
    }
    return t;
}
function subBytes(_, $) {
    for (var e = _.length - 1; e >= 0; e--) _[e] = $[_[e]];
}
function addRoundKey(_, $) {
    for (var e = _.length - 1; e >= 0; e--) _[e] ^= $[e];
}
function shiftRows(_, $) {
    for (var e = _.slice(0), t = _.length - 1; t >= 0; t--) _[t] = e[$[t]];
}
function mixColumns(_) {
    for (var $ = _.length - 4; $ >= 0; $ -= 4) {
        var e = _[$ + 0],
            t = _[$ + 1],
            r = _[$ + 2],
            o = _[$ + 3],
            n = e ^ t ^ r ^ o;
        (_[$ + 0] ^= n ^ xtime[e ^ t]),
            (_[$ + 1] ^= n ^ xtime[t ^ r]),
            (_[$ + 2] ^= n ^ xtime[r ^ o]),
            (_[$ + 3] ^= n ^ xtime[o ^ e]);
    }
}
function mixColumns_Inv(_) {
    for (var $ = _.length - 4; $ >= 0; $ -= 4) {
        var e = _[$ + 0],
            t = _[$ + 1],
            r = _[$ + 2],
            o = _[$ + 3],
            n = e ^ t ^ r ^ o,
            a = xtime[n],
            s = xtime[xtime[a ^ e ^ r]] ^ n,
            c = xtime[xtime[a ^ t ^ o]] ^ n;
        (_[$ + 0] ^= s ^ xtime[e ^ t]),
            (_[$ + 1] ^= c ^ xtime[t ^ r]),
            (_[$ + 2] ^= s ^ xtime[r ^ o]),
            (_[$ + 3] ^= c ^ xtime[o ^ e]);
    }
}
function cryptEnc(_, $) {
    var e = _.length,
        t = 0,
        r = 0;
    switch (e) {
        case 32:
            t++;
        case 24:
            t++;
        case 16:
            break;
        default:
            throw Error("Crypt: Unsupported block size: " + _.length);
    }
    switch ($.length) {
        case 32:
            r++;
        case 24:
            r++;
        case 16:
            break;
        default:
            throw Error("Crypt: Unsupported key size: " + $.length);
    }
    var o = rounds[t][r],
        n = expandKey($),
        a = o * e;
    addRoundKey(_, n.slice(0, e));
    var s = ShiftRowTab[t],
        c = e;
    for (c = e; c < a; c += e)
        subBytes(_, Sbox),
            shiftRows(_, s),
            mixColumns(_),
            addRoundKey(_, n.slice(c, c + e));
    subBytes(_, Sbox), shiftRows(_, s), addRoundKey(_, n.slice(c, c + e));
}
function cryptDec(_, $) {
    var e = _.length,
        t = 0,
        r = 0;
    switch (e) {
        case 32:
            t++;
        case 24:
            t++;
        case 16:
            break;
        default:
            throw Error("Crypt: Unsupported block size: " + _.length);
    }
    switch ($.length) {
        case 32:
            r++;
        case 24:
            r++;
        case 16:
            break;
        default:
            throw Error("Crypt: Unsupported key size: " + $.length);
    }
    var o = rounds[t][r],
        n = expandKey($),
        a = o * e;
    addRoundKey(_, n.slice(a, a + e));
    var s = ShiftRowTab_Inv[t];
    shiftRows(_, s), subBytes(_, Sbox_Inv);
    for (var c = a - e; c >= e; c -= e)
        addRoundKey(_, n.slice(c, c + e)),
            mixColumns_Inv(_),
            shiftRows(_, s),
            subBytes(_, Sbox_Inv);
    addRoundKey(_, n.slice(0, e));
}
export function encrypt(_, $, e, t) {
    if (!_) throw Error("Crypt: textin not possible");
    var r = _.split("").map(function (_) {
        return _.charCodeAt(0);
    }),
        o = 16;
    switch (t) {
        case 128:
            o = 16;
            break;
        case 192:
            o = 24;
            break;
        case 256:
            o = 32;
            break;
        default:
            throw Error("Invalid block size");
    }
    var n = o;
    if (!$) throw Error("crypt: IV is required for mode: CBC");
    if ($.length != o)
        throw Error("crypt: IV must be ".concat(o, " bytes long for ").concat(t));
    for (
        var a = $.slice(0)
            .split("")
            .map(function (_) {
                return _.charCodeAt(0);
            }),
        s = Math.ceil(r.length / n);
        r.length < s * n;

    )
        r.push(0);
    for (var c = [], u = 0; u < s; u++) {
        for (var l = 0; l < n; l++) a[l] = r[u * n + l] ^ a[l];
        cryptEnc(a, e);
        for (var l = 0; l < n; l++) c.push(a[l]);
    }
    return ""
        .concat(
            c
                .map(function (_) {
                    return String.fromCharCode(_);
                })
                .join(""),
            ":():"
        )
        .concat($);
}
export function decrypt(_, $, e) {
    var t = [],
        r = _.split(":():"),
        o = r[0],
        n = r[1];
    if (!o) throw Error("Crypt: textin not possible");
    var a = o.split("").map(function (_) {
        return _.charCodeAt(0);
    }),
        s = 16;
    switch (e) {
        case 128:
            s = 16;
            break;
        case 192:
            s = 24;
            break;
        case 256:
            s = 32;
            break;
        default:
            throw Error("Invalid block size");
    }
    for (
        var c = s,
        u = n
            .slice(0)
            .split("")
            .map(function (_) {
                return _.charCodeAt(0);
            }),
        l = Math.ceil(a.length / c);
        a.length < l * c;

    )
        a.push(0);
    for (var f = 0; f < l; f++) {
        var h = u;
        u = Array(c);
        for (var p = 0; p < c; p++) u[p] = a[f * c + p];
        var d = u.slice(0);
        cryptDec(d, $);
        for (var p = 0; p < c; p++) t.push(h[p] ^ d[p]);
    }
    var x = 0;
    do x = t.pop() || 0;
    while (0 == x);
    return (
        t.push(x),
        t
            .map(function (_) {
                return String.fromCharCode(_);
            })
            .join("")
    );
}
export default { encrypt: encrypt, decrypt: decrypt };
