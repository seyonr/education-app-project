const assessmentsData = {
  grade4: {
    unit1: {
      title: "Unit 1 Quiz",
      questions: [
        {
          id: "g4u1q1",
          question: "Which choice is a need?",
          type: "multiple-choice",
          options: ["Candy", "Water", "Toy", "Sticker"],
          answerIndex: 1,
          feedback: "Water is something you need every day."
        },
        {
          id: "g4u1q2",
          question: "Saving money helps you reach goals faster.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "Saving helps you reach your goal faster."
        },
        {
          id: "g4u1q3",
          question: "Which choice is a want?",
          type: "multiple-choice",
          options: ["Water bottle", "New sneakers", "Birthday toy", "School lunch"],
          answerIndex: 2,
          feedback: "A birthday toy is fun but not required every day."
        },
        {
          id: "g4u1q4",
          question: "What is a smart money goal?",
          type: "multiple-choice",
          options: ["Buy everything", "Save for something important", "Spend daily", "Ignore your money"],
          answerIndex: 1,
          feedback: "Smart goals help you plan and save."
        },
        {
          id: "g4u1q5",
          question: "Needs vs wants: which is a want?",
          type: "multiple-choice",
          options: ["School supplies", "Lunch", "Video game", "Jacket"],
          answerIndex: 2,
          feedback: "A video game is fun, but not required."
        },
        {
          id: "g4u1q6",
          question: "Why is saving important?",
          type: "multiple-choice",
          options: ["To reach goals", "To buy every snack", "To waste money", "It is not important"],
          answerIndex: 0,
          feedback: "Saving helps you reach bigger goals."
        },
        {
          id: "g4u1q7",
          question: "Needs come before wants.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "Needs should come first when money is limited."
        },
        {
          id: "g4u1q8",
          question: "You have $12 for school. What should you buy first?",
          type: "multiple-choice",
          options: ["Notebook", "Stickers", "Candy", "Toy"],
          answerIndex: 0,
          feedback: "A notebook helps you be ready for class."
        },
        {
          id: "g4u1q9",
          question: "Small savings can still help you reach big goals.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "Small steps add up over time."
        },
        {
          id: "g4u1q10",
          question: "Your backpack breaks and you want a toy. What is the best choice?",
          type: "multiple-choice",
          options: ["Buy the backpack", "Buy the toy", "Buy candy", "Buy stickers"],
          answerIndex: 0,
          feedback: "Fixing a school need comes first."
        }
      ]
    },
    unit2: {
      title: "Unit 2 Quiz",
      questions: [
        {
          id: "g4u2q1",
          question: "Which is the best value?",
          type: "multiple-choice",
          options: ["One pencil for $4", "Four pencils for $3", "One pencil for $5", "Two pencils for $4"],
          answerIndex: 1,
          feedback: "More items for less money is better value."
        },
        {
          id: "g4u2q2",
          question: "Comparing prices helps you avoid overpaying.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "Checking prices helps you find a better deal."
        },
        {
          id: "g4u2q3",
          question: "A budget is a plan for how to use your money.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "Budgets help you choose and stay on track."
        },
        {
          id: "g4u2q4",
          question: "You have $12 for movie night. Which choice fits a smart budget?",
          type: "multiple-choice",
          options: ["Popcorn $4 + juice $3 + napkins $2", "Candy $8 + glow stick $5", "Two candy bags $8 + soda $5", "Glow stick $5 + candy $8"],
          answerIndex: 0,
          feedback: "Pick the basics first and stay under budget."
        },
        {
          id: "g4u2q5",
          question: "A big sale sign always means the best deal.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 1,
          feedback: "Smart shoppers still compare prices and value."
        },
        {
          id: "g4u2q6",
          question: "You need a water bottle. Which choice is smarter?",
          type: "multiple-choice",
          options: ["Bottle for $15 with sparkles", "Bottle for $8 that works well", "Spend $15 on snacks", "Buy nothing and forget"],
          answerIndex: 1,
          feedback: "A useful item for less money is better value."
        },
        {
          id: "g4u2q7",
          question: "What should you do before buying something big?",
          type: "multiple-choice",
          options: ["Compare prices and make a plan", "Spend fast", "Ignore your budget", "Buy the first thing you see"],
          answerIndex: 0,
          feedback: "Planning and comparing help you make a smart choice."
        },
        {
          id: "g4u2q8",
          question: "You have $10 for art supplies. Which plan makes sense?",
          type: "multiple-choice",
          options: ["Paper $3 + markers $4 + tape $2", "Glitter $4 + candy $3 + tape $2", "Candy $3 + glitter $4 + extra $4", "Markers $4 + glitter $4 + candy $3"],
          answerIndex: 0,
          feedback: "Choose the needed items first and stay under budget."
        },
        {
          id: "g4u2q9",
          question: "A good deal should still match what you need.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "Best value means it fits your needs, not just the price."
        },
        {
          id: "g4u2q10",
          question: "If you choose a cheaper option, what is a smart next step?",
          type: "multiple-choice",
          options: ["Save the extra money", "Spend it on random extras", "Forget about the plan", "Buy the most expensive item"],
          answerIndex: 0,
          feedback: "Saving the difference keeps your goal strong."
        }
      ]
    },
    unit3: {
      title: "Unit 3 Quiz",
      questions: [
        {
          id: "g4u3q1",
          question: "A goal tracker helps you see progress.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "Tracking shows how close you are to your goal."
        },
        {
          id: "g4u3q2",
          question: "What is a goal tracker used for?",
          type: "multiple-choice",
          options: ["To track progress", "To spend more", "To forget goals", "To buy snacks"],
          answerIndex: 0,
          feedback: "Tracking helps you see your progress."
        },
        {
          id: "g4u3q3",
          question: "Which is an emergency?",
          type: "multiple-choice",
          options: ["Broken glasses", "New toy", "Extra candy", "Sticker pack"],
          answerIndex: 0,
          feedback: "Emergencies are important needs."
        },
        {
          id: "g4u3q4",
          question: "Emergency money should be saved for urgent needs.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "Emergency money is for urgent needs."
        },
        {
          id: "g4u3q5",
          question: "What is the best celebration choice?",
          type: "multiple-choice",
          options: ["Small treat and save the rest", "Spend all money", "Buy the biggest item", "Forget your goal"],
          answerIndex: 0,
          feedback: "Celebrate a little and keep saving."
        },
        {
          id: "g4u3q6",
          question: "If you want a $30 item and save $5 each week, how many weeks?",
          type: "multiple-choice",
          options: ["6 weeks", "3 weeks", "10 weeks", "2 weeks"],
          answerIndex: 0,
          feedback: "$5 x 6 weeks = $30."
        },
        {
          id: "g4u3q7",
          question: "Which tool helps you track savings?",
          type: "multiple-choice",
          options: ["Sticker chart", "Shopping list", "Toy box", "Snack bag"],
          answerIndex: 0,
          feedback: "Charts or trackers show your progress."
        },
        {
          id: "g4u3q8",
          question: "A rainy day fund is for surprises that you need to handle.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "Emergency savings help with unexpected needs."
        },
        {
          id: "g4u3q9",
          question: "An extra is the same as an emergency.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 1,
          feedback: "Extras are wants, emergencies are needs."
        },
        {
          id: "g4u3q10",
          question: "What should you do after reaching a mini-goal?",
          type: "multiple-choice",
          options: ["Celebrate a little and keep saving", "Spend everything", "Stop tracking", "Forget the bigger goal"],
          answerIndex: 0,
          feedback: "Small celebrations can keep you motivated."
        }
      ]
    },
    unit4: {
      title: "Unit 4 Quiz",
      questions: [
        {
          id: "g4u4q1",
          question: "Which is a good way to earn money?",
          type: "multiple-choice",
          options: ["Do chores", "Wait and hope", "Spend all", "Forget goals"],
          answerIndex: 0,
          feedback: "Helping at home is a great way to earn."
        },
        {
          id: "g4u4q2",
          question: "Spend, save, and share are three smart money choices.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "Those are three good ways to use money."
        },
        {
          id: "g4u4q3",
          question: "Which is an example of earning money?",
          type: "multiple-choice",
          options: ["Walking a neighbor's dog", "Buying a toy", "Spending at the arcade", "Eating lunch"],
          answerIndex: 0,
          feedback: "Earning means doing work or helping for money."
        },
        {
          id: "g4u4q4",
          question: "Which choice shows saving?",
          type: "multiple-choice",
          options: ["Put money in a jar", "Buy candy", "Spend on toys", "Give up"],
          answerIndex: 0,
          feedback: "Saving means keeping money for later."
        },
        {
          id: "g4u4q5",
          question: "Which choice shows sharing?",
          type: "multiple-choice",
          options: ["Donate a little", "Spend all", "Hide money", "Buy extra candy"],
          answerIndex: 0,
          feedback: "Sharing can mean donating or helping others."
        },
        {
          id: "g4u4q6",
          question: "If you earn $20, what is a balanced plan?",
          type: "multiple-choice",
          options: ["Save $10, spend $6, share $4", "Spend all", "Save nothing", "Share everything"],
          answerIndex: 0,
          feedback: "A balanced plan can include saving, spending, and sharing."
        },
        {
          id: "g4u4q7",
          question: "Why should you plan before spending?",
          type: "multiple-choice",
          options: ["To reach goals", "To spend faster", "To waste money", "To forget needs"],
          answerIndex: 0,
          feedback: "Planning helps you use money wisely."
        },
        {
          id: "g4u4q8",
          question: "Earning money can come from helping others.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "Helping others is a great way to earn."
        },
        {
          id: "g4u4q9",
          question: "Which choice shows spending wisely?",
          type: "multiple-choice",
          options: ["Buy needs first", "Buy random extras", "Spend without a plan", "Spend everything"],
          answerIndex: 0,
          feedback: "Spending wisely means putting needs first."
        },
        {
          id: "g4u4q10",
          question: "Which is a smart way to reach a big goal?",
          type: "multiple-choice",
          options: ["Save a little each week", "Spend all now", "Buy extras only", "Stop tracking"],
          answerIndex: 0,
          feedback: "Small savings over time add up."
        }
      ]
    }
  },
  grade5: {
    unit1: {
      title: "Unit 1 Quiz",
      questions: [
        {
          id: "g5u1q1",
          question: "What is the first step before spending?",
          type: "multiple-choice",
          options: ["Think", "Swipe", "Spend fast", "Forget"],
          answerIndex: 0,
          feedback: "Thinking first helps you make smart choices."
        },
        {
          id: "g5u1q2",
          question: "New shoes for fun are a want.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "Shoes for fun are a want, not a need."
        },
        {
          id: "g5u1q4",
          question: "Saving helps you…",
          type: "multiple-choice",
          options: ["Reach goals", "Lose money", "Buy less later", "Forget goals"],
          answerIndex: 0,
          feedback: "Saving gets you closer to goals."
        },
        {
          id: "g5u1q5",
          question: "A budget is…",
          type: "multiple-choice",
          options: ["A plan for money", "A game", "A toy", "A receipt"],
          answerIndex: 0,
          feedback: "A budget is a plan for spending and saving."
        },
        {
          id: "g5u1q6",
          question: "What is a smart choice?",
          type: "multiple-choice",
          options: ["Spend on a goal", "Spend all on candy", "Ignore needs", "Buy random items"],
          answerIndex: 0,
          feedback: "Goals and needs come first."
        }
      ]
    },
    unit2: {
      title: "Unit 2 Quiz",
      questions: [
        {
          id: "g5u2q1",
          question: "A jacket is a need.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "A jacket keeps you warm."
        },
        {
          id: "g5u2q3",
          question: "Saving $2 each day for 5 days gives you…",
          type: "multiple-choice",
          options: ["$10", "$5", "$7", "$2"],
          answerIndex: 0,
          feedback: "$2 x 5 days = $10."
        },
        {
          id: "g5u2q4",
          question: "Why should you compare prices?",
          type: "multiple-choice",
          options: ["To save money", "To spend more", "To waste time", "To buy anything"],
          answerIndex: 0,
          feedback: "Comparing prices helps you save money."
        },
        {
          id: "g5u2q5",
          question: "What should you do with allowance?",
          type: "multiple-choice",
          options: ["Save some", "Spend all", "Lose it", "Forget it"],
          answerIndex: 0,
          feedback: "Saving some allowance is a smart habit."
        },
        {
          id: "g5u2q6",
          question: "Needs vs wants: which is a want?",
          type: "multiple-choice",
          options: ["Breakfast", "Homework", "New game", "School"],
          answerIndex: 2,
          feedback: "A new game is a want."
        }
      ]
    }
  },
  grade6: {
    unit1: {
      title: "Unit 1 Quiz",
      questions: [
        {
          id: "g6u1q1",
          question: "What is a smart money goal?",
          type: "multiple-choice",
          options: ["Save for a need", "Spend on everything", "Ignore money", "Buy random items"],
          answerIndex: 0,
          feedback: "Goals keep your spending focused."
        },
        {
          id: "g6u1q2",
          question: "A budget helps you…",
          type: "multiple-choice",
          options: ["Plan spending", "Spend more", "Forget goals", "Avoid saving"],
          answerIndex: 0,
          feedback: "Budgets are plans for spending and saving."
        },
        {
          id: "g6u1q3",
          question: "Shoes are a need.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "Shoes are a need."
        },
        {
          id: "g6u1q5",
          question: "Why save money?",
          type: "multiple-choice",
          options: ["Reach bigger goals", "Spend faster", "Buy only candy", "Ignore goals"],
          answerIndex: 0,
          feedback: "Saving helps you reach bigger goals."
        },
        {
          id: "g6u1q6",
          question: "A want is…",
          type: "multiple-choice",
          options: ["Extra for fun", "Something you must have", "Food", "Water"],
          answerIndex: 0,
          feedback: "Wants are nice, not necessary."
        }
      ]
    },
    unit2: {
      title: "Unit 2 Quiz",
      questions: [
        {
          id: "g6u2q1",
          question: "Comparing prices helps you…",
          type: "multiple-choice",
          options: ["Save money", "Spend more", "Forget goals", "Lose coins"],
          answerIndex: 0,
          feedback: "Price comparison saves money."
        },
        {
          id: "g6u2q2",
          question: "If you earn $5 a week, after 4 weeks you have…",
          type: "multiple-choice",
          options: ["$20", "$10", "$15", "$25"],
          answerIndex: 0,
          feedback: "$5 x 4 weeks = $20."
        },
        {
          id: "g6u2q3",
          question: "A phone case is a want, not a need.",
          type: "true-false",
          options: ["True", "False"],
          answerIndex: 0,
          feedback: "A phone case is a want, not a need."
        },
        {
          id: "g6u2q5",
          question: "Good money habits include…",
          type: "multiple-choice",
          options: ["Saving and planning", "Spending fast", "Ignoring goals", "No budgeting"],
          answerIndex: 0,
          feedback: "Saving and planning are good habits."
        },
        {
          id: "g6u2q6",
          question: "When you want something, you should…",
          type: "multiple-choice",
          options: ["Set a goal", "Spend everything", "Forget it", "Buy it now"],
          answerIndex: 0,
          feedback: "Setting a goal helps you plan."
        }
      ]
    }
  }
};

export default assessmentsData;
