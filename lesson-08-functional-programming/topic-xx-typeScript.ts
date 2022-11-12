const list = [1, 2, 3]

const passArrayFunc = (list: number[], num: number) => {
    const newList = [...list];
    newList.push(num, num * 10);
    return newList;
}

console.log(passArrayFunc(list, 10));
console.log(list)


const a = "a"
const b = "b"

console.log(a.charCodeAt(0) - b.charCodeAt(0))
console.log(list.sort((a, b) => b - a));


function addCurry(x: number):Function {
    // Only change code below this line
    return (y: number) => (z: number) => x + y + z;

    // Only change code above this line
}
console.log(addCurry(10)(20)(30));