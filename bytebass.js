(u => {
  x = i = 0;
  m = (h, j) => '!9$1!9,1!:#<!!!))**" 8;#0111@$DD ]'.charCodeAt(h * 8 + j >> 1) - 32 >> (j & 1) * 3 & 7;
  for (; i < 4; i++) {
    (n = m(m(i + 4, u / 8) - 1, e = u * [16, 2, 8, 8][i] % 8))
      && i < 3
      && (x += ((t * 2 ** (
        (10 * n - n * n + m(8, u & 3) * (u % 48 > 32)
        ) / 12 + i - 6) & 8) - 4) * (1 - e % 1));
  };
})(t / 8e4), x * 6 + sin((e % 1) ** .4 * 150) * 57 * n + 128