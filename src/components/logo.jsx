import React from 'react';
import { connect } from 'react-redux';

const connector = connect(
    state => ({

        score: state.game.score,
    }),



)

const Logo = ({ score }) => {
    return (<div className="logo">
        <div className="songtext">Songbird</div>
        <div className="songScore">Score:{score}</div>
    </div>)
}


export default connector(Logo);