const coding = (input) => {
    input = input.toLowerCase();
    let result = [];
    let textarr = Array.from(input);
    textarr.forEach((item, a, arr) => {
        arr = Array.from(input);
        arr.splice(a, 1 );
        if (arr.includes(item)) { result.push(")") };
        if (!arr.includes(item)) { result.push("(") };
     })
     return result.join("");
     }

     module.exports = {coding};