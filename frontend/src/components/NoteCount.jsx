import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"



export default function NoteCount({fetchedNotes}) {

  const {theme} = useContext(ThemeContext)

  return (
    <p className={`text-[16px] font-[400] theme-transition ${theme ? 'text-[var(--custom-color-1)]' : 'text-white'}`}>
      {fetchedNotes.data.length} item(s)
    </p>
  )
}
