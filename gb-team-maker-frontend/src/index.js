const menu = document.getElementById('menu')


document.addEventListener("DOMContentLoaded", () => {
    let adapter = new PlayerAdapter("http://localhost:3000/players")
    adapter.fetchPlayers()
})