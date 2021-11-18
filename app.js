// Selectors
const uncheckedBox = document.querySelector(".unchecked_box");
const checkedBox = document.querySelector(".checked_box");
const submitButton = document.querySelector(".submit_button");

// Event Listeners
uncheckedBox.addEventListener("click", showCheckedBox);
checkedBox.addEventListener("click", showUncheckedBox);
submitButton.addEventListener("click", submitFeedback);

// Functions
function showCheckedBox() {
  document.getElementById("unchecked_box").style.display = "none";
  document.getElementById("checked_box").style.display = "flex";
}

function showUncheckedBox() {
  document.getElementById("checked_box").style.display = "none";
  document.getElementById("unchecked_box").style.display = "flex";
}

function submitFeedback() {
  document.getElementById("pre_feedback_container").style.display = "none";
  document.getElementById("post_feedback_container").style.display = "flex";
}
