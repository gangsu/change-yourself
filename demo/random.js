function generateRandomPattern() {
    // Get the canvas element
    const canvas = document.getElementById("drawing");
    const ctx = canvas.getContext("2d");

    // Set the canvas width and height
    const w = 800;
    const h = 400;
    canvas.width = w;
    canvas.height = h;

    // Define the size of each square
    const size = 10;
    const columns = w / size;
    const rows = h / size;

    // Draw randomly colored squares in a grid
    for(let c = 0; c < columns; c++) {
        for(let r = 0; r < rows; r++) {
            // Randomly choose black or white as the fill color
            ctx.fillStyle = Math.random() < 0.5 ? "black" : "white";
            // Draw a square at the current grid location
            ctx.fillRect(size * c, size * r, size, size);
        }
    }
}

// Call the function to generate a random pattern
generateRandomPattern();