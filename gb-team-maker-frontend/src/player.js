class Player {
    constructor(id, name, team, position, card_front, card_back) {
        this.id = id
        this.name = name
        this.team = team
        this.position = position
        this.card_front = card_front
        this.card_back = card_back
        this.fliped = false
        this.element = document.createElement('div')
        this.element.className = "player-info" 

        this.element.addEventListener('click', this.handleFlip.bind(this))
    }

    handleFlip() {
        let front = document.getElementById(`f${this.id}`)
        let back = document.getElementById(`b${this.id}`)
        this.fliped = !this.fliped
        if (this.fliped) {
            front.style.display = "none"
            back.style.display = "block"
        } else {
            front.style.display = "block"
            back.style.display = "none"
        }
    }

    render() {
        this.element.innerHTML = `
        <h3>${this.name}</h3>
        <p>(${this.position})</p>
        <img src="${this.card_front}" class="player-card-front" id="f${this.id}" style="display:block;"/>
        <img src="${this.card_back}" class="player-card-back" id="b${this.id}" style="display:none;"/>
        ` 
        return this.element
    }
}