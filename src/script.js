let arr = [1, 5, 7, 9, 11, 7];
let arr2 = [];
export {ixOf, lastIxOf, incl, some, isBiggerThan10 as test10};

function ixOf(arr, el, index = 0){
    if (!arr.length) return -1;
    for (let i = index; i < arr.length; i++){
        if (arr[i] === el){
            return i;
        }
    }
    return -1;
}

// console.log(ixOf(arr, 9));

function lastIxOf(arr, el, index = 0){
    if (!arr.length) return -1;
    for (let i = arr.length-1; i > index; i--){
        if (arr[i] === el){
            return i;
        }
    }
    return -1;
}

// console.log(lastIxOf(arr, 7));

function incl(arr, el, index = 0){
    if (!arr.length || arr.length <= index) return false;
    if (index >= 0){
        for (let i = index; i < arr.length; i++){
            if (arr[i] === el){
                return true;
            }
        }
    } else {
        for (let i = arr.length + index; i < arr.length; i++){
            if (arr[i] === el){
                return true;
            }
        }
    }
    return false;
}

// console.log(incl(arr, 5, -357));


function isBiggerThan10(element, index, array) {
    return element > 10;
  }

function some (arr, fn, thisArg = undefined){
    if (!arr.length) return false;
    fn.bind(thisArg);
    for (let i = 0; i < arr.length; i++){
        if (fn(arr[i])) return true;
    }
    return false;
}

// console.log(some(arr, isBiggerThan10));