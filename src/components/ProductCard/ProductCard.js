import React from 'react';
import './ProductCard.css'; // Assuming you have a CSS file for styling

function ProductCard({ isAuthenticated, id, title, price, image, description, handleClickFav, favourites }) {
    return (
        <div className="productCard">
            <img src={image} alt={title} className="productImage" />
            {/* <div className="productImage" /> */}
            <div className="productInfo">
                <h3 className="productTitle">{title}</h3>
                {/* <p className="productDescription">{description.slice(0, 100)}...</p> Short description */}
                <div className="cardPriceFav">
                    { isAuthenticated?
                        <p className="productPrice">${price}</p> : <p><a href="/login">Sign Up</a> to view price</p>
                    }
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
