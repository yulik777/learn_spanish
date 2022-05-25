import React, {useState} from "react";


function RowTable (props, onDelete, onEdit) {

  const [id, setId] = useState(props.id);
  const [spanish, setSpanish] = useState(props.spanish);
  const [translate, setTranslate] = useState(props.translate);
  const [tags, setTags] = useState(props.tags);

  const handleIdChange = (e) => {
    setId(e.target.value);
}
const handleSpanishChange = (e) => {
  setSpanish(e.target.value);
}

const handleTranslateChange = (e) => {
  setTranslate(e.target.value);
}

const handleTagsChange = (e) => {
  setTags(e.target.value);
}

  const handleSave = () => {
    setEdit(!isEdit);
    setId(id);
    setSpanish(spanish);
    setTranslate(translate);
    setTags(tags);
  };

  const handleCancel = () => {
    setEdit(!isEdit);
    setId(id);
    setSpanish(spanish);
    setTranslate(translate);
    setTags(tags);

  };

  const onEdit = () => {
    setEdit(!isEdit);
  }

  return (

    <tr>
      {isEdit ?
        <>
          <td><input className="input_edit" name="id" defaultValue={id} onChange={handleIdChange}></input></td>
          <td><input className="input_edit" name="english" defaultValue={spanish} onChange={handleSpanishChange}></input></td>
          <td><input className="input_edit" name="translate" defaultValue={translate} onChange={handleTranslateChange}></input></td>
          <td><input className="input_edit" defaultValue={tags} onChange={handleTagsChange}></input></td>
          <td><button className="edit" onClick={handleSave}> Save </button> <button className="cancel" onClick={handleCancel}>Cancel</button></td>
          <td> <button className="delete" onClick={onDelete}>&#128465;</button></td>
        </>
        :
        <>
          <td>{id}</td>
          <td>{spanish}</td>
          <td>{translate}</td>
          <td>{tags}</td>
          <td><i className="edit" onClick={onEdit}>&#9997;</i></td>
          <td> <button className="delete" onClick={onDelete}>&#128465;</button></td>
        </>}
    </tr>
  );
}

export default RowTable;