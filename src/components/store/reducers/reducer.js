import { ROUND, IS_END, CURR_BIRD, STYLE_CORRECT, STYLE_INCORRECT, STYLE_RESET, SCORE_UP, SCORE_DOWN } from "../const";
import { combineReducers } from "redux";

const defaultGame = { round: 0, isEnd: false, currentBird: null, score: 0, }

const game = (state = defaultGame, action) => {
    switch (action.type) {
        case ROUND: return { ...state, round: action.value }
        case IS_END: return { ...state, isEnd: action.value }
        case CURR_BIRD: return { ...state, currentBird: action.value }
        case SCORE_UP: return { ...state, score: action.value }
        case SCORE_DOWN: return { ...state, score: action.value }

        default: return state
    }
}
const defaultView = { menu: { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, } }
const view = (state = defaultView, action) => {
    switch (action.type) {
        case STYLE_CORRECT: return { ...state, menu: action.value }
        case STYLE_INCORRECT: return { ...state, menu: action.value }
        case STYLE_RESET: return { ...state, menu: { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, } }
        default: return state
    }

}

const reducer = combineReducers({
    game,
    view,
})
export default reducer;