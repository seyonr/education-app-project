// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------

// const lessonsData = {
//   grade4: {
//     unit1: [
//       {
//         id: 1,
//         title: "Decision Making",
//         type: "scenario",
//         context: [
//           {
//             term: "Decision Making",
//             definition: "Decision making means thinking before you spend your money.",
//             example_img: [
//               "https://img.freepik.com/premium-vector/pensive-businessman-making-decision-man-office-suit-standing-road-direction-signs_566886-1481.jpg",
//               "https://static.vecteezy.com/system/resources/previews/068/207/454/non_2x/woman-making-decision-between-two-options-right-or-wrong-flat-cartoon-character-illustration-vector.jpg",
//               "https://thumbs.dreamstime.com/b/person-key-choosing-door-opportunity-decision-making-vector-design-generative-ai-conceptual-holding-facing-choice-392974761.jpg"
//             ]
//           },
//           {
//             term: "Smart Choice",
//             definition: "A smart choice means picking what is most important first.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/2589/2589903.png",
//               "https://cdn-icons-png.flaticon.com/512/2232/2232688.png",
//               "https://pngimg.com/d/piggy_bank_PNG56.png"
//             ]
//           }
//         ],
//         tips: "Think before you spend. Pick what helps you most.",
//         questions: [
//           {
//             scenarioTitle: "Toy or Bike?",
//             scenarioText: "You earned money from helping at home.",
//             walletAmount: 20,
//             goal: "Save for a bike",
//             generalHint: "Think about which choice helps you more in the future, not just today.",
//             question: "What do you want to do?",
//             images: [
//               {
//                 questionImg: "https://media.istockphoto.com/id/1372454520/vector/little-son-buying-toys-with-money-on-his-piggy-bank.jpg?s=612x612&w=0&k=20&c=Srv5aBYmb6IZfUcSNjVi2ZQQftSriWgkbwDogwSWmv4="
//               }
//             ],
//             options: [
//               {
//                 text: "Buy the toy",
//                 img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png",
//                 hint: "The toy is fun, but does it help with the bike goal?",
//                 effect: "The toy is fun now, but you used all your money and are not closer to your bike.",
//                 isBest: false
//               },
//               {
//                 text: "Save the money",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Great job! Saving helps you get closer to your bike goal.",
//                 isBest: true
//               },
//               {
//                 text: "Earn more money later but spend this now",
//                 img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
//                 hint: "Earning more is helpful, but spending this money right now slows the goal.",
//                 effect: "You had a good idea about earning, but saving this money now is still the stronger choice.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Game or Goal?",
//             scenarioText: "You already saved some money.",
//             walletAmount: 10,
//             goal: "Save for a video game",
//             generalHint: "A smart choice helps your goal grow.",
//             question: "What is the smartest choice now?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/2331/2331941.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Buy candy",
//                 img: "https://cdn-icons-png.flaticon.com/512/16671/16671618.png",
//                 hint: "Candy is a treat, but does it help you get the game?",
//                 effect: "Candy is a treat, but spending now makes your goal take longer.",
//                 isBest: false
//               },
//               {
//                 text: "Save your money",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Awesome! You stayed focused and kept moving toward your goal.",
//                 isBest: true
//               },
//               {
//                 text: "Buy a small toy",
//                 img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png",
//                 hint: "A small toy still uses money you wanted for the game.",
//                 effect: "Small purchases can still slow your saving goal down.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "School Choice",
//             scenarioText: "You have money before school and can buy only one thing today.",
//             walletAmount: 15,
//             goal: "Be ready for school",
//             generalHint: "Think about what is important for learning.",
//             question: "What should you do first?",
//             images: [
//               {
//                 questionImg: "https://static.vecteezy.com/system/resources/thumbnails/008/734/694/small/happy-school-children-in-front-of-building-school-vector.jpg"
//               }
//             ],
//             options: [
//               {
//                 text: "Buy the notebook",
//                 img: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png",
//                 effect: "Smart choice! The notebook helps you be ready for school.",
//                 isBest: true
//               },
//               {
//                 text: "Buy ice cream",
//                 img: "https://cdn-icons-png.flaticon.com/512/3250/3250484.png",
//                 hint: "Ice cream is fun, but does it help with school?",
//                 effect: "Ice cream is fun, but it does not help with today’s school need.",
//                 isBest: false
//               },
//               {
//                 text: "Buy stickers",
//                 img: "https://cdn-icons-png.flaticon.com/512/3724/3724788.png",
//                 hint: "Stickers are extra, not the most important thing today.",
//                 effect: "Stickers are nice, but they are not as important as being ready for school.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 2,
//         title: "Needs vs Wants",
//         type: "drag-drop",
//         context: [
//           {
//             term: "Needs",
//             definition: "Needs are things you must have to live, learn, and stay healthy.",
//             example_img: [
//               "https://cdn.vectorstock.com/i/1000v/65/51/delicious-food-cartoon-vector-23756551.jpg",
//               "https://img.freepik.com/premium-photo/cartoon-water-bottle-clipart-white-background_924727-126093.jpg",
//               "https://img.freepik.com/free-vector/charming-house-with-tree-illustration_1308-176337.jpg",
//               "https://www.clipartmax.com/png/middle/0-6367_cartoon-clothes-rack-pnf.png"
//             ]
//           },
//           {
//             term: "Wants",
//             definition: "Wants are things that are nice to have but not necessary.",
//             example_img: [
//               "https://img.freepik.com/free-vector/character-playing-videogame_23-2148540059.jpg",
//               "https://i.fbcd.co/products/resized/resized-750-500/2780626747503ed1d35cc41e5ca8794cab74f6331d2052147f9d58fa96c33e67.jpg",
//               "https://c8.alamy.com/comp/MJWDT5/sweets-candy-cakes-icons-set-cartoon-style-MJWDT5.jpg",
//               "https://img.freepik.com/premium-vector/skateboard-floating-cartoon-vector-icon-sport-object-icon-concept-isolated-flat-vector-illustration_1041213-1507.jpg"
//             ]
//           }
//         ],
//         tips: "Needs come first. Wants can wait until later.",
//         questions: [
//           {
//             scenarioTitle: "Sort the Shopping Bag",
//             scenarioText: "Drag each item into Needs or Wants.",
//             question: "Can you sort all the items correctly?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3514/3514491.png"
//               }
//             ],
//             items: [
//               {
//                 id: 1,
//                 name: "Water",
//                 type: "need",
//                 img: "https://img.freepik.com/premium-photo/cartoon-water-bottle-clipart-white-background_924727-126093.jpg"
//               },
//               {
//                 id: 2,
//                 name: "Shirt",
//                 type: "need",
//                 img: "https://www.clipartmax.com/png/middle/0-6367_cartoon-clothes-rack-pnf.png"
//               },
//               {
//                 id: 3,
//                 name: "Notebook",
//                 type: "need",
//                 img: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png"
//               },
//               {
//                 id: 4,
//                 name: "Lunch",
//                 type: "need",
//                 img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
//               },
//               {
//                 id: 5,
//                 name: "Shoes",
//                 type: "need",
//                 img: "https://cdn-icons-png.flaticon.com/512/2589/2589903.png"
//               },
//               {
//                 id: 6,
//                 name: "Ice cream",
//                 type: "want",
//                 img: "https://cdn-icons-png.flaticon.com/512/3250/3250484.png"
//               },
//               {
//                 id: 7,
//                 name: "Chocolate",
//                 type: "want",
//                 img: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png"
//               },
//               {
//                 id: 8,
//                 name: "Candy",
//                 type: "want",
//                 img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png"
//               },
//               {
//                 id: 9,
//                 name: "Game",
//                 type: "want",
//                 img: "https://cdn-icons-png.flaticon.com/512/8848/8848930.png"
//               },
//               {
//                 id: 10,
//                 name: "Toy",
//                 type: "want",
//                 img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png"
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 3,
//         title: "School Day Spending",
//         type: "scenario",
//         context: [
//           {
//             term: "Needs First",
//             definition: "When you have limited money, buy the most important thing first.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/2541/2541988.png",
//               "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
//               "https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
//             ]
//           }
//         ],
//         tips: "When you are not sure, ask yourself: Do I really need this right now?",
//         questions: [
//           {
//             scenarioTitle: "Lunch or Treat?",
//             scenarioText: "You brought $8 to school.",
//             walletAmount: 8,
//             goal: "Have what you need for the day",
//             generalHint: "Think about what helps you most today.",
//             question: "What should you buy first?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Lunch",
//                 img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
//                 effect: "Correct! Lunch is important and helps you through the day.",
//                 isBest: true
//               },
//               {
//                 text: "Candy",
//                 img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png",
//                 hint: "Candy is a treat, but it is not the most important thing today.",
//                 effect: "Candy is fun, but lunch is more important.",
//                 isBest: false
//               },
//               {
//                 text: "Sticker pack",
//                 img: "https://cdn-icons-png.flaticon.com/512/3724/3724788.png",
//                 hint: "Stickers are extra, not something you need first.",
//                 effect: "Sticker packs can wait until after your important needs.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Backpack Problem",
//             scenarioText: "Your backpack zipper broke and you also want a toy.",
//             walletAmount: 25,
//             goal: "Be ready for school",
//             generalHint: "Think about school needs.",
//             question: "What is the smartest choice?",
//             images: [
//               {
//                 questionImg: "https://p7.hiclipart.com/preview/949/463/664/school-cartoon-bag-school.jpg"
//               }
//             ],
//             options: [
//               {
//                 text: "Buy a backpack",
//                 img: "https://p7.hiclipart.com/preview/949/463/664/school-cartoon-bag-school.jpg",
//                 effect: "Yes! A backpack helps you carry what you need for school.",
//                 isBest: true
//               },
//               {
//                 text: "Buy a toy instead",
//                 img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png",
//                 hint: "A toy is fun, but does it solve the backpack problem?",
//                 effect: "The toy is fun, but the broken backpack still needs fixing.",
//                 isBest: false
//               },
//               {
//                 text: "Buy candy and a drink",
//                 img: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png",
//                 hint: "Those are treats, not the most important need here.",
//                 effect: "Treats can wait when a school need comes first.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Notebook or Game Time?",
//             scenarioText: "You need something for class and also want something fun.",
//             walletAmount: 10,
//             goal: "Be prepared",
//             generalHint: "Which choice helps with learning?",
//             question: "What should you do?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Buy the notebook",
//                 img: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png",
//                 effect: "Great thinking! The notebook helps you be ready to learn.",
//                 isBest: true
//               },
//               {
//                 text: "Buy a small game",
//                 img: "https://cdn-icons-png.flaticon.com/512/8848/8848930.png",
//                 hint: "Games are fun, but what is more important right now?",
//                 effect: "The game is fun, but the notebook is more important for school.",
//                 isBest: false
//               },
//               {
//                 text: "Save everything and buy nothing",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 hint: "Saving is good, but sometimes you must buy an important need now.",
//                 effect: "Saving matters, but important school needs should still come first.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 4,
//         title: "Wants Can Wait",
//         type: "scenario",
//         context: [
//           {
//             term: "Waiting",
//             definition: "Waiting can help you make stronger money choices.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
//               "https://pngimg.com/d/piggy_bank_PNG56.png",
//               "https://cdn-icons-png.flaticon.com/512/190/190411.png"
//             ]
//           }
//         ],
//         tips: "Not every fun thing must be bought right away.",
//         questions: [
//           {
//             scenarioTitle: "Skateboard Dream",
//             scenarioText: "You want a skateboard, but you only have a small amount now.",
//             walletAmount: 12,
//             goal: "Save for a skateboard",
//             generalHint: "Think about the big goal, not only today's fun.",
//             question: "What helps the most?",
//             images: [
//               {
//                 questionImg: "https://img.freepik.com/premium-vector/skateboard-floating-cartoon-vector-icon-sport-object-icon-concept-isolated-flat-vector-illustration_1041213-1507.jpg"
//               }
//             ],
//             options: [
//               {
//                 text: "Keep saving",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Correct! Waiting helps you move toward your bigger goal.",
//                 isBest: true
//               },
//               {
//                 text: "Buy candy now",
//                 img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png",
//                 hint: "Candy is a want and it does not help you get the skateboard.",
//                 effect: "Candy is a treat, but it slows your skateboard goal.",
//                 isBest: false
//               },
//               {
//                 text: "Buy a toy now",
//                 img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png",
//                 hint: "A toy may be fun today, but what about the skateboard?",
//                 effect: "Buying the toy makes the skateboard take longer to get.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Movie Night",
//             scenarioText: "Your friends want snacks and you also have a saving goal.",
//             walletAmount: 9,
//             goal: "Save for art supplies",
//             generalHint: "Can you choose something smaller or wait?",
//             question: "What is the smartest move?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Buy a small snack and save the rest",
//                 img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
//                 effect: "Nice job! You enjoyed something small and still protected your savings.",
//                 isBest: true
//               },
//               {
//                 text: "Spend all the money",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Spending all of it means your goal stops for today.",
//                 effect: "That was fun now, but it slowed your art goal a lot.",
//                 isBest: false
//               },
//               {
//                 text: "Buy extra candy for later",
//                 img: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png",
//                 hint: "Extra treats are wants, not the best choice for your goal.",
//                 effect: "Extra candy is still extra spending that delays your goal.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Arcade Day",
//             scenarioText: "You have money for fun, but you also want to save for something important.",
//             walletAmount: 14,
//             goal: "Save for headphones",
//             generalHint: "The strongest choice balances fun and your future goal.",
//             question: "What should you do?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/8848/8848930.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Use a little and save the rest",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Excellent! You had some fun and still kept your goal moving.",
//                 isBest: true
//               },
//               {
//                 text: "Spend all of it at the arcade",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "That gives fun today, but what happens to the headphone goal?",
//                 effect: "Spending all of it stops your progress for today.",
//                 isBest: false
//               },
//               {
//                 text: "Buy snacks and prizes",
//                 img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png",
//                 hint: "Snacks and prizes are wants, not your big goal.",
//                 effect: "Those fun extras make your big goal slower.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       }
//     ],

