(() => {
    function sort(arr) {
        return arr.sort((a, b) => a - b);
    }

    // 构造数据
    let arr = [];
    for (let i = 0; i < 10000000; i += 1) {
        //arr.push(i);
        arr.push(10000 - i - 1);
        //    arr.push(Number.parseInt(Math.random() * 10000));
    }

    let start = new Date().getTime();
    sort(arr, 0, arr.length - 1);
    let end = new Date().getTime();
    console.log("%c 花费时间" + (end - start) + "ms", 'color:#000652;');
})();
