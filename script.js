// Like counter
document.querySelectorAll(".like-btn").forEach(button => {
  button.addEventListener("click", () => {
    const countSpan = button.querySelector(".like-count");
    let count = parseInt(countSpan.textContent);
    count++;
    countSpan.textContent = count;
  });
});

// Comment prompt
document.querySelectorAll(".comment-btn").forEach(button => {
  button.addEventListener("click", () => {
    const comment = prompt("💬 Enter your comment:");
    if (comment) {
      alert("Your comment was posted: " + comment);
    }
  });
});
