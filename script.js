let btn = document.querySelector("button");
let advice = document.querySelector(".advice");
let adviceId = document.querySelector("p");

let api = "https://api.adviceslip.com/advice";
async function fetchAndDisplayAdvice() {
  try {
    let response = await fetch(api);
    let result = await response.json();
    let data = result.slip;
    advice.textContent = `"${data.advice}"`;
    adviceId.textContent = `Advice #${data.id}`;
  } catch (error) {
    console.error("Error fetching advice:", error);
  }
}

fetchAndDisplayAdvice();

btn.addEventListener("click", fetchAndDisplayAdvice);
