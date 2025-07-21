let score = 0;
let gameInterval = null;

const scoreDisplay = document.getElementById("score");
const playButton = document.getElementById("play-btn");
const pauseButton = document.getElementById("pause-btn");
const moleHoles = document.querySelectorAll(".mol1, .mol2, .mol3, .mol4, .mol5, .mol6, .mol7, .mol8, .mol9");
const resetButton = document.getElementById("reset-btn");

//load sounds
const startsound = new Audio('./Sounds/happy.mp3');
 const hitsound = new Audio('./Sounds/132117_2375010-lq.mp3');




// Hide all mole images initially
moleHoles.forEach(hole => {
  const moleImg = hole.querySelector("img");
  moleImg.style.visibility = "hidden";
});

// Function to show a random mole
function showRandomMole() {
  // Hide all moles first
  moleHoles.forEach(hole => {
    const moleImg = hole.querySelector("img");
    moleImg.style.visibility = "hidden";
  });

  // Show one random mole
  const randomIndex = Math.floor(Math.random() * moleHoles.length);
  const randomMole = moleHoles[randomIndex].querySelector("img");
  randomMole.style.visibility = "visible";
}

// Start game on Play button click
playButton.addEventListener("click", () => {
  if (!gameInterval) {
    startsound.play();
    gameInterval = setInterval(showRandomMole, 800);
  }
});

// Pause game on Pause button click
pauseButton.addEventListener("click", () => {
  clearInterval(gameInterval);
  startsound.pause();
  gameInterval = null;
  moleHoles.forEach(hole => {
    const moleImg = hole.querySelector("img");
    moleImg.style.visibility = "hidden";
  });
});

// Whack the mole logic
document.querySelector(".mole").addEventListener("click", (event) => {
  if (event.target.classList.contains("mol-img") && event.target.style.visibility === "visible") {
    score++;
    scoreDisplay.innerText = `Score: ${score}`;
    event.target.style.visibility = "hidden";
    hitsound.play();
  }
});



//hammer change
  const hammerArea = document.body;

  hammerArea.addEventListener('mousedown', () => {
    hammerArea.classList.add('clicking');

    // Remove after short delay to simulate "click effect"
    setTimeout(() => {
      hammerArea.classList.remove('clicking');
    }, 150); // Adjust time as needed
  });


  resetButton.addEventListener("click", () => {
  clearInterval(gameInterval);
  startsound.pause();
  gameInterval = null;
  score = 0;
  scoreDisplay.innerText = `Score: ${score}`;
  moleHoles.forEach(hole => {
    const moleImg = hole.querySelector("img");
    moleImg.style.visibility = "hidden";
  });
});
