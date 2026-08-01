const input = [
    { name: "Ali" },
    { name: "Sara" },
    { name: "Ali" }
];


// const findDuplicateNames = (arr) => {

//     let count = {};
//     let result = [];

//     for (let person of arr) {
//         let name = person?.name;

//         if (count[name]) {
//             count[name]++;
//         }
//         else {
//             count[name] = 1;
//         }
//     }

//     for (let name in count) {
//         if (count[name] > 1) {
//             result.push(name)
//         }
//     }

//     return result;

// }


// const findDuplicateNames = (arr) => {

//     let count = {};
//     let result = [];

//     for (let person of arr) {
//         let name = person.name;

//         if (count[name]) {
//             count[name]++
//         }
//         else {
//             count[name] = 1;
//         }
//     }

//     for (let name in count) {
//         if (count[name] > 1) {
//             result.push(name)
//         }
//     }

//     return result;
// }


const findDuplicateNames = (arr) => {

    let count = {}
    let result = [];

    for (let person of arr) {
        let name = person.name;

        if (count[name]) {
            count[name]++
        }
        else {
            count[name] = 1;
        }
    }

    for (name in count) {
        if (count[name] > 1) {
            result.push(name)
        }
    }

    return result;
}


console.log(findDuplicateNames(input));