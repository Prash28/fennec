// import React from 'react'
// import './ProductCard.css'
// function ProductCard({id,title,image,price,description}) {
//   return (
//     <div className="cardContainer">
//         <img src={image} alt={title}/>
//         <p>{title}</p>
//     </div>
//   )
// }

// export default ProductCard

import React from 'react';
import './ProductCard.css'; // Assuming you have a CSS file for styling



function ProductCard({ id, title, price, image, description, handleClickFav, favourites }) {
    return (
        <div className="productCard">
            <img src={image} alt={title} className="productImage" />
            {/* <div className="productImage" /> */}
            <div className="productInfo">
                <h3 className="productTitle">{title}</h3>
                {/* <p className="productDescription">{description.slice(0, 100)}...</p> Short description */}
                <div className="cardPriceFav">
                    <p className="productPrice">${price}</p>
                    {favourites.includes(id) ? (
                        <i className="fa-solid fa-heart favIcon" onClick={() =>handleClickFav(id)}></i>
                    ) : (
                        <i className="fa-regular fa-heart favIcon" onClick={() =>handleClickFav(id)}></i>
                    )}
                    
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
