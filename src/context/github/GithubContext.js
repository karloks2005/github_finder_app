import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING',
        })
    }

    return (
        <GithubContext.Provider value={{
            ...state,
            dispatch,
            }}>

            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;