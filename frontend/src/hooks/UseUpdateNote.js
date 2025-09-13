import api from '../api';
import { toast } from 'react-toastify';


export const UseUpdateNote = () =>{


    const UpdateNote = (setRefresh,id) =>{
       
       api.patch(`${import.meta.env.VITE_API_BASE_URL}/notes/${id}`)
      .then(response => {
        console.log(response.data);
        toast.success('Note Updated ✅', { autoClose: 500 })
        setRefresh(prev => !prev)
      })
      .catch(error => {
        console.error(error);
      });
    }

    return {UpdateNote}

}