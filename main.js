// Toggle active nav link
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});

// Example Like Button functionality
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

// Example Comment Submission
function submitComment(postId) {
  const input = document.querySelector(`#comment-input-${postId}`);
  const list = document.querySelector(`#comment-list-${postId}`);
  
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  }
}

// Smooth scroll for navigation
const navLinks = document.querySelectorAll("nav a[href^='#']");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
