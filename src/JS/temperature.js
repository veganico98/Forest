const video = document.getElementById('mainVideo');
const temperature = document.getElementById('temperatura');
const tempo = document.getElementById('tempo');
const date = new Date();
const random = Math.floor(Math.random() * 10) + 20;

temperature.innerText = `${random}°C`

tempo.innerText = random < 25 ? `🌧️${random + 5}%` : `🌤️`;

dia.innerText = date.toLocaleDateString("pt-BR", {
    weekday: "long",
})

video.src = random < 25 ? `./src/assets/img/video_chuva.mp4` : `./src/assets/img/video_sol.mp4`