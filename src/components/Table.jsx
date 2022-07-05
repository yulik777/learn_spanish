import RowTable from './RowTable.jsx';
import './assets/styles/table.scss';


function Table({onSave,onDelete,words}) {

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
            onSave={()=> onSave(word.id)}
            onDelete={()=> onDelete(word.id)}
           />
        ))}
        </tbody>
      </table>
    );
  }


  export default Table;