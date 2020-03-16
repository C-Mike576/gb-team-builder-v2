document.addEventListener("DOMContentLoaded", () => {
    
    let adapter = new PlayerAdapter("http://localhost:3000/players")
    adapter.fetchPlayers()
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
            <button>Submit Team</button>
            `

            formContainer.appendChild(formDiv)
        })  
    }
    
    


















})