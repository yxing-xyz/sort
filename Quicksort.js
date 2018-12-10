// 递归 -- 改进引入三数取中基准
(() => {
    function sort(arr, leftIndex, rightIndex) {
        if (leftIndex >= rightIndex) {
            return;
        }

        let i = leftIndex,
            j = rightIndex,
            tmp;

        // 三数取中
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (arr[leftIndex] > arr[rightIndex]) {
            tmp = arr[leftIndex];
            arr[leftIndex] = arr[rightIndex];
            arr[rightIndex] = tmp;
        }
        if (arr[leftIndex] > arr[midIndex]) {
            tmp = arr[leftIndex];
            arr[leftIndex] = arr[midIndex];
            arr[midIndex] = tmp;
        }
        // a 是最小的数
        if (arr[midIndex] > arr[rightIndex]) {
            tmp = arr[midIndex];
            arr[midIndex] = arr[rightIndex];
            arr[rightIndex] = tmp;
        }

        const basic = arr[midIndex]; //选基准

        while (i != j) {
            while (arr[j] >= basic && i < j)
                j--;


            while (arr[i] <= basic && i < j)
                i++;


            if (i < j) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }

        // 交换基准
        arr[leftIndex] = arr[i];
        arr[i] = basic;
        sort(arr, leftIndex, i - 1,);
        sort(arr, i + 1, rightIndex);
    }

    // 构造数据
    let arr = [];
    for (let i = 0; i < 10000; i += 1) {
        arr.push(10000 - i - 1);
        //arr.push(Number.parseInt(Math.random() * 10000));
    }

    let start = new Date().getTime();
    sort(arr, 0, arr.length - 1);
    let end = new Date().getTime();
    console.log("%c 花费时间" + (end - start) + "us", 'color:#000652;');
    console.log("%c 时间复杂度为：平均O(n^2)、最好O(n)、最坏O(n^2)、空间O(1)、内排序、稳定", 'color:#000652;');     //快排序完成运行次数：sn = 1/2*n^2 - 1/2*n" (n属于正整数);
})();


// 迭代 -- 改进引入三数取中基准
(() => {
    function sort(arr, leftIndex, rightIndex) {
        //定义栈
        let stack = [];

        let low, hight, i, j, swap;

        stack.push({
            low: leftIndex,
            hight: rightIndex,
        });

        while (stack.length !== 0) {
            let node = stack.pop();
            low = node.low;
            hight = node.hight;
            i = low;
            j = hight;
            if (low < hight) {
                // // 三数取中
                let midIndex = Math.floor((low + hight) / 2);

                if (arr[low] > arr[hight]) {
                    tmp = arr[low];
                    arr[low] = arr[hight];
                    arr[hight] = tmp;
                }
                if (arr[low] > arr[midIndex]) {
                    tmp = arr[low];
                    arr[low] = arr[midIndex];
                    arr[midIndex] = tmp;
                }
                // a 是最小的数
                if (arr[midIndex] > arr[hight]) {
                    tmp = arr[midIndex];
                    arr[midIndex] = arr[hight];
                    arr[hight] = tmp;
                }

                const basic = arr[midIndex]; //选基准
                while (i < j) {
                    while (arr[j] >= basic && i < j)
                        j--;

                    while (arr[i] <= basic && i < j)
                        i++;

                    if (i < j) {
                        swap = arr[i];
                        arr[i] = arr[j];
                        arr[j] = swap;
                    }
                }

                // 交换基准
                arr[low] = arr[i];
                arr[i] = basic;

                stack.push({
                    low: low,
                    hight: i - 1,
                });
                stack.push({
                    low: i + 1,
                    hight: hight,
                });
            }
        }
    }

    // 构造数据
    let arr = [];
    for (let i = 0; i < 10000; i += 1) {
        //arr.push(i);
        arr.push(10000 - i - 1);
        //    arr.push(Number.parseInt(Math.random() * 10000));
    }

    let start = new Date().getTime();
    sort(arr, 0, arr.length - 1);
    let end = new Date().getTime();
    console.log("%c 花费时间" + (end - start) + "ms", 'color:#000652;');
    console.log("%c 时间复杂度为：平均O(n log n)、最好O(n log n)、最坏O(n^2)、空间O(log n)、内排序、稳定", 'color:#000652;');
})();
