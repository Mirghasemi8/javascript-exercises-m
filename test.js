let test = "-webkit-transition";

function camelCase(test){
    return test
    .split("-")
    .map((item, index) => index > 0 ? item.charAt(0).toUpperCase() + item.slice(1) : item)
    .join("")
}

console.log(camelCase(test))