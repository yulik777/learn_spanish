import React, {useState} from "react";


const RowTable = ({id, spanish, translate, tags, onDelete, onSave}) => {

  const [isEdit, setEdit] = useState(false);

  let classNames ='row-main';

  if(isEdit){
    classNames += 'row_edit';
  }

  const onEdit = () => {
      setEdit(!isEdit);
  }

  const handleCancelClick = () => {
    setEdit(!isEdit);
  }

  const [state, setState] = useState({id:'', spanish:'', translate:'', tags:''});

  const handleChange = (e) => {
    setState (state, {
      [e.target.name] : e.target.value
    })
  }

    return (

      <tr className={classNames}>
        {isEdit ?
          <>
          <td><input className="input_edit" name="id" defaultValue={id} onChange={handleChange}></input></td>
          <td><input className="input_edit" name="english" defaultValue={spanish} onChange={handleChange}></input></td>
          <td><input className="input_edit" name="translate" defaultValue={translate} onChange={handleChange}></input></td>
          <td><input className="input_edit" defaultValue={tags} onChange={handleChange}></input></td>
          <td><i className="edit" onClick = {onSave}> </i></td>
          <td><i className="delete" onClick = {handleCancelClick}></i></td>
          </>
          :
          <>
          <td>{id}</td>
          <td>{spanish}</td>
          <td>{translate}</td>
          <td>{tags}</td>
          <td><i className="edit" onClick = {onEdit}>&#9997;</i></td>
          <td> <i className="delete" onClick = {onDelete}>&#128465;</i></td>
          </>
        }
      </tr>
    )
}

export default RowTable;