import api from '../api';
import { toast } from 'react-toastify';


export const UseDeleteNote = () =>{


    const DeleteNote = (setRefresh,id) =>{
       
       api.delete(`${import.meta.env.VITE_API_BASE_URL}/notes/${id}`)
      .then(response => {
        console.log(response.data);
        toast.success('Note Deleted ✅', { autoClose: 500 })
        setRefresh(prev => !prev)
       
      })
      .catch(error => {
        console.error(error);
      });
    }

    return {DeleteNote}

}