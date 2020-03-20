class UserAdapter{
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    fetchUsers(){
        const userList = document.getElementById("users-container")
        document.getElementById('teams-container').innerHTML = ''
        document.getElementById('players-container').innerHTML = ''
        document.getElementById('users-container').innerHTML = ''
        fetch(this.baseURL)
        .then(res =>res.json())
        .then(userArry => {
            userArry.data.forEach(user => {
                let newUser = new User()

                    newUser.id = user.id
                    newUser.username = user.attributes.username
                
                let userAccess = document.createElement('div')
                userAccess.className = "user-card"
                userAccess.innerHTML = `
                <p>${newUser.username}</p><button onclick="event.stopPropagation()" id="user-${newUser.id}">View Teams</button>
                `
                userList.appendChild(userAccess)
                let viewTeamsButton = document.getElementById(`user-${newUser.id}`)
                viewTeamsButton.addEventListener('click', () => {
                    let teamList = document.getElementById('teams-container')
                    teamList.innerHTML = ''
                    user.relationships.teams.data.forEach(userTeam => {
                        fetch(`http://localhost:3000/teams/${userTeam.id}`)
                        .then(res => res.json())
                        .then(teamObj => {
                            let newUserTeam = document.createElement('div')
                            newUserTeam.innerHTML = `
                            <p>${teamObj.name}</p>
                            `
                            teamList.appendChild(newUserTeam)
                        })
                    })
                })
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
        .then(res => res.json())
        .then(this.fetchUsers.bind(this))
    }
}