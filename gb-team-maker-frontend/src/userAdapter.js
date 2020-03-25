class UserAdapter{
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    fetchUsers(){
        const userList = document.getElementById("users-container")
        
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
                    let usersTeams = []
                    user.relationships.teams.data.forEach(userTeam => {
                        usersTeams.push(parseInt(userTeam.id))
                    })    
                    fetch(`http://localhost:3000/teams`)
                    .then(res => res.json())
                    .then(teamArry => {      
                        teamArry.forEach(teamObj=> { 
                        let newUserTeam = document.createElement('div')
                        newUserTeam.innerHTML = `
                            <p id=${teamObj.id}>${teamObj.name}</p>
                        `        
                        if (usersTeams.includes(teamObj.id)) {
                            teamList.appendChild(newUserTeam)
                        }
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