Leetcode link - https://leetcode.com/problems/fruit-into-baskets/
  
  class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        s = fruits
        n = len(s)
        hm = {}
        i, j = 0, 0
        d = 0
        ans = 0
        play = True
        while j < n:
            if d == 2 and s[j] not in hm:
                play = False
                hm[s[j]] = 1
                ans = max(ans, j - i)
                d += 1
            if play:
                if s[j] not in hm:
                    hm[s[j]] = 1
                    d += 1
                else:
                    hm[s[j]] += 1
                j += 1
            else:
                if hm[s[i]] == 1:
                    del hm[s[i]]
                    d -= 1
                    i += 1
                    play = True
                    j += 1
                else:
                    hm[s[i]] -= 1
                    i += 1
        return max(ans, j - i)
