// stops conversation using X in lower-left corner
const stopIcon = document.getElementById("stop");
var stopBubble;

stopIcon.addEventListener("click", function() {
  setTimeout(sayGoodbye, 500);
  setTimeout(stopChat, 3000);
});

function stopChat() {
  let chatDivsAI = document.getElementsByClassName("bubble");
  let chatDivsReplies = document.getElementsByClassName("bubble-button");
  var chatDivs =  [...chatDivsAI, ...chatDivsReplies]; // spread operator
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
        return chollaMonth;
    }

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


// fix later
// tk ~line 470 "1B2BA" - new Date - month shows the answer
// ^^ have a div with a class and the default value - if time of year (month) change the inner html
// test that the new Date works in each month April through September and NOT in those months (needles) with setUTCMonth https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth