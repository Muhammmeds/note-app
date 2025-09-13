import { toast } from 'react-toastify';
import api from '../api';

export const UseAddNote = () =>{

  
    const AddNote = (note , setNote , setRefresh) =>{
        
        if(!note){
            return toast.error('Input a note ❌', { autoClose: 500 });
        }
       
       api.post(`${import.meta.env.VITE_API_BASE_URL}/notes` , {note : note})
      .then(response => {
        console.log(response.data);
        setNote('')
        toast.success('Note Added ✅', { autoClose: 500 })
        setRefresh(prev => !prev)
       
      })
      .catch(error => {
        console.error(error);
      });
    }

    
    return {AddNote}

}