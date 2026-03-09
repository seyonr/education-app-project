// Temp place holder data
const lessonsData = {
  grade4: {
    unit1: [
      {
        id: 1, title: "Decision Making",
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
              "https://cdn-icons-png.flaticon.com/512/3250/3250484.png"
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
            question: "💰 You earned $20.\n 🧸 A toy costs $20.\n 🚲 A bike costs $80\n\nWhat is the best choice?",
            options: [

              {
                text: "Buy the toy ",
                subText: "Have fun today",
                img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png"
              },
              {
                text: "Save the money",
                subText: "Save money for Bike",
                img: "https://pngimg.com/d/piggy_bank_PNG56.png"
              },
              {
                text: "Earn More",
                subText: "Reach your goal faster",
                img: "https://www.pngkey.com/png/full/410-4105142_work-business-company-hr-employee-vector-laptop-labor.png"
              },

            ],
            images: [
              {
                questionImg: "https://media.istockphoto.com/id/1372454520/vector/little-son-buying-toys-with-money-on-his-piggy-bank.jpg?s=612x612&w=0&k=20&c=Srv5aBYmb6IZfUcSNjVi2ZQQftSriWgkbwDogwSWmv4=",
              }
            ],
            correctAns: "Save the money",
          },
          {
            question: "💰 You have $10 saved.\n🎮 A video game costs $25.\n🍬 Candy costs $2\n\nWhat is the best choice?",
            options: [
              {
                text: "Buy candy",
                subText: "A small treat today",
                img: "https://cdn-icons-png.flaticon.com/512/16671/16671618.png"
              },
              {
                text: "Save your money",
                subText: "Get closer to the game",
                img: "https://pngimg.com/d/piggy_bank_PNG56.png"
              },
              {
                text: "Earn more money",
                subText: "Reach your goal faster",
                img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              }
            ],
            images: [
              {
                questionImg: "https://cdn-icons-png.flaticon.com/512/2331/2331941.png"
              }
            ],
            correctAns: "Save your money"
          },
          {
            question: "🏫 You have $15.\n📓 A notebook costs $10.\n🍦 Ice cream costs $5\n\nWhat is the best choice?",
            options: [
              {
                text: "Buy the notebook",
                subText: "It helps with school",
                img: "https://cdn-icons-png.flaticon.com/512/2541/2541988.png"
              },
              {
                text: "Buy ice cream",
                subText: "A fun treat right now",
                img: "https://cdn-icons-png.flaticon.com/512/3250/3250484.png"
              },
              {
                text: "Save all the money",
                subText: "Use it another day",
                img: "https://pngimg.com/d/piggy_bank_PNG56.png"
              }
            ],
            images: [
              {
                questionImg: "https://static.vecteezy.com/system/resources/thumbnails/008/734/694/small/happy-school-children-in-front-of-building-school-vector.jpg"
              }
            ],
            correctAns: "Buy the notebook"
          },
        ]
      },
      {
        id: 2, title: "Needs vs Wants",
        context: [
          {
            term: "Needs",
            definition: "Needs are things that you cannot live without.",
            example_img: [

              "https://cdn.vectorstock.com/i/1000v/65/51/delicious-food-cartoon-vector-23756551.jpg",
              "https://img.freepik.com/premium-photo/cartoon-water-bottle-clipart-white-background_924727-126093.jpg",
              "https://img.freepik.com/free-vector/charming-house-with-tree-illustration_1308-176337.jpg",
              "https://www.clipartmax.com/png/middle/0-6367_cartoon-clothes-rack-pnf.png"

            ]
          },
          {
            term: "Wants",
            definition: "Wants are things that are for fun, but are optional",
            example_img: [
              "https://img.freepik.com/free-vector/character-playing-videogame_23-2148540059.jpg",
              "https://i.fbcd.co/products/resized/resized-750-500/2780626747503ed1d35cc41e5ca8794cab74f6331d2052147f9d58fa96c33e67.jpg",
              "https://c8.alamy.com/comp/MJWDT5/sweets-candy-cakes-icons-set-cartoon-style-MJWDT5.jpg"
            ]
          },

        ],

        tips: (
          <>
            Take care of your <strong>needs</strong> first, then spend on things you <strong>want</strong>.
          </>
        ),

        questions: [
          {
            question: "💰 You have $10.\n📓 Notebook: $8\n🍦 Ice cream: $5\n\nWhat should you buy?",
            options: [
              {
                text: "Buy the notebook",
                subText: "You need it for school",
                img: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
              },
              {
                text: "Buy ice cream",
                subText: "A fun treat",
                img: "https://cdn-icons-png.flaticon.com/512/3250/3250484.png"
              }
            ],
            images: [
              {
                questionImg: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              }
            ],
            correctAns: "Buy the notebook",
            correctFeedback: "Great choice! A notebook is something you need for school.",
            wrongFeedback: "Ice cream is fun, but it is not something you really need.",


          },
          {
            question: "💰 You have $20.\n👟 Shoes for gym: $18\n🍫 Chocolate: $4\n🧸 Toy: $20\n\nWhat should you buy?",
            options: [
              {
                text: "Buy the shoes",
                subText: "You need them for gym",
                img: "https://cdn-icons-png.flaticon.com/512/2589/2589903.png"
              },
              {
                text: "Buy chocolate",
                subText: "A sweet snack",
                img: "https://cdn-icons-png.flaticon.com/512/7061/7061942.png"
              },
              {
                text: "Buy the toy",
                subText: "Something fun",
                img: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-toy-drive-vector-png-image_7014253.png"
              }
            ],
            images: [
              {
                questionImg: "https://www.shutterstock.com/image-vector/cute-nice-design-sporting-goods-260nw-2196833697.jpg"
              }
            ],
            correctAns: "Buy the shoes"
          },
          {
            question: "💰 You saved $25.\n🎒 Backpack: $20\n🍬 Candy: $3\n\nWhat is the better choice?",
            options: [
              {
                text: "Buy the backpack",
                subText: "You need it for school",
                img: "https://p7.hiclipart.com/preview/949/463/664/school-cartoon-bag-school.jpg"
              },
              {
                text: "Buy candy",
                subText: "A small treat",
                img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png"
              }
            ],
            images: [
              {
                questionImg: "https://static.vecteezy.com/system/resources/thumbnails/047/392/195/small/school-building-cartoon-clipart-illustration-png.png"
              }
            ],
            correctAns: "Buy the backpack"
          },
          {
            question: "💰 You have $15.\n🥪 Lunch: $8\n🎮 Game: $15\n🍦 Ice cream: $5\n🍬 Candy: $3\n\nWhat should you buy first?",
            options: [
              {
                text: "Buy lunch",
                subText: "Food is important",
                img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              },
              {
                text: "Buy the game",
                subText: "A fun activity",
                img: "https://cdn-icons-png.flaticon.com/512/8848/8848930.png"
              },
              {
                text: "Buy ice cream",
                subText: "A sweet treat",
                img: "https://cdn-icons-png.flaticon.com/512/3250/3250484.png"
              },
              {
                text: "Buy candy",
                subText: "Another snack",
                img: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png"
              }
            ],
            images: [
              {
                questionImg: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
              }
            ],
            correctAns: "Buy lunch"
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
