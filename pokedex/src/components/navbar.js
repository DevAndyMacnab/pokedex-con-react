import React from "react";

const Navbar= ()=>{
    //URL del logo guardado en una variable
    let urlPokemon="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    let urlReact="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png"
    let urlJavascript="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/245px-Unofficial_JavaScript_logo_2.svg.png";
    return(
        <nav>
            <div>
            <img src={urlPokemon} alt="logo pokemon"
                className="navbar-logo"
            />
            </div>
            <div>
                <img src={urlReact}
                alt="logo-react"
                className="navbar-react"

                />
            </div>
            <div>
                <img src={urlJavascript}
                alt="logo-javascript"
                className="navbar-javascript"

                />
            </div>
            
        </nav>);
};
export default Navbar;


