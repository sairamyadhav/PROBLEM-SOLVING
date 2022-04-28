def BinaryExponentiation(a, n, hm):
  if n == 1:
    return a
  if n in hm:
    return hm[n]
  if n % 2 == 1:
    hm[n] = BinaryExponentiation(a, n // 2, hm) * BinaryExponentiation(a, n // 2, hm) * a
    return hm[n]
  else:
    hm[n] = BinaryExponentiation(a, n // 2, hm) * BinaryExponentiation(a, n // 2, hm)
    return hm[n]

  print(BinaryExponentiation(3, 4, {}))
