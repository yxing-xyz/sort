// 迭代 -- 改进引入三数取中基准
(() => {
    function sort(arr, leftIndex, rightIndex) {
        //定义栈
        let stack = [];

        let node, low, hight, pivot, i, j, swap;

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

            //三数取中
            //let midIndex = (low + hight) >> 1;
            pivot = arr[hight];

            for (;;) {
                while (i < j && arr[i] <= pivot) i++;
                while (i < j && arr[j] >= pivot) j--;

                if (i < j) {
                    swap = arr[i];
                    arr[i] = arr[j];
                    arr[j] = swap;
                } else {
                    break;
                }
            }
            arr[hight] = arr[i];
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
        }
    }

    // 构造数据
    let arr = [8, 1, 4, 9, 0, 3, 5, 2, 7, 6];
    for (let i = 0; i < 10; i += 1) {
        //arr.push(i);
        //arr.push(10000 - i - 1);
        //arr.push(Number.parseInt(Math.random() * 10));
    }
    console.log(arr);
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