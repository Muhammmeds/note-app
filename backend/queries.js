import pool from "./db-connection.js";



export const getNotes = async() =>{
const results = await pool.query("select * from notes")
return results[0]
}

export const getNote = async(id) => {
  const [rows] = await pool.query(`
  SELECT * 
  FROM notes
  WHERE id = ?
  `, [id])
  return rows[0]
}


export const addNote = async (note) =>{
  const [result] = await pool.query(`
    INSERT INTO 
    notes (note) 
    VALUES (?)`,
    [note])

  return getNote(result.insertId)

}

export const deleteNote = async(id) =>{
  const result = await pool.query(`
    DELETE FROM notes
    WHERE id = ?` , [id])
  return result

}

export const updateNote = async(id) =>{

  const validate = await pool.query(`
    SELECT (is_completed) FROM notes where id = ? ` , [id])
    const status = validate[0][0].is_completed

    let result;
    if(status == 1){
         result = await pool.query(`
      UPDATE notes 
      SET is_completed = FALSE
      where id = ?  `, 
      [id])
    }else{
      result = await pool.query(`
      UPDATE notes 
      SET is_completed = TRUE
      where id = ?  `, 
    [id])
    }
  

  return result

}


