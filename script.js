function magicMove() {
    // 1. Find the button and the page body
    const btn = document.getElementById('magicBtn');
    const body = document.body;
    
    // 2. Generate a random color
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF3385', '#FFB533'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // 3. Apply the magic!
    body.style.backgroundColor = randomColor;
    btn.innerHTML = "✨ MAGIC! ✨";
    
    // 4. Console log (so we can see it working in the background)
    console.log("Color changed to: " + randomColor);
}
