import RowTable from './RowTable';
import './assets/styles/table.scss';

let words = [
    {
      id: "01",
      spanish: "la manzana",
      translate: "apple",
      tags: "fruits",
      "isEdit": false,
      "isSave": false
    },
    {
      id: "02",
      spanish: "el coche",
      translate: "car",
      tags: "transport"
    
    },
    {
      id: "03",
      spanish: "la casa",
      translate: "house",
      tags: "subjects"
    },
    {
      id: "04",
      spanish: "el vestido",
      translate: "dress",
      tags: "things"
     
    },
    {
      id: "05",
      spanish: "labios",
      translate: "lips",
      tags: "body"
  
    }
  ];
function Table (onSave,onDelete,id) {

    return (
      <table className="table">
        <thead>
        <tr className="row-main">
        <th className="cell-main">ID</th>
          <th className="cell-main">Spanish</th>
          <th className="cell-main">Translate</th>
          <th className="cell-main">Tags</th>
          <th className="cell-main-action">Edit</th>
          <th className="cell-main-action">Delete</th>
        </tr>
        </thead>
        <tbody>

        {words.map((word) => (
          
          <RowTable
            key={word.id}
            id={word.id}
            spanish={word.spanish}
            translate={word.translate}
            tags={word.tags}
            onSave={()=> onSave(id)}
            onDelete={()=> onDelete(id)}
           />
        ))}
        </tbody>
      </table>
    );
  }


  export default Table;