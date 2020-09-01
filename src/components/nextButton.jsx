import React from 'react';
import { connect } from 'react-redux';
import { changeRound, roundEnder, currentBird, resetStyle, scoreUp, } from './store/actions/action';


const connector = connect(
    state => ({
        round: state.game.round,
        isEnd: state.game.isEnd,
        menu: state.view.menu,
        score: state.game.score,
    }),
    dispatch => ({
        changeRound: (value) => dispatch(changeRound(value)),
        roundEnd: (value) => dispatch(roundEnder(value)),
        newChangedBird: (value) => dispatch(currentBird(value)),
        resetStyles: (obj) => dispatch(resetStyle(obj)),
        scoreUp: (value) => dispatch(scoreUp(value)),
    }),


)

const NextButton = ({ round, changeRound, isEnd, roundEnd, newChangedBird, resetStyles, menu, score, scoreUp }) => {


    const nextRound = () => {
        resetStyles(menu);
        if (round < 5) {

            scoreUp(score += 5);

            changeRound(round + 1);
            roundEnd(false);
            newChangedBird(null);

        }
        else if (round === 5) {
            document.querySelector(".question").classList.add("hidden");
            document.querySelector(".gameSection").classList.add("hidden");
            document.getElementById("new").classList.remove("hidden");
            document.querySelector(".Grats").classList.remove("hidden");

        }
    }
    return (<button id="next" className="buttonNext" disabled={!isEnd} onClick={nextRound}>ДАЛЕЕ</button>)
};


export default connector(NextButton);
