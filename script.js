// [feature] stops conversation using X in lower-left corner
const stopIcon = document.getElementById("stop");
var stopBubble;

stopIcon.addEventListener("click", function() {
  setTimeout(sayGoodbye, 500);
  setTimeout(stopChat, 3000);
});

function stopChat() {
  let chatDivsAI = document.getElementsByClassName("bubble");
  let chatDivsReplies = document.getElementsByClassName("bubble-button");
  var chatDivs = [...chatDivsAI, ...chatDivsReplies]; // spread operator
  for (let i = 0; i < chatDivs.length; i++) {
    let chatDivsStyle = chatDivs[i].style;
    chatDivsStyle.visibility = "hidden";
    chatDivsStyle.opacity = 0;
    if (chatDivs[i].classList.contains("stop-app")) {
      chatDivsStyle.visibility = "visible";
      chatDivsStyle.opacity = 1;
    }
  }
}

function sayGoodbye() {
  stopBubble = document.createElement("div");
  stopBubble.classList.add("bubble", "say", "stop-app");
  let stopBubbleText = document.createTextNode(
    "Ok, I understand. Thanks for talking with Saguaro. Goodbye!"
  );
  stopBubble.appendChild(stopBubbleText);
  stopIcon.insertAdjacentElement("afterend", stopBubble);
}

// [feature] cholla question ("1B2BA" in convo.js)
function setChollaText() {
  let chollaQuestion = document.getElementById("chollaquestion");
  let jumpingCholla = document.getElementById("jumpingcholla");
  let caneCholla = document.getElementById("canecholla");
  let teddyBearCholla = document.getElementById("teddybearcholla");
  
  let chollaQuestionText = `It is now ${chollaSeason}. There are blooming flowers on some of these cacti. What do the flowers look like?`;
  let jumpingChollaText = "There are white and pink flowers and green fruit"; // June July August
  let caneChollaTextSpring = "There are magenta / purple blooms"; // April May
  let caneChollaTextSummer =
    "There are no flowers, but there are long-lasting yellow fruits"; // June July August
  let teddyBearChollaText = "There are yellow-green flowers"; // April May June September

  var chollaMonth, chollaSeason;
  var chollaDay = new Date();
  chollaMonth = chollaDay.getUTCMonth();

  if (chollaMonth === 3 || 4) { // April and May
    chollaSeason = "spring";
    switchText(chollaQuestion, chollaQuestionText);
    switchText(caneCholla, caneChollaTextSpring);
    switchText(teddyBearCholla, teddyBearChollaText);
  } else if (chollaMonth === 5) { // June
    chollaSeason = "June";
    switchText(chollaQuestion, chollaQuestionText);
    switchText(jumpingCholla, jumpingChollaText);
    switchText(caneCholla, caneChollaTextSummer);
    switchText(teddyBearCholla, teddyBearChollaText);
  } else if (chollaMonth === 6 || 7) { // July and August
    chollaSeason = "summer";
    switchText(chollaQuestion, chollaQuestionText);
    switchText(jumpingCholla, jumpingChollaText);
    switchText(caneCholla, caneChollaTextSummer);
  } else if (chollaMonth === 8) { // September
    chollaSeason = "September";
    switchText(chollaQuestion, chollaQuestionText);
    switchText(chollaQuestion, chollaQuestionText);
    switchText(teddyBearCholla, teddyBearChollaText);
  } else {
    switchText(chollaQuestion, "These cacti have distinct needles. What do they look like?");
  }
}

const replyForChollaButton = document.getElementById("chollabutton");

replyForChollaButton.addEventListener("click", function() {
  setChollaText();
});

const switchText = (elem, txt) => {
  elem.innerHTML = txt;
};

// to do
// write a test that the chollaDay works April, May, June, July, August, September and NOT in those months with setUTCMonth https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth