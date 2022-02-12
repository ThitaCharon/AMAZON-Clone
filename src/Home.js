import React from "react";
import './Home.css';
import Product from "./Product";
function Home(){
    return(
        <div className="home">
            <div className="home__container">
                {/* <img src="https://m.media-amazon.com/images/I/71yoyrxd3-L._SX3000_.jpg"/> */}
                <img
                    className="home_image"
                    src="https://m.media-amazon.com/images/I/71izqO++I8L._SX3000_.jpg"
                    alt=""
                />

                <div className="home_row">
                    <Product 
                        id ="0"
                        title="Immune: A Journey into the Mysterious System That Keeps You Alive"
                        price={35.99} 
                        image= "https://m.media-amazon.com/images/I/81R4sSVqhrL._AC_UL640_QL65_.jpg"
                        rating={5} />
                    <Product
                         id ="1"
                         title="JOYOUNG Blender Blenders for Kitchen with LED"
                         price={299.99} 
                         image= "https://m.media-amazon.com/images/I/71KUpyW2XLL._AC_UL640_FMwebp_QL65_.jpg"
                         rating={4} />
                </div>

                <div className="home_row">
                <Product 
                        id ="2"
                        title="TAG Heuer Formula 1 Men's Watch"
                        price={279.99} 
                        image= "https://m.media-amazon.com/images/I/81J7SrzQ+cL._AC_UL640_FMwebp_QL65_.jpg"
                        rating={5} />
                <Product
                        id ="3"
                        title="Bluetooth Speaker,MusiBaby Speakers,Outdoor"
                        price={26.85} 
                        image= "https://m.media-amazon.com/images/I/713Nb6CHS-L._AC_UY436_FMwebp_QL65_.jpg"
                        rating={3} />
                <Product
                        id ="4"
                        title="Dell Inspiron 700"
                        price={28.39} 
                        image= "https://m.media-amazon.com/images/I/61rQnEKYCkL._AC_UY436_FMwebp_QL65_.jpg"
                        rating={4} />
                </div>

                <div className="home_row">
                <Product
                         id ="5"
                         title="VIZIO 58-Inch V-Series 4K UHD LED HDR Smart TV"
                         price={999.99} 
                         image= "https://m.media-amazon.com/images/I/813UjyhFSnL._AC_UY436_FMwebp_QL65_.jpg"
                         rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home