function calculateLove() {
  var name1 = document.getElementById("name1").value.toLowerCase().trim();
  var name2 = document.getElementById("name2").value.toLowerCase().trim();

  var lovePercentage = calculatePercentage(name1, name2);
  displayResult(lovePercentage);

  showBoomAnimation();
}

function calculatePercentage(name1, name2) {
  var combinedString = name1 + name2;
  var count = 0;
  for (var i = 0; i < combinedString.length; i++) {
    count += combinedString.charCodeAt(i);
  }
  var percentage = count % 101;
  return percentage;
}

function displayResult(percentage) {
  var resultDiv = document.getElementById("result");
  resultDiv.innerText = "The love percentage is " + percentage + "%!";
}

function showBoomAnimation() {
  var container = document.querySelector(".container");
  container.classList.add("boom");

  setTimeout(function() {
    container.classList.remove("boom");
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
  var calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click", calculateLove);
});
