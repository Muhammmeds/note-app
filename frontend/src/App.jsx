import NoteCount from "./components/NoteCount"
import ThemeMode from "./components/ThemeMode"
import Input from "./components/Input"
import AddButton from "./components/AddButton"
import { useEffect, useState } from "react"
import { UseAddNote } from "./hooks/UseAddNote"
import { UseFetchNotes } from "./hooks/UseFetchNotes"
import Notes from "./components/Notes"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

function App() {
  const [note, setNote] = useState('')
  const { AddNote } = UseAddNote()
  const {fetchedNotes , FetchNotes } = UseFetchNotes()
  const [refresh, setRefresh] = useState(false);
 

  const {theme } = useContext(ThemeContext)



  useEffect(()=>{
      FetchNotes()
  },[refresh])


  if(fetchedNotes.loading){
    return <p>Loading...</p>
  }

  return (
    <>
    <section   className={`h-screen w-full flex justify-center items-center theme-transition ${theme ? 'bg-[var(--bg-color-light)]' : 'bg-[var(--bg-color-dark)]'}`}>
      <div className={`w-1/2 h-[70%] theme-transition shadow-lg rounded-lg flex flex-col p-6 ${theme ? 'bg-white' : 'bg-[var(--custom-color-1)]]'}`}>
        <div className={`h-[15%] w-full border-b-2 theme-transition border-dashed flex justify-between items-center ${theme ? 'border-[#DCDCDC]' : 'border-[#4B5255]'}`}>
          <div className="flex items-center gap-8">
              <p className={`text-[32px] theme-transition font-bold ${theme ? 'text-[var(--custom-color-1)]' : 'text-white'} `}>My Note App</p>
              
              <NoteCount fetchedNotes = {fetchedNotes} />
          </div>
          <div>
              <ThemeMode />
          </div>

        </div>
        <div className="h-[70%] w-full pt-4">
            {fetchedNotes.data.length >= 1 ? <Notes fetchedNotes={fetchedNotes.data} refresh={refresh} setRefresh={setRefresh}/> : <p className="font-[200] text-[20px] text-[#B7BCBF]">Your list is empty</p>}
        </div>
        <div className={`h-[15%] theme-transition flex border-t-2 border-dashed w-full ${theme ? 'border-[#DCDCDC]' : 'border-[#4B5255]'}`}>
          <Input setNote={setNote} note={note}/>
          <AddButton AddNote={()=>AddNote(note , setNote , setRefresh)}  />
        </div>
      </div>
    </section>
    </>
  )
}

export default App
