var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

function sortNumbers(a,b) {
    return a - b;
}

function findYoungestPerson(arr) {
    var tempAgeArr = [];
    for (var index in arr) {
        if (arr[index].hasSmartphone == true) {
            tempAgeArr.push(arr[index].age);
        }
    }
    tempAgeArr.sort(sortNumbers);
    for (var i = 0; i < arr.length; i++) {
        if (tempAgeArr[0] == arr[i].age) {
                return "The youngest person is " + arr[i].firstname + " " + arr[i].lastname;
        }
    }
}

console.log(findYoungestPerson(people));