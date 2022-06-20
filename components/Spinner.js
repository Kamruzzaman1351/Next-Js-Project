import spinner from "../assest/spinner.gif"
import Image from "next/image"
const Spinner = () => {
  return (
    <div>
        <div className="w-100 mt-20">
            <div className="text-center mx-auto">
                <Image width={180} src={spinner} alt="Loading" />                
            </div>
        </div>
    </div>
  )
}

export default Spinner