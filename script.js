// stops conversation using X in lower-left corner
const stopIcon = document.getElementById("stop");
var stopBubble;

stopIcon.addEventListener("click", function() {
  sayGoodbye();
  setTimeout(stopChat, 3000);
});
var chatDivs = [];
function stopChat() {
  let chatDivs = document.getElementsByClassName("bubble"); // left side
  let chatDivsHuman = document.getElementsByClassName("bubble-button"); // right side

  for (let i = 0; i < chatDivsHuman.length; i++) {
    chatDivsHuman.forEach(i => chatDivs.push(i));
    console.log(chatDivs);
    return chatDivs;
  }
  
  for (let i = 0; i < chatDivs.length; i++) {
    let chatDivsStyle = chatDivs[i].style;
    chatDivsStyle.backgroundColor = "red";
    if (chatDivs[i].classList.contains("bubble-button")) {
      chatDivsStyle.backgroundColor = "purple";
    } else if (chatDivs[i].classList.contains("stop-app")) {
      chatDivsStyle.backgroundColor = "teal";
    }
  }
}

function sayGoodbye() {
  stopBubble = document.createElement("div");
  stopBubble.classList.add("bubble", "say", "stop-app");
  let stopBubbleText = document.createTextNode("Ok, I understand. Thanks for talking with Saguaro. Goodbye!");
  stopBubble.appendChild(stopBubbleText);
  stopIcon.insertAdjacentElement("afterend", stopBubble);
}

// timing of cholla question ("1B2BA" in convo.js)
const chollaQuestion = document.getElementById("chollaquestion");
const jumpingCholla = document.getElementById("jumpingcholla");
const caneCholla = document.getElementById("canecholla");
const teddyBearCholla = document.getElementById("teddybearcholla");
var chollaMonth;
const chollaQuestionText = `It is now ${chollaMonth} and there are blooming flowers on some of these cacti. What do the flowers look like?`;
const jumpingChollaText = "There are white and pink flowers and green fruit"; // June July August
const caneChollaTextSpring = "There are magenta / purple blooms"; // April May June
const caneChollaTextSummer = "There are no flowers, but there are long-lasting yellow fruits"; // July August
const teddBearChollaText = "There are yellow-green flowers"; // April May June September

(function chollaTime(chollaMonth) {
  var chollaDay = new Date();
  chollaMonth = chollaDay.getUTCMonth();
  
  if (chollaMonth >= 3 && chollaMonth <=8) {
    switch(chollaMonth) {
      case 3 : 
        chollaMonth = "April";
        return chollaMonth;
      break;
      case 4 : 
        chollaMonth = "May";
        return chollaMonth;
      break;
      case 5 : 
        chollaMonth = "June";
        return chollaMonth;
      break;
      case 6 : 
        chollaMonth = "July";
        return chollaMonth;
      break;
      case 7 : 
        chollaMonth = "August";
        return chollaMonth;
      break;
      case 8 :
        chollaMonth = "September";
        return chollaMonth;
      break;
      default :
        chollaMonth = chollaMonth;
    }
        console.log(chollaMonth);

  }
})();

function setChollaText(chollaPlant, chollaNewText) {
  
}

// if chollaQuestion appears on page, setChollaText(selection);






/*

"1B2BA" : {
    bot_says: [ "We are getting there, but I have another question.",
                "It is now {time of year - calculate}.",
                "What do the flowers look like?"
        ],
human_reply: [  
            {
                human_response: "{June-July-August} There are white and pink flowers and green fruit {default} There are no flowers, but there are needles that are the length of fingers and extremely short",
                bot_answer: "1B2BAjumpingCholla"
            },   
            {
                human_response: "{April-May-June} There are magenta to purple blooms {July-August} There are no flowers, but there are long-lasting yellow fruits {default} There are no flowers, but this cactus has moderate needles",
                bot_answer: "1B2BAcaneCholla"
            },   
            {
                human_response: "{April-May-June-September} There are yellow green flowers {default} There are no flowers, but the needles look fuzzy",
                bot_answer: "1B2BAteddyBearCholla"
            }
        ]
},

*/





// https://javascript.info/modifying-document



// https://glitch.com/~feminist-chatbot-template

// tk ~line 470 "1B2BA" - new Date - month shows the answer
// ^^ have a div with a class and the default value - if time of year (month) change the inner html
// tk delete console logs and extra comments

// could fix later
// bubble width and top-bottom margins - standardize width / remove inline styling from bubbles.js
// test that the new Date works in each month April through September and NOT in those months (needles) with setUTCMonth https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
// typing dots margin top after images (i think the margin bottoms of images collapse)