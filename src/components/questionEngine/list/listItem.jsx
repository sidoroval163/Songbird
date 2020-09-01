import React from 'react';
import { connect } from 'react-redux';
import { roundEnder, currentBird, changeStyleListCorrect, changeStyleListIncorrect, scoreDown } from '../../store/actions/action';




const connector = connect(
    state => ({
        round: state.game.round,
        menu: state.view.menu,
        inf: state,
        isEnd: state.game.isEnd,
        score: state.game.score,
    }),
    dispatch => ({
        roundEnd: (value) => dispatch(roundEnder(value)),
        currentBirdChanger: (value) => dispatch(currentBird(value)),
        changeListStyleCorrect: (value, obj) => dispatch(changeStyleListCorrect(value, obj)),
        changeStyleListIncorrect: (value, obj) => dispatch(changeStyleListIncorrect(value, obj)),
        scoreDown: (value) => dispatch(scoreDown(value)),
    })

)


const ListItem = ({ birdsData, counter, roundEnd, currentBirdChanger, menu, index, changeListStyleCorrect, changeStyleListIncorrect, isEnd, score, scoreDown }) => {
    let active = ''
    if (menu[index + 1]) {
        active = ' list-active'
    } else if (menu[index + 1] === null) {
        active = '';
    }
    else {
        active = ' list-wrong'

    }
    const check = () => {
        if (counter + 1 === birdsData.id) {

            roundEnd(true);
            changeListStyleCorrect(birdsData.id, menu)
        } else if (counter + 1 !== birdsData.id && !isEnd) {
            scoreDown(score - 1);
            changeStyleListIncorrect(birdsData.id, menu)

        }
        currentBirdChanger(birdsData.id);
    };
    return (<div className={"tapItem" + active} onClick={check}>
        {birdsData.name}
    </div>)
};

export default connector(ListItem);