let candianDollar = 0.91;

let Currency = function (candianDollar) {
    this.candianDollar = candianDollar;
}

function roundTwoDecimals(aomunt) {
    return Math.round(aomunt * 100) / 100;
}

exports.candianToUs = function (candian) {
    return roundTwoDecimals(candian * candianDollar);
}

exports.USToCandian = function (us) {
    return roundTwoDecimals(us / candianDollar);
}