//     unit2: [
//       {
//         id: 5,
//         title: "Saving Money Mission",
//         type: "scenario",
//         context: [
//           {
//             term: "Saving",
//             definition: "Saving means keeping some money for something important later.",
//             example_img: [
//               "https://pngimg.com/d/piggy_bank_PNG56.png",
//               "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
//               "https://cdn-icons-png.flaticon.com/512/1048/1048941.png"
//             ]
//           },
//           {
//             term: "Goal",
//             definition: "A goal is something you are working toward.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//               "https://cdn-icons-png.flaticon.com/512/3588/3588658.png",
//               "https://cdn-icons-png.flaticon.com/512/2917/2917992.png"
//             ]
//           }
//         ],
//         tips: "A small amount saved again and again can grow into something big.",
//         questions: [
//           {
//             scenarioTitle: "Birthday Money",
//             scenarioText: "You got birthday money from your family.",
//             walletAmount: 30,
//             goal: "Save for a scooter",
//             generalHint: "Think about what helps you reach the scooter faster.",
//             question: "What should you do with most of the money?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3468/3468371.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Spend all of it today",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "That sounds exciting, but then what happens to the scooter goal?",
//                 effect: "That was exciting, but now you have nothing left for your scooter goal.",
//                 isBest: false
//               },
//               {
//                 text: "Save most of it",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Great job! Saving most of it helps you move toward your scooter goal.",
//                 isBest: true
//               },
//               {
//                 text: "Buy treats for everyone",
//                 img: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png",
//                 hint: "Sharing is kind, but your saving goal still matters too.",
//                 effect: "Sharing is nice, but using most of your money makes the scooter take longer.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Weekly Allowance",
//             scenarioText: "You earn a little money each week.",
//             walletAmount: 8,
//             goal: "Buy a book next month",
//             generalHint: "A strong habit repeats every week.",
//             question: "What is the best habit?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Save a little every week",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Yes! Saving a little every week is a smart habit.",
//                 isBest: true
//               },
//               {
//                 text: "Spend it all each week",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "If you spend it all, the book goal does not grow.",
//                 effect: "That feels fun now, but it makes your book goal harder to reach.",
//                 isBest: false
//               },
//               {
//                 text: "Wait and hope the money grows by itself",
//                 img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
//                 hint: "Goals work best with a plan, not just waiting.",
//                 effect: "Goals work best when you make a real plan.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Save or Snack?",
//             scenarioText: "You brought money on a school day.",
//             walletAmount: 12,
//             goal: "Save for art supplies",
//             generalHint: "Think about which choice helps the art goal most.",
//             question: "What is the smartest choice today?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Buy extra snacks",
//                 img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
//                 hint: "Extra snacks are tempting, but they are not your main goal.",
//                 effect: "Snacks are tempting, but extra spending slows your art goal down.",
//                 isBest: false
//               },
//               {
//                 text: "Keep most of the money",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Awesome! Saving most of it helps you reach your goal sooner.",
//                 isBest: true
//               },
//               {
//                 text: "Buy random small toys",
//                 img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png",
//                 hint: "Small toys still cost money and can slow your saving plan.",
//                 effect: "Small toys add up quickly and can stop you from reaching your goal.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 6,
//         title: "Saving Step by Step",
//         type: "scenario",
//         context: [
//           {
//             term: "Small Steps",
//             definition: "Big goals are often reached by many small saving steps.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
//               "https://pngimg.com/d/piggy_bank_PNG56.png",
//               "https://cdn-icons-png.flaticon.com/512/190/190411.png"
//             ]
//           }
//         ],
//         tips: "You do not need all the money at once. Small steps count too.",
//         questions: [
//           {
//             scenarioTitle: "Toy Goal",
//             scenarioText: "A toy costs $24 and you can save $4 each week.",
//             walletAmount: 4,
//             goal: "Buy the toy in a few weeks",
//             generalHint: "A small amount saved many times can reach a big goal.",
//             question: "What should you do this week?",
//             images: [
//               {
//                 questionImg: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Save the $4",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Correct! Saving this week is one more step toward the toy.",
//                 isBest: true
//               },
//               {
//                 text: "Spend it on a snack",
//                 img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
//                 hint: "That snack may be fun, but then this week's saving step is gone.",
//                 effect: "The snack feels good now, but it slows your toy goal.",
//                 isBest: false
//               },
//               {
//                 text: "Buy stickers",
//                 img: "https://cdn-icons-png.flaticon.com/512/3724/3724788.png",
//                 hint: "Stickers are extra and use the money you planned to save.",
//                 effect: "That choice uses your saving money and delays the toy.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Headphones Plan",
//             scenarioText: "You already saved $10 and need more.",
//             walletAmount: 6,
//             goal: "Keep the plan going",
//             generalHint: "Saving works best when you keep going even if the goal is not finished yet.",
//             question: "What should you do with this week's money?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/2917/2917992.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Add it to your savings",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Great! Every week you save moves you closer.",
//                 isBest: true
//               },
//               {
//                 text: "Spend it because the goal is still far away",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Big goals often take time. That does not mean stop.",
//                 effect: "Stopping now makes the goal even harder to reach.",
//                 isBest: false
//               },
//               {
//                 text: "Buy treats to feel better",
//                 img: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png",
//                 hint: "Treats are fun, but they do not move the goal forward.",
//                 effect: "Treats can take away money you wanted for the goal.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Rainy Day Jar",
//             scenarioText: "You keep a jar for unexpected needs.",
//             walletAmount: 5,
//             goal: "Be prepared",
//             generalHint: "Saving is not only for fun goals. It can help with surprises too.",
//             question: "What is the best choice?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Put the $5 in the jar",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Excellent! Savings can help with surprises too.",
//                 isBest: true
//               },
//               {
//                 text: "Buy candy because you already have a jar",
//                 img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png",
//                 hint: "The jar only helps if you keep adding to it.",
//                 effect: "Savings work best when you keep growing them.",
//                 isBest: false
//               },
//               {
//                 text: "Spend the money on something random",
//                 img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
//                 hint: "Random spending does not help you stay prepared.",
//                 effect: "Saving gives you more choices later.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 7,
//         title: "Goal Trackers",
//         type: "scenario",
//         context: [
//           {
//             term: "Tracking",
//             definition: "Tracking means checking how close you are to your goal.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/3588/3588658.png",
//               "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//               "https://pngimg.com/d/piggy_bank_PNG56.png"
//             ]
//           }
//         ],
//         tips: "Tracking your progress can help you stay motivated.",
//         questions: [
//           {
//             scenarioTitle: "Sticker Chart",
//             scenarioText: "You use a sticker chart each time you save money.",
//             walletAmount: 5,
//             goal: "Stay motivated",
//             generalHint: "Tracking helps you see your progress.",
//             question: "Why is the sticker chart useful?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//               }
//             ],
//             options: [
//               {
//                 text: "It shows how close you are",
//                 img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//                 effect: "Correct! Seeing progress can keep you excited.",
//                 isBest: true
//               },
//               {
//                 text: "It makes spending easier",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "A tracker is for watching progress, not spending more.",
//                 effect: "Tracking is about saving progress, not fast spending.",
//                 isBest: false
//               },
//               {
//                 text: "It means you do not need to save anymore",
//                 img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
//                 hint: "The chart only works if you keep adding to it.",
//                 effect: "The tracker helps only when you keep saving.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Progress Check",
//             scenarioText: "You saved $15 toward a $30 goal.",
//             walletAmount: 15,
//             goal: "Halfway there",
//             generalHint: "Think about what tracking tells you.",
//             question: "What does this mean?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
//               }
//             ],
//             options: [
//               {
//                 text: "You are halfway",
//                 img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//                 effect: "Yes! You are halfway to your goal.",
//                 isBest: true
//               },
//               {
//                 text: "You are finished",
//                 img: "https://cdn-icons-png.flaticon.com/512/3588/3588658.png",
//                 hint: "Compare the amount saved to the full goal.",
//                 effect: "You still need more money to finish.",
//                 isBest: false
//               },
//               {
//                 text: "You should spend the $15 now",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "If you spend it now, what happens to the goal?",
//                 effect: "Spending it now would stop your progress.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Saving Thermometer",
//             scenarioText: "Your class uses a chart that fills up as savings grow.",
//             walletAmount: 4,
//             goal: "Keep going",
//             generalHint: "Charts help you see growth.",
//             question: "Why is that helpful?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
//               }
//             ],
//             options: [
//               {
//                 text: "It makes progress easy to see",
//                 img: "https://cdn-icons-png.flaticon.com/512/3588/3588658.png",
//                 effect: "Great answer! Seeing progress can make saving feel exciting.",
//                 isBest: true
//               },
//               {
//                 text: "It means you can stop saving",
//                 img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
//                 hint: "The chart shows progress. It does not finish the goal for you.",
//                 effect: "The chart helps you keep going, not stop.",
//                 isBest: false
//               },
//               {
//                 text: "It shows spending ideas",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "A savings chart is for watching savings grow.",
//                 effect: "It is about saving progress, not spending ideas.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 8,
//         title: "Save or Spend?",
//         type: "scenario",
//         context: [
//           {
//             term: "Choice",
//             definition: "Every time you get money, you can choose to save some or spend some.",
//             example_img: [
//               "https://pngimg.com/d/piggy_bank_PNG56.png",
//               "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//               "https://cdn-icons-png.flaticon.com/512/190/190411.png"
//             ]
//           }
//         ],
//         tips: "A good money habit is to pause and choose carefully.",
//         questions: [
//           {
//             scenarioTitle: "After School Choice",
//             scenarioText: "You got $6 after helping at home.",
//             walletAmount: 6,
//             goal: "Build a good money habit",
//             generalHint: "A balanced choice can be stronger than using all your money.",
//             question: "What is a smart move?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Save part of it",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Correct! Saving part helps you build a strong habit.",
//                 isBest: true
//               },
//               {
//                 text: "Spend all of it on candy",
//                 img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png",
//                 hint: "That uses all the money and leaves nothing for later.",
//                 effect: "Spending all of it makes it harder to build a saving habit.",
//                 isBest: false
//               },
//               {
//                 text: "Lose track of it",
//                 img: "https://cdn-icons-png.flaticon.com/512/833/833314.png",
//                 hint: "Money works best when you plan where it goes.",
//                 effect: "Planning helps you make stronger choices.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Weekend Fair",
//             scenarioText: "There are lots of fun things to buy.",
//             walletAmount: 10,
//             goal: "Still have money left after the fair",
//             generalHint: "Think about what happens after the fun ends.",
//             question: "What is the best plan?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3082/3082037.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Choose one thing and save the rest",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Excellent! You enjoyed something and still kept money for later.",
//                 isBest: true
//               },
//               {
//                 text: "Spend on every booth",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Spending everywhere means the money disappears fast.",
//                 effect: "That feels exciting at first, but all your money is gone quickly.",
//                 isBest: false
//               },
//               {
//                 text: "Buy prizes and candy only",
//                 img: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png",
//                 hint: "Those are all wants. Is there a smarter way to choose?",
//                 effect: "Fun extras are okay sometimes, but using all your money on them is not the strongest plan.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Rainy Day Choice",
//             scenarioText: "You found $5 in an old jacket pocket.",
//             walletAmount: 5,
//             goal: "Make a smart surprise choice",
//             generalHint: "A surprise amount can still be handled with a good plan.",
//             question: "What should you do?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Add it to savings",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Great idea! Surprise money can be a helpful boost to savings.",
//                 isBest: true
//               },
//               {
//                 text: "Spend it right away",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Because it is surprise money does not mean it must be spent right away.",
//                 effect: "Quick spending can use up a good saving chance.",
//                 isBest: false
//               },
//               {
//                 text: "Buy candy because it feels free",
//                 img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png",
//                 hint: "Even surprise money is still money you can use wisely.",
//                 effect: "Treating it like free money can stop you from making the smartest choice.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       }
//     ],

