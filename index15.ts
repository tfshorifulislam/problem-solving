

// const countProperties = (obj) => {

//     return Object.keys(obj).length;

// }











const countProperties = (object: Record<string, unknown>) => {

    return Object.keys(object).length;

}

console.log(countProperties({ a: 1, b: 2, c: 3 }));