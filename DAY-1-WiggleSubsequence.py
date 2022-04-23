# leetcode link - https://leetcode.com/problems/wiggle-subsequence/

class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [[1, "a"]] * n
        dp[0] = [1, "a"]
        for i in range(1, n):
            for j in range(i):
                if dp[j][0] == 1:
                    if dp[i][0] == 1:
                        if nums[j] < nums[i]:
                            dp[i] = [2, "s"]
                        elif nums[j] > nums[i]:
                            dp[i] = [2, "b"]
                        else:
                            dp[i] = [1, "a"]
                elif dp[j][1] == "s" and nums[i] < nums[j]:
                    if dp[j][0] + 1 >= dp[i][0]:
                        dp[i][0] = dp[j][0] + 1
                        dp[i][1] = "b"
                elif dp[j][1] == "b" and nums[i] > nums[j]:
                    if dp[j][0] + 1 >= dp[i][0]:
                        dp[i][0] = dp[j][0] + 1
                        dp[i][1] = "s"
        v = max(dp,key=lambda l:l[0])
        return v[0]
