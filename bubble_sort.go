package main

import (
	"fmt"
	"math"
	"math/rand"
	"time"
)

func main() {
	nums := make([]int, int(math.Pow10(8)))
	rand.Seed(time.Now().UnixNano())
	for i := 0; i < len(nums); i++ {
		nums[i] = rand.Intn(len(nums))
	}
	fmt.Println("排序开始")
	start := time.Now()
	// BubbleSort(nums, len(nums))
	QuickSort(nums, 0, len(nums)-1)
	end := time.Now().Sub(start)
	fmt.Println(end)
}

func BubbleSort(nums []int, len int) {
	var index int = len - 1
	var tmp int = 0
	for index > 0 {
		for j := 0; j < index; j++ {
			if nums[j] > nums[j+1] {
				tmp = j
				nums[j], nums[j+1] = nums[j+1], nums[j]
			}
		}
		index = tmp
		tmp = 0
	}
}
