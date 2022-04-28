def factorization(n, k, hm):
    if k == 0:
        return 1
    if n == k:
        return 1
    if hm[n][k] > 0:
        return hm[n][k]
    hm[n][k] = factorization(n - 1, k - 1, hm) + factorization(n - 1, k, hm)
    return hm[n][k]

n, k = 10, 3      
hm = [[0 for i in range(k + 1)] for j in range(n + 1)]
    
print(factorization(n, k, hm))
