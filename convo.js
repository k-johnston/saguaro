var convo = {
// 0 - entrance message
intro: {
    bot_says: [ "Hi, this is Saguaro, the chatbot who will help you identify a cactus that you found.",
                "Saguaro won&rsquo;t access your location or save your response, so if you are interested in learning more about the answer, please save its name somewhere that can be accessed later.",
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
    bot_says: [ "Great, let&rsquo;s get started! How tall is this cactus?", 
                "Maybe it is still growing, but all of Saguaro&rsquo;s questions help to narrow down the genus (groups of species) of the cactus."
        ],
human_reply: [
            {
                human_response: "Shorter than the height of a cat",
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
                "There&rsquo;s no cacti that matches this description. Maybe we should start again?"
        ],
human_reply: [  
            {
                human_response: "I want to start again",
                bot_answer: "theheight"
            },   
            {
                human_response: "No, thank you",
                bot_answer: "finalend"
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
                human_response: "No, the branches are shaped differently or have needles that are very close to the branch",
                bot_answer: "1B2BB"
            }
        ]
},
"1B2C" : {
    bot_says: [ "Ok, so this is a medium-height cactus that is shaped like a bush.",
                "Is this cactus covered in numerous, very long needles that extend far out from the cactus&rsquo;s body?",
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
                human_response: "Gray hooked needles",
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
                human_response: "This cactus is low to the ground like a rock",
                bot_answer: "1C2DA"
            },   
            {
                human_response: "This cactus has only one round globe",
                bot_answer: "1C2DB"
            },   
            {
                human_response: "This cactus grows in clumps of globes",
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
    bot_says: [ "Thanks for your answer. Saguaro thinks it knows the cactus! It might be the famous one with a few arms and white flowers on the crown.",
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
                "<div id=chollaquestion>These cacti have distinct needles. What do they look like?</div>"
        ],
human_reply: [  
            {
                human_response: "<div id=jumpingcholla>There are no flowers, but there are needles that are the length of fingers and extremely short</div>",
                bot_answer: "1B2BAjumpingCholla"
            },   
            {
                human_response: "<div id=canecholla>There are no flowers, but this cactus has moderate needles</div>",
                bot_answer: "1B2BAcaneCholla"
            },   
            {
                human_response: "<div id=teddybearcholla>There are no flowers, but the needles look fuzzy</div>",
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
    bot_says: [ "We are getting there, but let&rsquo;s compare both the cactus&rsquo;s height and appearance of the needles.",
                "Take care when you look closely; the needles are sharp.",
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
                "What are the colors of the paddles, in a range from gray-green to purple?",
                "Here is a beautiful gradient to help visualize the colors",
                "<img src=https://cdn.glitch.com/6418d5c5-6eb0-44b2-a7d8-1c6b3e7bc4ec%2Fpricklypear.png?v=1590420764552 />"
        ],
human_reply: [  
            {
                human_response: "Blue/green-gray with pink flowers and fruit",
                bot_answer: "1B2CBbeavertailPrickly"
            },   
            {
                human_response: "Blue-green with yellow flowers and red fruit",
                bot_answer: "1B2CBpancakePrickly"
            },   
            {
                human_response: "Medium green",
                bot_answer: "1B2CBengelmannPrickly"
            },   
            {
                human_response: "Lavender-pink/pink with yellow flowers and short needles",
                bot_answer: "1B2CBvioletPrickly"
            },   
            {
                human_response: "Lavender-pink/violet with yellow flowers and large needles",
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
                human_response: "The cactus has white, pink, or lavender flowers",
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
                "Organ pipe (<em>Stenocereus thurberi</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Organ_pipe_cactus.jpg/220px-Organ_pipe_cactus.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Stenocereus_thurberi-flower.jpg/90px-Stenocereus_thurberi-flower.jpg />",
                "This cactus is slow to grow",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusCereus"
            },    
            {
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1A2AAhildmann" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Hildmann&rsquo;s cereus (<em>Cereus hildmannianus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Cereus_hildmannianus_subsp._uruguayanus_-_Peruvian_Torch_Flowers.jpg/576px-Cereus_hildmannianus_subsp._uruguayanus_-_Peruvian_Torch_Flowers.jpg />",
                "This cactus looks like organ pipes",
                "Does this look like your cactus?"
        ],
    human_reply: [ 
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusCereus"
            },
            {
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }   
        ]
},
"1A2ABsaguaro" : {
    bot_says: [ "Here we go!",
                "Saguaro (<em>Carnegiea gigantea</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Carnegiea_gigantea_in_Saguaro_National_Park_near_Tucson%2C_Arizona_during_November_%2858%29.jpg/576px-Carnegiea_gigantea_in_Saguaro_National_Park_near_Tucson%2C_Arizona_during_November_%2858%29.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Carnegiea_gigantea_%28Saguaro_cactus%29_blossoms.jpg/640px-Carnegiea_gigantea_%28Saguaro_cactus%29_blossoms.jpg />",

                "This is the state flower, they bloom only at night, and they are pollinated by bats",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusCereusSaguaro"
            },   
            {
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1A2BAindianFigPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Indian fig opuntia / prickly pear cactus / cactus pear (<em>Opuntia ficus-indica</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/4/44/Opuntia_ficus-indica_%28Indian_Fig%29_at_Secunderabad%2C_AP_W_IMG_6674.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/6/62/Opuntia_ficus-indica_%28Indian_Fig%29_flowering_at_Secunderabad%2C_AP_W_IMG_6673.jpg />",
                "The fruit is edible and is called tuna in Mexican Spanish",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusOpuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1A2CAindianFigPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Indian fig opuntia / prickly pear cactus / cactus pear (<em>Opuntia ficus-indica</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/4/44/Opuntia_ficus-indica_%28Indian_Fig%29_at_Secunderabad%2C_AP_W_IMG_6674.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/6/62/Opuntia_ficus-indica_%28Indian_Fig%29_flowering_at_Secunderabad%2C_AP_W_IMG_6673.jpg />",
                "The fruit is edible and is called tuna in Mexican Spanish",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusOpuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1A2BAgiantPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Giant prinkly pear (<em>Opuntia robusta</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Opuntia_robusta_growth_form.jpg/640px-Opuntia_robusta_growth_form.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Oputniahmo.JPG/640px-Oputniahmo.JPG />",
                "There are twelve varieties of prickly pear cacti",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusOpuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1A2CAgiantPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Giant prinkly pear (<em>Opuntia robusta</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Opuntia_robusta_growth_form.jpg/640px-Opuntia_robusta_growth_form.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Oputniahmo.JPG/640px-Oputniahmo.JPG />",
                "There are twelve varieties of prickly pear cacti",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusOpuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1A2BBblueMyrtle" : {
    bot_says: [ "Here we go!",
                "Blue myrtle cactus (<em>Myrtillocactus geometrizans</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/MartillocactusUNAM.JPG/170px-MartillocactusUNAM.JPG />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Myrtillocactus_geometrizans_black.jpg/473px-Myrtillocactus_geometrizans_black.jpg />",
                "The fruit looks like myrtle berries, hence the name",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusMyrtillocactus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1A2CBblueMyrtle" : {
    bot_says: [ "Here we go!",
                "Blue myrtle cactus (<em>Myrtillocactus geometrizans</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/MartillocactusUNAM.JPG/170px-MartillocactusUNAM.JPG />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Myrtillocactus_geometrizans_black.jpg/473px-Myrtillocactus_geometrizans_black.jpg />",
                "The fruit looks like myrtle berries, hence the name",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusMyrtillocactus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2AAspruceCones" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Spruce cones / paper spine cactus (<em>Tephrocactus articulus inermis</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Tephrocactus_articulatus_3.jpg/106px-Tephrocactus_articulatus_3.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Opuntia_diademata_inermis_2.JPG/90px-Opuntia_diademata_inermis_2.JPG />",
                "This cactus is originally from Argentina",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusTephrocactus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2AAtotemPole" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Totem pole cactus (<em>Lophocereus schottii</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Totem_Pole_Cactus.JPG/512px-Totem_Pole_Cactus.JPG />",
                "The bumps on the cactus look like stacked faces in a totem pole, hence the name",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusPachycereus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2ABmexicanFencepost" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Mexican fencepost cactus (<em>Pachycereus marginatus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pachycereus_marginatus_%2840259315344%29.jpg/120px-Pachycereus_marginatus_%2840259315344%29.jpg />",
                "This cactus is often grown to be used as fences",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusPachycereus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2ABsenita" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Senita cactus (<em>Pachycereus schottii</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Pachycereus_schottii_%285782222323%29.jpg/220px-Pachycereus_schottii_%285782222323%29.jpg />",
                "This cactus has extreme spikes",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusPachycereus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2ACfishhook" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Fishhook barrel / Arizona barrel cactus (<em>Ferocactus wislizeni</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ferocactus_wislizeni_%28Giant_Fishook_Barrel_Cactus%29_Arizona_2013.jpg/526px-Ferocactus_wislizeni_%28Giant_Fishook_Barrel_Cactus%29_Arizona_2013.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ferocactus_wislizeni338980330.jpg/640px-Ferocactus_wislizeni338980330.jpg />",
                "In adulthood, fishhook barrel cacti generally lean southward toward the sun, so they are nicknamed the compass barrel cactus",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusFerocactus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2ACargentineGiant" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Argentine giant (<em>Echinopsis candicans</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Echinopsis_candicans_in_bloom.jpg/220px-Echinopsis_candicans_in_bloom.jpg />",
                "This Argentinean cactus can grow on the ground",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusEchinopsis"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2BAjumpingCholla" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Jumping cholla / hanging chain cholla (<em>Cylindropuntia fulgida</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Opuntia_fulgida_1_-_Desert_Botanical_Garden.jpg/640px-Opuntia_fulgida_1_-_Desert_Botanical_Garden.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Jumping_Cholla_with_Stem_detached.png/220px-Jumping_Cholla_with_Stem_detached.png />",
                "Bits of cactus will detach easily and stick to you if you brush up against it",
                "The reason is that the length of the spines make it sensitive to detachment due to nearby motion",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusCylindropuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2BAcaneCholla" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Cane cholla (<em>Cylindropuntia imbricata</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Cylindropuntia_spinosior%2C_July_Albuquerque.jpg/220px-Cylindropuntia_spinosior%2C_July_Albuquerque.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cylindropuntia_spinosior%2C_with_flower%2C_Albuquerque.jpg/185px-Cylindropuntia_spinosior%2C_with_flower%2C_Albuquerque.jpg />",
                "Wild birds often live in this cactus",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusCylindropuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2BAteddyBearCholla" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Teddy bear cholla (<em>Cylindropuntia bigelovii</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cylindropuntia_bigelovii.jpg/512px-Cylindropuntia_bigelovii.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Flowering_teddy_bear_cholla_319.JPG/640px-Flowering_teddy_bear_cholla_319.JPG />",
                "Bits of cactus will detach easily and stick to you if you brush up against it",
                "The reason is that the length of the spines make it sensitive to detachment due to nearby motion",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusCylindropuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2BBocotillo" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Ocotillo (<em>Fouquieria splendens</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Ocotillo_GB.jpg/220px-Ocotillo_GB.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ocotillo-with-bee.jpg/120px-Ocotillo-with-bee.jpg />",
                "The flowers can be edible and the entire plant has various medical uses",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusFouquieria"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2BBqueenOfTheNight" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Arizona queen of the night / Reina de la noche (<em>Peniocereus greggii</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Peniocereus_Greggii_Sahuarita_Arizona_2014.jpg/200px-Peniocereus_Greggii_Sahuarita_Arizona_2014.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cereus_greggii_flower.jpg/220px-Cereus_greggii_flower.jpg />",
                "One night a year in June or July, this cactus blooms, and then the flowers close and waste away by morning",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusPeniocereus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2BBchaparralPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Chaparral prickly pear (<em>Opuntia oricola</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Opuntia_oricola_3.jpg/220px-Opuntia_oricola_3.jpg />",
                "Its native habitat is in chaparral habitats (Californian shrubs and grasses)",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusOpuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2CAbuckhornCholla" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Buckhorn cholla (<em>Cylindropuntia acanthocarpa</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Buckhorn_Cholla.JPG/220px-Buckhorn_Cholla.JPG />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Opuntia_acanthocarpa.jpg/593px-Opuntia_acanthocarpa.jpg />",
                "This cactus guards your yard",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusCylindropuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2CAcottonTop" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Cotton top cactus (<em>Echinocactus polycephalus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Echinocactus_polycephalus.jpeg/220px-Echinocactus_polycephalus.jpeg />",
                "This cactus is difficult to cultivate",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusEchinocactus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2CAhedgehog" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Hedgehog / claretcup / kingcup cactus (<em>Echinocereus triglochidiatus var. arizonicus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Echinocereus_triglochidiatusUGA0807034.jpg/220px-Echinocereus_triglochidiatusUGA0807034.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Echinocereus_triglochidiatus_0001.jpg/220px-Echinocereus_triglochidiatus_0001.jpg />",
                "One of these varieties is endangered, so please leave it be",
                "The flowers are pollinated by hummingbirds",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusEchinocereus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2CAarizonaHedgehog" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Arizona hedgehog cactus (<em>Echinocereus arizonicus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Echinocereus_triglochidiatus_arizonicus_flower.jpg/220px-Echinocereus_triglochidiatus_arizonicus_flower.jpg />",
                "This cactus is endangered, so please leave it be",
                "The native habitat for this cactus is in the Superstition, Mescal, and Pinal Mountains",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusEchinocereus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2CBbeavertailPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Beavertail prickly pear (<em>Opuntia basilaris</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Wild_Opuntia_basilaris.jpg/680px-Wild_Opuntia_basilaris.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Joshua_Tree_National_Park_-_Beavertail_Cactus_%28Opuntia_basilaris%29_-_12.jpg/181px-Joshua_Tree_National_Park_-_Beavertail_Cactus_%28Opuntia_basilaris%29_-_12.jpg />",
                "There are twelve varieties of prickly pear cacti",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusOpuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2CBpancakePrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Pancake prickly pear / flapjack prickly pear (<em>Opuntia chlorotica</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Opuntia_chlorotica_7.jpg/220px-Opuntia_chlorotica_7.jpg />",
                "Analysis has shown that this species has existed in the region since the Wisconsin glaciation age (21,000 - 25,000 years ago)",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusOpuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2CBengelmannPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Engelmann&rsquo;s prickly pear (<em>Opuntia engelmannii</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Opuntia_engelmannii_-_Pricklypearcrop.jpg/220px-Opuntia_engelmannii_-_Pricklypearcrop.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Desert-Flower.jpg/220px-Desert-Flower.jpg />",
                "Birds love the fruit from this cactus",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusOpuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2CBvioletPrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Violet prickly pear (<em>Opuntia gosseliniana</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Opuntia_gosseliniana.JPG/220px-Opuntia_gosseliniana.JPG />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Opuntia_santa-rita_2.jpg/220px-Opuntia_santa-rita_2.jpg />",
                "There is still taxonomical disagreement on this prickly pear species with a few others, including some hybrids",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusOpuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2CBpurplePrickly" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Purple pricklypear (<em>Opuntia macrocentra</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Opuntia_macrocentra_01.jpg/220px-Opuntia_macrocentra_01.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Opuntia_macrocentra_02.jpg/81px-Opuntia_macrocentra_02.jpg />",
                "Some varieties of this cactus are protected from having their fruit harvested",
                "The purple color comes from a pigment that becomes more evident when the cactus is stressed by drought or cold",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusOpuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2CCdesertChristmas" : {
    bot_says: [ "Here we go!",
                "Desert Christmas cactus (<em>Cylindropuntia leptocaulis</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Cylindropuntialeptocaulis.jpg/511px-Cylindropuntialeptocaulis.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Desert_Christmas_Cactus_Sahuarita_Arizona.jpg/120px-Desert_Christmas_Cactus_Sahuarita_Arizona.jpg />",
                "The juice of the berries has an intoxicating effect",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusCylindropuntia"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2DAargentineHedgehog" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Argentine hedgehog (<em>Echinopsis huascha</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/2008_07_Botanical_Garden_Meran_71610R0413.jpg/220px-2008_07_Botanical_Garden_Meran_71610R0413.jpg />",
                "This cactus is native to Argentina",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusEchinopsis"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2DAgoldenBarrel" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Golden barrel cactus (<em>Echinocactus grusonii</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Golden_Barrel_cactus%2C_Huntington_Desert_Garden.jpg/250px-Golden_Barrel_cactus%2C_Huntington_Desert_Garden.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Echinocactus_grusonii_%28aka%29.jpg/220px-Echinocactus_grusonii_%28aka%29.jpg />",
                "This cactus will flower after 20 years and have a total lifespan of 30 years",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusEchinocactus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2DBdevilshead" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Devilshead cactus (<em>Echinocactus horizonthalonius</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Echinocactus_horizonthalonius_1.jpg/220px-Echinocactus_horizonthalonius_1.jpg />",
                "One of these varieties is federally protected, so please leave it be",
                "Another name for this cactus is the horse crippler cactus",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusEchinocactus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1B2DBcompass" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Compass barrel (<em>Ferocactus cylindraceus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Ferocactus_cylindraceus_1.jpg/220px-Ferocactus_cylindraceus_1.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ferocactus_cylindraceus_2.jpg/200px-Ferocactus_cylindraceus_2.jpg />",
                "Other names for this cactus include California barrel cactus, desert barrel cactus, and miner&rsquo;s compass",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusFerocactus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1C2BAengelmannHedgehog" : {
    bot_says: [ "Here we go!",
                "Engelmann&rsquo;s hedgehog (<em>Echinocereus engelmannii</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Strawberry_Hedgehog.jpg/220px-Strawberry_Hedgehog.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Echinocereus_engelmannii_10.jpg/220px-Echinocereus_engelmannii_10.jpg />",
                "This cactus usually does not bloom in cultivation until it develops 2 to 3 branches",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusEchinocereus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1C2CAengelmannHedgehog" : {
    bot_says: [ "Here we go!",
                "Engelmann&rsquo;s hedgehog (<em>Echinocereus engelmannii</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Strawberry_Hedgehog.jpg/220px-Strawberry_Hedgehog.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Echinocereus_engelmannii_10.jpg/220px-Echinocereus_engelmannii_10.jpg />",
                "This cactus usually does not bloom in cultivation until it develops 2 to 3 branches",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusEchinocereus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1C2BBpinkflower" : {
    bot_says: [ "Here we go!",
                "Pinkflower hedgehog cactus / strawberry cactus (<em>Echinocereus fasciculatus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Echinocereus_fasciculatus.jpg/220px-Echinocereus_fasciculatus.jpg />",
                "The flowers look so sweet, but are surrounded by fierce needles",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusEchinocereus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1C2CBpinkflower" : {
    bot_says: [ "Here we go!",
                "Pinkflower hedgehog cactus / strawberry cactus (<em>Echinocereus fasciculatus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Echinocereus_fasciculatus.jpg/220px-Echinocereus_fasciculatus.jpg />",
                "The flowers look so sweet, but are surrounded by fierce needles",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusEchinocereus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1C2DAsandDollar" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Sand dollar cactus / star cactus (<em>Astrophytum asterias</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/3/37/Astrophytum_asterias1.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Astrophytum_asterias_23.JPG/576px-Astrophytum_asterias_23.JPG />",
                "This cactus has been a houseplant since the 1840s",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusAstrophytum"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1C2DApincushion" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Pincushion cactus (<em>Pediocactus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pediocactus_simpsonii.jpg/220px-Pediocactus_simpsonii.jpg />",
                "Pediocactus means flat cactus",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusPediocactus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1C2AAlittleBarrel" : {
    bot_says: [ "Here we go!",
                "Little barrel cactus / hard cactus (<em>Sclerocactus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sclerocactus_wrightiae.jpg/220px-Sclerocactus_wrightiae.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sclerocactus_parviflorus_fh_51_AZ_B.jpg/200px-Sclerocactus_parviflorus_fh_51_AZ_B.jpg />",
                "This cactus deflates in late fall by pushing water out of the roots and into the soil, dramatically decreasing in size in preparation for winter",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusSclerocactus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1C2DBlittleBarrel" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Little barrel cactus / hard cactus (<em>Sclerocactus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sclerocactus_wrightiae.jpg/220px-Sclerocactus_wrightiae.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sclerocactus_parviflorus_fh_51_AZ_B.jpg/200px-Sclerocactus_parviflorus_fh_51_AZ_B.jpg />",
                "This cactus deflates in late fall by pushing water out of the roots and into the soil, dramatically decreasing in size in preparation for winter",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusSclerocactus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1C2ABcommonFishhook" : {
    bot_says: [ "Here we go!",
                "Common fishhook cactus (<em>Mammillaria tetrancistra</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mammillaria_tetrancistra_Anza-Borrego.jpg/220px-Mammillaria_tetrancistra_Anza-Borrego.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Mammillaria_tetrancistra_7.jpg/220px-Mammillaria_tetrancistra_7.jpg />",
                "The seeds are black and partially exposed through the red flesh of the fruit",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusMammillaria"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1C2DBcommonFishhook" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Common fishhook cactus (<em>Mammillaria tetrancistra</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mammillaria_tetrancistra_Anza-Borrego.jpg/220px-Mammillaria_tetrancistra_Anza-Borrego.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Mammillaria_tetrancistra_7.jpg/220px-Mammillaria_tetrancistra_7.jpg />",
                "The seeds are black and partially exposed through the red flesh of the fruit",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusMammillaria"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1C2DCredspinePineapple" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Redspine fishhook cactus / red pineapple cactus (<em>Echinomastus erectocentrus</em>)",
                "<img src=https://live.staticflickr.com/5106/5681560518_3467bcfb97_b.jpg />",
                "The variety in Pinal County and the northern Sonoran desert are endangered, so please leave it be",
                "If new plants cannot grow in the wild, this cactus could be extinct by 2070",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusEchinomastus"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
"1C2DCpimaPineapple" : {
    bot_says: [ "Thanks for your answers. Saguaro thinks it knows the cactus!",
                "Pima pineapple (<em>Coryphantha robustispina</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Pima_Pineapple_Cactus_Cluster_Sahuarita_Arizona_2014.jpg/640px-Pima_Pineapple_Cactus_Cluster_Sahuarita_Arizona_2014.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Mammillaria_scheerii.jpg/458px-Mammillaria_scheerii.jpg />",
                "This cactus is federally protected, so please leave it be",
                "The pods must be eaten by a jack rabbit, though not a cottontail as its teeth will damage the seeds",
                "Does this look like your cactus?"
        ],
    human_reply: [  
            {
                human_response: "Hmmm, maybe not",
                bot_answer: "genusCoryphantha"
            },   
            {                
                human_response: "That looks like my cactus",
                bot_answer: "successend"
            }
        ]
},
// end 5
// 6 - genus / backup for cactus
"genusCereus" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Ceroid cacti (<em>Cereus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Cereus-peruvians1.jpg/220px-Cereus-peruvians1.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flor_de_Mandacaru%2C_Guaruj%C3%A1%2C_S%C3%A3o_Paulo.jpg/640px-Flor_de_Mandacaru%2C_Guaruj%C3%A1%2C_S%C3%A3o_Paulo.jpg />",
                "These cacti were first described in a book by Tabernaemontanus published in 1625",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusCereusSaguaro" : {
    bot_says: [ "A saguaro is the only species in its genus, Carnegiea. They are also very distinct. Maybe your cactus belongs in a different genus?",
                "Ceroid cacti (<em>Cereus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Cereus-peruvians1.jpg/220px-Cereus-peruvians1.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flor_de_Mandacaru%2C_Guaruj%C3%A1%2C_S%C3%A3o_Paulo.jpg/640px-Flor_de_Mandacaru%2C_Guaruj%C3%A1%2C_S%C3%A3o_Paulo.jpg />",
                "These cacti were first described in a book by Tabernaemontanus published in 1625",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusOpuntia" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Prickly pear cacti (<em>Opuntia</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Opuntia_littoralis_var_vaseyi_4.jpg/220px-Opuntia_littoralis_var_vaseyi_4.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Prickly_Pear_Closeup.jpg/220px-Prickly_Pear_Closeup.jpg />",
                "These cacti are named for the Ancient Greek city of Opus, famous for an edible plant; many fruits in this genus are edible",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusMyrtillocactus" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Blueberry cacti (<em>Myrtillocactus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Myrtillocactus_geometrizans3.jpg/220px-Myrtillocactus_geometrizans3.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/P%C3%A1jara_La_Lajita_-_Oasis_Park_-_Myrtillocactus_geometrizans_03_ies.jpg/120px-P%C3%A1jara_La_Lajita_-_Oasis_Park_-_Myrtillocactus_geometrizans_03_ies.jpg />",
                "These cacti flower in the summer and have edible purple berries",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusTephrocactus" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Ash-colored cacti (<em>Tephrocactus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Tephrocactus_articulatus_3.jpg/220px-Tephrocactus_articulatus_3.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Tephrocactus_articulatus_var._papyracanthus0.jpg/791px-Tephrocactus_articulatus_var._papyracanthus0.jpg />",
                "The genus is named after the Greek word for ash, due to the gray skin",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusPachycereus" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "&lsquo;Thick torch&rsquo; cacti (<em>Pachycereus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pachycereus_marginatus_%2840259315344%29.jpg/120px-Pachycereus_marginatus_%2840259315344%29.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/P%C3%A1jara_La_Lajita_-_Oasis_Park_-_Pachycereus_schottii_02_ies.jpg/120px-P%C3%A1jara_La_Lajita_-_Oasis_Park_-_Pachycereus_schottii_02_ies.jpg />",
                "They might be referred to as the <em>Lophocereus</em> or <em>Marginatocereus</em> genii",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusFerocactus" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Barrel cacti (<em>Ferocactus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ferocactus_glaucescens_Prg1.jpg/220px-Ferocactus_glaucescens_Prg1.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ferocactus_cylindraceus_12.jpg/220px-Ferocactus_cylindraceus_12.jpg />",
                "These cacti are great houseplants because they need full sun and little water",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusEchinopsis" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Hedgehog cacti (<em>Echinopsis</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Lightmatter_cactusflower.jpg/220px-Lightmatter_cactusflower.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Echinopsis_oxygona13213404.jpg/700px-Echinopsis_oxygona13213404.jpg />",
                "They are more columnar and have more beautiful flowers than other commonly-called hedgehog cacti (<em>Echinocereus</em> and <em>Cereus</em>), but come in many different shapes",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusCylindropuntia" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Chollas (<em>Cylindropuntia</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Opuntia_fulgida_1_-_Desert_Botanical_Garden.jpg/640px-Opuntia_fulgida_1_-_Desert_Botanical_Garden.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Buckhorn_Cholla.JPG/180px-Buckhorn_Cholla.JPG />",
                "These cacti are known for their barbed spikes that attach to skin, clothing, and fur",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusFouquieria" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another plant in the same genus?",
                "Desert trees (<em>Fouquieria</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ocotillo-400px.jpg/220px-Ocotillo-400px.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Cirio_columnaris%2C_boojum_tree.jpg/220px-Cirio_columnaris%2C_boojum_tree.jpg />",
                "They are unrelated to cacti, but are not more closely related to trees; they are kind of on their own",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusPeniocereus" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Desert night-blooming cacti (<em>Peniocereus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Peniocereus_Greggii_Sahuarita_Arizona_2014.jpg/200px-Peniocereus_Greggii_Sahuarita_Arizona_2014.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Night-Blooming_Cereus_Sonora.jpg/220px-Night-Blooming_Cereus_Sonora.jpg />",
                "These cacti have thin stalks and are viney",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusEchinocactus" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Barrel cacti (<em>Echinocactus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Echinocactus_grusonii_Cactaceae.jpg/640px-Echinocactus_grusonii_Cactaceae.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Homalocephala_texensis.jpg/120px-Homalocephala_texensis.jpg />",
                "They are differentiated from the <em>Ferocactus</em> genus because of their wooly fruit",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusEchinocereus" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Hedgehog cacti (<em>Echinocereus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Echinocereus_virdiflorus.JPG/220px-Echinocereus_virdiflorus.JPG />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Echinocereus_stramineus_1.JPG/220px-Echinocereus_stramineus_1.JPG />",
                "The flowers are generally longer lasting than most flowers and are low maintenance",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusAstrophytum" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "&lsquo;Star&rsquo; cacti (<em>Astrophytum</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Astrophytum_asterias_30.JPG/640px-Astrophytum_asterias_30.JPG />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Astrophytum_myriostigma_first_flower.jpg/120px-Astrophytum_myriostigma_first_flower.jpg />",
                "They are often referred to as living stones",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusPediocactus" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Pincushion cacti (<em>Pediocactus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pediocactus_simpsonii.jpg/220px-Pediocactus_simpsonii.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Pediocactus_bradyi_fh_055_AZ_in_cultur_B.jpg/220px-Pediocactus_bradyi_fh_055_AZ_in_cultur_B.jpg />",
                "The name of the genus means &lsquo;flat&rsquo; or &lsquo;field&rsquo;",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusSclerocactus" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Little barrel cacti / hard cacti (<em>Sclerocactus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sclerocactus_wrightiae.jpg/220px-Sclerocactus_wrightiae.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sclerocactus_parviflorus_fh_51_AZ_B.jpg/200px-Sclerocactus_parviflorus_fh_51_AZ_B.jpg />",
                "These cacti are used to very arid environments",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusMammillaria" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Pincushion / nipple cacti (<em>Mammillaria</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Mammillaria_spinosissima_by_RO.jpg/220px-Mammillaria_spinosissima_by_RO.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Mammillaria_%28aka%29.jpg/220px-Mammillaria_%28aka%29.jpg />",
                "They are still determining the cacti in this genus through DNA research",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusEchinomastus" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Spiny breast cacti (<em>Echinomastus</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Echinomastus_johnsonii_1.jpg/220px-Echinomastus_johnsonii_1.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Echinomastus_johnsonii_5.jpg/220px-Echinomastus_johnsonii_5.jpg />",
                "They are native to the southwestern US",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
"genusCoryphantha" : {
    bot_says: [ "Ok. Maybe it&rsquo;s another cactus in the same genus?",
                "Beehive cacti (<em>Coryphantha</em>)",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Nightblooming_cactus.jpg/220px-Nightblooming_cactus.jpg />",
                "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Coryphantha_palmeri.JPG/220px-Coryphantha_palmeri.JPG />",
                "The genus is Greek for &lsquo;flowering from the top&rsquo;",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
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
// end 6
// 7 - exit messages
// bot_answer: "#" signifies that this is the end of the conversation
"successend" : {
    bot_says: [ "Great! We figured it out together!",
                "I hope you learned something interesting about these cacti. Would you like to ask Saguaro about another one?"
        ],
    human_reply: [  
            {
                human_response: "I want to learn about another cactus",
                bot_answer: "theheight"
            },   
            {
                human_response: "Not now, but thanks for offering",
                bot_answer: "finalend"
            }
        ]
},
"finalend" : {
    bot_says: [ "Bye! Thanks for talking with Saguaro."
        ]
}
// end 7
};