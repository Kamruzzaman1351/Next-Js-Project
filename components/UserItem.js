import Link from "next/link"

const UserItem = ({user:{avatar_url, login}}) => {
  return (
    <div className="card shadow-md compact side bg-base-100">
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt="avater" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">{login}</h2>
                <Link href={`user/${login}`} className="text-base-content text-opacity-40"> View Profile</Link>
            </div>
        </div>
    </div>
  )
}

export default UserItem