import { useSelector } from "react-redux"

const display = () => {
    const {counterVal} = useSelector((store) => store.counter)
    const isPrivacy = useSelector((store)=>store.privacy)
    return (
        <div>
            <p className="text-2xl">Counter Current Value: {isPrivacy? counterVal: 'hidden'}</p>
        </div>
    )
}

export default display