const list = [1,2,3]

const passArrayFunc = (list:number[],num:number) => {
    const newList = [...list];
    newList.push(num,num*10);
    return newList;
}

console.log(passArrayFunc(list,10));
console.log(list)


const a = "a"
const b = "b"

console.log(a.charCodeAt(0)-b.charCodeAt(0))
console.log(list.sort((a,b) => b-a));
