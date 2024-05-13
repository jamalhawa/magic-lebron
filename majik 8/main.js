var input = document.getElementById("input");
var output = document.getElementById("output");

input.addEventListener("input", Answer);

function Answer() {
  var RNG = Math.random() * 5;
  var value = input.value;
  value.toLowerCase();

  if (value == "" || value == " ") {
    output.innerHTML = "Well.... ask me";
    output.style.color = "orange";
  } else if (value == "does this work" || value == "how do you know this") {
    output.innerHTML =
      "Keep doubting the goat of basketball... see what will happen";
    output.style.color = "red";
  } else if (value == "are you the goat" || value == "are you the goat?") {
    output.innerHTML = "OF COURSE I AM, I AM THE GREATEST OF ALL TIME!!";
    output.style.color = "green";
  } else if (RNG <= 1) {
    output.innerHTML = "Without a Doubt.";
    output.style.color = "green";
  } else if (RNG <= 2) {
    output.innerHTML = "As I see it, yes.";
    output.style.color = "green";
  } else if (RNG <= 3) {
    output.innerHTML = "Concentrate and ask again.";
    output.style.color = "white";
  } else if (RNG <= 4) {
    output.innerHTML = "Don't count on it.";
    output.style.color = "orange";
  } else if (RNG <= 5) {
    output.innerHTML = "Outlook not so good.";
    output.style.color = "red";
  }
}
