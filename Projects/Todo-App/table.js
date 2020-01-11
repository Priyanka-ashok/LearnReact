import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Designation</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};


const TableBody = props => {
  const rows = props.characterData.map((rowdata, index) => {
    return (
      <tr key={index}>
        <td>{rowdata.name}</td>
        <td>{rowdata.job}</td>
        <td><button onClick={() => props.removeCharacter(index)}>Remove</button></td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { characterData , removeCharacter} = props;
      return (
          <table> 
              <TableHeader />
              <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
          </table>
      );
}


export default Table;
