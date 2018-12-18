// 迭代 -- 改进引入三数取中基准
(() => {
    function sort(arr, leftIndex, rightIndex) {
        //定义栈
        let stack = [];
        //定义cutoff
        const cutoff = 10;


        let node, low, hight, pivot, i, j, swap, midIndex, pivotIndex;

        stack.push({
            low: leftIndex,
            hight: rightIndex,
        });

        while (stack.length !== 0) {
            node = stack.pop();
            low = node.low;
            hight = node.hight;
            i = low;
            j = hight;

            len = hight - low;
            if (len > cutoff) {
                //三数取中
                midIndex = (low + hight) >> 1;
                if (arr[low] > arr[midIndex]) {
                    swap = arr[low];
                    arr[low] = arr[midIndex];
                    arr[midIndex] = swap;
                }

                if (arr[low] > arr[hight]) {
                    swap = arr[low];
                    arr[low] = arr[hight];
                    arr[hight] = swap;
                }

                if (arr[midIndex] > arr[hight]) {
                    swap = arr[midIndex];
                    arr[midIndex] = arr[hight];
                    arr[hight] = swap;
                }

                // 交换midIndex hight - 1;
                swap = arr[midIndex];
                arr[midIndex] = arr[hight - 1];
                arr[hight - 1] = swap;

                pivotIndex = hight - 1;
                pivot = arr[hight - 1];


                for (;;) {
                    // 主意这里使用++i 和 --i 是因为三数取中区分了两端
                    while (i < j && arr[i] <= pivot) ++i;
                    while (i < j && arr[j] >= pivot) --j;
                    if (i < j) {
                        swap = arr[i];
                        arr[i] = arr[j];
                        arr[j] = swap;

                    } else {
                        break;
                    }
                }

                arr[pivotIndex] = arr[i];
                arr[i] = pivot;

                if (low < i - 1) {
                    stack.push({
                        low: low,
                        hight: i - 1,
                    });
                }

                if (i + 1 < hight) {
                    stack.push({
                        low: i + 1,
                        hight: hight,
                    });
                }
            } else {
                // 插入排序
                for (let i = 0; i < len; i++) {
                    for (let j = i + low; j >= low && arr[j] > arr[j + 1]; j--) {
                        swap = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = swap;
                    }
                }
            }
        }
    }

    // 构造数据
    //let arr = [8, 1, 4, 9, 0, 3, 5, 2, 7, 10, 13123, 1, 6];
    let arr = [];
    for (let i = 0; i < 10000; i += 1) {
        //arr.push(i);
        //arr.push(1000000 - i - 1);
        arr.push(Number.parseInt(Math.random() * 10000));
    }
    let start = new Date().getTime();
    sort(arr, 0, arr.length - 1);
    let end = new Date().getTime();
    console.log(arr);
    console.log('%c 花费时间' + (end - start) + 'ms', 'color:#000652;');
    console.log(
        '%c 时间复杂度为：平均O(n log n)、最好O(n log n)、最坏O(n^2)、空间O(log n)、内排序、稳定',
        'color:#000652;',
    );
})();