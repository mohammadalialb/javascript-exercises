/**
 * Problem:
 * Write a simple user management system that allows adding and removing users,
 * and showing the list of users.
 *
 * Your task:
 * Implement the functions `addUser`, `removeUser`, and `showUsers` that
 * manage a list of users.
 *
 * Example:
 * addUser("Alice");
 * showUsers() should return ["Alice"].
 * removeUser("Alice");
 * showUsers() should return [].
 */


let users = []

function addUser(name){
    if(!users.includes(name)){
        users.push(name)
    }
    return users ;
}

function removeUser(name){
    let index = users.indexOf(name)
    if(index !== -1){
        users.splice(index , 1)
    }
    return users ; 
}

function showUsers() {
    return users ;
}


module.exports = { addUser, removeUser, showUsers };
