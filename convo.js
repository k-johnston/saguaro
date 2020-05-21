var convo = {
// 0 - entrance messages
intro: {
    bot_says: [ "Hi, this is Saguaro, the chatbot who will help you identify a cactus that you found.",
                "Saguaro won't access your location or save your response, so if you are interested in learning more about the answer, please save its name somewhere that can be accessed later.",
                "If you want to stop at any time, you can press the X in the bottom left corner.",
                "Are you ready for a few questions?"
        ],
    human_reply: [
            {
                human_response: "Ready to go",
                bot_answer: "theheight"
            }
        ]
},
// end 0
// 1 - general height question
"theheight" : {
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
                human_response: "I want to start again",
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
                "Can you take a closer look \(carefully!\) and tell Saguaro what the needles look like?"
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
                human_response: "No, it does not look like that",
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
                "Are its needles black? \(Please take care when looking, as they are sharp!\)"
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
                human_response: "Ready to go",
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
                human_response: "Ready to go",
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
                human_response: "Ready to go",
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
                human_response: "No, it does not look like that",
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
                human_response: "Yes, this cactus has branches, but there are no flowers \(or maybe they are completely wilted\)",
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
                human_response: "Ready to go",
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
                human_response: "No, the cactus does not look like that",
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
                human_response: "Ready to go",
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
                human_response: "Ready to go",
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
                human_response: "Ready to go",
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
                human_response: "Ready to go",
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
                human_response: "Ready to go",
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
                human_response: "Ready to go",
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
"1A2AAorganPipe" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                "Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genus"
            },    
            {
                human_response: "That looks like my cactus",
                bot_answer: "successend1"
            }
        ]
},
"1A2AAhildmann" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [ 
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "B"
            },
            {
                human_response: "That looks like my cactus",
                bot_answer: "A"
            }   
        ]
},
"1A2ABsaguaro" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                bot_answer: "A"
            },   
            {
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1A2BAindianFigPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1A2CAindianFigPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1A2BAgiantPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1A2CAgiantPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1A2BBblueMyrtle" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1A2CBblueMyrtle" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2AAspruceCones" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2AAtotemPole" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2ABmexicanFencepost" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2ABsenita" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2ACfishhook" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2ACargentineGiant" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2BAjumpingCholla" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2BAcaneCholla" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2BAteddyBearCholla" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2BBocotillo" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2BBqueenOfTheNight" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2BBchaparralPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2CAbuckhornCholla" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2CAcottonTop" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2CAhedgehog" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2CAarizonaHedgehog" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2CBbeavertailPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2CBpancakePrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2CBengelmannPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2CBvioletPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2CBpurplePrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2CCdesertChristmas" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2DAargentineHedgehog" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2DAgoldenBarrel" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2DBdevilshead" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1B2DBcompass" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1C2BAengelmannHedgehog" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1C2CAengelmannHedgehog" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1C2BBpinkflower" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1C2CBpinkflower" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1C2DAsandDollar" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1C2DApincushion" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1C2AAlittleBarrel" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1C2DBlittleBarrel" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1C2ABcommonFishhook" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1C2DBcommonFishhook" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1C2DCredspinePineapple" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
"1C2DCpimaPineapple" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "name",
                "name",
                "<img src=https://... />",
                "<img src=https://... />",
                "alert",
                "funfact",
                " Is this right?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "A"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "B"
            }
        ]
},
// end 5
// 6 - genus / backup for cactus
"genus" : {
    bot_says: [ "Genus"
        ]
},
// end 6
// 7 - exit messages
"successend" : {
    bot_says: [ "Great! We figured it out together. You can ask Saguaro about another cactus."
        ],
    human_reply: [  
            {
                human_response: "I want to learn about another cactus",
                bot_answer: "theheight"
            },   
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "finalend"
            }
        ]
},
"successend1" : {
    bot_says: [ "Great! We figured it out together. You can ask Saguaro about another cactus."
        ],
    human_reply: [  
            {
                human_response: "I want to learn about another cactus",
                bot_answer: "theheight"
            },   
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "finalend"
            }
        ]
},
"earlyend" : {
    bot_says: [ "Ok, I understand. Thanks for talking with Saguaro."
        ]
},
"finalend" : {
    bot_says: [ "Bye! Thanks for talking with Saguaro."
        ]
}
// end 7
};