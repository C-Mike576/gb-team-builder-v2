class TeamAdapter{
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    fetchAndRenderTeams(){
        document.getElementById('players-container').innerHTML = ''
        document.getElementById('teams-container').innerHTML = ""
        console.log("start fetch")
        fetch(this.baseURL)
        .then(res =>res.json())
        .then(teamsArry => {
            console.log(teamsArry);
            
            teamsArry.forEach(team => {
                let newTeam = new Team()
                    newTeam.id = team.id
                    newTeam.name = team.name
                    newTeam.captianId = team.captian_id
                    newTeam.mascotId = team.mascot_id
                    newTeam.squaddieOneId = team.squaddie_1_id
                    newTeam.squaddieTwoId = team.squaddie_2_id
                    newTeam.squaddieThreeId = team.squaddie_3_id
                    newTeam.squaddieFourId = team.squaddie_4_id
                let teamList = document.getElementById("teams-container")
                let teamAccess = document.createElement('div')
                teamAccess.className = "team-card"
                teamAccess.innerHTML = `
                <p>${newTeam.name}</p><button id="team-button-${newTeam.id}">View</button>
                `
                teamList.appendChild(teamAccess)

                let teamIdArray = [newTeam.captianId, newTeam.mascotId, newTeam.squaddieOneId, newTeam.squaddieTwoId, newTeam.squaddieThreeId, newTeam.squaddieFourId]
                let teamContainer = document.getElementById('players-container')
                let viewTeamButton = document.getElementById(`team-button-${newTeam.id}`)
                viewTeamButton.addEventListener('click', () => {
                    teamContainer.innerHTML = ""
                    fetch("http://localhost:3000/players")
                    .then(res => res.json())
                    .then(playerArry => playerArry.forEach(playerObj => {
                       
                            let player = new Player()
            
                            player.id = playerObj.id
                            player.name = playerObj.name
                            player.team = playerObj.team
                            player.position = playerObj.position
                            player.card_front = playerObj.card_front
                            player.card_back = playerObj.card_back
                        if (teamIdArray.includes(player.id)) {
                            teamContainer.appendChild(player.render()) 
                        }
                    }))
                })
            })
        })
    }

    pushNewTeam(teamObj){
        let configObj = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accepts": "application/json"},
            body: JSON.stringify(teamObj)
        }
        fetch(this.baseURL, configObj)
        .then(res => console.log(res.json()))
        .then(this.fetchAndRenderTeams.bind(this))
    }
    
}