document.addEventListener("DOMContentLoaded", () => {
    
    let playerAdapter = new PlayerAdapter("http://localhost:3000/players")
    playerAdapter.fetchPlayers()
    let teamAdapter = new TeamAdapter("http://localhost:3000/teams")

    const formContainer = document.getElementById("form-container")
    const newTeam = document.getElementById('new-team')
    newTeam.addEventListener('click', renderNewTeamForm)
    const formDiv = document.createElement('div')
    
    
    function renderNewTeamForm() {
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
            <button id="submit">Submit Team</button>
            `

            formContainer.appendChild(formDiv)
        })  
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
            }
            teamAdapter.pushNewTeam(newTeamObj)
            formDiv.innerHTML = ""
        }
    }
    let playersButton = document.getElementById('all-players')
    playersButton.addEventListener('click', () => {
        document.getElementById('teams-container').innerHTML = ''
        let playerAdapter = new PlayerAdapter("http://localhost:3000/players")
        playerAdapter.fetchPlayers()
    })

    let teamsButton = document.getElementById("all-teams")
    teamsButton.addEventListener('click', () => {
        document.getElementById('players-container').innerHTML = ''
        let teamListAdapter = new TeamAdapter("http://localhost:3000/teams")
        teamListAdapter.fetchAndRenderTeams()
    })
 
















})