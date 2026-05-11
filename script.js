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

button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 20px;
}

button:hover {
    background-color: #2980b9;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