//     unit3: [
//       {
//         id: 9,
//         title: "Smart Shopper Challenge",
//         type: "scenario",
//         context: [
//           {
//             term: "Price Comparison",
//             definition: "Price comparison means looking at choices before buying.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/263/263142.png",
//               "https://cdn-icons-png.flaticon.com/512/1170/1170678.png",
//               "https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
//             ]
//           },
//           {
//             term: "Spending Wisely",
//             definition: "Spending wisely means buying what gives you the best value.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/3082/3082037.png",
//               "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
//               "https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
//             ]
//           }
//         ],
//         tips: "Look at the price, what you need, and what is worth your money.",
//         questions: [
//           {
//             scenarioTitle: "Two Water Bottles",
//             scenarioText: "You need a water bottle for school.",
//             walletAmount: 15,
//             goal: "Buy what you need wisely",
//             generalHint: "Look for the choice that meets the need and saves money too.",
//             question: "Which is the better choice?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/2553/2553691.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Bottle A: $15 with stickers",
//                 img: "https://cdn-icons-png.flaticon.com/512/2553/2553691.png",
//                 hint: "The stickers are fun, but what happens to all your money?",
//                 effect: "The stickers are fun, but you used all your money on one item.",
//                 isBest: false
//               },
//               {
//                 text: "Bottle B: $8 and still useful",
//                 img: "https://cdn-icons-png.flaticon.com/512/2553/2553691.png",
//                 effect: "Great shopping! You bought what you need and still saved money.",
//                 isBest: true
//               },
//               {
//                 text: "Buy candy instead",
//                 img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png",
//                 hint: "Candy is a want, but what do you actually need?",
//                 effect: "Candy is a want, but today you needed a water bottle.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Snack Shop",
//             scenarioText: "You are choosing a snack after school.",
//             walletAmount: 6,
//             goal: "Spend wisely",
//             generalHint: "A smart choice leaves you with something left over.",
//             question: "Which choice gives you the best value?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Buy one tiny candy for $6",
//                 img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png",
//                 hint: "That is all your money for a very small treat.",
//                 effect: "That is a lot of money for one small treat.",
//                 isBest: false
//               },
//               {
//                 text: "Buy a snack for $3 and save $3",
//                 img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
//                 effect: "Nice! You enjoyed a snack and still saved some money.",
//                 isBest: true
//               },
//               {
//                 text: "Spend all $6 because you can",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Having money does not mean you need to spend all of it.",
//                 effect: "Having money does not mean you need to spend all of it.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Back-to-School Deal",
//             scenarioText: "You need school supplies and see different offers.",
//             walletAmount: 25,
//             goal: "Get ready for school",
//             generalHint: "Smart shoppers compare prices and pick what helps most.",
//             question: "What is the smartest shopping move?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Buy the notebook set on sale",
//                 img: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png",
//                 effect: "Excellent! You bought something useful and got a better price.",
//                 isBest: true
//               },
//               {
//                 text: "Buy a giant toy instead",
//                 img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png",
//                 hint: "The toy is fun, but does it help with school needs?",
//                 effect: "The toy is fun, but it does not help with your school needs.",
//                 isBest: false
//               },
//               {
//                 text: "Ignore prices and choose the shiniest thing",
//                 img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
//                 hint: "Smart shoppers compare before they buy.",
//                 effect: "Smart shoppers compare before they buy.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 10,
//         title: "Compare Before You Buy",
//         type: "scenario",
//         context: [
//           {
//             term: "Compare",
//             definition: "Comparing means looking at more than one choice before you decide.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/1170/1170678.png",
//               "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
//               "https://cdn-icons-png.flaticon.com/512/263/263142.png"
//             ]
//           }
//         ],
//         tips: "Looking twice can help you make a better purchase.",
//         questions: [
//           {
//             scenarioTitle: "Notebook Choice",
//             scenarioText: "Two stores sell notebooks.",
//             walletAmount: 10,
//             goal: "Get what you need and save money",
//             generalHint: "Compare the prices carefully.",
//             question: "What should you do first?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Check both prices",
//                 img: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png",
//                 effect: "Correct! Comparing first helps you save money.",
//                 isBest: true
//               },
//               {
//                 text: "Buy the first one you see",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "There might be a better price somewhere else.",
//                 effect: "Buying too fast can mean paying more than you need to.",
//                 isBest: false
//               },
//               {
//                 text: "Buy candy instead",
//                 img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png",
//                 hint: "Candy is not the item you need for school.",
//                 effect: "Candy is a treat, but it does not solve the notebook need.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Lunch Deal",
//             scenarioText: "One lunch costs more, one lunch costs less.",
//             walletAmount: 9,
//             goal: "Choose wisely",
//             generalHint: "The best value gives what you need without costing too much.",
//             question: "Which is the smartest lunch choice?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
//               }
//             ],
//             options: [
//               {
//                 text: "A $5 lunch that fills you up",
//                 img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
//                 effect: "Correct! It meets the need and leaves money left.",
//                 isBest: true
//               },
//               {
//                 text: "A $9 lunch just because it looks cool",
//                 img: "https://cdn-icons-png.flaticon.com/512/3082/3082037.png",
//                 hint: "Does spending all your money help you most here?",
//                 effect: "Looks can be fun, but using all your money is not always the best value.",
//                 isBest: false
//               },
//               {
//                 text: "Skip lunch and buy a toy",
//                 img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png",
//                 hint: "Think about what your body needs first.",
//                 effect: "Lunch is a need. The toy can wait.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Markers or Movie Candy?",
//             scenarioText: "You need markers for class and also see movie candy.",
//             walletAmount: 12,
//             goal: "Choose the stronger purchase",
//             generalHint: "One choice helps school. One choice is only a treat.",
//             question: "What is smarter?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Buy the markers",
//                 img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
//                 effect: "Correct! Markers are useful and important for class.",
//                 isBest: true
//               },
//               {
//                 text: "Buy the candy",
//                 img: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png",
//                 hint: "Candy is fun, but what helps with school?",
//                 effect: "Candy is a want, but the markers are more important.",
//                 isBest: false
//               },
//               {
//                 text: "Spend half on random snacks",
//                 img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png",
//                 hint: "Random snacks still use money away from the important item.",
//                 effect: "Snacks are extras. The school supply is the stronger choice.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 11,
//         title: "Shopping Checklist",
//         type: "scenario",
//         context: [
//           {
//             term: "Checklist",
//             definition: "A checklist helps you remember what matters before buying.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//               "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//               "https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
//             ]
//           }
//         ],
//         tips: "Before buying, ask: Do I need it? Can I afford it? Is there a better price?",
//         questions: [
//           {
//             scenarioTitle: "Three Questions",
//             scenarioText: "You found a cool item in a store.",
//             walletAmount: 18,
//             goal: "Use your shopping checklist",
//             generalHint: "Think about what a checklist is for.",
//             question: "What should you ask first?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3082/3082037.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Do I really need this?",
//                 img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//                 effect: "Yes! That is a smart first question.",
//                 isBest: true
//               },
//               {
//                 text: "How fast can I buy it?",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Fast buying can lead to weak decisions.",
//                 effect: "Shopping wisely is about thinking first, not buying fast.",
//                 isBest: false
//               },
//               {
//                 text: "Will people think it looks cool?",
//                 img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
//                 hint: "Smart shopping is about value and need, not only what others think.",
//                 effect: "Looks alone do not make a purchase smart.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Can I Afford It?",
//             scenarioText: "You want something that costs almost all your money.",
//             walletAmount: 20,
//             goal: "Make a careful choice",
//             generalHint: "Using almost all your money should make you stop and think.",
//             question: "What should you do?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/263/263142.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Pause and think before buying",
//                 img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//                 effect: "Correct! Pausing helps you make a stronger decision.",
//                 isBest: true
//               },
//               {
//                 text: "Buy it immediately",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "A smart shopper stops to think before using most of their money.",
//                 effect: "Buying too fast can lead to regret later.",
//                 isBest: false
//               },
//               {
//                 text: "Ignore the price",
//                 img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
//                 hint: "Price matters when you are deciding what is smart.",
//                 effect: "Ignoring the price can lead to poor money choices.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Better Price?",
//             scenarioText: "You saw one version of the item already, but there may be others.",
//             walletAmount: 15,
//             goal: "Shop carefully",
//             generalHint: "A checklist reminds you to compare.",
//             question: "What should you do next?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
//               }
//             ],
//             options: [
//               {
//                 text: "See if there is a better price",
//                 img: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png",
//                 effect: "Correct! Looking for a better price is a smart habit.",
//                 isBest: true
//               },
//               {
//                 text: "Buy without checking",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "There could be a better deal somewhere else.",
//                 effect: "Checking first gives you more power as a shopper.",
//                 isBest: false
//               },
//               {
//                 text: "Spend the money on treats instead",
//                 img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png",
//                 hint: "Treats are not the focus when you are trying to shop wisely.",
//                 effect: "Shopping wisely means keeping your purpose in mind.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 12,
//         title: "Pause Before You Buy",
//         type: "scenario",
//         context: [
//           {
//             term: "Impulse Buying",
//             definition: "Impulse buying means buying something quickly without planning.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//               "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//               "https://pngimg.com/d/piggy_bank_PNG56.png"
//             ]
//           }
//         ],
//         tips: "A short pause can help you make a much better money choice.",
//         questions: [
//           {
//             scenarioTitle: "Checkout Candy",
//             scenarioText: "You are paying for something important and see candy by the checkout.",
//             walletAmount: 7,
//             goal: "Stick to the plan",
//             generalHint: "What was your original reason for spending today?",
//             question: "What should you do?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Pause and ask if you really need it",
//                 img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//                 effect: "Correct! Pausing helps stop impulse buying.",
//                 isBest: true
//               },
//               {
//                 text: "Grab it right away",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Impulse buying happens when you do not stop to think.",
//                 effect: "Grabbing it quickly is exactly what impulse buying looks like.",
//                 isBest: false
//               },
//               {
//                 text: "Buy two just because they are there",
//                 img: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png",
//                 hint: "Buying more without a plan makes the impulse even bigger.",
//                 effect: "That spends even more money without a real reason.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Store Display",
//             scenarioText: "A bright display shows a cool toy near the front of the store.",
//             walletAmount: 18,
//             goal: "Keep control of your choices",
//             generalHint: "Stores sometimes use displays to get people to buy quickly.",
//             question: "What is the best response?",
//             images: [
//               {
//                 questionImg: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Keep thinking about your plan",
//                 img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//                 effect: "Great job! Sticking to your plan helps you stay in control.",
//                 isBest: true
//               },
//               {
//                 text: "Buy it because it looks exciting",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Looking exciting is not the same as being the best choice.",
//                 effect: "That is a quick feeling-based choice, not a planned one.",
//                 isBest: false
//               },
//               {
//                 text: "Forget what you came for",
//                 img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
//                 hint: "Your original plan still matters.",
//                 effect: "A smart shopper remembers their purpose.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Limited Money",
//             scenarioText: "You only brought enough money for one important item.",
//             walletAmount: 10,
//             goal: "Buy what matters most",
//             generalHint: "Impulse buying can get in the way of the important item.",
//             question: "How do you stay smart?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/263/263142.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Buy the important item first",
//                 img: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png",
//                 effect: "Correct! Important needs should come before impulse buys.",
//                 isBest: true
//               },
//               {
//                 text: "Buy a treat first and hope the rest works out",
//                 img: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png",
//                 hint: "If the treat comes first, you may lose the chance to buy what matters.",
//                 effect: "A treat-first plan can leave you short on money for the important item.",
//                 isBest: false
//               },
//               {
//                 text: "Spend randomly",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Random spending makes good planning impossible.",
//                 effect: "Random spending often leads to regret.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       }
//     ],

