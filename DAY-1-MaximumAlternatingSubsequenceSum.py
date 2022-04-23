# leetcode link - https://leetcode.com/problems/maximum-alternating-subsequence-sum/

class Solution:
    def maxAlternatingSum(self, nums: List[int]) -> int:
        n = len(nums)
        f = "l"
        val = nums[0]
        s = 0
        for i in range(1, n):
            if f == "l":
                if nums[i] >= val:
                    val = nums[i]
                else:
                    f = "s"
                    s += val
                    val = nums[i]
            else:
                if nums[i] <= val:
                    val = nums[i]
                else:
                    f = "l"
                    s -= val
                    val = nums[i]
        if f == "l":
            s += val
        return s
