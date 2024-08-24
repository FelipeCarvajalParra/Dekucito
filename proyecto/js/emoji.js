
var elemento = document.getElementById("nav-ico")

const emojis = [ "⭐", "🌟", "💫", "✨", "🌠", "🧩", "🎴", "💥", "🎲", "🛸" , "⛩️", "☄️", "🥇", "💢"]
const emojiAleatorio = Math.floor(Math.random() * emojis.length);

elemento.textContent = (`¿${emojis[emojiAleatorio]}?`);