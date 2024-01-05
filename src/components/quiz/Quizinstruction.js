import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import screenshot from '../../assests/screenshot.png'; // Import the image
import answer from '../../assests/answer.png'; // Import the image


const QuizInstructions = () => (
    <Fragment>
        <Helmet>
            <title>Quiz Instructions - Quiz App</title>
        </Helmet>
        <div className="instructions">
            <h1>How to Play the Game</h1>
            <p>Ensure you read this guide from start to finish.</p>
            <ul className="browser-default" id="main-list">
                <li>The game has a duration of 15 minutes and ends as soon as your time elapses.</li>
                <li>Each game consists of 15 questions.</li>
                <li>
                    Every question consists of 4 options. <br/>
                    <img src={screenshot} alt="Quiz app options" />
                </li>
                <li>Select an option which best answer for the question.<br/>
                    <img src={answer} alt="Quiz app answer"/>
                </li>
                <li>Each game has 2lifelines namely.
                    <ul id="sublist">
                        <li>2 50-50 chances</li>
                        <li>5 Hints</li>
                    </ul>
                    
                </li>
                <li>Selecting a 50-50 lifelines by clicking the icon 
                    <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                    will remove 2 wrong answers, leaving the correct answer and one wrong answer
                    <img src={answer} alt="Quiz app answer"/></li>
                <li>Using a hint by clicking the icon 
                    <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span> 
                    will remove one wrong answer leaving two wrong answers and one correct answer. You can use as many hints as you want.</li>
                    <img src={answer} alt="Quiz app example"/>
                    <li>Feel free to quit the game at any time. In this case you score will be revealed afterwards.</li>
                    <li>The timer starts as soon as the game loads.</li>
                    <li>Let's go this if you think you've got what it takes?</li>
            </ul>
            <div>
                <span className="left"><Link to="/">No take me back</Link></span>
                <span className="right"><Link to="/play/quiz">Okey, let's do this</Link></span>            </div>

        </div>
    </Fragment>
);

export default QuizInstructions;
