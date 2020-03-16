class Team {

    static all = []

    constructor(name, captianId, mascotId, squaddie1Id, squaddie2Id, squaddie3Id, squaddie4Id) {
        this.name = name
        this.captianId = captianId
        this.mascotId = mascotId
        this.squaddieOneId = squaddie1Id
        this.squaddieTwoId = squaddie2Id
        this.squaddieThreeId = squaddie3Id
        this.squaddieFourId = squaddie4Id

        this.element = document.createElement('div')
        this.element.className = "team"
        this.element.id = `team-${this.id}`

        Team.all.push(this)
    }

}