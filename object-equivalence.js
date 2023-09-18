/*Program Implementation outline!
Build out Function expression to accepts 2 object params
This function will only work with shallow Objects
*/
const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            return false;
        }
    }

    return true;

};





//Run logic to traverse object and compare values



//Declare Obj1
const obj1 = {
    name: "Cornelia",
    age: 38
}

//Declare Object2
const obj2 = {
    name: "Yariza",
    age: 23,
}


//Using strict comparison to determine value = false
obj1 === obj2;

//Run callback Function
isEqual(obj1, obj2);