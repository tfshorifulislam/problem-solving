

// const mergeObjects = (obj1, obj2) => {
//     return({...obj1, ...obj2})
// }











const mergeObjects = (object1: Record<string, unknown>, object2: Record<string, unknown>) => {
    return({...object1, ...object2})
}



console.log(mergeObjects({ a: 1 }, { b: 2 }));
