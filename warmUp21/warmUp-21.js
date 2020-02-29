// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0

// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.
var maxNumberOfBalloons = function (text) {
    let output = 0;
    let map = {};

    for (let i = 0; i < text.length; i++) {
        if (!map[text[i]]) {
            map[text[i]] = 1;
        } else {
            map[text[i]] = map[text[i]] + 1
        }
    }


    while (true) {
        if (map['b'] >= 1 && map['a'] >= 1 && map['l'] >= 2 && map['o'] >= 2 && map['n'] >= 1) {
            map['b'] = map['b'] - 1;
            map['a'] = map['a'] - 1;
            map['l'] = map['l'] - 2;
            map['o'] = map['o'] - 2;
            map['n'] = map['n'] - 1;
            output = output + 1

        } else {
            break;
        }
    } return output;
};