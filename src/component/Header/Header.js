import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <div>
           <h1>SPA</h1>
           <nav>
               <a href="/shop">Shop</a>
               <a href="/review">Review</a>
               <a href="/inventory">Inventory</a>
           </nav>
        </div>
    );
};

export default Header;