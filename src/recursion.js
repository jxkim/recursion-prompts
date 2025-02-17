/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	// base case
	// when n < 0, cannot calculate factorial
	if (n < 0) {
		return null;
	}
	// factorial of 0 is 1
	else if (n === 0) {
		return 1;
	}
	// recursive case
	// multiply current n by n - 1
	else {
		return n * factorial(n - 1);
	}
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	var length = array.length;
	// base case
	// when array empty, return 0
  if (length === 0) {
  	return 0;
  }
	// when array is composed of only 1 integer, return that integer
	else if (length === 1) {
		return array[0];
	}
	// recursive case
	// add integer at current index to sum of integers starting at next index
	else {
		return array[0] + sum(array.slice(1));
	}
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var sum = 0;
  // iterate through array, calling self for every nexted array
  for (var i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			sum = sum + arraySum(array[i]);
		} else {
			sum = sum + array[i];
		}
	}
	return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
	// base case
	// if n = 0, number is even
	if (n === 0) {
		return true;
	// if n = 1 or -1, number is odd
	} else if (n === 1 || n === -1) {
		return false;
	// recursion
	} else {
	  // if n < 0, add 2 and call isEven
	  if (n < 0) {
	  	return isEven(n + 2);
	  // if n > 0, subtract 2 and call isEven
	  } else {
	    return isEven(n - 2);
		}
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	// base case
	// when n = 0, 1 or -1, return 0
	if (n === 0) {
		return 0;
	} else if (Math.abs(n) === 1) {
		return 0;
	// recursive case
	} else {
    // consider both positive/negative inputs
    if (n > 0) {
    	return (n - 1) + sumBelow(n - 1);
    } else {
    	return (n + 1) + sumBelow(n + 1);
    }
	}
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	// base case
	// if difference between 2 numbers is less than 2, return empty array
	if (Math.abs(x - y) < 2) {
		return [];
	// recursive case
	} else {
    // consider ascending and descending ranges
    if (x < y) {
    	var num = x + 1
    	return [num].concat(range(x + 1, y));
    } else {
    	var num = x - 1
    	return [num].concat(range(x - 1, y));
    }
	}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	// base case
	// when exp = 0, return 1
	if (exp === 0) {
		return 1;
  // recursive case
	} else {
		// positive exponent
		if (exp > 0) {
			if (exp % 2 === 0) {
				return exponent(base, exp / 2) * exponent(base, exp / 2);
			} else {
		    return base * exponent(base, exp - 1);
		  }
		// negative exponent
	  } else {
	  	return 1 / exponent(base, - exp);
	  }
	}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	// base case
	// if n = 0, number is not power of 2
	if (n === 0) {
		return false;
	} else if (n % 2 === 1) {
		// number is power of 2 if n is 1
		if (n === 1) {
			return true;
		// if n is any other odd number, number is not power of 2
		} else {
			return false;
		}
  // recursive case
  } else {
  	return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	// base case
	// string composed of 1 character will be the same if reversed
	if (string.length === 1) {
		return string;
	// recursive case
	} else {
		return string.slice(-1) + reverse(string.slice(0, -1));
	}
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	string = string.toLowerCase();
	var length = string.length;
	// base case
	// 1 character string will always be a palindrome
	if (length === 1) {
		return true;
	// 2 character string will be a palindrome if characters are the same
	} else if (length === 2) {
		return string.charAt(0) === string.charAt(1);
	// recursive case
	} else {
		// check if beginning and ending characters are the same
		if (string.charAt(0) === string.charAt(length - 1)) {
			// remove these characters and check next set of characters
			return palindrome(string.slice(1, length - 1));
		} else {
			return false;
		}
	}
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	if (y < 0) {
		y = 0 - y;
	}
	if (x === 0) {
		if (y === 0) {
			return NaN;
		}
		return 0;
	} else if (x > 0) {
		if (x < y) {
			return x;
		}
		return modulo(x - y, y)
	} else {
		x = 0 - x;
		if (x < y) {
			return -x;
		}
    return -modulo(x - y, y)
	}

};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
	if (y === 0) {
		return 0;
	} else if (y === 1) {
		return x;
	} else {
		if (y > 0) {
			return x + multiply(x, y - 1);
		} else {
			return 0 - multiply(x, -y);
		}
	}
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	var len1 = str1.length;
	var len2 = str2.length;
	// base case
	// when both strings are empty, strings are identical
	if (len1 === 0 && len2 === 0) {
		return true;
	// when length is 1, compare strings
	} else if (str1.length === 1) {
		return str1 === str2;
	// recursive case
	} else {
		if (str1.charAt(0) === str2.charAt(0)) {
		  return compareStr(str1.slice(1), str2.slice(1));
		} else {
	    return false;
	  }
	}
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	var array = [];
	// base case
	if (str.length === 0) {
		return array;
	// recursive case
	} else {
		array.push(str[0])
		return array.concat(createArray(str.slice(1)));
	}
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	var reversedArray = [];
	// base case
	// if array is empty or has 1 element, return array
	if (array.length === 0 || array.length === 1) {
		return array;
	// recursive case
	} else {
		// add last element of array to new array
		reversedArray.push(array[array.length -1]);
		return reversedArray.concat(reverseArr(array.slice(0, array.length - 1)));
	}
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	var array = [];
	// add value to array until length reaches 0
	if (length === 0) {
		return array;
	}
	array.push(value);
  array = array.concat(buildList(value, length - 1));
	return array;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var array = [];
  // create an array with n or the appropriate substitution for n
  if (n < 1) {
  	return array;
  }	else if (n % 3 === 0 && n % 5 === 0) {
		array.push('FizzBuzz');
	} else if (n % 3 === 0) {
		array.push('Fizz');
	} else if (n % 5 === 0) {
		array.push('Buzz');
	} else {
		array.push(n.toString());
	}
	// lower values of n should be at the beginning of the array so concatenate the array from previous recursive calls to the end of the current call
	array = fizzBuzz(n - 1).concat(array);
	return array;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	var count = 0;
	// when array is empty, count is 0
	if (array.length === 0) {
		return count;
	}
	if (array[0] === value) {
		count += 1;
	}
	// remove the first element from the array and use new array as argument to self call
	array.shift();
	count = count + countOccurrence(array, value);
	return count;
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  var keys = Object.keys(obj);
  // if key found in object's keys, add to count
	for (var i = 0; i < keys.length; i++) {
		if (keys[i] === key) {
			count += 1;
		}
		// if value at any key is an object itself, use recursion to access nested objects
		if (obj[keys[i]] === Object(obj[keys[i]])) {
			count = count + countKeysInObj(obj[keys[i]], key);
		}
	}
	return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var count = 0;
	var values = Object.values(obj);
	for (var i = 0; i < values.length; i++) {
		if (values[i] === value) {
			count += 1
		}
		if (values[i] === Object(values[i])) {
			count = count + countValuesInObj(values[i], value);
		}
	}
	return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	var keys = Object.keys(obj);
	for (var i = 0; i < keys.length; i++) {
		// if oldKey found in obj, replace with newKey
		if (keys[i] === oldKey) {
			obj[newKey] = obj[keys[i]];
			delete obj[keys[i]];
		}
		// if value is an object, use recursion to replaces keys in nested objects
		if (obj[keys[i]] === Object(obj[keys[i]])) {
			replaceKeysInObj(obj[keys[i]], oldKey, newKey);
		}
	}
	return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
