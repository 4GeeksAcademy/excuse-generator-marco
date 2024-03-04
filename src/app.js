/* eslint-disable */
import "bootstrap";
import "./style.css";

function getRandomExcuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoRandom = who[Math.floor(Math.random() * who.length)];
  let actionRandom = action[Math.floor(Math.random() * action.length)];
  let whatRandom = what[Math.floor(Math.random() * what.length)];
  let whenRandom = when[Math.floor(Math.random() * when.length)];

  let nuevaExcusa =
    whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom;

  document.getElementById("excuse").innerHTML = nuevaExcusa;
}

window.onload = getRandomExcuse;
