class User {
    constructor(id, username) {
        this.id = id
        this.username = username

        this.element = document.createElement('div')
        this.element.className = "user"
    }
}