import React from 'react';
import { connect } from 'react-redux';
import { changeRound, roundEnder, currentBird, resetStyle, scoreDown } from './store/actions/action';


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
        resetScore: (obj) => dispatch(scoreDown(obj)),
    }),





)

const Congratulation = ({ round, changeRound, roundEnd, newChangedBird, score, resetScore }) => {
    const nextRound = () => {
        round = 0;
        score = 0;



        resetScore(score);
        changeRound(round);
        roundEnd(false);
        newChangedBird(null);
        document.querySelector(".question").classList.remove("hidden");
        document.querySelector(".gameSection").classList.remove("hidden");
        document.getElementById("new").classList.add("hidden");
        document.querySelector(".Grats").classList.add("hidden");

    };
    return (<div className="Grats hidden">
        <div className="songtext">Поздравляем, Вы набрали {score} баллов </div>
        <button id="new" className="buttonNew" onClick={nextRound}>Новая игра</button>
    </div>)
}


export default connector(Congratulation);