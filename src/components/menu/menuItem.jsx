import React from 'react';
import { connect } from 'react-redux';

const connector = connect(
    state => ({
        round: state.game.round,
    }),
)

const MenuItem = ({ elem, index, round }) => {
    let active = '';
    if (index === round) {
        active = 'active'
    }

    return (<span className={active} >{elem}</span>)
}

export default connector(MenuItem);