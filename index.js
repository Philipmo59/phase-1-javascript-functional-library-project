function callVariable(variable){
    alert(variable)
}

function myEach(collection,cb){
    if(Array.isArray(collection) == false){
        var array = Object.keys(collection).map(key => collection[key])
        for(let num of array){
            cb(num)
        }
    }
    else if(Array.isArray(collection) == true){
        for(let num of collection){
            cb(num)
        }
    }
    return collection
}

function myMap(collection,cb){
    let newArray = []
    if(Array.isArray(collection) == false){
        var array = Object.keys(collection).map(key => collection[key])
        for(let num of array){
            newArray.push(cb(num))
        }
    }
    else if(Array.isArray(collection) == true){
        for(let num of collection){
            newArray.push(cb(num))
        }
    }
    return newArray
}


function myReduce(collection,cb,initalValue){
    let i = 0 
    let total = initalValue
    if(Array.isArray(collection) == false){
        var array = Object.keys(collection).map(key => collection[key])
        if(typeof(initalValue) == "undefined") {
            total = array[0]
            i++
        }
        for(i;i < array.length; i++){
            total = cb(total, array[i])
        }
    }
    else if(Array.isArray(collection) == true){
        if(typeof(initalValue) == "undefined") {
            total = collection[0]
            i++
        }
        for(i;i < collection.length; i++){
            total = cb(total,collection[i])
        }
    }
    return total
}

function myFind(collection,predicate){
    if(Array.isArray(collection) == true){
        for(let i=0; i < collection.length;i++){
            if(predicate(collection[i]) == true){
                console.log(collection[i])
                return collection[i]
            }
        }   
        return undefined
    }
}

function myFilter(collection,predicate){
    let winner = []
    if(Array.isArray(collection) == false){
        var array = Object.keys(collection).map(key => collection[key])
        for(let i=0; i < array.length; i++){
            predicate(array[i])
            if(predicate(array[i]) == true){
                winner.push(array[i])
            }
        }
    }
    else if(Array.isArray(collection) == true){
        for(let i=0; i < collection.length; i++){
            predicate(collection[i])
            if(predicate(collection[i]) == true){
                winner.push(collection[i])
            }
        }
    }
    console.log(winner)
    return winner
}
function mySize(collection){
    let tally = 0
    if(Array.isArray(collection) == false){
        var array = Object.keys(collection).map(key => collection[key])
        tally = array.length
    }
    else if(Array.isArray(collection) == true){
        console.log(collection)
        tally = collection.length
    }
    console.log(tally)
    return tally
}

function myFirst(array,integer){
    if(typeof(integer) == "undefined") {
        integer = 0
        console.log(array[integer])
        return array[integer]
    }
    else{
        let list = array.slice(0,integer)
        console.log(list)
        return list
    }
}

function myLast(array,integer){
    if(typeof(integer) == "undefined") {
        integer = array.length - 1
        console.log(array[integer])
        return array[integer]
    }
    else{
        let last = array.length
        let list = array.slice(-integer,last)
        console.log(list)
        return list
    }
}

function myKeys(collection){
    if(Array.isArray(collection) == false){
        var array = Object.keys(collection).map(key => key)
        return array
    }
}

function myValues(collection){
    if(Array.isArray(collection) == false){
        var array = Object.keys(collection).map(key => collection[key])
        return array
    }
}

// myLast([5, 4, 3, 2, 1]);
// myLast([5, 4, 3, 2, 1,6, 7, 8, 9], 3);


mySize({one: 1, two: 2, three: 3});
mySize([]);

// myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })