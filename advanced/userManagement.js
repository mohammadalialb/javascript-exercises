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
let users = [];

const addUser = name => (users.includes(name) ? users : users.push(name), users);

const removeUser = name => (users = users.filter(user => user !== name));

const showUsers = () => users;
module.exports = { addUser, removeUser, showUsers };
