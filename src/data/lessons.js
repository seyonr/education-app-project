const lessonsData = {
  grade4: {
    unit1: [
      {
        id: 1,
        title: "Smart Choices Start Here",
        coinReward: 20,
        videoUrl: "https://www.youtube.com/watch?v=2fSrhyS7FeM",
        context: [
          {
            term: "Decision Making",
            definition:
              "Decision making means stopping to think before you spend your money."
          },
          {
            term: "Smart Choice",
            definition:
              "A smart choice helps you now or helps you reach an important goal later."
          }
        ],
        tips: "Think about needs, goals, and tomorrow before spending today.",
        questions: [
          {
            type: "scenario-choice",
            scenarioTitle: "Toy or Bike",
            scenarioText: "You earned $20 from helping at home. You want a bike that costs $80.",
            walletAmount: 20,
            goal: "Save for a bike",
            heroEmoji: "🚲",
            heroCaption: "Big goals take smart choices.",
            question: "What should you do with your $20?",
            generalHint: "Choose the option that gets you closer to the bike.",
            options: [
              {
                text: "Buy a toy today",
                subText: "Fun now",
                emoji: "🧸",
                hint: "The toy is fun, but it does not help your bike goal.",
                effect: "The toy was fun today, but now you are not closer to the bike.",
                isBest: false
              },
              {
                text: "Save the money",
                subText: "Goal first",
                emoji: "🐷",
                effect: "Great choice! Saving helps you get closer to your bike.",
                isBest: true
              },
              {
                text: "Spend half on snacks",
                subText: "A little now",
                emoji: "🍿",
                hint: "Even small spending can slow a big goal.",
                effect: "Spending some money means the bike will take longer.",
                isBest: false
              }
            ]
          },
          {
            type: "tap-reveal",
            scenarioTitle: "Detective Desk",
            scenarioText: "Kai wants a new soccer ball, but he also wants candy after school.",
            goal: "Reach a bigger goal",
            heroEmoji: "🕵️",
            heroCaption: "Use clues before deciding.",
            question: "Which choice is smarter?",
            generalHint: "Think about what helps for longer than just one afternoon.",
            cards: [
              {
                id: "u1l1q2c1",
                coverEmoji: "🃏",
                emoji: "⚽",
                title: "Clue 1",
                text: "The soccer ball is something Kai can use again and again."
              },
              {
                id: "u1l1q2c2",
                coverEmoji: "🃏",
                emoji: "🍬",
                title: "Clue 2",
                text: "Candy is gone quickly and does not help with the bigger goal."
              },
              {
                id: "u1l1q2c3",
                coverEmoji: "🃏",
                emoji: "⏳",
                title: "Clue 3",
                text: "Waiting a little can help you afford something more useful."
              },
              {
                id: "u1l1q2c4",
                coverEmoji: "🃏",
                emoji: "🎯",
                title: "Clue 4",
                text: "Smart money choices often match a goal."
              }
            ],
            options: [
              {
                text: "Save for the soccer ball",
                isBest: true,
                effect: "Nice job! The clues showed that saving for the bigger goal is smarter."
              },
              {
                text: "Buy candy right away",
                isBest: false,
                hint: "Look at the clues again. Which choice lasts longer and fits the goal?"
              }
            ]
          }
        ]
      },

      {
        id: 2,
        title: "Needs and Wants Lab",
        coinReward: 20,
        videoUrl: "https://www.youtube.com/watch?v=aRcXutXvfmM",
        context: [
          {
            term: "Need",
            definition:
              "A need is something important for living, learning, health, or safety."
          },
          {
            term: "Want",
            definition:
              "A want is something fun or nice to have, but not necessary right now."
          }
        ],
        tips: "Needs first. Wants later.",
        questions: [
          {
            type: "drag-drop",
            scenarioTitle: "Sort the Shopping Bag",
            scenarioText: "Drag each item into the correct bucket, or use the quick buttons.",
            heroEmoji: "🛍️",
            heroCaption: "Can you tell the difference between needs and wants?",
            question: "Which items are needs and which are wants?",
            generalHint:
              "Ask yourself: do I need this for living, learning, or health?",
            successMessage: "Amazing! You sorted every item correctly.",
            items: [
              { id: "u1l2i1", label: "Water Bottle", emoji: "💧", bucket: "need" },
              { id: "u1l2i2", label: "Lunch", emoji: "🥪", bucket: "need" },
              { id: "u1l2i3", label: "Notebook", emoji: "📓", bucket: "need" },
              { id: "u1l2i4", label: "Winter Coat", emoji: "🧥", bucket: "need" },
              { id: "u1l2i5", label: "Candy", emoji: "🍬", bucket: "want" },
              { id: "u1l2i6", label: "Toy Car", emoji: "🚗", bucket: "want" },
              { id: "u1l2i7", label: "Video Game", emoji: "🎮", bucket: "want" },
              { id: "u1l2i8", label: "Ice Cream", emoji: "🍦", bucket: "want" }
            ]
          },
          {
            type: "scenario-choice",
            scenarioTitle: "Ready for School",
            scenarioText: "You have $12 before school starts.",
            walletAmount: 12,
            goal: "Be prepared for class",
            heroEmoji: "🏫",
            heroCaption: "Needs help you learn and be ready.",
            question: "What should you buy first?",
            generalHint: "Think about what helps most with school today.",
            options: [
              {
                text: "A notebook",
                subText: "Useful for class",
                emoji: "📒",
                effect: "Correct! A notebook is a school need.",
                isBest: true
              },
              {
                text: "A sticker pack",
                subText: "Looks fun",
                emoji: "🌟",
                hint: "Stickers are fun, but they are not the most important thing for class.",
                effect: "Stickers are a want. A school need should come first.",
                isBest: false
              },
              {
                text: "A candy bag",
                subText: "Treat now",
                emoji: "🍭",
                hint: "Candy is a treat, not the most important school item.",
                effect: "Candy is a want, not a classroom need.",
                isBest: false
              }
            ]
          }
        ]
      },

      {
        id: 3,
        title: "Goal Getter",
        coinReward: 20,
        videoUrl: "https://www.youtube.com/watch?v=v-mlEQ7KW5Q",
        context: [
          {
            term: "Goal",
            definition: "A goal is something you are working toward."
          },
          {
            term: "Save",
            definition: "Saving means keeping some money for later."
          }
        ],
        tips: "Goals get easier when you save step by step.",
        questions: [
          {
            type: "scenario-choice",
            scenarioTitle: "Skateboard Dream",
            scenarioText: "You want a skateboard. You have $15 already saved.",
            walletAmount: 15,
            goal: "Save for a skateboard",
            heroEmoji: "🛹",
            heroCaption: "Small choices can help a big goal.",
            question: "What is the smartest choice after school?",
            generalHint: "Which choice helps the skateboard fund grow?",
            options: [
              {
                text: "Save today's money too",
                subText: "Stay on track",
                emoji: "💰",
                effect: "Excellent! Adding more money today helps your goal grow.",
                isBest: true
              },
              {
                text: "Buy two treats",
                subText: "Fun now",
                emoji: "🍪",
                hint: "Treats are okay sometimes, but they do not help the skateboard goal.",
                effect: "Those treats use money that could help your goal.",
                isBest: false
              },
              {
                text: "Buy a tiny toy",
                subText: "Small purchase",
                emoji: "🪀",
                hint: "Even small purchases can slow a big goal.",
                effect: "Small spending still makes the skateboard take longer.",
                isBest: false
              }
            ]
          },
          {
            type: "budget-builder",
            scenarioTitle: "Save Most, Spend a Little",
            scenarioText:
              "You have $10. You want one small treat, but you also want to save most of your money.",
            budget: 10,
            heroEmoji: "🎯",
            heroCaption: "Build a plan that matches your goal.",
            question: "Pick the best set of items.",
            generalHint:
              "Choose one small extra and keep most of the money for savings.",
            successMessage:
              "Great job! You enjoyed one small extra and still protected your savings.",
            showAnswerTip: true,
            items: [
              { id: "u1l3b1", name: "Fruit Snack", price: 2, emoji: "🍎", tag: "small treat" },
              { id: "u1l3b2", name: "Candy Box", price: 6, emoji: "🍬", tag: "bigger treat" },
              { id: "u1l3b3", name: "Sticker Sheet", price: 2, emoji: "🌈", tag: "extra fun" },
              { id: "u1l3b4", name: "Save the Rest", price: 0, emoji: "🐷", tag: "goal money" }
            ],
            correctItemIds: ["u1l3b1", "u1l3b4"]
          }
        ]
      },

      {
        id: 4,
        title: "School Day Money Mission",
        coinReward: 20,
        context: [
          {
            term: "Important First",
            definition:
              "When money is limited, choose the most important thing first."
          }
        ],
        tips: "Ask yourself: what matters most right now?",
        questions: [
          {
            type: "scenario-choice",
            scenarioTitle: "Broken Backpack",
            scenarioText: "Your backpack zipper broke. You also want a toy from the store.",
            walletAmount: 25,
            goal: "Be ready for school",
            heroEmoji: "🎒",
            heroCaption: "Solve the important problem first.",
            question: "What should you do?",
            generalHint: "Think about what helps you get through the school day.",
            options: [
              {
                text: "Buy a new backpack",
                subText: "Fix the problem",
                emoji: "🎒",
                effect: "Yes! The backpack is the important need right now.",
                isBest: true
              },
              {
                text: "Buy the toy",
                subText: "Fun choice",
                emoji: "🧸",
                hint: "The toy is fun, but it does not fix your school problem.",
                effect: "The toy is fun, but the backpack problem is still there.",
                isBest: false
              },
              {
                text: "Buy candy and juice",
                subText: "Treats today",
                emoji: "🧃",
                hint: "Treats are extras, not the most important need here.",
                effect: "Treats can wait when a school need comes first.",
                isBest: false
              }
            ]
          },
          {
            type: "tap-reveal",
            scenarioTitle: "Lunch Line Clues",
            scenarioText: "You brought $8 to school and need to make one smart choice.",
            walletAmount: 8,
            heroEmoji: "🧠",
            heroCaption: "Use clues to decide what matters most.",
            question: "What should come first today?",
            generalHint: "Look for the choice that helps you through the day.",
            cards: [
              {
                id: "u1l4c1",
                coverEmoji: "🃏",
                emoji: "🍽️",
                title: "Clue 1",
                text: "Lunch helps you stay focused and ready to learn."
              },
              {
                id: "u1l4c2",
                coverEmoji: "🃏",
                emoji: "🍬",
                title: "Clue 2",
                text: "Candy is tasty, but it is not the most important item."
              },
              {
                id: "u1l4c3",
                coverEmoji: "🃏",
                emoji: "🏫",
                title: "Clue 3",
                text: "A school day goes better when your important needs are met."
              },
              {
                id: "u1l4c4",
                coverEmoji: "🃏",
                emoji: "✅",
                title: "Clue 4",
                text: "Smart choices are not always the most fun choices."
              }
            ],
            options: [
              {
                text: "Buy lunch first",
                isBest: true,
                effect: "Correct! Lunch is the important choice for the school day."
              },
              {
                text: "Buy candy first",
                isBest: false,
                hint: "Check the clues again. Which choice helps you most today?"
              }
            ]
          }
        ]
      }
    ],

    unit2: [
      {
        id: 5,
        title: "Price Detective",
        coinReward: 20,
        videoUrl: "https://www.youtube.com/watch?v=HekcJ2jt7Mw",
        context: [
          {
            term: "Compare Prices",
            definition:
              "Comparing prices means looking at more than one choice before buying."
          },
          {
            term: "Value",
            definition:
              "Value means getting something useful for a fair price."
          }
        ],
        tips: "Smart shoppers compare before they buy.",
        questions: [
          {
            type: "tap-reveal",
            scenarioTitle: "Pencil Mystery",
            scenarioText: "One store sells one pencil for $4.",
            heroEmoji: "✏️",
            heroCaption: "Detectives compare clues before deciding.",
            question: "Is that a smart price?",
            generalHint: "Compare the item to what it usually costs.",
            cards: [
              {
                id: "u2l5c1",
                coverEmoji: "🃏",
                emoji: "🏪",
                title: "Clue 1",
                text: "A second store sells a pack of 4 pencils for $3."
              },
              {
                id: "u2l5c2",
                coverEmoji: "🃏",
                emoji: "📦",
                title: "Clue 2",
                text: "Getting more items for less money is often better value."
              },
              {
                id: "u2l5c3",
                coverEmoji: "🃏",
                emoji: "💸",
                title: "Clue 3",
                text: "Paying too much for one small item leaves less money for other needs."
              },
              {
                id: "u2l5c4",
                coverEmoji: "🃏",
                emoji: "🔍",
                title: "Clue 4",
                text: "Comparing prices helps shoppers avoid overpaying."
              }
            ],
            options: [
              {
                text: "No, it is too expensive",
                isBest: true,
                effect: "Exactly! Comparing stores showed the first price was not a good deal."
              },
              {
                text: "Yes, it is a smart price",
                isBest: false,
                hint: "Read the clues again. Was there a better deal somewhere else?"
              }
            ]
          },
          {
            type: "scenario-choice",
            scenarioTitle: "Two Water Bottles",
            scenarioText: "You need a water bottle for school.",
            walletAmount: 15,
            goal: "Buy something useful and still save money",
            heroEmoji: "🫗",
            heroCaption: "Useful and affordable is often smartest.",
            question: "Which choice is smarter?",
            generalHint: "Look for the useful choice that still leaves money.",
            options: [
              {
                text: "Bottle for $15 with sparkles",
                subText: "Looks cool",
                emoji: "✨",
                hint: "It looks cool, but it uses all your money.",
                effect: "You bought a bottle, but you spent all your money.",
                isBest: false
              },
              {
                text: "Bottle for $8",
                subText: "Still useful",
                emoji: "💧",
                effect: "Great shopping! You got what you need and kept some money too.",
                isBest: true
              }
            ]
          }
        ]
      },

      {
        id: 6,
        title: "Budget Builder",
        coinReward: 20,
        videoUrl: "https://www.youtube.com/watch?v=cYGiipJOiLg",
        context: [
          {
            term: "Budget",
            definition:
              "A budget is a plan for how to use your money."
          }
        ],
        tips: "Pick the most important things first and stay inside the budget.",
        questions: [
          {
            type: "budget-builder",
            scenarioTitle: "Movie Night Basket",
            scenarioText: "You have $12 for a family movie night at home.",
            budget: 12,
            heroEmoji: "🎬",
            heroCaption: "Can you build a smart basket?",
            question: "Choose the best items without going over budget.",
            generalHint: "Pick the basic things first, then see if any money is left.",
            successMessage:
              "Awesome! You stayed within budget and picked a smart set of items.",
            showAnswerTip: true,
            items: [
              { id: "u2l6i1", name: "Popcorn", price: 4, emoji: "🍿", tag: "shared snack" },
              { id: "u2l6i2", name: "Juice Box Pack", price: 3, emoji: "🧃", tag: "drink" },
              { id: "u2l6i3", name: "Napkins", price: 2, emoji: "🧻", tag: "useful" },
              { id: "u2l6i4", name: "Glow Stick", price: 5, emoji: "✨", tag: "extra fun" },
              { id: "u2l6i5", name: "Candy Bag", price: 8, emoji: "🍬", tag: "pricey extra" }
            ],
            correctItemIds: ["u2l6i1", "u2l6i2", "u2l6i3"]
          },
          {
            type: "budget-builder",
            scenarioTitle: "Art Day Plan",
            scenarioText: "Your class art table has $10 to spend.",
            budget: 10,
            heroEmoji: "🎨",
            heroCaption: "Budgets help teams choose wisely.",
            question: "Which plan makes the most sense?",
            generalHint: "Pick the items needed to do the activity first.",
            successMessage:
              "Nice work! You used the budget for the most important art supplies.",
            items: [
              { id: "u2l6a1", name: "Paper", price: 3, emoji: "📄", tag: "need" },
              { id: "u2l6a2", name: "Markers", price: 4, emoji: "🖍️", tag: "need" },
              { id: "u2l6a3", name: "Glitter", price: 4, emoji: "✨", tag: "extra" },
              { id: "u2l6a4", name: "Tape", price: 2, emoji: "🧷", tag: "helpful" },
              { id: "u2l6a5", name: "Candy", price: 3, emoji: "🍭", tag: "not for art" }
            ],
            correctItemIds: ["u2l6a1", "u2l6a2", "u2l6a4"]
          }
        ]
      },

      {
        id: 7,
        title: "Shopping Challenge",
        coinReward: 20,
        context: [
          {
            term: "Best Deal",
            definition:
              "A best deal gives you what you need at a better price or in a smarter way."
          }
        ],
        tips: "A good deal is not just cheap. It should also match what you need.",
        questions: [
          {
            type: "scenario-choice",
            scenarioTitle: "Snack Shop",
            scenarioText: "You want one snack after school and still want to save money.",
            walletAmount: 6,
            goal: "Enjoy something small and keep some money",
            heroEmoji: "🛒",
            heroCaption: "A smart choice can balance fun and saving.",
            question: "Which is the best value?",
            generalHint: "Look for the choice that gives you a snack and still leaves money.",
            options: [
              {
                text: "One tiny candy for $6",
                subText: "All your money",
                emoji: "🍬",
                hint: "That uses all your money for one small item.",
                effect: "That was not a great deal because it used all your money.",
                isBest: false
              },
              {
                text: "A snack for $3 and save $3",
                subText: "Balanced choice",
                emoji: "🥨",
                effect: "Exactly! You got a snack and still saved half your money.",
                isBest: true
              },
              {
                text: "Spend all $6 because you can",
                subText: "No plan",
                emoji: "💸",
                hint: "Having money does not mean you need to spend everything.",
                effect: "A smart shopper does not spend everything just because they can.",
                isBest: false
              }
            ]
          },
          {
            type: "tap-reveal",
            scenarioTitle: "The Big Sale Sign",
            scenarioText: "A store says 'SUPER DEAL!' on a toy display.",
            heroEmoji: "📣",
            heroCaption: "Ads can grab attention, but smart shoppers still think.",
            question: "What should you do first?",
            generalHint: "A sign is not enough. Smart shoppers still compare and think.",
            cards: [
              {
                id: "u2l7c1",
                coverEmoji: "🃏",
                emoji: "🏷️",
                title: "Clue 1",
                text: "A sale sign can be helpful, but it does not always mean best value."
              },
              {
                id: "u2l7c2",
                coverEmoji: "🃏",
                emoji: "🔍",
                title: "Clue 2",
                text: "You should still look at the price and compare."
              },
              {
                id: "u2l7c3",
                coverEmoji: "🃏",
                emoji: "🎯",
                title: "Clue 3",
                text: "The toy also needs to fit your goal or budget."
              },
              {
                id: "u2l7c4",
                coverEmoji: "🃏",
                emoji: "🧠",
                title: "Clue 4",
                text: "Smart shopping means thinking, not just reacting."
              }
            ],
            options: [
              {
                text: "Compare the price and think first",
                isBest: true,
                effect: "Correct! A smart shopper checks the price and thinks before buying."
              },
              {
                text: "Buy it right away because of the sign",
                isBest: false,
                hint: "Look at the clues again. Does a big sign always mean smartest choice?"
              }
            ]
          }
        ]
      },

      {
        id: 8,
        title: "Class Party Planner",
        coinReward: 20,
        context: [
          {
            term: "Planning",
            definition:
              "Planning means thinking ahead so your money works better."
          }
        ],
        tips: "The most exciting choice is not always the smartest one.",
        questions: [
          {
            type: "budget-builder",
            scenarioTitle: "Party Table Plan",
            scenarioText: "You have $15 to help set up a simple class party table.",
            budget: 15,
            heroEmoji: "🎉",
            heroCaption: "Plan the table without overspending.",
            question: "Pick the smartest set of items.",
            generalHint: "Choose what the whole group needs first.",
            successMessage: "Nice planning! You used the money for a practical party setup.",
            items: [
              { id: "u2l8p1", name: "Cups", price: 3, emoji: "🥤", tag: "need" },
              { id: "u2l8p2", name: "Napkins", price: 2, emoji: "🧻", tag: "need" },
              { id: "u2l8p3", name: "Fruit Tray", price: 6, emoji: "🍉", tag: "shared food" },
              { id: "u2l8p4", name: "Glitter Banner", price: 7, emoji: "✨", tag: "extra" },
              { id: "u2l8p5", name: "Party Horns", price: 5, emoji: "📯", tag: "extra" }
            ],
            correctItemIds: ["u2l8p1", "u2l8p2", "u2l8p3"]
          },
          {
            type: "scenario-choice",
            scenarioTitle: "One More Choice",
            scenarioText: "After buying the basics, you have a little money left.",
            walletAmount: 4,
            goal: "Keep the party useful and fun",
            heroEmoji: "🤝",
            heroCaption: "Think about the whole group.",
            question: "What is the smartest final choice?",
            generalHint: "Pick something that helps the group most.",
            options: [
              {
                text: "Save the extra money",
                subText: "No waste",
                emoji: "🐷",
                effect: "Great choice! Saving extra money is a smart way to avoid waste.",
                isBest: true
              },
              {
                text: "Buy random candy",
                subText: "Spend it anyway",
                emoji: "🍬",
                hint: "Spending just because money is left is not always smart.",
                effect: "Random spending is not the strongest plan.",
                isBest: false
              }
            ]
          }
        ]
      }
    ],

    unit3: [
      {
        id: 9,
        title: "Saving Step by Step",
        coinReward: 20,
        videoUrl: "https://www.youtube.com/watch?v=B3njsO5ewA8",
        context: [
          {
            term: "Small Steps",
            definition:
              "Big goals can be reached with many small saving steps."
          }
        ],
        tips: "You do not need all the money at once. Keep building.",
        questions: [
          {
            type: "scenario-choice",
            scenarioTitle: "Toy Fund",
            scenarioText: "A toy costs $24. You can save $4 each week.",
            walletAmount: 4,
            goal: "Buy the toy in a few weeks",
            heroEmoji: "🗓️",
            heroCaption: "Small weekly steps can reach a big goal.",
            question: "What should you do this week?",
            generalHint: "This week still matters, even if the goal is not finished yet.",
            options: [
              {
                text: "Save the $4",
                subText: "One more step",
                emoji: "💰",
                effect: "Correct! Saving this week moves you one step closer.",
                isBest: true
              },
              {
                text: "Spend it on a snack",
                subText: "Fun now",
                emoji: "🍪",
                hint: "That uses the money you wanted for the toy.",
                effect: "The snack was fun, but it slows your toy goal.",
                isBest: false
              },
              {
                text: "Buy stickers",
                subText: "Small extra",
                emoji: "🌟",
                hint: "Stickers are extra and use the money you planned to save.",
                effect: "That choice delays the toy a little more.",
                isBest: false
              }
            ]
          },
          {
            type: "tap-reveal",
            scenarioTitle: "Halfway There",
            scenarioText: "You have saved $15 toward a $30 goal.",
            heroEmoji: "📈",
            heroCaption: "Tracking helps you see progress.",
            question: "What does this mean?",
            generalHint: "Think about how far $15 is toward $30.",
            cards: [
              {
                id: "u3l9c1",
                coverEmoji: "🃏",
                emoji: "1️⃣",
                title: "Clue 1",
                text: "$15 is exactly half of $30."
              },
              {
                id: "u3l9c2",
                coverEmoji: "🃏",
                emoji: "📍",
                title: "Clue 2",
                text: "Halfway means you still need the other half."
              },
              {
                id: "u3l9c3",
                coverEmoji: "🃏",
                emoji: "🙌",
                title: "Clue 3",
                text: "Being halfway is a good reason to keep going."
              },
              {
                id: "u3l9c4",
                coverEmoji: "🃏",
                emoji: "🚫",
                title: "Clue 4",
                text: "Halfway does not mean finished."
              }
            ],
            options: [
              {
                text: "You are halfway to the goal",
                isBest: true,
                effect: "Yes! You are halfway, which means your saving plan is working."
              },
              {
                text: "You should spend it now",
                isBest: false,
                hint: "Check the clues again. Is halfway the same as finished?"
              }
            ]
          }
        ]
      },

      {
        id: 10,
        title: "Goal Tracker Game",
        coinReward: 20,
        context: [
          {
            term: "Tracking",
            definition:
              "Tracking means checking how close you are to your goal."
          }
        ],
        tips: "Tracking can help you stay motivated and keep your plan going.",
        questions: [
          {
            type: "budget-builder",
            scenarioTitle: "Sticker Chart Supplies",
            scenarioText: "You are building a goal tracker chart. You have $8 for supplies.",
            budget: 8,
            heroEmoji: "📊",
            heroCaption: "Build a simple tracker without overspending.",
            question: "Pick the best supplies for the tracker.",
            generalHint: "Choose the items that help you track progress, not extra decorations first.",
            successMessage:
              "Great! You built a useful tracker and stayed on budget.",
            items: [
              { id: "u3l10i1", name: "Chart Paper", price: 3, emoji: "📄", tag: "need" },
              { id: "u3l10i2", name: "Marker", price: 2, emoji: "🖊️", tag: "need" },
              { id: "u3l10i3", name: "Star Stickers", price: 3, emoji: "⭐", tag: "helpful" },
              { id: "u3l10i4", name: "Toy Figure", price: 6, emoji: "🧸", tag: "not for tracking" }
            ],
            correctItemIds: ["u3l10i1", "u3l10i2", "u3l10i3"]
          },
          {
            type: "scenario-choice",
            scenarioTitle: "Keep Going",
            scenarioText: "Your goal is not finished yet, but you can see progress on your chart.",
            heroEmoji: "🚀",
            heroCaption: "Progress can keep you motivated.",
            question: "What should you do next?",
            generalHint: "Tracking helps you keep moving forward.",
            options: [
              {
                text: "Keep saving",
                subText: "Stay motivated",
                emoji: "🐷",
                effect: "Excellent! The tracker helps you keep going.",
                isBest: true
              },
              {
                text: "Quit because it is not done yet",
                subText: "Give up",
                emoji: "😕",
                hint: "A goal does not need to be finished right away to be working.",
                effect: "Tracking is meant to help you keep going, not quit.",
                isBest: false
              }
            ]
          }
        ]
      },

      {
        id: 11,
        title: "Emergency or Extra",
        coinReward: 20,
        context: [
          {
            term: "Emergency Need",
            definition:
              "Sometimes money must be used for an important problem or need."
          }
        ],
        tips: "When a real need appears, it often comes before extras.",
        questions: [
          {
            type: "drag-drop",
            scenarioTitle: "Sort the Situations",
            scenarioText: "Sort each item into Needs or Wants.",
            heroEmoji: "🚨",
            heroCaption: "Some choices are more important because of the situation.",
            question: "Which items belong where?",
            successMessage: "Perfect! You understood which choices are urgent needs and which are extras.",
            generalHint:
              "A need solves a real problem. A want is extra fun or comfort.",
            items: [
              { id: "u3l11i1", label: "Medicine", emoji: "💊", bucket: "need" },
              { id: "u3l11i2", label: "New Lunch Box", emoji: "🥪", bucket: "need" },
              { id: "u3l11i3", label: "Umbrella in Rain", emoji: "☔", bucket: "need" },
              { id: "u3l11i4", label: "Warm Gloves", emoji: "🧤", bucket: "need" },
              { id: "u3l11i5", label: "Candy", emoji: "🍬", bucket: "want" },
              { id: "u3l11i6", label: "Glow Bracelet", emoji: "💫", bucket: "want" },
              { id: "u3l11i7", label: "Trading Cards", emoji: "🃏", bucket: "want" },
              { id: "u3l11i8", label: "Fancy Pencil Topper", emoji: "🎀", bucket: "want" }
            ]
          },
          {
            type: "scenario-choice",
            scenarioTitle: "Rainy Walk Home",
            scenarioText: "It is raining hard. You only have enough money for one item.",
            heroEmoji: "🌧️",
            heroCaption: "The situation can change what matters most.",
            question: "Which choice is smartest right now?",
            generalHint: "Think about what helps most in the weather today.",
            options: [
              {
                text: "Buy an umbrella",
                subText: "Useful today",
                emoji: "☔",
                effect: "Correct! The umbrella solves the important problem right now.",
                isBest: true
              },
              {
                text: "Buy a candy bar",
                subText: "Treat first",
                emoji: "🍫",
                hint: "Candy is extra, but the rain problem is more important.",
                effect: "Candy is a want. The umbrella is the important need today.",
                isBest: false
              }
            ]
          }
        ]
      },

      {
        id: 12,
        title: "Celebrate Smartly",
        coinReward: 20,
        context: [
          {
            term: "Balanced Choice",
            definition:
              "A balanced choice can include a little fun without forgetting your goal."
          }
        ],
        tips: "It is okay to enjoy small fun things when the plan still makes sense.",
        questions: [
          {
            type: "budget-builder",
            scenarioTitle: "Birthday Treat Plan",
            scenarioText: "You have $14. You want a small birthday treat but also want to save some money.",
            budget: 14,
            heroEmoji: "🎂",
            heroCaption: "Can you celebrate and still save?",
            question: "Choose the smartest plan.",
            generalHint: "Pick one small treat and keep part of the money safe.",
            successMessage:
              "Nice balance! You had a little celebration and still saved money.",
            items: [
              { id: "u3l12i1", name: "Cupcake", price: 3, emoji: "🧁", tag: "small treat" },
              { id: "u3l12i2", name: "Juice", price: 2, emoji: "🧃", tag: "drink" },
              { id: "u3l12i3", name: "Big Candy Box", price: 8, emoji: "🍬", tag: "larger extra" },
              { id: "u3l12i4", name: "Save the Rest", price: 0, emoji: "🐷", tag: "goal money" }
            ],
            correctItemIds: ["u3l12i1", "u3l12i4"]
          },
          {
            type: "scenario-choice",
            scenarioTitle: "After the Celebration",
            scenarioText: "You still care about your bigger goal after your birthday.",
            heroEmoji: "🎯",
            heroCaption: "Fun and goals can work together when you plan.",
            question: "What should you remember next?",
            generalHint: "Think about how your plan helped you celebrate and still save.",
            options: [
              {
                text: "Keep saving after the small treat",
                subText: "Back to the plan",
                emoji: "💰",
                effect: "Exactly! A small treat is okay when you keep the bigger plan going.",
                isBest: true
              },
              {
                text: "Stop saving because you already had fun",
                subText: "Forget the goal",
                emoji: "🛑",
                hint: "A small celebration does not mean the goal disappears.",
                effect: "The strongest choice is to enjoy a little fun and still continue your goal.",
                isBest: false
              }
            ]
          }
        ]
      }
    ],
    unit4: [
      {
        id: 13,
        title: "Ways to Earn Money",
        coinReward: 20,
        videoUrl: "https://www.youtube.com/watch?v=ppnhNKRwKHg",
        context: [
          {
            term: "Earn",
            definition:
              "Earning money means doing helpful work or completing a useful task."
          }
        ],
        tips: "Money is often earned by helping, working, or doing a job well.",
        questions: [
          {
            type: "scenario-choice",
            scenarioTitle: "Helping at Home",
            scenarioText: "You want money for a goal.",
            walletAmount: 0,
            goal: "Find a good way to earn",
            heroEmoji: "🧹",
            heroCaption: "Helpful work can become earning.",
            question: "What is a good way to earn money?",
            generalHint: "Think about useful jobs you can do safely.",
            options: [
              {
                text: "Do chores",
                subText: "Helpful job",
                emoji: "🧹",
                effect: "Correct! Helping with chores can be a good way to earn money.",
                isBest: true
              },
              {
                text: "Wait and hope money appears",
                subText: "No plan",
                emoji: "💭",
                hint: "Money usually comes from a plan or effort.",
                effect: "Waiting without a plan is not a strong way to earn.",
                isBest: false
              },
              {
                text: "Spend before you earn",
                subText: "Wrong order",
                emoji: "💸",
                hint: "Spending comes after you have money, not before.",
                effect: "A smart plan starts with earning first.",
                isBest: false
              }
            ]
          },
          {
            type: "tap-reveal",
            scenarioTitle: "Neighbor Helper",
            scenarioText: "A neighbor needs help watering plants.",
            heroEmoji: "🌱",
            heroCaption: "Use the clues to find the best earning habit.",
            question: "What makes this a smart earning choice?",
            generalHint: "Think about being helpful and responsible.",
            cards: [
              {
                id: "u4l13c1",
                coverEmoji: "🃏",
                emoji: "🤝",
                title: "Clue 1",
                text: "Helpful work can be a fair way to earn money."
              },
              {
                id: "u4l13c2",
                coverEmoji: "🃏",
                emoji: "✅",
                title: "Clue 2",
                text: "Doing the job well matters."
              },
              {
                id: "u4l13c3",
                coverEmoji: "🃏",
                emoji: "🕒",
                title: "Clue 3",
                text: "Being on time and reliable is important."
              },
              {
                id: "u4l13c4",
                coverEmoji: "🃏",
                emoji: "💰",
                title: "Clue 4",
                text: "Money is usually earned after effort."
              }
            ],
            options: [
              {
                text: "Help and do the job well",
                isBest: true,
                effect: "Great! Helpful work done responsibly is a strong earning habit."
              },
              {
                text: "Ask for money without helping",
                isBest: false,
                hint: "Check the clues again. What comes before earning?"
              }
            ]
          }
        ]
      },
      {
        id: 14,
        title: "Spend, Save, Share",
        coinReward: 20,
        videoUrl: "https://www.youtube.com/watch?v=oqgtFqd8nHo",
        context: [
          {
            term: "Share",
            definition:
              "Sharing means using some of your money to help others."
          }
        ],
        tips: "A good money plan can include spending, saving, and sharing.",
        questions: [
          {
            type: "scenario-choice",
            scenarioTitle: "Three Good Uses",
            scenarioText: "You earned $12 this week.",
            walletAmount: 12,
            goal: "Use money wisely",
            heroEmoji: "🪙",
            heroCaption: "Balanced plans are strong plans.",
            question: "What is a balanced plan?",
            generalHint: "A smart plan can do more than one good thing.",
            options: [
              {
                text: "Spend some, save some, share some",
                subText: "Balanced plan",
                emoji: "⚖️",
                effect: "Excellent! That is a balanced and thoughtful money plan.",
                isBest: true
              },
              {
                text: "Spend every dollar",
                subText: "All now",
                emoji: "💸",
                hint: "Using all your money right away leaves nothing for later or for helping.",
                effect: "Spending all of it removes balance from your plan.",
                isBest: false
              },
              {
                text: "Hide every dollar forever",
                subText: "Only save",
                emoji: "🫙",
                hint: "Saving matters, but money can also be used wisely and kindly.",
                effect: "A stronger plan is usually more balanced than this.",
                isBest: false
              }
            ]
          },
          {
            type: "budget-builder",
            scenarioTitle: "Weekend Money Plan",
            scenarioText: "You have $10 for the weekend.",
            budget: 10,
            heroEmoji: "📅",
            heroCaption: "Can you make a balanced money plan?",
            question: "Pick the best set of choices.",
            generalHint: "Choose something for spending, something for saving, and something kind.",
            successMessage: "Nice work! You made a balanced spend-save-share plan.",
            items: [
              { id: "u4l14i1", name: "Small Treat", price: 2, emoji: "🍪", tag: "spend" },
              { id: "u4l14i2", name: "Save the Rest", price: 0, emoji: "🐷", tag: "save" },
              { id: "u4l14i3", name: "Charity Box", price: 2, emoji: "❤️", tag: "share" },
              { id: "u4l14i4", name: "Big Candy Bag", price: 6, emoji: "🍬", tag: "extra spend" },
              { id: "u4l14i5", name: "Toy Car", price: 8, emoji: "🧸", tag: "big spend" }
            ],
            correctItemIds: ["u4l14i1", "u4l14i2", "u4l14i3"]
          }
        ]
      },
      {
        id: 15,
        title: "Big Goals Take Time",
        coinReward: 20,
        context: [
          {
            term: "Long-Term Goal",
            definition:
              "A long-term goal is something that takes more time and patience to reach."
          }
        ],
        tips: "Big goals often need patience, planning, and regular saving.",
        questions: [
          {
            type: "scenario-choice",
            scenarioTitle: "New Bike Plan",
            scenarioText: "A bike is expensive, so you need a plan.",
            walletAmount: 10,
            goal: "Save for a bike",
            heroEmoji: "🚲",
            heroCaption: "Big goals are built step by step.",
            question: "What is the strongest idea?",
            generalHint: "A big goal is usually not reached in one day.",
            options: [
              {
                text: "Save regularly over time",
                subText: "Keep building",
                emoji: "🐷",
                effect: "Correct! Big goals usually need regular saving.",
                isBest: true
              },
              {
                text: "Give up because it costs a lot",
                subText: "Too hard",
                emoji: "😕",
                hint: "Big goals can still be reached with a plan.",
                effect: "A good plan can make a big goal feel possible.",
                isBest: false
              },
              {
                text: "Spend your money on treats each week",
                subText: "Fun now",
                emoji: "🍭",
                hint: "Treats use the money that could build the bike fund.",
                effect: "Those treats slow the bike goal down.",
                isBest: false
              }
            ]
          },
          {
            type: "tap-reveal",
            scenarioTitle: "Stay Motivated",
            scenarioText: "Your goal still feels far away.",
            heroEmoji: "🎯",
            heroCaption: "Progress matters even before the finish line.",
            question: "What should you remember?",
            generalHint: "Big goals are often built from many small wins.",
            cards: [
              {
                id: "u4l15c1",
                coverEmoji: "🃏",
                emoji: "👣",
                title: "Clue 1",
                text: "Every small saving step matters."
              },
              {
                id: "u4l15c2",
                coverEmoji: "🃏",
                emoji: "📅",
                title: "Clue 2",
                text: "Saving often works better than waiting for one huge amount."
              },
              {
                id: "u4l15c3",
                coverEmoji: "🃏",
                emoji: "📈",
                title: "Clue 3",
                text: "Progress can be slow and still be real progress."
              },
              {
                id: "u4l15c4",
                coverEmoji: "🃏",
                emoji: "🙌",
                title: "Clue 4",
                text: "Staying patient helps long-term goals."
              }
            ],
            options: [
              {
                text: "Every small step counts",
                isBest: true,
                effect: "Correct! Small steps really do matter."
              },
              {
                text: "Only big amounts count",
                isBest: false,
                hint: "Look at the clues again. Can small steps still build a big goal?"
              }
            ]
          }
        ]
      },
      {
        id: 16,
        title: "Money Mission Final Challenge",
        coinReward: 25,
        context: [
          {
            term: "Money Mission",
            definition:
              "A money mission is using everything you learned to make strong choices."
          }
        ],
        tips: "Use all your money skills together: think, compare, save, and choose wisely.",
        questions: [
          {
            type: "scenario-choice",
            scenarioTitle: "Mission 1",
            scenarioText: "You have $20. You need a notebook and want candy.",
            walletAmount: 20,
            goal: "Choose wisely",
            heroEmoji: "📓",
            heroCaption: "Needs first.",
            question: "What is the smartest plan?",
            generalHint: "Think about what matters most today.",
            options: [
              {
                text: "Buy the notebook first and save the rest",
                subText: "Need first",
                emoji: "✅",
                effect: "Excellent! You handled your need first and still saved money.",
                isBest: true
              },
              {
                text: "Buy lots of candy first",
                subText: "Treat first",
                emoji: "🍬",
                hint: "Candy is a want. What comes first?",
                effect: "Candy is a want, but the notebook is more important.",
                isBest: false
              },
              {
                text: "Spend all $20 on treats",
                subText: "Use it all",
                emoji: "💸",
                hint: "That leaves nothing for the notebook or savings.",
                effect: "That plan uses your money too quickly.",
                isBest: false
              }
            ]
          },
          {
            type: "budget-builder",
            scenarioTitle: "Mission 2 Basket",
            scenarioText: "You have $10 to prepare for a study night.",
            budget: 10,
            heroEmoji: "🧠",
            heroCaption: "Can you build a smart study basket?",
            question: "Pick the best set of items.",
            generalHint: "Choose useful items before extra treats.",
            successMessage: "Great job! You built a smart study plan.",
            items: [
              { id: "u4l16i1", name: "Notebook", price: 4, emoji: "📓", tag: "need" },
              { id: "u4l16i2", name: "Pencil", price: 2, emoji: "✏️", tag: "need" },
              { id: "u4l16i3", name: "Water", price: 2, emoji: "💧", tag: "helpful" },
              { id: "u4l16i4", name: "Candy Box", price: 6, emoji: "🍬", tag: "extra" }
            ],
            correctItemIds: ["u4l16i1", "u4l16i2", "u4l16i3"]
          }
        ]
      }
    ],
    
  }
};

export default lessonsData;