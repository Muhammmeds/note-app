import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
export default function AddButton({AddNote}) {

    const {theme} = useContext(ThemeContext)
  return (
    <div className='w-[20%] h-full flex items-center justify-center' onClick={AddNote}>
      <button className={`bg-[#EE889A] theme-transition text-[20px] font-bold rounded-3xl px-8 py-2 hover:brightness-75 ${theme ? 'text-[var(--custom-color-1)]' : 'text-white'}`}>Add item</button>
    </div>
  )
}
