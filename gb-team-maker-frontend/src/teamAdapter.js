class TeamAdapter{
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    fetchAndRenderTeams(){
        fetch(this.baseURL)
        .then(res =>res.json())
        .then(teamsArry => {
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
                <p>${newTeam.name}<p><button id="team-button-${newTeam.id}">View</button>
                `
                teamList.appendChild(teamAccess)
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
        .then(res => res.json())
        .then(resObj => console.log(resObj))
    }
    
}