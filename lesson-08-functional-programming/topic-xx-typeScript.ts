const list = [1,2,3]

const passArrayFunc = (list:number[],num:number) => {
    const newList = [...list];
    newList.push(num,num*10);
    return newList;
}

console.log(passArrayFunc(list,10));
console.log(list)