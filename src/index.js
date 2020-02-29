module.exports = function towelSort(matrix) {
    let resultArr = [];
    if (!matrix) return [];
    matrix.forEach((elem, index) => {
        if (index % 2 > 0) {
            resultArr.push(...elem.reverse())
        } else {
            resultArr.push(...elem)
        }
    });
    return resultArr
};

