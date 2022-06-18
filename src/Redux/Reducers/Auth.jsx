
import { AUTH_VARI } from "../Action/Auth";

const initStore = {
    login: false
}

export const AuthReducer = (store=initStore, action) => {
    switch(action.type) {
        case AUTH_VARI:
            return {...store, login: action.payload}

            default:
                return store
    }
}