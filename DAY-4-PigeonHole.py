# count all subarrays whose sum is divisible by length of array

# brute force idea is to iterate over all subarrays and find sum 
# and count the subarrays whose sum is divisible by length
# of array (O(N**3))

# better apraoch is to find cumulative sums and find subarrays 
# whose sum is divisible by length of array (O(N ** 2))

# efficient idea is to use concept of pigeon hole principle (O(N))

arr = [1, 3, 2, 6, 4]
n = len(arr)
cumSum = []
s = 0
hm = {}

for i in range(n):
    s += arr[i]
    cumSum.append(s)

for i in range(n):
    cumSum[i] = cumSum[i] % n
    
for i in cumSum:
    if i in hm:
        hm[i] += 1
    else:
        hm[i] = 1
        
ans = 0

for i in hm:
    if hm[i] > 1:
        ans += hm[i] * (hm[i] - 1) // 2
        
print(ans)
