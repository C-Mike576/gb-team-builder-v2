document.addEventListener("DOMContentLoaded", () => {
    
    let adapter = new PlayerAdapter("http://localhost:3000/players")
    adapter.fetchPlayers()
    const formContainer = document.getElementById("form-container")
    const newTeam = document.getElementById('new-team')
    newTeam.addEventListener('click', renderNewTeamForm)
    const formDiv = document.createElement('div')

    
    function renderNewTeamForm() {
        formDiv.innerHTML = `
        Team Name:
        <input type="text" />
        <br>
        Team Captian:
        <select>
            <option value="default" selected="selected">Choose a Captian</option>
            ${PlayerAdapter.all.map(player => {
                if (player.position == "Captian")
                return `<option value="${player.id}">${player.name}</option>`
            }).join("")}
        </select>
        <button>Submit Team</button>
        `

        formContainer.appendChild(formDiv)
    }
    
    
    
    
    function handleNewTeam() {
        
    }


















})