//     unit4: [
//       {
//         id: 13,
//         title: "Ways to Earn Money",
//         type: "scenario",
//         context: [
//           {
//             term: "Earn",
//             definition: "Earning money means doing helpful work or completing a task.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
//               "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
//               "https://cdn-icons-png.flaticon.com/512/1048/1048941.png"
//             ]
//           }
//         ],
//         tips: "Money is often earned by helping, working, or doing a useful job.",
//         questions: [
//           {
//             scenarioTitle: "Helping at Home",
//             scenarioText: "You want money for a goal.",
//             walletAmount: 0,
//             goal: "Find a good way to earn",
//             generalHint: "Think about useful jobs you can do safely.",
//             question: "What is a good way to earn money?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Do chores",
//                 img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
//                 effect: "Correct! Helping with chores can be a good way to earn money.",
//                 isBest: true
//               },
//               {
//                 text: "Wait and hope money appears",
//                 img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
//                 hint: "Money usually comes from a plan or effort.",
//                 effect: "Waiting without a plan is not a strong way to earn.",
//                 isBest: false
//               },
//               {
//                 text: "Spend before you earn",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Spending comes after you have money, not before.",
//                 effect: "A smart plan starts with earning first.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Weekend Help",
//             scenarioText: "A neighbor needs help watering plants.",
//             walletAmount: 0,
//             goal: "Earn safely and responsibly",
//             generalHint: "Helpful work can sometimes become a money-earning chance.",
//             question: "What is a smart idea?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/1048/1048941.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Help and do the job well",
//                 img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
//                 effect: "Great! Doing helpful work responsibly is a strong money skill.",
//                 isBest: true
//               },
//               {
//                 text: "Say yes but do not really try",
//                 img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
//                 hint: "If you earn money for a job, doing it well matters.",
//                 effect: "Responsibility is part of earning money fairly.",
//                 isBest: false
//               },
//               {
//                 text: "Ask for money without helping",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Earning comes from effort or work.",
//                 effect: "A smart earning habit is built on doing real work.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Pet Helper",
//             scenarioText: "You can help feed a family pet each week.",
//             walletAmount: 0,
//             goal: "Build a good habit",
//             generalHint: "Small jobs done regularly can become strong habits.",
//             question: "What is the best idea?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/616/616408.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Do the job every week",
//                 img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//                 effect: "Correct! Being reliable is an important money skill.",
//                 isBest: true
//               },
//               {
//                 text: "Do it only when you feel like it",
//                 img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
//                 hint: "Earning works best when people can count on you.",
//                 effect: "Doing a job only sometimes is not very reliable.",
//                 isBest: false
//               },
//               {
//                 text: "Forget the job but still want the money",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Money is usually earned by doing the job first.",
//                 effect: "A strong earning habit means doing the task well.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 14,
//         title: "Spend, Save, Share",
//         type: "scenario",
//         context: [
//           {
//             term: "Share",
//             definition: "Sharing means using some of your money to help others.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//               "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//               "https://pngimg.com/d/piggy_bank_PNG56.png"
//             ]
//           }
//         ],
//         tips: "A good money plan can include spending, saving, and sharing.",
//         questions: [
//           {
//             scenarioTitle: "Three Good Uses",
//             scenarioText: "You earned $12 this week.",
//             walletAmount: 12,
//             goal: "Use money wisely",
//             generalHint: "Money can have more than one smart job.",
//             question: "What is a balanced plan?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Spend some, save some, share some",
//                 img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//                 effect: "Excellent! That is a balanced and thoughtful money plan.",
//                 isBest: true
//               },
//               {
//                 text: "Spend every dollar",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Using all your money right away leaves nothing for saving or sharing.",
//                 effect: "Spending all of it removes balance from your plan.",
//                 isBest: false
//               },
//               {
//                 text: "Hide all your money and never use it",
//                 img: "https://cdn-icons-png.flaticon.com/512/833/833314.png",
//                 hint: "Saving matters, but money can also help with needs and kindness.",
//                 effect: "A strong plan usually includes more than only hiding money.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Charity Box",
//             scenarioText: "Your class is collecting money to help others.",
//             walletAmount: 8,
//             goal: "Make a kind choice without losing your whole plan",
//             generalHint: "Sharing can be part of a smart money habit.",
//             question: "What is a good choice?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Give a small part",
//                 img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//                 effect: "Great choice! You shared kindly and still kept your plan balanced.",
//                 isBest: true
//               },
//               {
//                 text: "Spend it all on treats instead",
//                 img: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png",
//                 hint: "Treats are fun, but this question is about wise and kind choices.",
//                 effect: "Treats are okay sometimes, but they are not the strongest answer here.",
//                 isBest: false
//               },
//               {
//                 text: "Give away everything even if it hurts your needs",
//                 img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//                 hint: "Sharing is kind, but balance still matters.",
//                 effect: "A balanced plan can include sharing without forgetting your own important needs.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Weekend Money Plan",
//             scenarioText: "You want a plan for your weekend money.",
//             walletAmount: 10,
//             goal: "Use money in a thoughtful way",
//             generalHint: "Think about all three: spend, save, and share.",
//             question: "Which plan sounds strongest?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Use a balanced plan",
//                 img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//                 effect: "Correct! A balanced plan helps you now and later.",
//                 isBest: true
//               },
//               {
//                 text: "Only spend",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Only spending ignores saving and sharing.",
//                 effect: "A stronger plan uses money in more thoughtful ways.",
//                 isBest: false
//               },
//               {
//                 text: "Only keep money and never use it",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 hint: "Saving is important, but money can also be used wisely and kindly.",
//                 effect: "A strong plan is usually more balanced than this.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 15,
//         title: "Big Goals Take Time",
//         type: "scenario",
//         context: [
//           {
//             term: "Long-Term Goal",
//             definition: "A long-term goal is something that takes more time and patience to reach.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/2917/2917992.png",
//               "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//               "https://pngimg.com/d/piggy_bank_PNG56.png"
//             ]
//           }
//         ],
//         tips: "Big goals often need patience, planning, and regular saving.",
//         questions: [
//           {
//             scenarioTitle: "New Bike Plan",
//             scenarioText: "A bike is expensive, so you need a plan.",
//             walletAmount: 10,
//             goal: "Save for a bike",
//             generalHint: "A big goal is usually not reached in one day.",
//             question: "What is the strongest idea?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Save regularly over time",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Correct! Big goals usually need regular saving.",
//                 isBest: true
//               },
//               {
//                 text: "Give up because it costs a lot",
//                 img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
//                 hint: "Big goals can still be reached with a plan.",
//                 effect: "A good plan can make a big goal feel possible.",
//                 isBest: false
//               },
//               {
//                 text: "Spend your money on treats each week",
//                 img: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png",
//                 hint: "Treats use the money that could build the bike fund.",
//                 effect: "Those treats slow the bike goal down.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Tablet Goal",
//             scenarioText: "You want something that costs much more than your weekly money.",
//             walletAmount: 6,
//             goal: "Think long term",
//             generalHint: "When a goal is big, patience matters.",
//             question: "What helps the most?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Keep saving each week",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Yes! Patience and regular saving are the key.",
//                 isBest: true
//               },
//               {
//                 text: "Spend because it will take too long",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Long goals still work if you keep going.",
//                 effect: "Stopping now makes the goal even farther away.",
//                 isBest: false
//               },
//               {
//                 text: "Buy random cheap items instead",
//                 img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png",
//                 hint: "Many small wants can still block one big goal.",
//                 effect: "Small random purchases can make long-term goals harder to reach.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Stay Motivated",
//             scenarioText: "Your goal still feels far away.",
//             walletAmount: 0,
//             goal: "Keep going",
//             generalHint: "Progress matters even before the finish line.",
//             question: "What should you remember?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Every small step counts",
//                 img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//                 effect: "Correct! Small steps really do matter.",
//                 isBest: true
//               },
//               {
//                 text: "Small steps do not matter",
//                 img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
//                 hint: "Big goals are often made from many small steps.",
//                 effect: "Small steps are exactly how many big goals get done.",
//                 isBest: false
//               },
//               {
//                 text: "Only big amounts count",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Even a small amount can help if you save often.",
//                 effect: "Small amounts saved often can still reach big goals.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 16,
//         title: "Money Mission Final Challenge",
//         type: "scenario",
//         context: [
//           {
//             term: "Money Mission",
//             definition: "A money mission is using everything you learned to make strong choices.",
//             example_img: [
//               "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//               "https://pngimg.com/d/piggy_bank_PNG56.png",
//               "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//             ]
//           }
//         ],
//         tips: "Use all your money skills together: think, compare, save, and choose wisely.",
//         questions: [
//           {
//             scenarioTitle: "Mission 1",
//             scenarioText: "You have $20. You need a notebook and want candy.",
//             walletAmount: 20,
//             goal: "Choose wisely",
//             generalHint: "Think about needs first.",
//             question: "What is the smartest plan?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Buy the notebook first and save the rest",
//                 img: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png",
//                 effect: "Excellent! You handled your need first and still saved money.",
//                 isBest: true
//               },
//               {
//                 text: "Buy lots of candy first",
//                 img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png",
//                 hint: "Candy is a want. What comes first?",
//                 effect: "Candy is a want, but the notebook is more important.",
//                 isBest: false
//               },
//               {
//                 text: "Spend all $20 on treats",
//                 img: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png",
//                 hint: "That leaves nothing for the notebook or savings.",
//                 effect: "That plan uses your money too quickly.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Mission 2",
//             scenarioText: "You are saving for headphones but also see a fun sale.",
//             walletAmount: 12,
//             goal: "Stay focused on the goal",
//             generalHint: "Sales can still distract you from your goal.",
//             question: "What should you do?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/2917/2917992.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Check if the sale item is really important",
//                 img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//                 effect: "Correct! Smart shoppers still think before buying during sales.",
//                 isBest: true
//               },
//               {
//                 text: "Buy it because it is on sale",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "A sale is not always a smart buy if you do not need the item.",
//                 effect: "A sale can still take money away from your real goal.",
//                 isBest: false
//               },
//               {
//                 text: "Forget your goal",
//                 img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
//                 hint: "Goals work best when you remember them while shopping.",
//                 effect: "Forgetting the goal makes smart saving harder.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             scenarioTitle: "Mission 3",
//             scenarioText: "You earned money, saved some, and want to make one final smart choice.",
//             walletAmount: 15,
//             goal: "Show all your money skills",
//             generalHint: "Use what you learned about needs, wants, saving, and planning.",
//             question: "Which answer sounds strongest?",
//             images: [
//               {
//                 questionImg: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
//               }
//             ],
//             options: [
//               {
//                 text: "Think first, buy needs, and save some",
//                 img: "https://pngimg.com/d/piggy_bank_PNG56.png",
//                 effect: "Amazing! That shows strong money thinking.",
//                 isBest: true
//               },
//               {
//                 text: "Buy quickly without planning",
//                 img: "https://cdn-icons-png.flaticon.com/512/4250/4250900.png",
//                 hint: "Planning is one of your strongest money tools.",
//                 effect: "Quick buying often leads to weaker choices.",
//                 isBest: false
//               },
//               {
//                 text: "Choose only what looks fun",
//                 img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png",
//                 hint: "Fun is okay, but smart money choices use more thinking than that.",
//                 effect: "The most fun-looking thing is not always the smartest choice.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   },

