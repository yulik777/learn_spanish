
import RowTable from './RowTable';

let words = [
    {
      id: "01",
      spanish: "la manzana",
      translate: "apple",
      tags: "fruits",

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
function Table({words, onDelete, onItemSave}) {

    return (
      <table className="table">
        <tr className="row-main">
        <th className="cell-main">ID</th>
          <th className="cell-main">Spanish</th>
          <th className="cell-main">Translate</th>
          <th className="cell-main">Tags</th>
          <th className="cell-main-action">Edit</th>
          <th className="cell-main-action">Delete</th>
        </tr>

        {words.map((word) => (
          
          <RowTable>
            id={word.id}
            Spanish={word.spanish}
            translate={word.translate}
            tags={word.tags}
            edit= {}
            delete={}
          
          </RowTable>
        ))}
      </table>
    );
  }

  export default Table;