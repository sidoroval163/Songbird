import React from 'react';
import Player from '../player';
import { connect } from 'react-redux';

const connector = connect(
    state => ({
        isEnd: state.game.isEnd,
    }),


)
const Question = ({ birdsData, isEnd },) => {
    return (
        <div className="question">
            <img className="questionIMG" src={isEnd ? birdsData.image : "https://memepedia.ru/wp-content/uploads/2017/06/%D0%BA%D0%B8%D0%B2%D0%B8-%D1%81-%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8-%D0%BC%D0%B5%D0%BC.jpg"} alt="bird"></img>
            <div className="questionSide">
                <div className="questionText">{isEnd ? birdsData.name : "****"}</div>
                <div className="questionPlayer"><Player audio={birdsData.audio} /></div>
            </div>
        </div>
    )
}

export default connector(Question);