//   grade5: {
//     unit1: [
//       { id: 17, title: "Coming Soon", type: "scenario", context: [], tips: "Coming soon.", questions: [] }
//     ]
//   }
// };

// export default lessonsData;



// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------

// const lessonsData = {
//   grade4: {
//     unit1: [
//       {
//         id: 1,
//         title: "Smart Choices Start Here",
//         coinReward: 20,
//         context: [
//           {
//             term: "Decision Making",
//             definition:
//               "Decision making means stopping to think before you spend your money."
//           },
//           {
//             term: "Smart Choice",
//             definition:
//               "A smart choice helps you now or helps you reach an important goal later."
//           }
//         ],
//         tips: "Think about needs, goals, and tomorrow before spending today.",
//         questions: [
//           {
//             type: "scenario-choice",
//             scenarioTitle: "Toy or Bike",
//             scenarioText: "You earned $20 from helping at home. You want a bike that costs $80.",
//             walletAmount: 20,
//             goal: "Save for a bike",
//             heroEmoji: "🚲",
//             heroCaption: "Big goals take smart choices.",
//             question: "What should you do with your $20?",
//             generalHint: "Choose the option that gets you closer to the bike.",
//             options: [
//               {
//                 text: "Buy a toy today",
//                 subText: "Fun now",
//                 emoji: "🧸",
//                 hint: "The toy is fun, but it does not help your bike goal.",
//                 effect: "The toy was fun today, but now you are not closer to the bike.",
//                 isBest: false
//               },
//               {
//                 text: "Save the money",
//                 subText: "Goal first",
//                 emoji: "🐷",
//                 effect: "Great choice! Saving helps you get closer to your bike.",
//                 isBest: true
//               },
//               {
//                 text: "Spend half on snacks",
//                 subText: "A little now",
//                 emoji: "🍿",
//                 hint: "Even small spending can slow a big goal.",
//                 effect: "Spending some money means the bike will take longer.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             type: "tap-reveal",
//             scenarioTitle: "Detective Desk",
//             scenarioText: "Kai wants a new soccer ball, but he also wants candy after school.",
//             goal: "Reach a bigger goal",
//             heroEmoji: "🕵️",
//             heroCaption: "Use clues before deciding.",
//             question: "Which choice is smarter?",
//             generalHint: "Think about what helps for longer than just one afternoon.",
//             cards: [
//               {
//                 id: "u1l1q2c1",
//                 coverEmoji: "🃏",
//                 emoji: "⚽",
//                 title: "Clue 1",
//                 text: "The soccer ball is something Kai can use again and again."
//               },
//               {
//                 id: "u1l1q2c2",
//                 coverEmoji: "🃏",
//                 emoji: "🍬",
//                 title: "Clue 2",
//                 text: "Candy is gone quickly and does not help with the bigger goal."
//               },
//               {
//                 id: "u1l1q2c3",
//                 coverEmoji: "🃏",
//                 emoji: "⏳",
//                 title: "Clue 3",
//                 text: "Waiting a little can help you afford something more useful."
//               },
//               {
//                 id: "u1l1q2c4",
//                 coverEmoji: "🃏",
//                 emoji: "🎯",
//                 title: "Clue 4",
//                 text: "Smart money choices often match a goal."
//               }
//             ],
//             options: [
//               {
//                 text: "Save for the soccer ball",
//                 isBest: true,
//                 effect: "Nice job! The clues showed that saving for the bigger goal is smarter."
//               },
//               {
//                 text: "Buy candy right away",
//                 isBest: false,
//                 hint: "Look at the clues again. Which choice lasts longer and fits the goal?"
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 2,
//         title: "Needs and Wants Lab",
//         coinReward: 20,
//         context: [
//           {
//             term: "Need",
//             definition:
//               "A need is something important for living, learning, health, or safety."
//           },
//           {
//             term: "Want",
//             definition:
//               "A want is something fun or nice to have, but not necessary right now."
//           }
//         ],
//         tips: "Needs first. Wants later.",
//         questions: [
//           {
//             type: "drag-drop",
//             scenarioTitle: "Sort the Shopping Bag",
//             scenarioText: "Drag each item into the correct bucket, or use the quick buttons.",
//             heroEmoji: "🛍️",
//             heroCaption: "Can you tell the difference between needs and wants?",
//             question: "Which items are needs and which are wants?",
//             generalHint:
//               "Ask yourself: do I need this for living, learning, or health?",
//             successMessage: "Amazing! You sorted every item correctly.",
//             items: [
//               { id: "u1l2i1", label: "Water Bottle", emoji: "💧", bucket: "need" },
//               { id: "u1l2i2", label: "Lunch", emoji: "🥪", bucket: "need" },
//               { id: "u1l2i3", label: "Notebook", emoji: "📓", bucket: "need" },
//               { id: "u1l2i4", label: "Winter Coat", emoji: "🧥", bucket: "need" },
//               { id: "u1l2i5", label: "Candy", emoji: "🍬", bucket: "want" },
//               { id: "u1l2i6", label: "Toy Car", emoji: "🚗", bucket: "want" },
//               { id: "u1l2i7", label: "Video Game", emoji: "🎮", bucket: "want" },
//               { id: "u1l2i8", label: "Ice Cream", emoji: "🍦", bucket: "want" }
//             ]
//           },
//           {
//             type: "scenario-choice",
//             scenarioTitle: "Ready for School",
//             scenarioText: "You have $12 before school starts.",
//             walletAmount: 12,
//             goal: "Be prepared for class",
//             heroEmoji: "🏫",
//             heroCaption: "Needs help you learn and be ready.",
//             question: "What should you buy first?",
//             generalHint: "Think about what helps most with school today.",
//             options: [
//               {
//                 text: "A notebook",
//                 subText: "Useful for class",
//                 emoji: "📒",
//                 effect: "Correct! A notebook is a school need.",
//                 isBest: true
//               },
//               {
//                 text: "A sticker pack",
//                 subText: "Looks fun",
//                 emoji: "🌟",
//                 hint: "Stickers are fun, but they are not the most important thing for class.",
//                 effect: "Stickers are a want. A school need should come first.",
//                 isBest: false
//               },
//               {
//                 text: "A candy bag",
//                 subText: "Treat now",
//                 emoji: "🍭",
//                 hint: "Candy is a treat, not the most important school item.",
//                 effect: "Candy is a want, not a classroom need.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 3,
//         title: "Goal Getter",
//         coinReward: 20,
//         context: [
//           {
//             term: "Goal",
//             definition: "A goal is something you are working toward."
//           },
//           {
//             term: "Save",
//             definition: "Saving means keeping some money for later."
//           }
//         ],
//         tips: "Goals get easier when you save step by step.",
//         questions: [
//           {
//             type: "scenario-choice",
//             scenarioTitle: "Skateboard Dream",
//             scenarioText: "You want a skateboard. You have $15 already saved.",
//             walletAmount: 15,
//             goal: "Save for a skateboard",
//             heroEmoji: "🛹",
//             heroCaption: "Small choices can help a big goal.",
//             question: "What is the smartest choice after school?",
//             generalHint: "Which choice helps the skateboard fund grow?",
//             options: [
//               {
//                 text: "Save today's money too",
//                 subText: "Stay on track",
//                 emoji: "💰",
//                 effect: "Excellent! Adding more money today helps your goal grow.",
//                 isBest: true
//               },
//               {
//                 text: "Buy two treats",
//                 subText: "Fun now",
//                 emoji: "🍪",
//                 hint: "Treats are okay sometimes, but they do not help the skateboard goal.",
//                 effect: "Those treats use money that could help your goal.",
//                 isBest: false
//               },
//               {
//                 text: "Buy a tiny toy",
//                 subText: "Small purchase",
//                 emoji: "🪀",
//                 hint: "Even small purchases can slow a big goal.",
//                 effect: "Small spending still makes the skateboard take longer.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             type: "budget-builder",
//             scenarioTitle: "Save Most, Spend a Little",
//             scenarioText:
//               "You have $10. You want one small treat, but you also want to save most of your money.",
//             budget: 10,
//             heroEmoji: "🎯",
//             heroCaption: "Build a plan that matches your goal.",
//             question: "Pick the best set of items.",
//             generalHint:
//               "Choose one small extra and keep most of the money for savings.",
//             successMessage:
//               "Great job! You enjoyed one small extra and still protected your savings.",
//             showAnswerTip: true,
//             items: [
//               { id: "u1l3b1", name: "Fruit Snack", price: 2, emoji: "🍎", tag: "small treat" },
//               { id: "u1l3b2", name: "Candy Box", price: 6, emoji: "🍬", tag: "bigger treat" },
//               { id: "u1l3b3", name: "Sticker Sheet", price: 2, emoji: "🌈", tag: "extra fun" },
//               { id: "u1l3b4", name: "Save the Rest", price: 0, emoji: "🐷", tag: "goal money" }
//             ],
//             correctItemIds: ["u1l3b1", "u1l3b4"]
//           }
//         ]
//       },

