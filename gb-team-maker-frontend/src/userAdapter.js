class UserAdapter{
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    fetchUsers(){
        const userList = document.getElementById("users-container")
        fetch(this.baseURL)
        .then(res =>res.json())
        .then(userArry => {
            userArry.forEach(user => {
                let newUser = new User()
                    newUser.id = user.id
                    newUser.username = user.username
                
                let userAccess = document.createElement('div')
                userAccess.className = "user-card"
                userAccess.innerHTML = `
                <p>${newUser.username}</p><button id="user-${newUser.id}">View Teams</button>
                `
                userList.appendChild(userAccess)

            })
        })
    }

    pushNewUser(userObj){
        let configObj = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accepts": "application/json"},
            body: JSON.stringify(userObj)
        }
        fetch(this.baseURL, configObj)
        .then(res => console.log(res.json()))
        .then(this.fetchUsers.bind(this))
    }
}