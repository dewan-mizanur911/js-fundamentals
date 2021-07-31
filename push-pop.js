var fruitsName = ['mango', 'banana', 'orange', 'berry', 'jackfruit'];
console.log(fruitsName);
fruitsName.push('Lichie');
fruitsName.push('apple');
console.log(fruitsName);

var friendAge = [15, 32, 26, 86, 63];
console.log(friendAge);
friendAge.push(34);
console.log(friendAge);

fruitsName.pop();
var lastFruitName = fruitsName.pop();
console.log(lastFruitName);
fruitsName.pop();
console.log(fruitsName);

friendAge.pop();
var lastFriendAge= friendAge.pop();
console.log(lastFriendAge);
friendAge.pop();
console.log(friendAge);

// Remove first index of an array using shift()
fruitsName.shift();
console.log(fruitsName);

//adding element to first index using unshift()
friendAge.unshift(23,24);
console.log(friendAge);

// merging element using concat
var mergingElements = fruitsName.concat(friendAge);
console.log(mergingElements);
