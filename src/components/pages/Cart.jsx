import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Cart = () => {

  const [cart, setCart] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {

    const items =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(items);

  }, []);



  const removeItem = (index) => {

    const updated = cart.filter(
      (_, i)=> i !== index
    );

    setCart(updated);

    localStorage.setItem(
      "cart",
      JSON.stringify(updated)
    );
  };



  const total = cart.reduce(
    (sum,item)=>
      sum + Number(item.price.replace("₹","")),
    0
  );



  return (

    <div style={styles.container}>

      <h1>🛒 Your Cart</h1>


      {
        cart.length === 0 ? (

          <h2>
            Cart is empty
          </h2>

        ) : (

          <>

          <div style={styles.list}>

          {
            cart.map((item,index)=>(

              <div
              style={styles.card}
              key={index}
              >

                <img
                src={item.image}
                alt={item.name}
                style={styles.image}
                />


                <div>

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.price}
                </p>


                <button
                style={styles.remove}
                onClick={()=>
                  removeItem(index)
                }
                >
                  Remove
                </button>


                </div>


              </div>

            ))
          }

          </div>


          <h2>
            Total: ₹{total}
          </h2>


          <button
          style={styles.checkout}
          onClick={()=>
            navigate("/checkout")
          }
          >
            Proceed To Checkout
          </button>


          </>

        )
      }


    </div>

  );
};



const styles={


container:{
padding:"30px",
textAlign:"center",
background:"#faf7f2",
minHeight:"100vh"
},


list:{
display:"grid",
gap:"20px",
maxWidth:"600px",
margin:"auto"
},


card:{
display:"flex",
alignItems:"center",
gap:"20px",
background:"white",
padding:"15px",
borderRadius:"10px",
boxShadow:"0 3px 10px #ccc"
},


image:{
width:"100px",
height:"100px",
objectFit:"cover",
borderRadius:"10px"
},


remove:{
background:"red",
color:"white",
border:"none",
padding:"8px",
borderRadius:"5px"
},


checkout:{
marginTop:"20px",
background:"#4b2e2e",
color:"white",
padding:"12px 25px",
border:"none",
borderRadius:"8px",
fontSize:"16px"
}


};


export default Cart;