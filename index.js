let mainDiv = document.querySelector(".main");
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};
let counter = 0;

const input = document.querySelector("input");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (counter == 0) {
    numGen();
    counter++;
  } else if (counter >= 1) {
    mainDiv.innerText = "";
    numGen();
    counter++;
  }

  function numGen() {
    for (let i = 0; i <= input.value; i++) {
      let divs = document.createElement("div");
      divs.classList.add("numdivs");
      divs.innerText = i;
      if (i % 2 == 0) {
        divs.style.backgroundColor = "#2db81d";
        divs.style.color = "white";
      }
      if (i % 2 != 0) {
        divs.style.backgroundColor = "#f73152";
        divs.style.color = "white";
      }
      if (isPrime(i)) {
        divs.style.backgroundColor = "#ffd000";
        divs.style.color = "black";
      }

      mainDiv.appendChild(divs);
    }
  }
});
