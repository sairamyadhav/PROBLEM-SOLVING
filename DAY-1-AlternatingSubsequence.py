# codeforces link - https://codeforces.com/problemset/problem/1343/C

for _ in range(int(input())):
    n = int(input())
    arr = list(map(int, input().split()))
    s = 0
    val = arr[0]
    for i in range(1, n):
        if arr[i] > 0 and arr[i - 1] < 0:
            s += val
            val = arr[i]
        elif arr[i] < 0 and arr[i - 1] > 0:
            s += val
            val = arr[i]
        else:
            val = max(val, arr[i])
    s += val
    print(s)
