
// stops conversation using X in lower-left corner
const stopIcon = document.getElementById("stop");


stopIcon.addEventListener("click", function stopChat() {
  console.log("click stop");
  let stopBubble = document.createElement("div");
  stopBubble.classList.add("bubble", "say");
  stopBubble.innerHTMl("Ok, I understand. Thanks for talking with Saguaro. Goodbye.");
  
  let adjacentBubble = document.GetElementsByClassName("imagine");
  
  if (adjacentBubble.style.transform.scale === 0) {
    adjacentBubble.style.transform.scale = 1;
    adjacentBubble.style.visibility = "hidden";
  } else {
    adjacentBubble.style.visibility = "hidden";    
  }
  
  adjacentBubble.after(stopBubble);
  
  
  
  // stop function addBubble
  // bubble appears next to the X - ok 
});


/*

"earlyend" : {
    bot_says: [ "Ok, I understand. Thanks for talking with Saguaro."
        ]
},

.bubble-typing.imagine, .bubble.imagine {
    transform: scale(1);
    transition: all 450ms, height 450ms 1s, padding 450ms 1s;
    visibility: hidden;
}*/
// https://javascript.info/modifying-document



// https://glitch.com/~feminist-chatbot-template

// tk stop function with the X
// tk ~line 470 "1B2BA" - new Date - month shows the answer
// tk ~line 540 "1B2CB" - colors
// tk mobile css
// tk delete console logs and extra comments
// tk qa with all cacti