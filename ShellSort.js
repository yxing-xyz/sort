// 希尔排序
(() => {
    function sort(arr, len) {
        let tmp,
            gap = len;

        while ((gap = gap >> 1) > 0) {
            for (let i = gap; i < len; i++) {
                for (let j = i - gap; j >= 0 && arr[j] > arr[j + gap]; j -= gap) {
                    tmp = arr[j];
                    arr[j] = arr[j + gap];
                    arr[j + gap] = tmp;
                }
            }
        }
    }


    // 构造数据
    //let arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0];
    let arr = [];
    for (let i = 0; i < 100000; i += 1) {
        //arr.push(i);
        //arr.push(10 - i - 1);
        arr.push(Number.parseInt(Math.random() * 10000));
    }
    let start = new Date().getTime();
    sort(arr, arr.length);
    let end = new Date().getTime();

    console.log("%c 花费时间" + (end - start) + "ms", 'color:#000652;');
    console.log("%c 时间复杂度为：平均O(n^2)、最好O(n^2)、最坏O(n^2)、空间O(1)、内排序、不稳定", 'color:#000652;');
})();