//       {
//         id: 4,
//         title: "School Day Money Mission",
//         coinReward: 20,
//         context: [
//           {
//             term: "Important First",
//             definition:
//               "When money is limited, choose the most important thing first."
//           }
//         ],
//         tips: "Ask yourself: what matters most right now?",
//         questions: [
//           {
//             type: "scenario-choice",
//             scenarioTitle: "Broken Backpack",
//             scenarioText: "Your backpack zipper broke. You also want a toy from the store.",
//             walletAmount: 25,
//             goal: "Be ready for school",
//             heroEmoji: "🎒",
//             heroCaption: "Solve the important problem first.",
//             question: "What should you do?",
//             generalHint: "Think about what helps you get through the school day.",
//             options: [
//               {
//                 text: "Buy a new backpack",
//                 subText: "Fix the problem",
//                 emoji: "🎒",
//                 effect: "Yes! The backpack is the important need right now.",
//                 isBest: true
//               },
//               {
//                 text: "Buy the toy",
//                 subText: "Fun choice",
//                 emoji: "🧸",
//                 hint: "The toy is fun, but it does not fix your school problem.",
//                 effect: "The toy is fun, but the backpack problem is still there.",
//                 isBest: false
//               },
//               {
//                 text: "Buy candy and juice",
//                 subText: "Treats today",
//                 emoji: "🧃",
//                 hint: "Treats are extras, not the most important need here.",
//                 effect: "Treats can wait when a school need comes first.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             type: "tap-reveal",
//             scenarioTitle: "Lunch Line Clues",
//             scenarioText: "You brought $8 to school and need to make one smart choice.",
//             walletAmount: 8,
//             heroEmoji: "🧠",
//             heroCaption: "Use clues to decide what matters most.",
//             question: "What should come first today?",
//             generalHint: "Look for the choice that helps you through the day.",
//             cards: [
//               {
//                 id: "u1l4c1",
//                 coverEmoji: "🃏",
//                 emoji: "🍽️",
//                 title: "Clue 1",
//                 text: "Lunch helps you stay focused and ready to learn."
//               },
//               {
//                 id: "u1l4c2",
//                 coverEmoji: "🃏",
//                 emoji: "🍬",
//                 title: "Clue 2",
//                 text: "Candy is tasty, but it is not the most important item."
//               },
//               {
//                 id: "u1l4c3",
//                 coverEmoji: "🃏",
//                 emoji: "🏫",
//                 title: "Clue 3",
//                 text: "A school day goes better when your important needs are met."
//               },
//               {
//                 id: "u1l4c4",
//                 coverEmoji: "🃏",
//                 emoji: "✅",
//                 title: "Clue 4",
//                 text: "Smart choices are not always the most fun choices."
//               }
//             ],
//             options: [
//               {
//                 text: "Buy lunch first",
//                 isBest: true,
//                 effect: "Correct! Lunch is the important choice for the school day."
//               },
//               {
//                 text: "Buy candy first",
//                 isBest: false,
//                 hint: "Check the clues again. Which choice helps you most today?"
//               }
//             ]
//           }
//         ]
//       }
//     ],

