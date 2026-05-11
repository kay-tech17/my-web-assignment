function magicMove() {
    // This finds the button
    const btn = document.getElementById('magicBtn');
    
    // This changes the background color randomly
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = randomColor;

    // This changes the text inside the button
    btn.innerHTML = "✨ MAGIC! ✨";
    
    // This makes the button grow a little
    btn.style.transform = "scale(1.1)";
    setTimeout(() => { btn.style.transform = "scale(1)"; }, 200);
}

