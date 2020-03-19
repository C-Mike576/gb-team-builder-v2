class Team {

    constructor(id, name, captianId, mascotId, squaddie1Id, squaddie2Id, squaddie3Id, squaddie4Id, userId) {
        this.id = id
        this.name = name
        this.captianId = captianId
        this.mascotId = mascotId
        this.squaddieOneId = squaddie1Id
        this.squaddieTwoId = squaddie2Id
        this.squaddieThreeId = squaddie3Id
        this.squaddieFourId = squaddie4Id
        this.userId = userId

        this.element = document.createElement('div')
        this.element.className = "team"

    }

}