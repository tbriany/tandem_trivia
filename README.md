# tandem_trivia

Tandem_triva is a game that displays trivia questions with multiple-choice answers to select from. The player can view the questions, the answer choices, the correct answer upon submission, and their score. 

Built with React.js. 

## Assumptions 
* A round of trivia has 10 questions
* All questions are multiple-choice questions
* Your score does not need to update in real time
* Results can update on form submit, button click, or any interaction you choose
* Trivia data such as the questions, correct, and incorrect answers are provided via a JSON file

## Acceptance Criteria
* A user can view questions.
* Questions with their multiple choice options must be displayed one at a time.
* Questions should not repeat in a round.
* A user can select only 1 answer out of the 4 possible answers.
* The correct answer must be revealed after a user has submitted their answer.
* A user can see the score they received at the end of the round.


## Technologies Used

* React.js. For the front-end/client interface of the app.
* CSS3. For the styling of the app.


##  Local Setup

1. Clone this repo: 
  
   git clone git@github.com/tbriany/tandem_trivia.git 

2. Install dependencies in the React App (trivia_game folder):

   cd trivia_game && npm install

3. To launch the React App, inside the trivia_game folder, and preferably in another terminal window run:
 
   npm start
 
A new browser tab should have been opened and the App should be running. If that is not the case check the terminals output for errors, if you are unable to troubleshoot the problem, I would be happy to address issues so open one.
