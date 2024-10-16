import React from 'react'
import { useState, useEffect, useRef } from 'react'

import './Home.css'
import ProductCard from '../ProductCard/ProductCard';

function Home() {
    const filterData = [{key:"ideal for", value: []},
                        {key:"occassion",value:["daily","work","party"]},
                        {key:"work",value:["half","full"]},
                        {key:"fabric",value:["cotton","linen","silk","mixed cotton"]},
                        {key:"segment", value: []},
                        {key:"suitable for", value: []},
                        {key:"raw materials", value: []},
                        {key:"pattern", value: []},
                    ];
    
    const [favourites, setFavourites] = useState([]);
    const [items, setItems] = useState([]);
    const [showFilter, setFilter] = useState(true);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const fetchData = async () =>{
            // await fetch('https://fakestoreapi.com/products')
            // .then(res=> res.json())
            // .then(json=>console.log(json))
            // .then(json => setItems(json))
            // .catch(err => console.log(err));
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const json = await res.json();
                console.log(json);  // Log the fetched data
                setItems(json);  // Set the items state with fetched data
            } catch (err) {
                console.log(err);  // Log errors if any
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const handleFilterClick = () => {
        setFilter(!showFilter)
        console.log("handleFilterClick fn called")
    }

    const handleClickFav = (id) => {
        console.log("favoutites fn called");
        // favourites.push(id);
        if(favourites.includes(id)){
            setFavourites(favourites.filter(favId => favId !== id));
        } else{
            setFavourites([...favourites, id])
        }
        console.log(favourites);
    }
    
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    }

  return (
    <div className="homeContainer">
        <div className="bannerContent">
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>Lorem ipsum dolor sit amet consectetur.
                Amet est posuere rhoncus scelerisque.
                Dolor integer scelerisque nibh amet mi ut elementum dolor</p>
        </div>
        <div className="optionsBar">
            <div className="optionsOne">
            <p className="itemsText">{items.length} ITEMS</p>
            <div className="filter">
            <p>{showFilter? "<" : ">"}</p>
            <p className="filterText" onClick={handleFilterClick}>{showFilter? "HIDE FILTER" : "SHOW FILTER"}</p>
            </div>
            </div>
            <div className="optionsTwo" ref={dropdownRef}>
            <div>
            <p className="dropdownTop" onClick={toggleDropdown}>RECOMMENDED &nbsp;<i class="fa-solid fa-caret-down"></i></p>
            
            <div className={`dropdownBottom ${dropdownVisible ? "visible" : ""}`}>
            <p>NEWEST FIRST</p>
                <p>POPULAR</p>
                <p>PRICE: HIGH TO LOW</p>
                <p>PRICE: LOW TO HIGH</p>
            </div>
            </div>
            </div>
            </div>
            <div className="mainContent">
                    { showFilter ? (
                        <div className="filterSection">
                            <div className="customize">
                                <input type="checkbox" id="customizable" name="customizable" value="customizable"/>
                                <label htmlFor="customizable">customizable</label>
                            </div>
                            <div className="">
                                {filterData.map((item) => (
                                    <div key={item.key}>
                                        <h4>{item.key}</h4>  
                                        <div className="filterChecks">
                                        {item.value.map((val, index) => (
                                            <>
                                                <input type="checkbox" id={`${item.key}-${index}`} name={val} />
                                                <label htmlFor={`${item.key}-${index}`}>{val}</label>
                                                <br/>
                                            </>
                                        )
                                        )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                
                <div className="itemsSection">
                    {items.length>0 ? (
                        items.map((item,id) => (
                            <ProductCard id={item.id} image={item.image} price={item.price} title={item.title} description={item.description} handleClickFav={handleClickFav} favourites={favourites} />
                        ))
                    ) : (
                        <p>Updating items...</p>
                    )}
                </div>
            </div>
        </div>
  )
}

export default Home