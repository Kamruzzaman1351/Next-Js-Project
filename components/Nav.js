import Link from "next/link"
import {FaGithub} from "react-icons/fa"

const Nav = () => {
  return (
    <nav className="navbar md-12 shadow-lg bg-neutral text-neural-content text-white">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link href="/" className="text-lg font-bold align-middle">Github User Fiender</Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <p className="btn btn-ghost btn-sm rounded-btn">
                <Link href="/">Home</Link>
            </p>
            <p className="btn btn-ghost btn-sm rounded-btn">
                <Link href="/about">About</Link>
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav