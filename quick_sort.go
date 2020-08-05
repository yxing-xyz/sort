package main

import (
	"math/rand"
	"time"
)

func main_bak() {
	nums := make([]int, 1000000)
	for i := 0; i < len(nums); i++ {
		rand.Seed(time.Now().UnixNano())
		nums[i] = rand.Intn(len(nums))
	}
	// fmt.Println(nums)
	QuickSort(nums, 0, len(nums)-1)
	// fmt.Println(nums)
}
func QuickSort(nums []int, left, right int) {
	if left < right {
		privotIndex := partition(nums, left, right)
		QuickSort(nums, left, privotIndex-1)
		QuickSort(nums, privotIndex+1, right)
	}
}

func partition(nums []int, left, right int) int {
	privotIndex := left
	index := privotIndex + 1
	for i := left; i <= right; i++ {
		if nums[i] < nums[privotIndex] {
			nums[index], nums[i] = nums[i], nums[index]
			index++
		}
	}
	index--
	nums[index], nums[privotIndex] = nums[privotIndex], nums[index]
	return index
}
