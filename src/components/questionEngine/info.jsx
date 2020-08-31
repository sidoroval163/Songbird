import React from 'react';
import Player from '../player';
import { connect } from 'react-redux';



const connector = connect(
    state => ({
        birds: state.game.currentBird,
        test: state.view[1],
        score: state.game.score,
    })



)






const Info = ({ birdsData, birds, score }) => {

    if (birds) {
        return (

            <div className="infoContainer">
                <div className="upperInfo">
                    <img className="questionIMG" src={birdsData[birds - 1].image} alt="bird"></img>
                    <div className="nameAndPlayer">
                        <div className="questionText">{birdsData[birds - 1].name}</div>
                        <div className="latinText">{birdsData[birds - 1].species}</div>
                        <div><Player audio={birdsData[birds - 1].audio} /></div>
                    </div>
                </div>
                <div className="description">{birdsData[birds - 1].description}</div>

            </div>
        )
    }
    else if (score === 30) {
        return (

            <div className="infoContainer">
                <div className="upperInfo">

                    <div className="nameAndPlayer">
                        <div className="questionText">ПОЗДРАВЛЯЕМ ВЫ ЧИРИК_ЧИРИК ЗНАТОК!</div>


                    </div>
                </div>


            </div>
        )
    }
    else {
        return (

            <div className="infoContainer">
                <div className="upperInfo">

                    <div className="nameAndPlayer">
                        <div className="questionText">Угадайте: какая это птичка поет?</div>


                    </div>
                </div>


            </div>
        )
    }

}

export default connector(Info);
