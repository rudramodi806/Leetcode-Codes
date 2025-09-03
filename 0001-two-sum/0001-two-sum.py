class Solution:
    def twoSum(self, nums, target):  # <-- 3 total arguments: self, nums, target
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]

