const decryptionConstants = {
  V: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  W: 50,
};

// decodes bytecode into instruction array
function decryptBytecode(n) {
  for (
    var t = decryptionConstants,
    r = t.V,
    i = t.W,
    o = r.length - i,
    u = [],
    e = 0;
    e < n.length;

  )
    for (var f = 0, c = 1; ;) {
      var a = r.indexOf(n[e++]);
      if (((f += c * (a % i)), a < i)) {
        u.push(0 | f);
        break;
      }
      (f += i * c), (c *= o);
    }
  return u;
}

// decodes string section of the bytecode
function decodeString(n, t) {
  n[t[0]++];

  for (var c = "", a = n[t[0]++], v = 0; v < a; v++) {
    var l = n[t[0]++];
    c += String.fromCharCode((4294967232 & l) | ((39 * l) & 63));
  }
  return c;
}

module.exports = {
  decryptBytecode,
  decodeString,
}