import React, {useState} from "react";

const RowTable = ({id, spanish, translate, tags, onDelete, onItemSave}) => {

  const [isEdit, setEdit] = useState(false);

  let classNames ='table__row';

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
          <td><input className="input_edit" name="transcription" defaultValue={translate} onChange={handleChange}></input></td>
          <td><input className="input_edit" defaultValue={tags} onChange={handleChange}></input></td>
          <td>
              <i className="fas fa-check icon icon__save" onClick = {onItemSave}> </i>
              <i className="fas fa-ban icon icon__cancel" onClick = {handleCancelClick}></i>
          </td>
          </>
          :
          <>
          <td>{id}</td>
          <td>{spanish}</td>
          <td>{translate}</td>
          <td>{tags}</td>
          <td>
              <i className="fas fa-pen icon icon__edit" onClick = {onEdit}> </i>
              <i className="fas fa-trash icon icon__delete" onClick = {onDelete}></i>
          </td>
          </>
        }
      </tr>
    )
}

export default RowTable;