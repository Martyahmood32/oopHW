var myArray = [["Lakers", 23], ["Bengals", 28]];

// multi-dem. array below

function multiplyAll(arr) {
    var product = 1;

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([1,2],[3,4],[5,6,7]);

console.log(product);

//greaterthan operator

function testGreaterthan(val {
    if(val > 100){
        return "over 100";
    }

    if(val > 10){
        return"Over 10;
    }

    return "10 or under";
)

console.log(testGreaterThan(10));