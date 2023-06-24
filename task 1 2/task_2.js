let sortArr = [7, 77, 777, 7777, 700007];

sortArr.sort(function (p, q) {
    return p - q;
});

console.log(sortArr);