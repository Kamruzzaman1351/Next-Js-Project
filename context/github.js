import { createContext, useReducer } from "react";
import gitReducer from "./gitReducer";
import axios from "axios"
const GithubContext = createContext()
const gitToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN
const gitUrl = process.env.NEXT_PUBLIC_GITHUB_URL

const gitHub = axios.create({
    baseURL: gitUrl,
    headers: { Authorization: `token ${gitToken}`}
})

export const GitProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: false,
    }
    const [state, dispatch] = useReducer(gitReducer, initialState)
    const setLoading = () => {dispatch({type: "SET_LOADING"})}
    // Fetch Github Users
    const getUsers = async(login) => {
        setLoading();
        const users = await gitHub(`/search/users?q=${login}`);
        dispatch({
            type: "GET_USERS",
            payload: users.data.items,
        })
    };
    return <GithubContext.Provider 
        value={{
            ...state,
            getUsers,
        }}
    >
        {children}
    </GithubContext.Provider>
}


export default GithubContext