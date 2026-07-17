import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();


  const categories = [
    {
      name:"Coffee",
      emoji:"☕",
      description:"Freshly brewed hot and cold coffee",
      image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400"
    },

    {
      name:"Ice Creams",
      emoji:"🍦",
      description:"Creamy and delicious ice creams",
      image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400"
    },

    {
      name:"Desserts",
      emoji:"🍰",
      description:"Cakes, brownies and sweet treats",
      image:
      "https://static.vecteezy.com/system/resources/thumbnails/025/284/284/small/donuts-with-icing-sugar-generative-ai-photo.jpg"
    },

    {
      name:"Sweets",
      emoji:"🍬",
      description:"Traditional Indian sweets",
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7AH_3rTmGuVTNDvLEFLNSPZmcItkuJpQ2aJH7mjvgCg&s"
    },

    {
      name:"Juices",
      emoji:"🧃",
      description:"Fresh and healthy fruit juices",
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuEF7Y_-bC-lFIaXmAHFRCa6_tsrWzo7l1WlfHtI6xNA&s"
    }

  ];



  const openCategory = (category)=>{

    navigate("/product",{
      state:{
        category:category
      }
    });

  };



  return (

    <div style={styles.container}>


      <section style={styles.banner}>

        <h1>
          Welcome to ChayaCafe ☕
        </h1>

        <p>
          Enjoy delicious coffee, sweets, desserts and refreshing drinks
        </p>

      </section>




      <h2 style={styles.heading}>
        Our Menu
      </h2>



      <div style={styles.menuGrid}>


        {
          categories.map((item)=>(


            <div
            key={item.name}
            style={styles.card}
            onClick={()=>openCategory(item.name)}
            >


              <img
              src={item.image}
              alt={item.name}
              style={styles.image}
              />


              <h2>
                {item.emoji} {item.name}
              </h2>


              <p>
                {item.description}
              </p>


              <button style={styles.button}>
                View Items
              </button>


            </div>


          ))
        }


      </div>



    </div>

  );

};



const styles={


container:{
padding:"30px",
background:"#faf7f2",
minHeight:"100vh",
textAlign:"center"
},


banner:{
background:"#4b2e2e",
color:"white",
padding:"50px 20px",
borderRadius:"15px",
marginBottom:"40px"
},


heading:{
fontSize:"30px",
color:"#4b2e2e"
},


menuGrid:{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",
gap:"25px",
marginTop:"30px"
},


card:{
background:"white",
borderRadius:"15px",
padding:"15px",
cursor:"pointer",
boxShadow:"0 4px 12px rgba(0,0,0,0.15)",
transition:"0.3s"
},


image:{
width:"100%",
height:"150px",
objectFit:"cover",
borderRadius:"12px"
},


button:{
background:"#4b2e2e",
color:"white",
border:"none",
padding:"10px 20px",
borderRadius:"6px",
cursor:"pointer"
}


};


export default Home;