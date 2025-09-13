import api from '../api';
import { useState } from 'react';


export const UseFetchNotes = () =>{
  const [fetchedNotes , setFetchedNotes] = useState({data : [] , loading : true})

    const FetchNotes = () =>{
       
       api.get(`${import.meta.env.VITE_API_BASE_URL}/notes`)
      .then(response => {
        console.log(response.data);
        setFetchedNotes({
          data : response.data,
          loading : false
        })
       
      })
      .catch(error => {
        console.error(error);
        setFetchedNotes(prev => ({
          ...prev,
          loading : false
        }))
      });
    }

    return {FetchNotes , fetchedNotes }

}