import Card from "./Card";

let words = [
    {
      id: "01",
      spanish: "la manzana",
      translate: "apple",
      tags: "fruits",
      isSelected: true,
    },
    {
      id: "02",
      spanish: "el coche",
      transcription: "car",
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
function Table() {
    return (
      <table className="table">
        <tr className="row-main">
          <th className="cell-main">Spanish</th>
          <th className="cell-main">Translate</th>
          <th className="cell-main">Tags</th>
          <th className="cell-main-action">Edit</th>
          <th className="cell-main-action">Delete</th>
        </tr>
        {words.map((word) => (
          <Card
            Spanish={word.spanish}
            translate={word.translate}
            tags={word.tags}
            isSelected={word.isSelected}
          ></Card>
        ))}
      </table>
    );
  }
  
  export default Table;