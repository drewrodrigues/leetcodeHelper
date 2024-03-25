export default function clickRandomIncompleteProblem() {
  const probs = document.querySelectorAll(".check-mark.incomplete");
  probs[Math.floor(Math.random() * probs.length) + 1].click();
}
