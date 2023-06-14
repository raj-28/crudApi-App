import { v4 as uuidv4 } from 'uuid';

let users = [];


export const getUser = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });

    res.send(`User with the username ${user.firstName} added to the databse!`)
}

export const findUser = (req, res) => {
    const { id } = req.params;
    const founduser = users.find((user) => user.id === id);
    res.send(founduser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`user with id ${id} deleted from database`)
}

export const modifyUser = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id)


    const { firstName, lastName, age } = req.body;
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.send(`user with the id ${id} is updated `)


}