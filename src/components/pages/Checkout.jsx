import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  const [payment, setPayment] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const placeOrder = () => {
    if (!name || !phone || !address || !payment) {
      alert("Please fill all details");
      return;
    }

    navigate("/success");
  };


  return (
    <div style={styles.container}>

      <h1>🛒 Checkout</h1>


      {product && (
        <div style={styles.product}>

          <img
            src={product.image}
            alt={product.name}
            style={styles.image}
          />

          <div>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
          </div>

        </div>
      )}



      <div style={styles.form}>

        <h2>Delivery Details</h2>


        <input
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />


        <input
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />


        <textarea
          style={styles.textarea}
          placeholder="Enter Address"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />


        <h2>Payment Method</h2>


        <label>
          <input
            type="radio"
            value="COD"
            checked={payment==="COD"}
            onChange={(e)=>setPayment(e.target.value)}
          />
          💵 Cash On Delivery
        </label>


        <br /><br />


        <label>
          <input
            type="radio"
            value="ONLINE"
            checked={payment==="ONLINE"}
            onChange={(e)=>setPayment(e.target.value)}
          />
          💳 Pay Online
        </label>



        {payment === "ONLINE" && (

          <div style={styles.scanner}>

            <h3>
              Scan QR Code To Pay
            </h3>


            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ChayaCafePayment"
              alt="QR Scanner"
              style={styles.qr}
            />


            <p>
              Complete payment and click Place Order
            </p>

          </div>

        )}



        <button
          style={styles.order}
          onClick={placeOrder}
        >
          Place Order
        </button>


      </div>

    </div>
  );
};



const styles = {

  container:{
    padding:"30px",
    minHeight:"100vh",
    background:"#faf7f2",
    textAlign:"center"
  },


  product:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:"20px",
    background:"white",
    padding:"20px",
    borderRadius:"10px",
    maxWidth:"500px",
    margin:"auto"
  },


  image:{
    width:"120px",
    height:"120px",
    objectFit:"cover",
    borderRadius:"10px"
  },


  form:{
    background:"white",
    padding:"30px",
    margin:"30px auto",
    maxWidth:"500px",
    borderRadius:"12px",
    boxShadow:"0 3px 10px #ccc"
  },


  input:{
    width:"90%",
    padding:"12px",
    margin:"10px",
    borderRadius:"5px",
    border:"1px solid #ccc"
  },


  textarea:{
    width:"90%",
    height:"80px",
    padding:"12px",
    margin:"10px",
    borderRadius:"5px"
  },


  scanner:{
    marginTop:"20px",
    background:"#f5f5f5",
    padding:"20px",
    borderRadius:"10px"
  },


  qr:{
    width:"200px",
    height:"200px"
  },


  order:{
    marginTop:"25px",
    padding:"12px 30px",
    background:"#4b2e2e",
    color:"white",
    border:"none",
    borderRadius:"8px",
    cursor:"pointer"
  }

};


export default Checkout;