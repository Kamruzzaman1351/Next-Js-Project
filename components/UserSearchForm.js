import { useContext } from "react"
import GithubContext from "../context/github"
const UserSearchForm = () => {
    const {users, getUsers} = useContext(GithubContext)
    const onFormSubmit = (e) => {
        e.preventDefault();
        const login = document.querySelector('#login').value
        getUsers(login)
    }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <form onSubmit={onFormSubmit}>
            <div className='form-control'>
                <div className='relative'>
                    <input 
                        type="text"
                        className="w-full pr-40 bg-gray-200 input input-lg text-black"
                        placeholder="Search Users..."
                        id="login"
                    />
                    <button 
                        className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                        type="submit"
                    >GO</button>
                </div>
            </div>
        </form>
        { users.length > 0 && (
            <div>
                <button className='btn btn-ghost btn-lg'>Clear</button>
            </div>
        )}
        
    </div>
  )
}

export default UserSearchForm