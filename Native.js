(() => {
    function sort(arr) {
        return arr.sort((a, b) => a - b);
    }

    // 构造数据
    let arr = [];
    for (let i = 0; i < 1000000; i += 1) {
        //arr.push(i);
        //arr.push(1000000 - i - 1);
            arr.push(Number.parseInt(Math.random() * 1000000));
    }

    let start = new Date().getTime();
    sort(arr);
    let end = new Date().getTime();
    console.log("%c 花费时间" + (end - start) + "ms", 'color:#000652;');
})();
