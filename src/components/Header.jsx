import React from 'react';
import '../styles/Header.css';

function Header({ cartItemCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-text">
            <h1 className="header-title">🛒 QuickCart</h1>
            <p className="header-subtitle">Your one-stop shop</p>
          </div>
          
          <button className="cart-icon-btn" onClick={onCartClick}>
            <span role="img" aria-label="cart">🛒</span>
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;