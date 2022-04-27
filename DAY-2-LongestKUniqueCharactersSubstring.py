geeksForGeeks link - https://practice.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1/
  
  #User function Template for python3

class Solution:

    def longestKSubstr(self, s, k):
        n = len(s)
        hm = {}
        i, j = 0, 0
        d = 0
        ans = 0
        play = True
        while j < n:
            if d == k and s[j] not in hm:
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
        if d == k:
            return max(ans, j - i)
        else:
            if ans > 0:
                return ans
            else:
                return -1
                
#{ 
#  Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        s = input()
        k = int(input())

        solObj = Solution()

        ans = solObj.longestKSubstr(s, k)

        print(ans)

# } Driver Code Ends
