import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
export default function Input({setNote , note}) {

    const {theme} = useContext(ThemeContext)


    const HandleChange = (e) =>{
        setNote(e.target.value)
    }

  return (
    <>
        <input
        value={note}
        onChange={HandleChange}
        className={`h-full w-[80%] list-input text-[20px] 
            ${theme ? 'text-[var(--custom-color-1)] placeholder-[var(--custom-color-1)]' : 'text-white placeholder-white'}`}
        placeholder='Type your note here'
        />
    </>
  )
}
