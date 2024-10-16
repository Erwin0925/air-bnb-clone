const names = ["ali","num","cun"]

function capitalize(item){
    return item.charAt(0).toUpperCase().concat(item.slice(1));
}

const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})

const squares = nums.map(function(num) {
    return num * num
})


function addsymbol(item){
    return `<p>${item}</p>`
}

const namescap = names.map(addsymbol);
console.log(names);
console.log(namescap);