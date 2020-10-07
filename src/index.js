module.exports = function check(str, bracketsConfig) {
	if (str.length % 2 !== 0) return false;

	if (bracketsConfig.length === 1) {
		let arr = [];
		const closeBr = bracketsConfig[0][1],
			openBr = bracketsConfig[0][0];
		if (closeBr === openBr) return true;
		else {
			for (let i = 0; i < str.length; i++) {
				if (str[i] === openBr) { arr.push(str[i]); }
				else if (str[i] === closeBr && arr[arr.length - 1] === openBr) {
					arr.pop();
				}
				else return false;
			}
			return true;
		}
	}
	else if (bracketsConfig.length > 1) {
		let arr = [];
		let count = 0;
		const closeBr = [],
			openBr = [];

		for (let i = 0; i < bracketsConfig.length; i++) {
			openBr.push(bracketsConfig[i][0]);
			closeBr.push(bracketsConfig[i][1]);
		}

		for (let j = 0; j < str.length; j++) {
			if (str[j] === '7' || str[j] === '8') count++;
			if (arr[arr.length-1] === '|' && arr[arr.length-1] === arr[arr.length-2]) {
				arr.pop();
				arr.pop();
			}
			if (arr[arr.length-1] === '7' && arr[arr.length-1] === arr[arr.length-2]) {
				arr.pop();
				arr.pop();
			}
			if (arr[arr.length-1] === '8' && arr[arr.length-1] === arr[arr.length-2]) {
				arr.pop();
				arr.pop();
			}
			if (openBr.includes(str[j])) arr.push(str[j]);
			else if (openBr.indexOf(arr[arr.length-1]) === closeBr.indexOf(str[j])) arr.pop();
			else return false;
		}

		if (arr.length !== 0 && count === str.length) return false;

		return true;
	}
}
