/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */
function mysteryRange(s, n) {
    let sArray = [];

    if (s.length < 10) {

        return s.split(``)
            .sort((a, b) => a - b)
            .filter((element, index) => index === 0 || index === s.length - 1)
            .map(element => +element);

    }

    if (n * 2 === s.length) {

        if (s.length <= 180) {
            for (let i = 0; i < s.length; i += 2) {
                sArray.push(s.slice(i, i + 2));
            }

            return sArray
                .sort((a, b) => a - b)
                .filter((element, index) => index === 0 || index === sArray.length - 1)
                .map(element => +element);

        } else if (s.length > 180) {

            sArray.push(100 + Math.floor((s.length - 180) / 4) - 1);
            sArray.unshift(sArray[0] - n + 1);
            return sArray;

        }

    }

    if (n > 90 && s.length > 180) {
        if (s.length - 180 <= (n - 90) * 3 && s.length - 180 > (n - 90)) {
            sArray.push(99 + Math.floor(((s.length - 180) - (n - 90)) / 2));
            sArray.unshift(sArray[0] - n + 1);
            return sArray;
        }
    }
    sArray.push(+`9`.repeat(s.length / n) + (s.length % n));
    sArray.unshift(sArray[0] - n + 1);
    return sArray;
}