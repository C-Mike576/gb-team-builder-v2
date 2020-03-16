class PlayerAdapter{
    constructor(baseURL) {
        this.baseURL = baseURL
        this.teamContainer = document.getElementById("team-container")
    }

    fetchPlayers(){
        fetch(this.baseURL)
        .then(res => res.json())
        .then(playerArry => playerArry.forEach(playerObj => {
            let player = new Player()
            player.id = playerObj.id
            player.name = playerObj.name
            player.team = playerObj.team
            player.position = playerObj.position
            player.card_front = playerObj.card_front
            player.card_back = playerObj.card_back
            this.teamContainer.appendChild(player.render()) 
            let addToTeam = document.getElementById(`add-${player.id}`)
            // addToTeam.addEventListener('click', () => {
            //     console.log(`button clicked! ${player.id}`);
                
            // })
        }))   
    }
    
}


