import React from "react";
import { Link } from "react-router-dom";


const OrderSuccess = () => {

return (

<div style={styles.container}>

<h1>
🎉 Order Successful!
</h1>


<h2>
Thank you for ordering from ChayaCafe ☕
</h2>


<p>
Your order has been placed successfully.
</p>


<p>
Your delicious food will be delivered soon.
</p>


<Link to="/">
<button style={styles.button}>
Continue Shopping
</button>
</Link>


</div>

);

};


const styles={

container:{
height:"80vh",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
background:"#faf7f2",
textAlign:"center"
},


button:{
padding:"12px 25px",
background:"#4b2e2e",
color:"white",
border:"none",
borderRadius:"8px",
cursor:"pointer",
marginTop:"20px"
}

};


export default OrderSuccess;