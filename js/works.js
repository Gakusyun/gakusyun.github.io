var countNum = 0;
function count() {
    postMessage(countNum);
    countNum += 2;
    setTimeout(count, 1000);
}
count();