// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log "p2 is longer" to the console if `secondList` has more elements than `firstList`

'use strict;'
let firstList: number[] = [1, 2, 3];
let secondList: number[] = [4, 5];


let isMore: string = '';
if (firstList.length < secondList.length) {
    console.log("p2 is longer");
} else {
    console.log("nope")
}