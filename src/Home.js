import React from "react";
import './Home.css';
import Product from "./Product";
function Home(){
    return(
        <div className="home">
            <div className="home__container">
                {/* src="https://m.media-amazon.com/images/I/71izqO++I8L._SX3000_.jpg" */}
                <img
                    className="home_image"
                    src="https://m.media-amazon.com/images/I/61MrSAAlR-L._SX3000_.jpg"
                    alt=""
                />

                <div className="home_row">
                    <Product 
                        id ="0"
                        title="2022 Newest Dell Inspiron 3000 Laptop, 15.6 HD Display, Intel Celeron Processor N4020, 16GB DDR4 RAM, 1TB"
                        price={248.39} 
                        image= "https://m.media-amazon.com/images/I/61rQnEKYCkL._AC_UY436_FMwebp_QL65_.jpg"
                        rating={4} />
                    <Product
                         id ="1"
                         title="Crocs Men's and Women's Classic Tie Dye Clog - Mixed color - Beach design New Arrival"
                         price={79.59} 
                         image= "https://m.media-amazon.com/images/I/71M9gcdMfML._AC_SX695._SX._UX._SY._UY_.jpg"
                         rating={5} />
                    <Product
                         id ="2"
                         title="JOYOUNG Blender Blenders for Kitchen with LED"
                         price={299.99} 
                         image= "https://m.media-amazon.com/images/I/71KUpyW2XLL._AC_UL640_FMwebp_QL65_.jpg"
                         rating={4} />
                </div>

                <div className="home_row">
                <Product
                         id ="3"
                         title="VIZIO 58-Inch V-Series 4K UHD LED HDR Smart TV"
                         price={999.99} 
                         image= "https://m.media-amazon.com/images/I/813UjyhFSnL._AC_UY436_FMwebp_QL65_.jpg"
                         rating={5} />
                </div>

                <div className="home_row">
                <Product 
                        id ="4"
                        title="TAG Heuer Formula 1 Men's Watch"
                        price={3279.99} 
                        image= "https://m.media-amazon.com/images/I/81J7SrzQ+cL._AC_UL640_FMwebp_QL65_.jpg"
                        rating={5} />
                <Product
                        id ="5"
                        title="Bluetooth Speaker,MusiBaby Speakers,Outdoor"
                        price={26.85} 
                        image= "https://m.media-amazon.com/images/I/713Nb6CHS-L._AC_UY436_FMwebp_QL65_.jpg"
                        rating={3} />
                <Product
                        id ="6"
                        title="Immune: A Journey into the Mysterious System That Keeps You Alive"
                        price={35.99} 
                        image= "https://m.media-amazon.com/images/I/81R4sSVqhrL._AC_UL640_QL65_.jpg"
                        rating={5} />
                </div>

               

                <div className="home_row">
                <Product
                         id ="7"
                         title="homChom Pet Hair Remover - Reusable Cat and Dog Hair"
                         price={24.95} 
                         image= "https://m.media-amazon.com/images/I/81Ju+RATjOL._AC_SL1500_.jpg"
                         rating={4} />
                 <Product
                         id ="8"
                         title="MUSIC FIRST Cute Cartoon Shiba Inu and Sakura Dog ukulele case ukulele bag ukulele cover, New Arrial, Original Design"
                         price={25.00} 
                         image= "https://m.media-amazon.com/images/I/81E0AFC-C5L._AC_SX679_.jpg"
                         rating={5} />
                </div>

            </div>
        </div>
    )
}

export default Home