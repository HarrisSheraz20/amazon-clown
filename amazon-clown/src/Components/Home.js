import React from 'react'
import '../Style/AppMain.css'
import Product from './Product'



function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/Greenland/GLAND_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB661134222_.jpg" alt=""/>
            </div>
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    rating={5}
                />
                <Product 
                    id="49513948"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
                    price={239.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
                    rating={4}
                />
            </div>
            
            <div className="home__row">
                <Product 
                    id="93399321"
                    title="Nintendo Switch (Neon Red/Neon blue)"
                    price={364}
                    image="https://images-na.ssl-images-amazon.com/images/I/71dDcOto3KL._AC_SL1500_.jpg"
                    rating={5}
                />
                <Product 
                    id="59483093"
                    title="All-new Echo Dot (4th generation) | Smart speaker with Alexa | Charcoal"
                    price={98.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Q9d6N7xkL._AC_SL1000_.jpg"
                    rating={4}
                />
                <Product 
                    id="98393920"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)- Sliver (4th Generation)"
                    price={899}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SL1500_.jpg"
                    rating={5}
                />
            </div>
            
            <div className="home__row">
                <Product 
                    id="4903850"
                    title="Samsung LC495G90SSUXEN 49' Curved LED Gaming Monitor"
                    price={1099.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
                    rating={4}
                />
            </div>
        </div>
    )
}

export default Home
