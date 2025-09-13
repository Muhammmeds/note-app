import { ThemeContext} from "../context/ThemeContext"
import { useContext } from "react"
import { UseUpdateNote } from "../hooks/UseUpdateNote"
import { UseDeleteNote } from "../hooks/UseDeleteNote"

export default function Notes({fetchedNotes , setRefresh}) {

      const {theme} = useContext(ThemeContext)
      const { UpdateNote } = UseUpdateNote()
      const { DeleteNote } = UseDeleteNote()



  return (
    <div>
        {fetchedNotes && fetchedNotes.map(eachnote => (
          <div key={eachnote.id} className="flex mb-3 gap-3 relative">
            {eachnote.is_completed == 1 && <svg onClick={()=>UpdateNote(setRefresh,eachnote.id)} width="30" height="30" viewBox="0 0 43 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
            <path  d="M3 11.3152C3.71163 11.3941 5.23772 13.897 5.54889 14.4564C6.16725 15.5682 6.7685 16.5968 7.29611 17.7825C7.49278 18.3718 10.0508 24.2764 10.2253 24.8863C10.3998 25.4963 10.616 26.4843 11.0165 25.7243C12.3337 24.4086 17.5249 16.7124 23.0211 12.3417C26.9881 9.18712 29.3277 7.4451 33.9251 5.31643C36.229 4.24968 38.8783 4.07959 40 3" stroke="#EE889A" stroke-width="6" stroke-linecap="round"/>
            </svg>}

            <svg onClick={()=>UpdateNote(setRefresh,eachnote.id)} width="30" height="30" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3.88949C7.38296 3.88949 11.7837 4.08716 16.1836 4.08716C21 4 24 4 28.1295 4.08716C29.4521 4.19405 36.1735 4.26286 37.5 4.26286C38.1382 4.26286 41.5659 4.50583 42.171 4.26286C42.9564 3.94746 43 4.71422 43 5.27314C42.6212 7.8021 41.9637 13.4804 41.9637 16.0349C41.9637 19.1691 41.2277 25.5904 41 31.5C40.8296 35.9209 40.8831 41.7958 41.0541 42.489C41.2449 43.2622 39.1197 42.9283 39.1197 42.9283C39.1197 42.9283 31.5916 41.745 24.5 41.5446C21.9387 41.4722 14.4393 41.5446 14.4393 41.5446L7.36385 41.3469C7.36385 41.3469 6.1263 41.284 5.48705 41.2481M5.42296 41.2105C5.44527 39.3483 6.64997 31.6614 6.64997 31.6614C6.64997 31.6614 6.48123 19.8604 6.5 16.5C6.5245 12.1125 6.46194 10.7233 6.21244 6.61287C6.16248 5.78995 6.10881 5.21755 6.10881 4.50445C6.10881 4.21534 5.77674 3.15835 6.10881 3" stroke="#DCDCDC" stroke-width="6" stroke-linecap="round"/>
            </svg>

            <p onClick={()=>UpdateNote(setRefresh,eachnote.id)} className={`text-[20px] theme-transition font-bold ${theme ? 'text-[var(--custom-color-1)]' : 'text-white'}`}>{eachnote.note}</p>

          <svg onClick={()=>DeleteNote(setRefresh,eachnote.id)} width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.73708 6.54391V18.9857C5.73708 19.7449 6.35257 20.3604 7.11182 20.3604H16.8893C17.6485 20.3604 18.264 19.7449 18.264 18.9857V6.54391M2.90906 6.54391H21.0909" stroke={theme ? "#1C1C1C" : "#F7F7F7"} stroke-width="1.7" stroke-linecap="round"></path> <path d="M8 6V4.41421C8 3.63317 8.63317 3 9.41421 3H14.5858C15.3668 3 16 3.63317 16 4.41421V6" stroke={theme ? "#1C1C1C" : "#F7F7F7"} stroke-width="1.7" stroke-linecap="round"></path> </g></svg>          </div>
        ))}
    </div>
  )
}
