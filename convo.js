// tk stop function with the X
// tk ~line 470 "1B2BA" - new Date - month shows the answer
// tk ~line 540 "1B2CB" - colors
// tk move the stuff in index.html to this file?
// all plants in list.js
// tk refactor css
// tk mobile
// tk chat bubbles corners on desktop and mobile
// about isn't working - how to rewrite - put in readme?
// delete console logs and extra comments
// qa with all cacti
// boy_says, human_reply, human_response, bot_answer
// seems dead-ends of the code drop the buttons - i.e., if there's no connecting id in the convo object

var convo = {
// 0 - entrance messages
intro: {
    bot_says: [ "Hi, this is Saguaro, the chatbot who will help you identify a cactus that you found.",
                "Saguaro won't access your location or save your response, so if you are interested in learning more about the answer, please save its name somewhere that can be accessed later.",
                "If you want to stop at any time, you can press the X in the bottom left corner.",
                "Would you like to learn more about this chatbot, or are you ready for a few questions?"
        ],
    human_reply: [
            {
                human_response: "Learn more",
                bot_answer: "about"
            },
            {
                human_response: "Answer questions",
                bot_answer: "height"
            }
        ]
},
"about" : {
    bot_says: [ "Saguaro was created by Kathryn Johnston for the Design A Feminist Chatbot course. It will talk with you about native plants in Arizona.",
                "You can remix this chatbot to help others learn about plants in your area by clicking on the fish in the upper left corner.",
                "Knowledge is power - maybe our conversation is the seed for an interest in bringing native plants to your own yard!",
                "Would you like to return back to our conversation?"
        ],
human_reply: [
            {
                human_response: "Ok, let's go",
                bot_answer: "height"
            },
            {
                human_response: "test2",
                bot_answer: "end"
            }
        ]
},
// end 0
// 1 - general height question
"height" : {
    bot_says: [ "Great, let's get started! How tall is this cactus?", 
                "Maybe it is still growing, but all of Saguaro's questions help to narrow down the genus (groups of species) of the cactus."
        ],
human_reply: [
            {
                human_response: "Around or shorter than the height of a cat",
                bot_answer: "1C"
            },
            {
                human_response: "Somewhere in the middle",
                bot_answer: "1B"
            },
            {
                human_response: "Taller than the height of an adult person",
                bot_answer: "1A"
            }
        ]
},
// end 1
// 2 - general shape question
"1A" : {
    bot_says: [ "Great! Cacti come in a few general shapes. Can you tell me which one best describes your cactus?" 
        ],
human_reply: [
            {
                human_response: "Round like a globe",
                bot_answer: "1A2D"
            },
            {
                human_response: "Multiple branches like a bush",
                bot_answer: "1A2C"
            },   
            {
                human_response: "A trunk with branches like a tree",
                bot_answer: "1A2B"
            },   
            {
                human_response: "Straight and narrow like a column",
                bot_answer: "1A2A"
            }
        ]
},
"1B" : {
    bot_says: [ "Great! Cacti come in a few general shapes. Can you tell me which one best describes your cactus?"
        ],
human_reply: [
            {
                human_response: "Round like a globe",
                bot_answer: "1B2D"
            },
            {
                human_response: "Multiple branches like a bush",
                bot_answer: "1B2C"
            },   
            {
                human_response: "A trunk with branches like a tree",
                bot_answer: "1B2B"
            },   
            {
                human_response: "Straight and narrow like a column",
                bot_answer: "1B2A"
            }
        ]
},
"1C" : {
    bot_says: [ "Great! Cacti come in a few general shapes. Can you tell me which one best describes your cactus?"
        ],
human_reply: [
            {
                human_response: "Round like a globe",
                bot_answer: "1C2D"
            },
            {
                human_response: "Multiple branches like a bush",
                bot_answer: "1C2C"
            },   
            {
                human_response: "A trunk with branches like a tree",
                bot_answer: "1C2B"
            },   
            {
                human_response: "Straight and narrow like a column",
                bot_answer: "1C2A"
            }
        ]
},
// end 2
// 3 - differentiator questions round 1
"1A2A" : {
    bot_says: [ "Ok, so this is a very tall cactus that is shaped like a column.",
                "Does it have mulitple columns?"
        ],
human_reply: [  
            {
                human_response: "Yes",
                bot_answer: "1A2AA"
            },   
            {
                human_response: "No, there is only one column",
                bot_answer: "1A2AB"
            }
        ]
},
"1A2B" : {
    bot_says: [ "Ok, so this is a very tall cactus that is shaped like a tree.",
                "Does this cactus have paddles?"
        ],
human_reply: [  
            {
                human_response: "Yes",
                bot_answer: "1A2BA"
            },   
            {
                human_response: "No, it has branches like a tree",
                bot_answer: "1A2BB"
            }
        ]
},
"1A2C" : {
    bot_says: [ "Ok, so this is a very tall cactus that is shaped like a bush.",
                "Does this cactus have paddles?"
        ],
human_reply: [  
            {
                human_response: "Yes",
                bot_answer: "1A2CA"
            },   
            {
                human_response: "No, it has branches like a bush",
                bot_answer: "1A2CB"
            }
        ]
},
"1A2D" : {
    bot_says: [ "Ok, so this is a very tall cactus that is shaped like a globe.",
                "There's no cacti that matches this description in Saguaro's database. Maybe we should start again?"
        ],
human_reply: [  
            {
                human_response: "Let's start again",
                bot_answer: "height"
            },   
            {
                human_response: "No thank you",
                bot_answer: "end"
            }
        ]
},
"1B2A" : {
    bot_says: [ "Ok, so this is a medium-height cactus that is shaped like a column.",
                "Can you take a closer look (carefully!) and tell Saguaro what the needles look like?"
        ],
human_reply: [  
            {
                human_response: "There are no needles",
                bot_answer: "1B2AA"
            },   
            {
                human_response: "The needles are in straight lines along the ridges of the stem",
                bot_answer: "1B2AB"
            },   
            {
                human_response: "The tree trunk and branches have an intense amount of needles",
                bot_answer: "1B2AC"
            }
        ]
},
"1B2B" : {
    bot_says: [ "Ok, so this is a medium-height cactus that is shaped like a tree.",
                "Does this cactus look like a tree covered in numerous, very long needles that extend far out from the trunk and branches?"
        ],
human_reply: [  
            {
                human_response: "The branches have an intense amount of needles",
                bot_answer: "1B2BA"
            },   
            {
                human_response: "No, the branches are shapped differently or have needles that are very close to the branch",
                bot_answer: "1B2BB"
            }
        ]
},
"1B2C" : {
    bot_says: [ "Ok, so this is a medium-height cactus that is shaped like a bush.",
                "Is this cactus covered in numerous, very long needles that extend far out from the cactus's body?",
                "Does it have paddles instead of branches?",
                "Or does it have slim branches?"
        ],
human_reply: [  
            {
                human_response: "The cactus has numerous needles that come out from the body",
                bot_answer: "1B2CA"
            },   
            {
                human_response: "The cactus has paddles instead of branches",
                bot_answer: "1B2CB"
            },
            {
                human_response: "The cactus has slim branches",
                bot_answer: "1B2CC"
            }
        ]
},
"1B2D" : {
    bot_says: [ "Ok, so this is a medium-height cactus that is shaped like a globe.",
                "Is it a green round cactus with yellow needles?"
        ],
human_reply: [  
            {
                human_response: "Yes",
                bot_answer: "1B2DA"
            },   
            {
                human_response: "No, it doesn't look like that",
                bot_answer: "1B2DB"
            }
        ]
},
"1C2A" : {
    bot_says: [ "Ok, so this is a short cactus that is shaped like a column.",
                "The shape of the cactus is cylindrical, but does it have gray hooked needles?",
                "Or black hooked needles with many clusters of white needles?"
        ],
human_reply: [  
            {
                human_response: "gray hooked needles",
                bot_answer: "1C2AA"
            },   
            {
                human_response: "Black hooked needles with multiple smaller white needles",
                bot_answer: "1C2AB"
            }
        ]
},
"1C2B" : {
    bot_says: [ "Ok, so this is a pretty short cactus that is shaped like a tree.",
                "Does this cactus have gray-green branches or little pipes?"
        ],
human_reply: [  
            {
                human_response: "This cactus has gray-green branches",
                bot_answer: "1C2BA"
            },   
            {
                human_response: "This cactus has little pipes",
                bot_answer: "1C2BB"
            }
        ]
},
"1C2C" : {
    bot_says: [ "Ok, so this is a pretty short cactus that is shaped like a bush.",
                "Does this cactus have gray-green branches or little pipes?"
        ],
human_reply: [  
            {
                human_response: "This cactus has gray-green branches",
                bot_answer: "1C2CA"
            },   
            {
                human_response: "This cactus has little pipes",
                bot_answer: "1C2CB"
            }
        ]
},
"1C2D" : {
    bot_says: [ "Ok, so this is a pretty short cactus that is shaped like a globe.",
                "Can you describe the shape further?"
        ],
human_reply: [  
            {
                human_response: "This cactus looks like a low, smooth rock",
                bot_answer: "1C2DA"
            },   
            {
                human_response: "This cactus is one column",
                bot_answer: "1C2DB"
            },   
            {
                human_response: "This cactus is a group of multiple columns that spread widely",
                bot_answer: "1C2DC"
            }
        ]
},
  // end 3
  // 4 - differentiator questions round 2
"1A2AA" : {
    bot_says: [ "We are getting there, but I have another question.",
                "Are its needles black? (Please take care when looking, as they are sharp!)"
        ],
human_reply: [  
            {
                human_response: "Yes, this cactus has black needles",
                bot_answer: "1A2AAorganPipe"
            },   
            {
                human_response: "No, the needles are another color",
                bot_answer: "1A2AAhildmann"
            }
        ]
},
"1A2AB" : {
    bot_says: [ "Thanks for your answer. Saguaro thinks it knows the cactus! It might be the famous one with long arms and white flowers.",
                "Are you ready?"
        ],
human_reply: [  
            {
                human_response: "I'm ready",
                bot_answer: "1A2ABsaguaro"
            }
        ]
},
"1A2BA" : {
    bot_says: [ "We are getting there, but I have another question.",
                "Does this cactus have no needles and looks smooth?"
        ],
human_reply: [  
            {
                human_response: "Yes, the cactus looks smooth",
                bot_answer: "1A2BAindianFigPrickly"
            },   
            {
                human_response: "No, the cactus has needles",
                bot_answer: "1A2BAgiantPrickly"
            }
        ]
},
"1A2BB" : {
    bot_says: [ "Thanks for your answer. Saguaro thinks it knows the cactus!",
                "Are you ready?"
        ],
human_reply: [  
            {
                human_response: "I'm ready",
                bot_answer: "1A2BBblueMyrtle"
            }
        ]
},
"1A2CA" : {
    bot_says: [ "We are getting there, but I have another question.",
                "Does this cactus have no needles and looks smooth?"
        ],
human_reply: [  
            {
                human_response: "Yes, the cactus looks smooth",
                bot_answer: "1A2CAindianFigPrickly"
            },   
            {
                human_response: "No, the cactus has needles",
                bot_answer: "1A2CAgiantPrickly"
            }
        ]
},
"1A2CB" : {
    bot_says: [ "Thanks for your answer. Saguaro thinks it knows the cactus!",
                "Are you ready?"
        ],
human_reply: [  
            {
                human_response: "I'm ready",
                bot_answer: "1A2CBblueMyrtle"
            }
        ]
},
"1B2AA" : {
    bot_says: [ "We are getting there, but I have one more question.",
                "Is the cactus gray-green and does the stem look like pinecones stacked on top of each other?"
        ],
human_reply: [  
            {
                human_response: "Yes, this  cactus looks like gray-green pinecones",
                bot_answer: "1B2AAspruceCones"
            },   
            {
                human_response: "No, that's not really what the cactus looks like",
                bot_answer: "1B2AAtotemPole"
            }
        ]
},
"1B2AB" : {
    bot_says: [ "We are getting there, but I have one more question.",
                "Are the needles white or gray?",
                "And if they are gray, does it bloom pink flowers at night?"
        ],
human_reply: [  
            {
                human_response: "The cactus has white needles",
                bot_answer: "1B2ABmexicanFencepost"
            },   
            {
                human_response: "The cactus has gray needles and pink flowers",
                bot_answer: "1B2ABsenita"
            }
        ]
},
"1B2AC" : {
    bot_says: [ "We are getting there, but I have one more question.",
                "Does it have bright yellow, orange, or red flowers?",
                "Or does it have large white flowers that bloom at night?"
        ],
human_reply: [  
            {
                human_response: "The cactus has yellow, orange, or red flowers",
                bot_answer: "1B2ACfishhook"
            },   
            {
                human_response: "The cactus has white flowers",
                bot_answer: "1B2ACargentineGiant"
            }
        ]
},
"1B2BA" : {
    bot_says: [ "We are getting there, but I have another question.",
                "It is now {time of year - calculate}.",
                "What do the flowers look like?"
        ],
human_reply: [  
            {
                human_response: "{June-July-August} There are white and pink flowers and green fruit {default} There aren't any flowers, but there are needles that are the length of fingers and extremely short",
                bot_answer: "1B2BAjumpingCholla"
            },   
            {
                human_response: "{April-May-June} There are magenta to purple blooms {July-August} There aren't any flowers, but there are long-lasting yellow fruits {default} There aren't any flowers, but this cactus has moderate needles",
                bot_answer: "1B2BAcaneCholla"
            },   
            {
                human_response: "{April-May-June-September} There are yellow green flowers {default} There aren't any flowers, but the needles look fuzzy",
                bot_answer: "1B2BAteddyBearCholla"
            }
        ]
},
"1B2BB" : {
    bot_says: [ "We are getting there, but I have another question.",
                "Does the tree have narrow branches with needles, or paddles?",
                "And if it has narrow branches, does it have red-orange flowers?"
        ],
human_reply: [  
            {
                human_response: "Yes, this cactus has branches with red-orange flowers at the tips",
                bot_answer: "1B2BBocotillo"
            },   
            {
                human_response: "Yes, this cactus has branches, but there are no flowers (or maybe they are completely wilted)",
                bot_answer: "1B2BBqueenOfTheNight"
            },   
            {
                human_response: "No, this cactus has paddles, not branches",
                bot_answer: "1B2BBchaparralPrickly"
            }
        ]
},
"1B2CA" : {
    bot_says: [ "We are getting there, but let's compare both the cactus's height and appearance of the needles.",
                "Take care when you look closely - the needles are sharp.",
                "Is the cactus a bit elevated from the ground and dark green with long white needles?",
                "Or is it closer to the ground with these densities of needles: long white needles with a red base, long white needles with a white base, or short white needles with a pink base and clustered in groups?"
        ],
human_reply: [  
            {
                human_response: "The cactus is a bit elevated from the ground and has white needles.",
                bot_answer: "1B2CAbuckhornCholla"
            },   
            {
                human_response: "The cactus is closer to the ground and has long white needles with a red base",
                bot_answer: "1B2CAcottonTop"
            },   
            {
                human_response: "The cactus is closer to the ground and has long white needles with a white base",
                bot_answer: "1B2CAhedgehog"
            },   
            {
                human_response: "The cactus is closer to the ground and has short white needles with a pink base and are clustered in groups",
                bot_answer: "1B2CAarizonaHedgehog"
            }
        ]
},
"1B2CB" : {
    bot_says: [ "We are getting there, but I have another question.",
                "What are the colors of the paddles, in a range from gray-green to purple?"
        ],
human_reply: [  
            {
                human_response: "This cactus is blue / green-gray with pink flowers in spring and pink fruit in summer",
                bot_answer: "1B2CBbeavertailPrickly"
            },   
            {
                human_response: "This cactus is blue-green with yellow flowers in spring and red fruit",
                bot_answer: "1B2CBpancakePrickly"
            },   
            {
                human_response: " This cactus is medium green",
                bot_answer: "1B2CBengelmannPrickly"
            },   
            {
                human_response: "This cactus is lavender-pink / pink / red with yellow flowers and short needles",
                bot_answer: "1B2CBvioletPrickly"
            },   
            {
                human_response: "This cactus is lavender-pink / violet with large yellow flowers and large needles",
                bot_answer: "1B2CBpurplePrickly"
            }
        ]
},
"1B2CC" : {
    bot_says: [ "Thanks for your answer. Saguaro thinks it knows the cactus!",
                "Are you ready?"
        ],
human_reply: [  
            {
                human_response: "I'm ready",
                bot_answer: "1B2CCdesertChristmas"
            }
        ]
},
"1B2DA" : {
    bot_says: [ "We are getting there, but I have another question.",
                "Is it a round globe or clumps of round tubes?"
        ],
human_reply: [  
            {
                human_response: "The cactus is a round globe",
                bot_answer: "1B2DAgoldenBarrel"
            },   
            {
                human_response: "The cactus is formed by clumps of round tubes",
                bot_answer: "1B2DAargentineHedgehog"
            }
        ]
},
"1B2DB" : {
    bot_says: [ "We are getting there, but I have another question.",
                "Is it blue-green with long pinkish-brown needles in a star shape?"
        ],
human_reply: [  
            {
                human_response: "Yes, it is blue-green with long pinkish-brown star-shaped needles",
                bot_answer: "1B2DBdevilshead"
            },   
            {
                human_response: "No, the cactus doesn't look like that",
                bot_answer: "1B2DBcompass"
            }
        ]
},
"1C2AA" : {
    bot_says: [ "Thanks for your answer. Saguaro thinks it knows the cactus!",
                "Are you ready?"
        ],
human_reply: [  
            {
                human_response: "I'm ready",
                bot_answer: "1C2AAlittleBarrel"
            }
        ]
},
"1C2AB" : {
    bot_says: [ "Thanks for your answer. Saguaro thinks it knows the cactus!",
                "Are you ready?"
        ],
human_reply: [  
            {
                human_response: "I'm ready",
                bot_answer: "1C2ABcommonFishhook"
            }
        ]
},
"1C2BA" : {
    bot_says: [ "Thanks for your answer. Saguaro thinks it knows the cactus! ",
                "Are you ready?"
        ],
human_reply: [  
            {
                human_response: "I'm ready",
                bot_answer: "1C2BAengelmannHedgehog"
            }
        ]
},
"1C2BB" : {
    bot_says: [ "Thanks for your answer. Saguaro thinks it knows the cactus!",
                "Are you ready?"
        ],
human_reply: [  
            {
                human_response: "I'm ready",
                bot_answer: "1C2BBpinkflower"
            }
        ]
},
"1C2CA" : {
    bot_says: [ "Thanks for your answer. Saguaro thinks it knows the cactus!",
                "Are you ready?"
        ],
human_reply: [  
            {
                human_response: "I'm ready",
                bot_answer: "1C2CAengelmannHedgehog"
            }
        ]
},
"1C2CB" : {
    bot_says: [ "Thanks for your answer. Saguaro thinks it knows the cactus!",
                "Are you ready?"
        ],
human_reply: [  
            {
                human_response: "I'm ready",
                bot_answer: "1C2CBpinkflower"
            }
        ]
},
"1C2DA" : {
    bot_says: [ "We are getting there, but there is one more question.",
                "Is this cactus shaped like a star?"
        ],
human_reply: [  
            {
                human_response: "Yes, it is shaped like a star",
                bot_answer: "1C2DAsandDollar"
            },   
            {
                human_response: "No, it has another shape",
                bot_answer: "1C2DApincushion"
            }
        ]
},
"1C2DB" : {
    bot_says: [ "We are getting there, but I have another question.",
                "Does the cactus have gray hooked needles or black hooked needles with many multiple white needles?"
        ],
human_reply: [  
            {
                human_response: "The cactus has gray hooked needles",
                bot_answer: "1C2DBlittleBarrel"
            },   
            {
                human_response: "The cactus has black hooked needles and multiple smaller white needles",
                bot_answer: "1C2DBcommonFishhook"
            }
        ]
},
"1C2DC" : {
    bot_says: [ "We are getting there, but I have another question.",
                "Does this cactus have white, pink, or lavender flowers that bloom in early March or yellow flowers that bloom after a monsoon rain in late July to August?"
        ],
human_reply: [  
            {
                human_response: "The cactus has white, pink, lavender flowers",
                bot_answer: "1C2DCredspinePineapple"
            },   
            {
                human_response: "The cactus has yellow flowers",
                bot_answer: "1C2DCpimaPineapple"
            }
        ]
},
  // end 4
  // 5 - cactus
"1A2AAorganPipe" : {}, // Thanks for your answers. Saguaro thinks it knows the cactus! Is this right? show images, name, sci name, fun fact
"1A2AAhildmann" : {},
"1A2ABsaguaro" : {},
"1A2BAindianFigPrickly" : {},
"1A2CAindianFigPrickly" : {},
"1A2BAgiantPrickly" : {},
"1A2CAgiantPrickly" : {},
"1A2BBblueMyrtle" : {},
"1A2CBblueMyrtle" : {},
"1B2AAspruceCones" : {},
"1B2AAtotemPole" : {},
"1B2ABmexicanFencepost" : {},
"1B2ABsenita" : {},
"1B2ACfishhook" : {},
"1B2ACargentineGiant" : {},
"1B2BAjumpingCholla" : {},
"1B2BAcaneCholla" : {},
"1B2BAteddyBearCholla" : {},
"1B2BBocotillo" : {},
"1B2BBqueenOfTheNight" : {},
"1B2BBchaparralPrickly" : {},
"1B2CAbuckhornCholla" : {},
"1B2CAcottonTop" : {},
"1B2CAhedgehog" : {},
"1B2CAarizonaHedgehog" : {},
"1B2CBbeavertailPrickly" : {},
"1B2CBpancakePrickly" : {},
"1B2CBengelmannPrickly" : {},
"1B2CBvioletPrickly" : {},
"1B2CBpurplePrickly" : {},
"1B2CCdesertChristmas" : {},
"1B2DAargentineHedgehog" : {},
"1B2DAgoldenBarrel" : {},
"1B2DBdevilshead" : {},
"1B2DBcompass" : {},
"1C2BAengelmannHedgehog" : {},
"1C2CAengelmannHedgehog" : {},
"1C2BBpinkflower" : {},
"1C2CBpinkflower" : {},
"1C2DAsandDollar" : {},
"1C2DApincushion" : {},
"1C2AAlittleBarrel" : {},
"1C2DBlittleBarrel" : {},
"1C2ABcommonFishhook" : {},
"1C2DBcommonFishhook" : {},
"1C2DCredspinePineapple" : {},
"1C2DCpimaPineapple" : {},
// end 5
// 6 - genus / backup for cactus
"next" : {}
// end 6
// 7 - exit messages
// end 7
};