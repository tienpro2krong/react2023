// noi day dinh nghia logic cap nhat state cua ung dung
// reducer se tiep nhan cac action duoc store goi vao
import { INCREMENT_COUNTER, DCREMENT_COUNTER } from "../actions/counter"
// khai bao state

const defaultState = {
    count: 0
}

export const counterReducer = (state = defaultState, action) => {
    // action: action dc store goi vao va chuyen cho reducer xu ly
    // state: old(cu)
    // ban chat: reducer se cap nhat state(tao ra sate moi - khong lam thay doi state cu ban dau)
    // reducer return ve la 1 object
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                ...{ count: state.count + action.payload.val }
                // action.payload.val: tham so truyen len
            }
        case DCREMENT_COUNTER:
            return {
                ...state,
                ...{ count: state.count - action.payload.val }
                // action.payload.val: tham so truyen len
            }
        default:
            return state;
    }
}