class Team {

    static all = []

    constructor(name, captianId, mascotId, squaddie1Id, squaddie2Id, squaddie3Id, squaddie4Id) {
        this.name = name
        this.captianId = captianId
        this.mascotId = mascotId
        this.squaddie1Id = squaddie1Id
        this.squaddie2Id = squaddie2Id
        this.squaddie3Id = squaddie3Id
        this.squaddie4Id = squaddie4Id

        this.element = document.createElement('div')
        this.element.className = "team"
        this.element.id = `team-${this.id}`

        Team.all.push(this)
    }
    
}