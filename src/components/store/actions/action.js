import { ROUND, IS_END, CURR_BIRD, STYLE_CORRECT, STYLE_INCORRECT, STYLE_RESET, SCORE_UP, SCORE_DOWN } from "../const";

export function changeRound(value) {
    return {
        type: ROUND,
        value,
    }
}

export function roundEnder(value) {
    return {
        type: IS_END,
        value,
    }
}

export function currentBird(value) {
    return {

        type: CURR_BIRD,
        value,
    }

}

export function changeStyleListCorrect(value, obj) {
    obj[value] = true;
    return {
        type: STYLE_CORRECT,
        value: obj
    }
}


export function changeStyleListIncorrect(value, obj) {
    obj[value] = false
    return {
        type: STYLE_INCORRECT,
        value: obj
    }
}

export function resetStyle(obj) {

    return {
        type: STYLE_RESET,
        value: obj
    }
}

export function scoreUp(value) {
    return {
        type: SCORE_UP,
        value,
    }

}

export function scoreDown(value) {
    return {
        type: SCORE_DOWN,
        value,
    }

}