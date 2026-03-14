// Temp place holder data
const lessonsData = {
  grade4: {
    unit1: [
      // {
      //   id: 1,
      //   title: "Decision Making",
      //   context: [
      //     {
      //       term: "Decision Making",
      //       definition: "Decision making means thinking before you spend your money.",
      //       example_img: [
      //         "https://img.freepik.com/premium-vector/pensive-businessman-making-decision-man-office-suit-standing-road-direction-signs_566886-1481.jpg",
      //         "https://static.vecteezy.com/system/resources/previews/068/207/454/non_2x/woman-making-decision-between-two-options-right-or-wrong-flat-cartoon-character-illustration-vector.jpg",
      //         "https://thumbs.dreamstime.com/b/person-key-choosing-door-opportunity-decision-making-vector-design-generative-ai-conceptual-holding-facing-choice-392974761.jpg"
      //       ]
      //     },
      //     {
      //       term: "Smart Choice",
      //       definition: "A smart choice means picking what is more important.",
      //       example_img: [
      //         "https://cdn-icons-png.flaticon.com/512/2589/2589903.png",
      //         "https://cdn-icons-png.flaticon.com/512/2232/2232688.png",
      //         "https://pngimg.com/d/piggy_bank_PNG56.png"
      //       ]
      //     }
      //   ],
      //   tips: (
      //     <>
      //       Think before you spend. Choose what is <strong>most important</strong>.
      //     </>
      //   ),
      //   questions: [
      //     {
      //       question: "💰 You earned $20.\n🧸 A toy costs $20.\n🚲 A bike costs $80\n\nWhat is the best choice?",
      //       options: [
      //         {
      //           text: "Buy the toy",
      //           subText: "Have fun today",
      //           img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png"
      //         },
      //         {
      //           text: "Save the money",
      //           subText: "Save money for Bike",
      //           img: "https://pngimg.com/d/piggy_bank_PNG56.png"
      //         },
      //         {
      //           text: "Earn More",
      //           subText: "Reach your goal faster",
      //           img: "https://www.pngkey.com/png/full/410-4105142_work-business-company-hr-employee-vector-laptop-labor.png"
      //         }
      //       ],
      //       images: [
      //         {
      //           questionImg: "https://media.istockphoto.com/id/1372454520/vector/little-son-buying-toys-with-money-on-his-piggy-bank.jpg?s=612x612&w=0&k=20&c=Srv5aBYmb6IZfUcSNjVi2ZQQftSriWgkbwDogwSWmv4="
      //         }
      //       ],
      //       correctAns: "Save the money"
      //     },
      //     {
      //       question: "💰 You have $10 saved.\n🎮 A video game costs $25.\n🍬 Candy costs $2\n\nWhat is the best choice?",
      //       options: [
      //         {
      //           text: "Buy candy",
      //           subText: "A small treat today",
      //           img: "https://cdn-icons-png.flaticon.com/512/16671/16671618.png"
      //         },
      //         {
      //           text: "Save your money",
      //           subText: "Get closer to the game",
      //           img: "https://pngimg.com/d/piggy_bank_PNG56.png"
      //         },
      //         {
      //           text: "Earn more money",
      //           subText: "Reach your goal faster",
      //           img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
      //         }
      //       ],
      //       images: [
      //         {
      //           questionImg: "https://cdn-icons-png.flaticon.com/512/2331/2331941.png"
      //         }
      //       ],
      //       correctAns: "Save your money"
      //     },
      //     {
      //       question: "🏫 You have $15.\n📓 A notebook costs $10.\n🍦 Ice cream costs $5\n\nWhat is the best choice?",
      //       options: [
      //         {
      //           text: "Buy the notebook",
      //           subText: "It helps with school",
      //           img: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png"
      //         },
      //         {
      //           text: "Buy ice cream",
      //           subText: "A fun treat right now",
      //           img: "https://cdn-icons-png.flaticon.com/512/3250/3250484.png"
      //         },
      //         {
      //           text: "Save all the money",
      //           subText: "Use it another day",
      //           img: "https://pngimg.com/d/piggy_bank_PNG56.png"
      //         }
      //       ],
      //       images: [
      //         {
      //           questionImg: "https://static.vecteezy.com/system/resources/thumbnails/008/734/694/small/happy-school-children-in-front-of-building-school-vector.jpg"
      //         }
      //       ],
      //       correctAns: "Buy the notebook"
      //     }
      //   ]
      // },
      {
        id: 1,
        title: "Decision Making",
        type: "scenario",
        context: [
          {
            term: "Decision Making",
            definition: "Decision making means thinking before you spend your money.",
            example_img: [
              "https://img.freepik.com/premium-vector/pensive-businessman-making-decision-man-office-suit-standing-road-direction-signs_566886-1481.jpg",
              "https://static.vecteezy.com/system/resources/previews/068/207/454/non_2x/woman-making-decision-between-two-options-right-or-wrong-flat-cartoon-character-illustration-vector.jpg",
              "https://thumbs.dreamstime.com/b/person-key-choosing-door-opportunity-decision-making-vector-design-generative-ai-conceptual-holding-facing-choice-392974761.jpg"
            ]
          },
          {
            term: "Smart Choice",
            definition: "A smart choice means picking what is more important.",
            example_img: [
              "https://cdn-icons-png.flaticon.com/512/2589/2589903.png",
              "https://cdn-icons-png.flaticon.com/512/2232/2232688.png",
              "https://pngimg.com/d/piggy_bank_PNG56.png"
            ]
          }
        ],
        tips: (
          <>
            Think before you spend. Choose what is <strong>most important</strong>.
          </>
        ),
        questions: [
          {
            scenarioTitle: "Bike Goal",
            scenarioText: "You earned $20. You want to save for a bike that costs $80.",
            walletAmount: 20,
            goal: "Bike ($80)",
            question: "What do you want to do?",
            images: [
              {
                questionImg: "https://media.istockphoto.com/id/1372454520/vector/little-son-buying-toys-with-money-on-his-piggy-bank.jpg?s=612x612&w=0&k=20&c=Srv5aBYmb6IZfUcSNjVi2ZQQftSriWgkbwDogwSWmv4=",

              }
            ],
            options: [
              {
                text: "Buy the toy",
                subText: "Fun now",
                img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png",
                effect: "You spent all $20. You had fun today, but you are not closer to your bike.",
                walletLeft: 0,
                savingsAdded: 0,
                petHappiness: 1,
                isBest: false
              },
              {
                text: "Save the money",
                subText: "Reach your goal",
                img: "https://pngimg.com/d/piggy_bank_PNG56.png",
                effect: "Great choice! You kept your $20 and got closer to your bike.",
                walletLeft: 20,
                savingsAdded: 20,
                petHappiness: 1,
                isBest: true
              },
              {
                text: "Earn more",
                subText: "Work toward your goal",
                img: "https://www.pngkey.com/png/full/410-4105142_work-business-company-hr-employee-vector-laptop-labor.png",
                effect: "Good idea! Earning more helps, but saving the money you already have is also important.",
                walletLeft: 20,
                savingsAdded: 0,
                petHappiness: 1,
                isBest: false
              }
            ]
          },

          {
            scenarioTitle: "Game Savings",
            scenarioText: "You have $10 saved. A video game costs $25.",
            walletAmount: 10,
            goal: "Video game ($25)",
            question: "What do you want to do?",
            images: [
              {
                questionImg: "https://cdn-icons-png.flaticon.com/512/2331/2331941.png",
                
              }
            ],
            options: [
              {
                text: "Buy candy",
                subText: "A small treat",
                img: "https://cdn-icons-png.flaticon.com/512/16671/16671618.png",
                effect: "Candy is fun, but now you have less money for the game.",
                walletLeft: 8,
                savingsAdded: 0,
                petHappiness: 1,
                isBest: false
              },
              {
                text: "Save your money",
                subText: "Stay focused",
                img: "https://pngimg.com/d/piggy_bank_PNG56.png",
                effect: "Nice job! You kept saving and stayed closer to your game goal.",
                walletLeft: 10,
                savingsAdded: 10,
                petHappiness: 1,
                isBest: true
              },
              {
                text: "Earn more money",
                subText: "Grow your savings",
                img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
                effect: "Good thinking! Earning more can help you reach your goal faster.",
                walletLeft: 10,
                savingsAdded: 0,
                petHappiness: 1,
                isBest: false
              }
            ]
          },

          {
            scenarioTitle: "School Choice",
            scenarioText: "You have $15 before school. You can buy one thing today.",
            walletAmount: 15,
            goal: "Be ready for school",
            question: "What do you want to do?",
            images: [
              {
                questionImg: "https://static.vecteezy.com/system/resources/thumbnails/008/734/694/small/happy-school-children-in-front-of-building-school-vector.jpg"
              }
            ],
            options: [
              {
                text: "Buy the notebook",
                subText: "Important for school",
                img: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png",
                effect: "Smart choice! The notebook helps you with school.",
                walletLeft: 5,
                savingsAdded: 0,
                petHappiness: 1,
                isBest: true
              },
              {
                text: "Buy ice cream",
                subText: "Fun treat",
                img: "https://cdn-icons-png.flaticon.com/512/3250/3250484.png",
                effect: "Ice cream is fun now, but it does not help you get ready for school.",
                walletLeft: 10,
                savingsAdded: 0,
                petHappiness: 1,
                isBest: false
              },
              {
                text: "Save all the money",
                subText: "Keep it for later",
                img: "https://pngimg.com/d/piggy_bank_PNG56.png",
                effect: "Saving is good, but today you also need to think about school needs.",
                walletLeft: 15,
                savingsAdded: 15,
                petHappiness: 1,
                isBest: false
              }
            ]
          }
        ]
      },

      {
        id: 2,
        title: "Needs vs Wants",
        type: "drag-drop",
        context: [
          {
            term: "Needs",
            definition: "Things you must have.",
            example_img: [
              "https://cdn.vectorstock.com/i/1000v/65/51/delicious-food-cartoon-vector-23756551.jpg",
              "https://img.freepik.com/premium-photo/cartoon-water-bottle-clipart-white-background_924727-126093.jpg",
              "https://img.freepik.com/free-vector/charming-house-with-tree-illustration_1308-176337.jpg",
              "https://www.clipartmax.com/png/middle/0-6367_cartoon-clothes-rack-pnf.png"
            ]
          },
          {
            term: "Wants",
            definition: "Things nice to have",
            example_img: [
              "https://img.freepik.com/free-vector/character-playing-videogame_23-2148540059.jpg",
              "https://i.fbcd.co/products/resized/resized-750-500/2780626747503ed1d35cc41e5ca8794cab74f6331d2052147f9d58fa96c33e67.jpg",
              "https://c8.alamy.com/comp/MJWDT5/sweets-candy-cakes-icons-set-cartoon-style-MJWDT5.jpg",
              "https://img.freepik.com/premium-vector/skateboard-floating-cartoon-vector-icon-sport-object-icon-concept-isolated-flat-vector-illustration_1041213-1507.jpg"
            ]
          }
        ],
        tips: (
          <>
            <strong>Needs</strong> first. <strong>Wants</strong> later.
          </>
        ),
        questions: [
          {
            scenarioTitle: "Sort the Items",
            scenarioText: "Drag each picture to the right side.",
            question: "Need or Want?",
            images: [
              {
                questionImg: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
              }
            ],
            items: [
              {
                id: 1,
                name: "Notebook",
                type: "need",
                img: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
              },
              {
                id: 2,
                name: "Gym shoes",
                type: "need",
                img: "https://cdn-icons-png.flaticon.com/512/2589/2589903.png"
              },
              {
                id: 3,
                name: "Backpack",
                type: "need",
                img: "https://p7.hiclipart.com/preview/949/463/664/school-cartoon-bag-school.jpg"
              },
              {
                id: 4,
                name: "Lunch",
                type: "need",
                img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              },
              {
                id: 5,
                name: "Ice cream",
                type: "want",
                img: "https://cdn-icons-png.flaticon.com/512/3250/3250484.png"
              },
              {
                id: 6,
                name: "Chocolate",
                type: "want",
                img: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png"
              },
              {
                id: 7,
                name: "Candy",
                type: "want",
                img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png"
              },
              {
                id: 8,
                name: "Game",
                type: "want",
                img: "https://cdn-icons-png.flaticon.com/512/8848/8848930.png"
              },
              {
                id: 9,
                name: "Toy",
                type: "want",
                img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png"
              }
            ]
          }
        ]
      }
    ],

    unit2: [
      { id: 3, title: "Saving Money", questions: [] },
      { id: 4, title: "Spending Wisely", questions: [] }
    ]
  },

  grade5: {
    unit1: [
      { id: 5, title: "Earning Money", questions: [] },
      { id: 6, title: "Allowance Basics", questions: [] }
    ]
  }
};

export default lessonsData;