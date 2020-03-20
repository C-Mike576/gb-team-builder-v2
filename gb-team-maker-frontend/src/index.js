document.addEventListener("DOMContentLoaded", () => {
    
    const playerAdapter = new PlayerAdapter("http://localhost:3000/players")
    playerAdapter.fetchPlayers()
    const teamAdapter = new TeamAdapter("http://localhost:3000/teams")
    const userAdapter = new UserAdapter("http://localhost:3000/users")

    const usersContainer = document.getElementById('users-container')
    const playersContainer = document.getElementById('players-container')
    const teamsContainer = document.getElementById('teams-container')
    const formContainer = document.getElementById("form-container")
    const newTeam = document.getElementById('new-team')
    newTeam.addEventListener('click', renderNewTeamForm)
    const formDiv = document.createElement('div')
    const newUser = document.getElementById('new-user')
    newUser.addEventListener('click', newUserForm)
    const userForm = document.createElement('div')
    
    

    function newUserForm() {
        formContainer.innerHTML = ""
        userForm.innerHTML = `
            Username:
            <input type="text" />
            <button id="send-user">Submit</button>
        `
        formContainer.appendChild(userForm)
    }
    userForm.addEventListener('click', submitUser)

    function submitUser(e) {
        if (e.target.tagName == "BUTTON") {
            let input = userForm.querySelector('input')
            let newUserObj = {
                username: input.value
            }
            userAdapter.pushNewUser(newUserObj)
            
            userForm.innerHTML = ""
        }
    }
    
    
    function renderNewTeamForm() {
        //formContainer.innerHTML = ''
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(users => {
        fetch("http://localhost:3000/players")
        .then(res => res.json())
        .then(playerArry => {
            formDiv.innerHTML = `
            Team Name:
            <input type="text" />
            <br>
            Team Captian:
            <select>
                <option value="default" selected="selected">Choose a Captian</option>
                ${playerArry.map(player => {
                    if (player.position == "Captian")
                    return `<option value="${player.id}">${player.name}</option>`
                })}
            </select>
            <select>
                <option value="default" selected="selected">Choose a Mascot</option>
                ${playerArry.map(player => {
                    if (player.position == "Mascot")
                    return `<option value="${player.id}">${player.name}</option>`
                })}
            </select>
            <select>
                <option value="default" selected="selected">Choose First Squaddie</option>
                ${playerArry.map(player => {
                    if (player.position == "Squaddie")
                    return `<option value="${player.id}">${player.name}</option>`
                })}
            </select>
            <select>
                <option value="default" selected="selected">Choose Second Squaddie</option>
                ${playerArry.map(player => {
                    if (player.position == "Squaddie")
                    return `<option value="${player.id}">${player.name}</option>`
                })}
            </select>
            <select>
                <option value="default" selected="selected">Choose Third Squaddie</option>
                ${playerArry.map(player => {
                    if (player.position == "Squaddie")
                    return `<option value="${player.id}">${player.name}</option>`
                })}
            </select>
            <select>
                <option value="default" selected="selected">Choose Last Squaddie</option>
                ${playerArry.map(player => {
                    if (player.position == "Squaddie")
                    return `<option value="${player.id}">${player.name}</option>`
                })}
            </select>
            <br>
            Username:
            <select>
                <option value="default" selected="selected">Choose who uses this team</option>
                ${users.data.map(user => {
                    return `<option value="${user.id}">${user.attributes.username}</option>`
                })}
            </select>
            <br>
            <button>Submit Team</button>
            `

            formContainer.appendChild(formDiv)
        })})  
    }
    
    formDiv.addEventListener('click', submitForm)

    function submitForm(e) {
        if (e.target.tagName == "BUTTON") {
            
        
            let input = formDiv.querySelector('input')
            let selects = formDiv.querySelectorAll('select')
        
            let newTeamObj = {
                name: input.value,
                captian_id: parseInt(selects[0].value),
                mascot_id: parseInt(selects[1].value),
                squaddie_1_id: parseInt(selects[2].value),
                squaddie_2_id: parseInt(selects[3].value),
                squaddie_3_id: parseInt(selects[4].value),
                squaddie_4_id: parseInt(selects[5].value),
                user_id: parseInt(selects[6].value)
            }
            
            teamAdapter.pushNewTeam(newTeamObj)
            
            teamsContainer.innerHTML = ""
            formDiv.innerHTML = ""
        }
    }
    let playersButton = document.getElementById('all-players')
    playersButton.addEventListener('click', () => {
        formContainer.innerHTML= ""
        playersContainer.innerHTML = ""
        teamsContainer.innerHTML = ""
        usersContainer.innerHTML = ""
        let playerAdapter = new PlayerAdapter("http://localhost:3000/players")
        playerAdapter.fetchPlayers()
    })

    let teamsButton = document.getElementById("all-teams")
    teamsButton.addEventListener('click', () => {
        formContainer.innerHTML= ""
        teamsContainer.innerHTML = ""
        playersContainer.innerHTML = ""
        usersContainer.innerHTML = ""
        teamAdapter.fetchAndRenderTeams()
    })
    let usersButton = document.getElementById("all-users")
    usersButton.addEventListener('click', () => {
        formContainer.innerHTML= ""
        usersContainer.innerHTML = ""
        playersContainer.innerHTML = ""
        teamsContainer.innerHTML = ""
        userAdapter.fetchUsers()
    })
    let mostUsedButton = document.getElementById("most-used")
    mostUsedButton.addEventListener('click', () => {
        formContainer.innerHTML= ""
        usersContainer.innerHTML = ""
        playersContainer.innerHTML = ""
        teamsContainer.innerHTML = ""
        playerAdapter.fetchMostUsed()
    })
})