HackerRank link - https://www.hackerrank.com/challenges/journey-to-the-moon/problem
  
  #!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'journeyToMoon' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. 2D_INTEGER_ARRAY astronaut
#

def journeyToMoon(n, astronaut):
    hm = {}
    for i, j in astronaut:
        if i in hm:
            hm[i].append(j)
        else:
            hm[i] = [j]
        if j in hm:
            hm[j].append(i)
        else:
            hm[j] = [i]
            
    visited = {}
    arr = []

    def dfs(hm, i, visited):
        ans = 1
        visited[i] = 1
        if i not in hm:
            return 1
        for j in hm[i]:
            if j not in visited:
                ans += dfs(hm, j, visited)
        return ans
        
    for i in range(n):
        if i not in visited:
            a = dfs(hm, i, visited)
            arr.append(a)
            
    ans = 0
    com = 0
    
    for i in arr:
        ans += i * ((n - i) - com)
        com += i

    return ans
        
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    p = int(first_multiple_input[1])

    astronaut = []

    for _ in range(p):
        astronaut.append(list(map(int, input().rstrip().split())))

    result = journeyToMoon(n, astronaut)

    fptr.write(str(result) + '\n')

    fptr.close()
