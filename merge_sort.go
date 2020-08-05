package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	nums := make([]int, 10000)
	for i := 0; i < len(nums); i++ {
		rand.Seed(time.Now().UnixNano())
		nums[i] = rand.Intn(len(nums))
	}
	fmt.Println(nums)
	MergeSort(nums, 0, len(nums)-1)
	fmt.Println(nums)
}

func MergeSort(nums []int, left, right int) {
	if left < right {
		middleIndex := (left + right) >> 1
		MergeSort(nums, left, middleIndex)
		MergeSort(nums, middleIndex+1, right)
		merge(nums, left, middleIndex, middleIndex+1, right)
	}
}

func merge(nums []int, a, b, c, d int) {
	for ; a <= b; a++ {
		if nums[a] > nums[c] {
			nums[a], nums[c] = nums[c], nums[a]
			for j := c; j < d; j++ {
				if nums[j] > nums[j+1] {
					nums[j], nums[j+1] = nums[j+1], nums[j]
				}
			}
		}
	}
}
