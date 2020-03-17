class TeamAdapter{
    constructor(baseURL) {
        this.baseURL
    }

    fetchTeams(){
        fetch(this.baseURL)
        .then(res =>res.json())
        .then(teamsArry => {
            let teamsButton = document.getElementById("all-teams")
            teamsButton.addEventListener('click', () => {
                let teamList = document.getElementById("teams-container")
                teamList.innerHTML = `
                <ul>
                ${teamsArry.map(team => {
                    return
                })}
                `
            })
        })
    }
}