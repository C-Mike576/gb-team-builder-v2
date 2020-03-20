class PlayerAdapter{
    constructor(baseURL) {
        this.baseURL = baseURL
        this.teamContainer = document.getElementById("players-container")
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
        }))
    }

    fetchMostUsed(){
        fetch("http://localhost:3000/most-used-player")
        .then(res => res.json())
        .then(mostPlayer => {
            console.log(mostPlayer);
            
            let player = new Player()

            player.id = mostPlayer.id    
            player.name = mostPlayer.name
            player.team = mostPlayer.team
            player.position = mostPlayer.position
            player.card_front = mostPlayer.card_front
            player.card_back = mostPlayer.card_back  
            
            this.teamContainer.appendChild(player.render())
        
        })
    }

    
}

