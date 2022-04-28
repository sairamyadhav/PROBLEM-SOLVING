def be(a, n, hm):
    if n == 1:
        return a
    if n in hm:
        return hm[n]
    if n % 2 == 1:
        hm[n] = mm(mm(be(a, n // 2, hm),  be(a, n // 2, hm)), a)
        return hm[n]
    else:
        hm[n] = mm(be(a, n // 2, hm), be(a, n // 2, hm))
        return hm[n]
        
def mm(a, b):
    A = a
    B = b
    result = [[0 for i in range(len(A))] for j in range(len(B))]
    for i in range(len(A)):
        for j in range(len(B[0])):
            for k in range(len(B)):
                result[i][j] += (A[i][k] * B[k][j]) % 1000000007
    return result 

print(be([[1, 1], [1, 0]], 13, {}))
