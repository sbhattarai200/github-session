var merge = function (nums1, m, nums2, n) {
  for (i = m, j = 0; i < nums1.length; i++, j++) {
    nums1[i] = nums2[j]
  }
  nums1.sort((a, b) => a - b)
}
let nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
let nums2 = [2, 5, 6]
let n = 3

merge(nums1, m, nums2, n)

var removeElement = function (nums, val) {
  let identical = 0
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      identical++
    }
  }
  return identical
}
var removeDuplicates = function (nums) {
  let newarr = []
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      newarr.push(nums[i])
    }
  }
  nums = newarr
  console.log(nums)
  return newarr.length
}
console.log(removeDuplicates([1,1, 1, 2,2]))
