import React from "react";
const { useState } = React;


const Searchbar = (props) => {
  console.log("esto es un prop",props);
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  
  /*Funcion que detecta algun cambio en el Searchbar
  y devuelve un parametro dependiendo si hay texto o no
  */
  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  //Funcion que al presionar el boton envía el texto ingresado por el usuario
  const onClick = async (e) => {
    onSearch(search);
  };


  //Aca se crea el Searchbar, el botón y se agregan los action-listener
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;