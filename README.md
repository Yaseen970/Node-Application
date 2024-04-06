# Node-Application
This is a simple quiz application built using Node.js and Express.js that tests users' knowledge on Node.js concepts. Users can access the quiz questions via HTTP endpoints, submit their answers, and receive feedback on their scores.

1. Installation
   Clone the repository to your local machine:
   git clone https://github.com/Yaseen970/Node-Application.git

   Install dependencies using npm:
   npm install

2. Usage
    To start the application, run the following command:
    node server.js
    The server will start running on http://localhost:3000.
    Open your web browser and navigate to http://localhost:3000 to access the quiz interface.

3. Endpoints
    /questions: GET endpoint to fetch a random quiz question.
    /submitAnswers: POST endpoint to submit answers and receive feedback.

4. Quiz Structure
    The quiz questions are stored in JSON format and include the following structure:
    {qid:1,question:'Node.js is written in',answer:'javascript',options:{a:'javascript',b:'java',c:'c++',d:'python'}}

5. Feedback
    After submitting all answers, users will receive feedback indicating  their total score. 

6. License
    This project is licensed under the MIT License.