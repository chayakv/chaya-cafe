import React from "react";
import { Link } from "react-router-dom";


const Header = () => {

  return (

    <header style={styles.header}>


      <div style={styles.logo}>
        ☕ ChayaCafe
      </div>



      <nav>

        <Link
        to="/"
        style={styles.link}
        >
          Home
        </Link>


        <Link
        to="/product"
        style={styles.link}
        >
          Products
        </Link>



        <Link
        to="/cart"
        style={styles.link}
        >
          🛒 Cart
        </Link>


      </nav>



    </header>

  );

};



const styles={


header:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"15px 35px",
background:"#4b2e2e",
color:"white",
position:"sticky",
top:"0",
zIndex:"100"
},



logo:{
fontSize:"24px",
fontWeight:"bold"
},



link:{
marginLeft:"25px",
color:"white",
textDecoration:"none",
fontWeight:"bold",
fontSize:"16px"
}


};


export default Header;