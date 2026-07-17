import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Product = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const selectedCategory = location.state?.category || "All";

  const [message, setMessage] = useState("");



  const products = [

    // ☕ COFFEE (5)
    {
      id:1,
      category:"Coffee",
      name:"Cappuccino",
      price:"₹150",
      image:"https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300"
    },
    {
      id:2,
      category:"Coffee",
      name:"Espresso",
      price:"₹120",
      image:"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300"
    },
    {
      id:3,
      category:"Coffee",
      name:"Cafe Latte",
      price:"₹170",
      image:"https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300"
    },
    {
      id:4,
      category:"Coffee",
      name:"Cold Coffee",
      price:"₹180",
      image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300"
    },
    {
      id:5,
      category:"Coffee",
      name:"Mocha Coffee",
      price:"₹200",
      image:"https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=300"
    },


    // 🍦 ICE CREAMS (5)
    {
      id:6,
      category:"Ice Creams",
      name:"Chocolate Ice Cream",
      price:"₹120",
      image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300"
    },
    {
      id:7,
      category:"Ice Creams",
      name:"Vanilla Ice Cream",
      price:"₹100",
      image:"https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300"
    },
    {
      id:8,
      category:"Ice Creams",
      name:"Strawberry Ice Cream",
      price:"₹130",
      image:"https://images.unsplash.com/photo-1587314168485-3236d6710814?w=300"
    },
    {
      id:9,
      category:"Ice Creams",
      name:"Mango Ice Cream",
      price:"₹140",
      image:"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=300"
    },
    {
      id:10,
      category:"Ice Creams",
      name:"Butterscotch Ice Cream",
      price:"₹150",
      image:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300"
    },


    // 🍰 DESSERTS (5)
    {
      id:11,
      category:"Desserts",
      name:"Chocolate Cake",
      price:"₹250",
      image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300"
    },
    {
      id:12,
      category:"Desserts",
      name:"Brownie",
      price:"₹180",
      image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300"
    },
    {
      id:13,
      category:"Desserts",
      name:"Cheesecake",
      price:"₹280",
      image:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300"
    },
    {
      id:14,
      category:"Desserts",
      name:"Cup Cake",
      price:"₹120",
      image:"https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=300"
    },
    {
      id:15,
      category:"Desserts",
      name:"Donut",
      price:"₹90",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBH7Ypbiq2eP8iZnEcSCEfkFDdgCq4Gwd0OyDGo0SAUQ&s"
    },
  
    // 🍬 SWEETS (5)
    {
      id:16,
      category:"Sweets",
      name:"Gulab Jamun",
      price:"₹100",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNutre6UzqEthoypino2ca4ls6C3nz7zQ84ToPWBdFmQ&s"
    },
    {
      id:17,
      category:"Sweets",
      name:"Rasgulla",
      price:"₹90",
      image:"https://thumbs.dreamstime.com/b/indian-famous-sweet-food-rasgulla-rosogulla-served-bowl-153148211.jpg"
    },
    {
      id:18,
      category:"Sweets",
      name:"Kaju Katli",
      price:"₹200",
      image:"https://media.istockphoto.com/id/1432847906/photo/kaju-katli-is-a-traditional-indian-diamond-shaped-sweet-or-mithai-made-using-cashew-paste.jpg?s=612x612&w=0&k=20&c=kSZoUZZKB4TA_eN6TC6JGXwRZXas5qMsv9Gn028tlyU="
    },
    {
      id:19,
      category:"Sweets",
      name:"Ladoo",
      price:"₹120",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7AH_3rTmGuVTNDvLEFLNSPZmcItkuJpQ2aJH7mjvgCg&s"
    },
    {
      id:20,
      category:"Sweets",
      name:"Mysore Pak",
      price:"₹150",
      image:"https://media.istockphoto.com/id/942686800/photo/mysore-pak-isolated-on-white-indian-festival-sweets.jpg?s=612x612&w=0&k=20&c=3S4L20Yu_sl7Ueq1VTmO3Sh1VzCymPFsSdb3--VlPH0="
    },


    // 🧃 JUICES (5)
    {
      id:21,
      category:"Juices",
      name:"Orange Juice",
      price:"₹90",
      image:"https://static.vecteezy.com/system/resources/thumbnails/044/570/895/small/fresh-orange-juice-in-a-glass-beside-halved-and-whole-oranges-with-green-leaves-png.png"
    },
    {
      id:22,
      category:"Juices",
      name:"Mango Juice",
      price:"₹110",
      image:"https://static.vecteezy.com/system/resources/thumbnails/045/933/065/small/enhance-your-projects-with-mango-juice-and-slices-cut-outs-free-png.png"
    },
    {
      id:23,
      category:"Juices",
      name:"Watermelon Juice",
      price:"₹100",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuEF7Y_-bC-lFIaXmAHFRCa6_tsrWzo7l1WlfHtI6xNA&s"
    },
    {
      id:24,
      category:"Juices",
      name:"Pineapple Juice",
      price:"₹120",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qujrMs2Wwp8Tu4hya9SnKr697C7fmsHfatecnI8Wp19lfuSF2RZ3NlL7&s=10"
    },
    {
      id:25,
      category:"Juices",
      name:"Mixed Fruit Juice",
      price:"₹150",
      image:"https://i.ytimg.com/vi/2ibqbC1OcsY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAIVVVIvlo3jpVTUZw_mQU7OzR1XQ"
    }

  ];



  const displayProducts =
    selectedCategory === "All"
    ? products
    : products.filter(
      item => item.category === selectedCategory
    );



  const addCart = (item) => {

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];


    cart.push(item);


    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );


    setMessage(
      `${item.name} added to cart successfully`
    );


    setTimeout(()=>{
      setMessage("");
    },2500);

  };



  const buyNow = (item)=>{

    navigate("/checkout",{
      state:item
    });

  };



  return (

    <div style={styles.container}>


      {
        message &&

        <div style={styles.message}>
          ✅ {message}
        </div>
      }

<button
  style={styles.homeButton}
  onClick={() => navigate("/")}
>
  🏠 Home
</button>

<h1>
  {selectedCategory} Products ☕
</h1>

      


      <div style={styles.grid}>

      {
        displayProducts.map((item)=>(


          <div
          key={item.id}
          style={styles.card}
          >


            <img
            src={item.image}
            alt={item.name}
            style={styles.image}
            />


            <h3>
              {item.name}
            </h3>


            <p>
              {item.price}
            </p>



            <button
            style={styles.cart}
            onClick={()=>addCart(item)}
            >
              Add Cart
            </button>



            <button
            style={styles.buy}
            onClick={()=>buyNow(item)}
            >
              Buy Now
            </button>


          </div> 


        ))
      }

      </div>


    </div>

  );

};



const styles = {

container:{
padding:"30px",
background:"#faf7f2",
minHeight:"100vh",
textAlign:"center"
},


grid:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"25px"
},


card:{
background:"white",
padding:"15px",
borderRadius:"12px",
boxShadow:"0 3px 10px #ccc"
},


image:{
width:"100%",
height:"140px",
objectFit:"cover",
borderRadius:"10px"
},


cart:{
background:"#8b4513",
color:"white",
border:"none",
padding:"8px 12px",
margin:"5px",
borderRadius:"5px",
cursor:"pointer"
},


buy:{
background:"green",
color:"white",
border:"none",
padding:"8px 12px",
margin:"5px",
borderRadius:"5px",
cursor:"pointer"
},

homeButton: {
  background: "#4b2e2e",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  marginBottom: "20px",
  fontSize: "16px"
},

message:{
position:"fixed",
top:"90px",
right:"20px",
background:"#28a745",
color:"white",
padding:"15px 20px",
borderRadius:"8px",
zIndex:1000
}

};


export default Product;