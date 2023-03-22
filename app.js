const wordList = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium!",
  " Aliquid voluptatum asperiores velit, nobis error reiciendis.",
  "Repudiandae quae temporibus exercitationem fugiat?",
  "Hippopotamus, Euphoria, Zenith, Melancholy, Discombobulate, Paradigm, Obfuscate, Persnickety, Halcyon, Esoteric",
  "hey this is simple line you can write very easy",
  "there is some random text you can check your speed",
  "this is last text but not list you can still type as you can ",
];
let count = 0;
const start = document.getElementById("btn");
const typing = document.getElementsByClassName("typing");
const textArea = document.getElementById("textArea");
const result = document.getElementById("result");
const error = document.getElementsByClassName("error");
let startTime, endTime, timeDifference, randomValue;
let countMatchValue = 0;

// console.log(textArea.inn);
const contentLoad = () => {
  let random = Math.floor(Math.random() * wordList.length);
  randomValue = random;
  typing[0].innerHTML = wordList[random];
  startTime = new Date().getTime();
};
const endLoad = () => {
  endTime = new Date().getTime();
  timeDifference = Math.round((endTime - startTime) / 1000);

  if (textArea.value == "") {
    result.innerHTML = "Opps! you must have write something";
    return;
  }
  let totalstring = textArea.value;
  let wordCount = totalstring.split(" ").length;
  // console.log(wordCount);
  let wordSpeed = countWord(wordCount, timeDifference);
  result.innerHTML = `you write ${wordCount} words in ${timeDifference} sec and with this speed you can write   ${wordSpeed} per / minute`;
  if (totalstring.length) {
    checkWords(totalstring, wordList[randomValue]);
  }
};
const handleStartButton = () => {
  if (start.innerText == "Start") {
    start.innerText = "Done";
    textArea.disabled = false;
    countMatchValue = 0;
    error[0].innerHTML = "";
    textArea.value = "";
    contentLoad();
  } else if (start.innerHTML == "Done") {
    start.innerText = "Start";
    result.innerHTML = "";
    textArea.disabled = true;

    endLoad();
  }
};
const countWord = (totalword, totalTime) => {
  let speed = Math.round((totalword / totalTime) * 60);
  return speed;
};
const checkWords = (textValue, originalValue) => {
  // console.log(originalValue);
  const text = textValue.split(" ");
  const orginal = originalValue.split(" ");
  console.log(text);
  console.log(orginal);
  orginal.forEach((element, index) => {
    if (element == text[index]) {
      countMatchValue++;
    }
  });
  error[0].innerHTML = `you have write ${countMatchValue} correct words in ${orginal.length} `;
};
btn.addEventListener("click", handleStartButton);
