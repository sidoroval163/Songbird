import React from 'react';
import birdsData from '../data/data';
import Question from './question';
import List from './list/list';
import { connect } from 'react-redux';
import { changeRound } from '../store/actions/action';
import Info from './info';

const connector = connect(
    state => ({
        round: state.game.round,
    }),
    dispatch => ({ changeRound: (value) => dispatch(changeRound(value)) })

)


const QuestionEngine = ({ round }) => {
    const random = Math.round(Math.random() * 5);

    return (
        <div className="gameContainer">
            <Question
                birdsData={birdsData[round][random]} />
            <div className="gameSection">
                <div className="listBirds">
                    <List birdsData={birdsData[round]} counter={random} />
                </div>

                <div className="birdsData">
                    <Info birdsData={birdsData[round]} />
                </div>
            </div>
        </div>

    )
};

export default connector(QuestionEngine);