//     unit2: [
//       {
//         id: 5,
//         title: "Price Detective",
//         coinReward: 20,
//         context: [
//           {
//             term: "Compare Prices",
//             definition:
//               "Comparing prices means looking at more than one choice before buying."
//           },
//           {
//             term: "Value",
//             definition:
//               "Value means getting something useful for a fair price."
//           }
//         ],
//         tips: "Smart shoppers compare before they buy.",
//         questions: [
//           {
//             type: "tap-reveal",
//             scenarioTitle: "Pencil Mystery",
//             scenarioText: "One store sells one pencil for $4.",
//             heroEmoji: "✏️",
//             heroCaption: "Detectives compare clues before deciding.",
//             question: "Is that a smart price?",
//             generalHint: "Compare the item to what it usually costs.",
//             cards: [
//               {
//                 id: "u2l5c1",
//                 coverEmoji: "🃏",
//                 emoji: "🏪",
//                 title: "Clue 1",
//                 text: "A second store sells a pack of 4 pencils for $3."
//               },
//               {
//                 id: "u2l5c2",
//                 coverEmoji: "🃏",
//                 emoji: "📦",
//                 title: "Clue 2",
//                 text: "Getting more items for less money is often better value."
//               },
//               {
//                 id: "u2l5c3",
//                 coverEmoji: "🃏",
//                 emoji: "💸",
//                 title: "Clue 3",
//                 text: "Paying too much for one small item leaves less money for other needs."
//               },
//               {
//                 id: "u2l5c4",
//                 coverEmoji: "🃏",
//                 emoji: "🔍",
//                 title: "Clue 4",
//                 text: "Comparing prices helps shoppers avoid overpaying."
//               }
//             ],
//             options: [
//               {
//                 text: "No, it is too expensive",
//                 isBest: true,
//                 effect: "Exactly! Comparing stores showed the first price was not a good deal."
//               },
//               {
//                 text: "Yes, it is a smart price",
//                 isBest: false,
//                 hint: "Read the clues again. Was there a better deal somewhere else?"
//               }
//             ]
//           },
//           {
//             type: "scenario-choice",
//             scenarioTitle: "Two Water Bottles",
//             scenarioText: "You need a water bottle for school.",
//             walletAmount: 15,
//             goal: "Buy something useful and still save money",
//             heroEmoji: "🫗",
//             heroCaption: "Useful and affordable is often smartest.",
//             question: "Which choice is smarter?",
//             generalHint: "Look for the useful choice that still leaves money.",
//             options: [
//               {
//                 text: "Bottle for $15 with sparkles",
//                 subText: "Looks cool",
//                 emoji: "✨",
//                 hint: "It looks cool, but it uses all your money.",
//                 effect: "You bought a bottle, but you spent all your money.",
//                 isBest: false
//               },
//               {
//                 text: "Bottle for $8",
//                 subText: "Still useful",
//                 emoji: "💧",
//                 effect: "Great shopping! You got what you need and kept some money too.",
//                 isBest: true
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 6,
//         title: "Budget Builder",
//         coinReward: 20,
//         context: [
//           {
//             term: "Budget",
//             definition:
//               "A budget is a plan for how to use your money."
//           }
//         ],
//         tips: "Pick the most important things first and stay inside the budget.",
//         questions: [
//           {
//             type: "budget-builder",
//             scenarioTitle: "Movie Night Basket",
//             scenarioText: "You have $12 for a family movie night at home.",
//             budget: 12,
//             heroEmoji: "🎬",
//             heroCaption: "Can you build a smart basket?",
//             question: "Choose the best items without going over budget.",
//             generalHint: "Pick the basic things first, then see if any money is left.",
//             successMessage:
//               "Awesome! You stayed within budget and picked a smart set of items.",
//             showAnswerTip: true,
//             items: [
//               { id: "u2l6i1", name: "Popcorn", price: 4, emoji: "🍿", tag: "shared snack" },
//               { id: "u2l6i2", name: "Juice Box Pack", price: 3, emoji: "🧃", tag: "drink" },
//               { id: "u2l6i3", name: "Napkins", price: 2, emoji: "🧻", tag: "useful" },
//               { id: "u2l6i4", name: "Glow Stick", price: 5, emoji: "✨", tag: "extra fun" },
//               { id: "u2l6i5", name: "Candy Bag", price: 8, emoji: "🍬", tag: "pricey extra" }
//             ],
//             correctItemIds: ["u2l6i1", "u2l6i2", "u2l6i3"]
//           },
//           {
//             type: "budget-builder",
//             scenarioTitle: "Art Day Plan",
//             scenarioText: "Your class art table has $10 to spend.",
//             budget: 10,
//             heroEmoji: "🎨",
//             heroCaption: "Budgets help teams choose wisely.",
//             question: "Which plan makes the most sense?",
//             generalHint: "Pick the items needed to do the activity first.",
//             successMessage:
//               "Nice work! You used the budget for the most important art supplies.",
//             items: [
//               { id: "u2l6a1", name: "Paper", price: 3, emoji: "📄", tag: "need" },
//               { id: "u2l6a2", name: "Markers", price: 4, emoji: "🖍️", tag: "need" },
//               { id: "u2l6a3", name: "Glitter", price: 4, emoji: "✨", tag: "extra" },
//               { id: "u2l6a4", name: "Tape", price: 2, emoji: "🧷", tag: "helpful" },
//               { id: "u2l6a5", name: "Candy", price: 3, emoji: "🍭", tag: "not for art" }
//             ],
//             correctItemIds: ["u2l6a1", "u2l6a2", "u2l6a4"]
//           }
//         ]
//       },

//       {
//         id: 7,
//         title: "Shopping Challenge",
//         coinReward: 20,
//         context: [
//           {
//             term: "Best Deal",
//             definition:
//               "A best deal gives you what you need at a better price or in a smarter way."
//           }
//         ],
//         tips: "A good deal is not just cheap. It should also match what you need.",
//         questions: [
//           {
//             type: "scenario-choice",
//             scenarioTitle: "Snack Shop",
//             scenarioText: "You want one snack after school and still want to save money.",
//             walletAmount: 6,
//             goal: "Enjoy something small and keep some money",
//             heroEmoji: "🛒",
//             heroCaption: "A smart choice can balance fun and saving.",
//             question: "Which is the best value?",
//             generalHint: "Look for the choice that gives you a snack and still leaves money.",
//             options: [
//               {
//                 text: "One tiny candy for $6",
//                 subText: "All your money",
//                 emoji: "🍬",
//                 hint: "That uses all your money for one small item.",
//                 effect: "That was not a great deal because it used all your money.",
//                 isBest: false
//               },
//               {
//                 text: "A snack for $3 and save $3",
//                 subText: "Balanced choice",
//                 emoji: "🥨",
//                 effect: "Exactly! You got a snack and still saved half your money.",
//                 isBest: true
//               },
//               {
//                 text: "Spend all $6 because you can",
//                 subText: "No plan",
//                 emoji: "💸",
//                 hint: "Having money does not mean you need to spend all of it.",
//                 effect: "A smart shopper does not spend everything just because they can.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             type: "tap-reveal",
//             scenarioTitle: "The Big Sale Sign",
//             scenarioText: "A store says 'SUPER DEAL!' on a toy display.",
//             heroEmoji: "📣",
//             heroCaption: "Ads can grab attention, but smart shoppers still think.",
//             question: "What should you do first?",
//             generalHint: "A sign is not enough. Smart shoppers still compare and think.",
//             cards: [
//               {
//                 id: "u2l7c1",
//                 coverEmoji: "🃏",
//                 emoji: "🏷️",
//                 title: "Clue 1",
//                 text: "A sale sign can be helpful, but it does not always mean best value."
//               },
//               {
//                 id: "u2l7c2",
//                 coverEmoji: "🃏",
//                 emoji: "🔍",
//                 title: "Clue 2",
//                 text: "You should still look at the price and compare."
//               },
//               {
//                 id: "u2l7c3",
//                 coverEmoji: "🃏",
//                 emoji: "🎯",
//                 title: "Clue 3",
//                 text: "The toy also needs to fit your goal or budget."
//               },
//               {
//                 id: "u2l7c4",
//                 coverEmoji: "🃏",
//                 emoji: "🧠",
//                 title: "Clue 4",
//                 text: "Smart shopping means thinking, not just reacting."
//               }
//             ],
//             options: [
//               {
//                 text: "Compare the price and think first",
//                 isBest: true,
//                 effect: "Correct! A smart shopper checks the price and thinks before buying."
//               },
//               {
//                 text: "Buy it right away because of the sign",
//                 isBest: false,
//                 hint: "Look at the clues again. Does a big sign always mean smartest choice?"
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 8,
//         title: "Class Party Planner",
//         coinReward: 20,
//         context: [
//           {
//             term: "Planning",
//             definition:
//               "Planning means thinking ahead so your money works better."
//           }
//         ],
//         tips: "The most exciting choice is not always the smartest one.",
//         questions: [
//           {
//             type: "budget-builder",
//             scenarioTitle: "Party Table Plan",
//             scenarioText: "You have $15 to help set up a simple class party table.",
//             budget: 15,
//             heroEmoji: "🎉",
//             heroCaption: "Plan the table without overspending.",
//             question: "Pick the smartest set of items.",
//             generalHint: "Choose what the whole group needs first.",
//             successMessage: "Nice planning! You used the money for a practical party setup.",
//             items: [
//               { id: "u2l8p1", name: "Cups", price: 3, emoji: "🥤", tag: "need" },
//               { id: "u2l8p2", name: "Napkins", price: 2, emoji: "🧻", tag: "need" },
//               { id: "u2l8p3", name: "Fruit Tray", price: 6, emoji: "🍉", tag: "shared food" },
//               { id: "u2l8p4", name: "Glitter Banner", price: 7, emoji: "✨", tag: "extra" },
//               { id: "u2l8p5", name: "Party Horns", price: 5, emoji: "📯", tag: "extra" }
//             ],
//             correctItemIds: ["u2l8p1", "u2l8p2", "u2l8p3"]
//           },
//           {
//             type: "scenario-choice",
//             scenarioTitle: "One More Choice",
//             scenarioText: "After buying the basics, you have a little money left.",
//             walletAmount: 4,
//             goal: "Keep the party useful and fun",
//             heroEmoji: "🤝",
//             heroCaption: "Think about the whole group.",
//             question: "What is the smartest final choice?",
//             generalHint: "Pick something that helps the group most.",
//             options: [
//               {
//                 text: "Save the extra money",
//                 subText: "No waste",
//                 emoji: "🐷",
//                 effect: "Great choice! Saving extra money is a smart way to avoid waste.",
//                 isBest: true
//               },
//               {
//                 text: "Buy random candy",
//                 subText: "Spend it anyway",
//                 emoji: "🍬",
//                 hint: "Spending just because money is left is not always smart.",
//                 effect: "Random spending is not the strongest plan.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       }
//     ],

