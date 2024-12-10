const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const instructionsDiv = document.getElementById("instructions");

let isBlinking = false; // Tracks if blinking is active

// Sequence of instructions
function showInstructions() {
  instructionsDiv.textContent = "Ready!!";
  instructionsDiv.classList.remove("blinking"); // Remove blinking class

  setTimeout(() => {
    instructionsDiv.textContent = "Press the Start button.";
    startBlinking(); // Start blinking "Press the Start button"
  }, 5000); // After 2 seconds
}

// Start blinking effect
function startBlinking() {
  if (!isBlinking) {
    instructionsDiv.classList.add("blinking");
    isBlinking = true;
  }
}

// Stop blinking effect
function stopBlinking() {
  if (isBlinking) {
    instructionsDiv.classList.remove("blinking");
    isBlinking = false;
  }
}

startBtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  stopBlinking(); // Stop blinking when the Start button is clicked
  instructionsDiv.textContent = "Start typing any key."; // Change instruction
  console.log("Start button clicked. Event listeners added.");
});

stopBtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyup", handleUp);
  logDiv.textContent = "";
  stateDiv.textContent = "";
  instructionsDiv.textContent = ""; // Clear instructions
  stopBlinking(); // Ensure blinking stops

  // Restart instructions after 10 seconds
  setTimeout(() => {
    showInstructions();
  }, 10000);
});

function handleDown(e) {
  logDiv.textContent = `Key ${e.key} pressed down`;
  stateDiv.textContent = "Key is Down";
}

function handleUp(e) {
  logDiv.textContent = `Key ${e.key} pressed up`;
  stateDiv.textContent = "Key is Up";
}

// Initialize instructions on page load
showInstructions();
