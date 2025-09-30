// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Like button toggle
function toggleLike(button) {
  let countSpan = button.querySelector(".like-count");
  let count = parseInt(countSpan.textContent, 10);
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
    countSpan.textContent = count - 1;
  } else {
    button.classList.add("liked");
    countSpan.textContent = count + 1;
  }
}

// Comment submission
function submitComment(postId) {
  const comment = prompt("Add your comment:");
  if (comment && comment.trim() !== "") {
    alert(`Your comment has been added: "${comment}"`);
  }
}

// Flying Card Logo API (simulated)
function fetchLogo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("images/logo-sample.png");
    }, 500);
  });
}

const flyingCard = document.getElementById("flyingCard");
const logoImage = document.getElementById("logoImage");

flyingCard.addEventListener("mouseenter", async () => {
  const logoUrl = await fetchLogo();
  logoImage.src = logoUrl;
});

flyingCard.addEventListener("mouseleave", () => {
  logoImage.src = "";
});
