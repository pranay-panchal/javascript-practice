let arr = [1, 3, 5, 7, 8, 9];
let x = 11;

function binary(arr, x, start, end) {
    if (start > end) {
        console.log(`This Shouldnt work...`)
        return false;
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) {
        return true;
    }

    if (arr[mid] > x) {
        return binary(arr, x, start, mid - 1);
    } else {
        return binary(arr, x, mid + 1, end);
    }
}

if (binary(arr, x, 0, arr.length - 1)) {
    console.log(`Element found`);
} else {
    console.log(`Element not Found`);
}