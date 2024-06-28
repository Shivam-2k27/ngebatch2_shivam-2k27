import React, { useState } from "react";
type PropType = {
  info: any;
};

const Countries: React.FC<PropType> = ({ info }) => {
  const [selected, changeSelect] = useState("");
  return (
    <div>
      <select onChange={(e) => changeSelect(e.target.value)}>
        {info.map((items: any) => (
          <option>{items.name}</option>
        ))}
      </select>
      <h3>{selected}</h3>
    </div>
  );
};

export default Countries;
