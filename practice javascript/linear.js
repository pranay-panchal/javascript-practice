function linearSearch(index) {
    let arr = [45, 78, 202, 77, 001, 47, 98, 34];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === index) {
            console.log(`element found at position ${i}`);
            return i;
        }
    }
    // return null;
    console.log(`element not found`);
}

const linearSearch1 = linearSearch(8);