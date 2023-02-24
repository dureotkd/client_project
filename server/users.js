const users = []

const addUer = ({id, name, room}) => {
    const numberOfUsersInRoom = users.filter(user => user.room === room).length
    if(numberOfUsersInRoom === 10) {
        return {
            error: 'Room is full'
        }
    }

    const newUser = {
        id,
        name,
        room
    }

    users.push(newUser)
    return { newUser }
}

const getUser = id => {
    return users.find(user => user.id === id)
}

const getUsersInRoom = room => {
    return users.filter(user => user.room === room)
}

module.exports = { addUer, getUser, getUsersInRoom }