//     unit3: [
//       {
//         id: 9,
//         title: "Saving Step by Step",
//         coinReward: 20,
//         context: [
//           {
//             term: "Small Steps",
//             definition:
//               "Big goals can be reached with many small saving steps."
//           }
//         ],
//         tips: "You do not need all the money at once. Keep building.",
//         questions: [
//           {
//             type: "scenario-choice",
//             scenarioTitle: "Toy Fund",
//             scenarioText: "A toy costs $24. You can save $4 each week.",
//             walletAmount: 4,
//             goal: "Buy the toy in a few weeks",
//             heroEmoji: "🗓️",
//             heroCaption: "Small weekly steps can reach a big goal.",
//             question: "What should you do this week?",
//             generalHint: "This week still matters, even if the goal is not finished yet.",
//             options: [
//               {
//                 text: "Save the $4",
//                 subText: "One more step",
//                 emoji: "💰",
//                 effect: "Correct! Saving this week moves you one step closer.",
//                 isBest: true
//               },
//               {
//                 text: "Spend it on a snack",
//                 subText: "Fun now",
//                 emoji: "🍪",
//                 hint: "That uses the money you wanted for the toy.",
//                 effect: "The snack was fun, but it slows your toy goal.",
//                 isBest: false
//               },
//               {
//                 text: "Buy stickers",
//                 subText: "Small extra",
//                 emoji: "🌟",
//                 hint: "Stickers are extra and use the money you planned to save.",
//                 effect: "That choice delays the toy a little more.",
//                 isBest: false
//               }
//             ]
//           },
//           {
//             type: "tap-reveal",
//             scenarioTitle: "Halfway There",
//             scenarioText: "You have saved $15 toward a $30 goal.",
//             heroEmoji: "📈",
//             heroCaption: "Tracking helps you see progress.",
//             question: "What does this mean?",
//             generalHint: "Think about how far $15 is toward $30.",
//             cards: [
//               {
//                 id: "u3l9c1",
//                 coverEmoji: "🃏",
//                 emoji: "1️⃣",
//                 title: "Clue 1",
//                 text: "$15 is exactly half of $30."
//               },
//               {
//                 id: "u3l9c2",
//                 coverEmoji: "🃏",
//                 emoji: "📍",
//                 title: "Clue 2",
//                 text: "Halfway means you still need the other half."
//               },
//               {
//                 id: "u3l9c3",
//                 coverEmoji: "🃏",
//                 emoji: "🙌",
//                 title: "Clue 3",
//                 text: "Being halfway is a good reason to keep going."
//               },
//               {
//                 id: "u3l9c4",
//                 coverEmoji: "🃏",
//                 emoji: "🚫",
//                 title: "Clue 4",
//                 text: "Halfway does not mean finished."
//               }
//             ],
//             options: [
//               {
//                 text: "You are halfway to the goal",
//                 isBest: true,
//                 effect: "Yes! You are halfway, which means your saving plan is working."
//               },
//               {
//                 text: "You should spend it now",
//                 isBest: false,
//                 hint: "Check the clues again. Is halfway the same as finished?"
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 10,
//         title: "Goal Tracker Game",
//         coinReward: 20,
//         context: [
//           {
//             term: "Tracking",
//             definition:
//               "Tracking means checking how close you are to your goal."
//           }
//         ],
//         tips: "Tracking can help you stay motivated and keep your plan going.",
//         questions: [
//           {
//             type: "budget-builder",
//             scenarioTitle: "Sticker Chart Rewards",
//             scenarioText: "You are building a goal tracker chart. You have $8 for supplies.",
//             budget: 8,
//             heroEmoji: "📊",
//             heroCaption: "Build a simple tracker without overspending.",
//             question: "Pick the best supplies for the tracker.",
//             generalHint: "Choose the items that help you track progress, not extra decorations first.",
//             successMessage:
//               "Great! You built a useful tracker and stayed on budget.",
//             items: [
//               { id: "u3l10i1", name: "Chart Paper", price: 3, emoji: "📄", tag: "need" },
//               { id: "u3l10i2", name: "Marker", price: 2, emoji: "🖊️", tag: "need" },
//               { id: "u3l10i3", name: "Star Stickers", price: 3, emoji: "⭐", tag: "helpful" },
//               { id: "u3l10i4", name: "Toy Figure", price: 6, emoji: "🧸", tag: "not for tracking" }
//             ],
//             correctItemIds: ["u3l10i1", "u3l10i2", "u3l10i3"]
//           },
//           {
//             type: "scenario-choice",
//             scenarioTitle: "Keep Going",
//             scenarioText: "Your goal is not finished yet, but you can see progress on your chart.",
//             heroEmoji: "🚀",
//             heroCaption: "Progress can keep you motivated.",
//             question: "What should you do next?",
//             generalHint: "Tracking helps you keep moving forward.",
//             options: [
//               {
//                 text: "Keep saving",
//                 subText: "Stay motivated",
//                 emoji: "🐷",
//                 effect: "Excellent! The tracker helps you keep going.",
//                 isBest: true
//               },
//               {
//                 text: "Quit because it is not done yet",
//                 subText: "Give up",
//                 emoji: "😕",
//                 hint: "A goal does not need to be finished right away to be working.",
//                 effect: "Tracking is meant to help you keep going, not quit.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 11,
//         title: "Emergency or Extra",
//         coinReward: 20,
//         context: [
//           {
//             term: "Emergency Need",
//             definition:
//               "Sometimes money must be used for an important problem or need."
//           }
//         ],
//         tips: "When a real need appears, it often comes before extras.",
//         questions: [
//           {
//             type: "drag-drop",
//             scenarioTitle: "Sort the Situations",
//             scenarioText: "Sort each item into Needs or Wants.",
//             heroEmoji: "🚨",
//             heroCaption: "Some choices are more important because of the situation.",
//             question: "Which items belong where?",
//             successMessage: "Perfect! You understood which choices are urgent needs and which are extras.",
//             generalHint:
//               "A need solves a real problem. A want is extra fun or comfort.",
//             items: [
//               { id: "u3l11i1", label: "Medicine", emoji: "💊", bucket: "need" },
//               { id: "u3l11i2", label: "New Lunch Box", emoji: "🥪", bucket: "need" },
//               { id: "u3l11i3", label: "Umbrella in Rain", emoji: "☔", bucket: "need" },
//               { id: "u3l11i4", label: "Warm Gloves", emoji: "🧤", bucket: "need" },
//               { id: "u3l11i5", label: "Candy", emoji: "🍬", bucket: "want" },
//               { id: "u3l11i6", label: "Glow Bracelet", emoji: "💫", bucket: "want" },
//               { id: "u3l11i7", label: "Trading Cards", emoji: "🃏", bucket: "want" },
//               { id: "u3l11i8", label: "Fancy Pencil Topper", emoji: "🎀", bucket: "want" }
//             ]
//           },
//           {
//             type: "scenario-choice",
//             scenarioTitle: "Rainy Walk Home",
//             scenarioText: "It is raining hard. You only have enough money for one item.",
//             heroEmoji: "🌧️",
//             heroCaption: "The situation can change what matters most.",
//             question: "Which choice is smartest right now?",
//             generalHint: "Think about what helps most in the weather today.",
//             options: [
//               {
//                 text: "Buy an umbrella",
//                 subText: "Useful today",
//                 emoji: "☔",
//                 effect: "Correct! The umbrella solves the important problem right now.",
//                 isBest: true
//               },
//               {
//                 text: "Buy a candy bar",
//                 subText: "Treat first",
//                 emoji: "🍫",
//                 hint: "Candy is extra, but the rain problem is more important.",
//                 effect: "Candy is a want. The umbrella is the important need today.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       },

//       {
//         id: 12,
//         title: "Celebrate Smartly",
//         coinReward: 20,
//         context: [
//           {
//             term: "Balanced Choice",
//             definition:
//               "A balanced choice can include a little fun without forgetting your goal."
//           }
//         ],
//         tips: "It is okay to enjoy small fun things when the plan still makes sense.",
//         questions: [
//           {
//             type: "budget-builder",
//             scenarioTitle: "Birthday Treat Plan",
//             scenarioText: "You have $14. You want a small birthday treat but also want to save some money.",
//             budget: 14,
//             heroEmoji: "🎂",
//             heroCaption: "Can you celebrate and still save?",
//             question: "Choose the smartest plan.",
//             generalHint: "Pick one small treat and keep part of the money safe.",
//             successMessage:
//               "Nice balance! You had a little celebration and still saved money.",
//             items: [
//               { id: "u3l12i1", name: "Cupcake", price: 3, emoji: "🧁", tag: "small treat" },
//               { id: "u3l12i2", name: "Juice", price: 2, emoji: "🧃", tag: "drink" },
//               { id: "u3l12i3", name: "Big Candy Box", price: 8, emoji: "🍬", tag: "larger extra" },
//               { id: "u3l12i4", name: "Save the Rest", price: 0, emoji: "🐷", tag: "goal money" }
//             ],
//             correctItemIds: ["u3l12i1", "u3l12i4"]
//           },
//           {
//             type: "scenario-choice",
//             scenarioTitle: "After the Celebration",
//             scenarioText: "You still care about your bigger goal after your birthday.",
//             heroEmoji: "🎯",
//             heroCaption: "Fun and goals can work together when you plan.",
//             question: "What should you remember next?",
//             generalHint: "Think about how your plan helped you celebrate and still save.",
//             options: [
//               {
//                 text: "Keep saving after the small treat",
//                 subText: "Back to the plan",
//                 emoji: "💰",
//                 effect: "Exactly! A small treat is okay when you keep the bigger plan going.",
//                 isBest: true
//               },
//               {
//                 text: "Stop saving because you already had fun",
//                 subText: "Forget the goal",
//                 emoji: "🛑",
//                 hint: "A small celebration does not mean the goal disappears.",
//                 effect: "The strongest choice is to enjoy a little fun and still continue your goal.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   },

//   grade5: {
//     unit1: [
//       {
//         id: 13,
//         title: "Coming Soon",
//         coinReward: 10,
//         context: [
//           {
//             term: "Next Step",
//             definition: "More lessons can be added here later."
//           }
//         ],
//         tips: "Grade 5 can be added after Grade 4 is finished.",
//         questions: [
//           {
//             type: "scenario-choice",
//             scenarioTitle: "More content later",
//             scenarioText: "Grade 4 is the focus right now.",
//             heroEmoji: "📚",
//             heroCaption: "You can expand this later.",
//             question: "What should you focus on first?",
//             options: [
//               {
//                 text: "Finish Grade 4 lessons",
//                 emoji: "✅",
//                 effect: "Good plan. Finish Grade 4 first.",
//                 isBest: true
//               },
//               {
//                 text: "Skip everything",
//                 emoji: "❌",
//                 hint: "The Grade 4 lesson system should be completed first.",
//                 effect: "Finish the Grade 4 lesson system first.",
//                 isBest: false
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// };

// export default lessonsData;


const lessonsData = {
  grade4: {
    unit1: [
      {
        id: 1,
        title: "Smart Choices Start Here",
        coinReward: 20,
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
    ]
  }
};

export default lessonsData;