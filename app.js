// Selectors
const uncheckedBox = document.querySelector(".unchecked_box");
const checkedBox = document.querySelector(".checked_box");
const submitButton = document.querySelector(".submit_button");
const logoURL = getUrlVars()["inf_custom_LogoURL"];
const decodelogoURL = decodeURIComponent(logoURL);
const googleReviewURL = getUrlVars()["inf_custom_GoogleReviewURL"];

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

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    }
  );
  return vars;
}

document.getElementById("banner").src = decodelogoURL;
document.getElementById("google_review_url").href = googleReviewURL;
