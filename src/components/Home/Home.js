import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import ProductCard from '../ProductCard/ProductCard';
import Footer from '../Footer/Footer';

function Home({ isAuthenticated }) {
    const filterData = [
        // { key: "ideal for", value: [] },
        { key: "occassion", value: ["daily", "work", "party"] },
        { key: "sleeve length", value: ["half", "full"] },
        { key: "fabric", value: ["cotton", "linen", "silk", "mixed cotton"] },
        // { key: "segment", value: [] },
        // { key: "suitable for", value: [] },
        // { key: "raw materials", value: [] },
        { key: "pattern", value: ["Abstract", "Animal","Faded","Geometric","Solid","Textured","Tie and Dye"] },
        { key: "rating", value: ["1⭐ & Above","2⭐ & Above","3⭐ & Above","4⭐ & Above"]}
    ];

    const [visibleFilterChecks, setVisibleFilterChecks] = useState({});
    const [favourites, setFavourites] = useState([]);
    const [items, setItems] = useState([]);
    const [showFilter, setShowFilter] = useState(true);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const json = await res.json();
                setItems(json);
            } catch (err) {
                console.log(err);
            }
        };
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
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 900) {
                setShowFilter(false);
            } else {
                setShowFilter(true);
            }
        };

        handleResize();
        
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleFilterClick = () => {
        setShowFilter(!showFilter);
    };

    const handleClickFav = (id) => {
        if (favourites.includes(id)) {
            setFavourites(favourites.filter(favId => favId !== id));
        } else {
            setFavourites([...favourites, id]);
        }
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const toggleFilterVisibility = (filterKey) => {
        setVisibleFilterChecks((prev) => ({
            ...prev,
            [filterKey]: !prev[filterKey],
        }));
    };

    return (
        <main className="homeContainer">
            <div className="bannerContent">
                <h1>DISCOVER OUR PRODUCTS</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="optionsBar">
                <div className="optionsOne">
                    <p className="itemsText">{items.length} ITEMS</p>
                    <div className="filter">
                        <p>{showFilter ? "<" : ">"}</p>
                        <p className="filterText" onClick={handleFilterClick}>
                            {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
                        </p>
                    </div>
                </div>
                <div className="optionsTwo" ref={dropdownRef}>
                    <div>
                        <p className="dropdownTop" onClick={toggleDropdown}>
                            RECOMMENDED &nbsp;<i className="fa-solid fa-caret-down"></i>
                        </p>
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
                {showFilter && (
                    <aside className="filterSection">
                        <div className="customize">
                            <input type="checkbox" id="customizable" name="customizable" value="customizable" />
                            <label htmlFor="customizable">customizable</label>
                        </div>
                        {filterData.map((item) => (
                            <div key={item.key}>
                                <div className="filterTitle">
                                <h4>{item.key}</h4>
                                <p onClick={() => toggleFilterVisibility(item.key)}>
                                    {visibleFilterChecks[item.key] ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-right"></i>}
                                </p>
                                </div>
                                <p className="allText">All</p>
                                <div className={`filterChecks ${visibleFilterChecks[item.key] ? "visible" : "hidden"}`}>
                                    {item.value.map((val, index) => (
                                        <div key={`${item.key}-${index}`}>
                                            <input type="checkbox" id={`${item.key}-${index}`} name={val} />
                                            <label htmlFor={`${item.key}-${index}`}>{val}</label>
                                            <br />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </aside>
                )}
                <main className="itemsSection">
                    {items.length > 0 ? (
                        items.map((item) => (
                            <ProductCard
                                key={item.id}
                                isAuthenticated={isAuthenticated}
                                id={item.id}
                                image={item.image}
                                price={item.price}
                                title={item.title}
                                description={item.description}
                                handleClickFav={handleClickFav}
                                favourites={favourites}
                            />
                        ))
                    ) : (
                        <p>Updating items...</p>
                    )}
                </main>
            </div>
            <Footer />
        </main>
    );
}

export default Home;
