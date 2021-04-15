export const createUser = (user) =>
    fetch(`http://localhost:8080/api/register/${user.username}`, {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const logIn = (username, password) =>
    fetch(`http://localhost:8080/api/login/${username}/${password}`)
        .then(response => response.json())
        // .then(response => console.log(response))


// export const findUserById = (uid) =>
//     fetch(`http://localhost:8080/api/profile/${uid}`)
//         .then(response => response.json())

export default {
    createUser,
    logIn
}