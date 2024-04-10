import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelopeSquare, faHeart, faSearch, faUserCircle, faShoppingCart, faBars, faAngleDown, faAngleUp, faAngleRight } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    return (
        <header>
          {/* contact content */}
          <div className="header-content-top">
            <div className="content">
              <span><FontAwesomeIcon icon={faPhoneSquareAlt} /> (91)9330125090</span>
              <span><FontAwesomeIcon icon={faEnvelopeSquare} /> outfuitzen@email.com</span>
            </div>
          </div>
          {/* / contact content */}
          <div className="container4">
            {/* logo */}
            <strong className="logo"><FontAwesomeIcon icon={faHeart} /></strong>
            {/* open nav mobile */}
    
            {/*search */}
            <label className="open-search" htmlFor="open-search">
              {/* <FontAwesomeIcon icon={faSearch} /> */}
              <input className="input-open-search" id="open-search" type="checkbox" name="menu" />
              <div className="search">
                <button className="button-search"><FontAwesomeIcon icon={faSearch} /></button>
                <input type="text" placeholder="What are you looking for?" className="input-search" />
              </div>
            </label>
            {/* search */}
            <nav className="nav-content">
              {/* nav */}
              <ul className="nav-content-list">
                <li className="nav-content-item account-login">
                  <label className="open-menu-login-account" htmlFor="open-menu-login-account">
                    <input className="input-menu" id="open-menu-login-account" type="checkbox" name="menu" />
                    <FontAwesomeIcon icon={faUserCircle} /><span className="login-text">Hello, Sign in <strong>Create Account</strong></span> <span className="item-arrow"></span>
                    {/* submenu */}
                    <ul className="login-list">
                      {/* <li className="login-list-item"><a href="">My account</a></li> */}
                      <li className="login-list-item"><a href="/registration">Create account</a></li>
                      <li className="login-list-item"><a href="/login">login</a></li>
                    </ul>
                  </label>
                </li>
                <li className="nav-content-item"><a className="nav-content-link" href=""><FontAwesomeIcon icon={faHeart} /></a></li>
                <li className="nav-content-item"><a className="nav-content-link" href=""><FontAwesomeIcon icon={faShoppingCart} /></a></li>
                {/* call to action */}
              </ul>
            </nav>
          </div>
          {/* nav navigation commerce */}
          <div className="nav-container">
            <nav className="all-category-nav">
              <label className="open-menu-all" htmlFor="open-menu-all">
                <input className="input-menu-all" id="open-menu-all" type="checkbox" name="menu-open" />
                <span className="all-navigator"><FontAwesomeIcon icon={faBars} /> <span>All category</span> <FontAwesomeIcon icon={faAngleDown} />
                  <FontAwesomeIcon icon={faAngleUp} />
                </span>
                <ul className="all-category-list">
                  <li className="all-category-list-item"><a href="" className="all-category-list-link">Smartphones<FontAwesomeIcon icon={faAngleRight} /></a>
                    <div className="category-second-list">
                      <ul className="category-second-list-ul">
                        <li className="category-second-item"><a href="">Iphone 10</a></li>
                        <li className="category-second-item"><a href="">Galaxy Note 10</a></li>
                        <li className="category-second-item"><a href="">Motorola One </a></li>
                        <li className="category-second-item"><a href="">Galaxy A80 </a></li>
                        <li className="category-second-item"><a href="">Galaxy M </a></li>
                        <li className="category-second-item"><a href="">Huaway P30 </a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="all-category-list-item"><a href="" className="all-category-list-link">Furniture <FontAwesomeIcon icon={faAngleRight} /></a>
                  <div className="category-second-list">
                      <ul className="category-second-list-ul">
                        <li className="category-second-item"><a href="/">Iphone 10</a></li>
                        <li className="category-second-item"><a href="">Galaxy Note 10</a></li>
                        <li className="category-second-item"><a href="">Motorola One </a></li>
                        <li className="category-second-item"><a href="">Galaxy A80 </a></li>
                        <li className="category-second-item"><a href="">Galaxy M </a></li>
                        <li className="category-second-item"><a href="">Huaway P30 </a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="all-category-list-item"><a href="" className="all-category-list-link">Toys<FontAwesomeIcon icon={faAngleRight} /></a>
                  <div className="category-second-list">
                      <ul className="category-second-list-ul">
                        <li className="category-second-item"><a href="/">Iphone 10</a></li>
                        <li className="category-second-item"><a href="">Galaxy Note 10</a></li>
                        <li className="category-second-item"><a href="">Motorola One </a></li>
                        <li className="category-second-item"><a href="">Galaxy A80 </a></li>
                        <li className="category-second-item"><a href="">Galaxy M </a></li>
                        <li className="category-second-item"><a href="">Huaway P30 </a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="all-category-list-item"><a href="" className="all-category-list-link">Computing<FontAwesomeIcon icon={faAngleRight} /></a>
                  <div className="category-second-list">
                      <ul className="category-second-list-ul">
                        <li className="category-second-item"><a href="/">Iphone 10</a></li>
                        <li className="category-second-item"><a href="">Galaxy Note 10</a></li>
                        <li className="category-second-item"><a href="">Motorola One </a></li>
                        <li className="category-second-item"><a href="">Galaxy A80 </a></li>
                        <li className="category-second-item"><a href="">Galaxy M </a></li>
                        <li className="category-second-item"><a href="">Huaway P30 </a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="all-category-list-item"><a href="" className="all-category-list-link">Games<FontAwesomeIcon icon={faAngleRight} /></a>
                  <div className="category-second-list">
                      <ul className="category-second-list-ul">
                        <li className="category-second-item"><a href="/">Iphone 10</a></li>
                        <li className="category-second-item"><a href="">Galaxy Note 10</a></li>
                        <li className="category-second-item"><a href="">Motorola One </a></li>
                        <li className="category-second-item"><a href="">Galaxy A80 </a></li>
                        <li className="category-second-item"><a href="">Galaxy M </a></li>
                        <li className="category-second-item"><a href="">Huaway P30 </a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="all-category-list-item"><a href="" className="all-category-list-link">Automotive<FontAwesomeIcon icon={faAngleRight} /></a>
                  <div className="category-second-list">
                      <ul className="category-second-list-ul">
                        <li className="category-second-item"><a href="/">Iphone 10</a></li>
                        <li className="category-second-item"><a href="">Galaxy Note 10</a></li>
                        <li className="category-second-item"><a href="">Motorola One </a></li>
                        <li className="category-second-item"><a href="">Galaxy A80 </a></li>
                        <li className="category-second-item"><a href="">Galaxy M </a></li>
                        <li className="category-second-item"><a href="">Huaway P30 </a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </label>
            </nav>
            <nav className="featured-category">
              <ul className="nav-row">
                <li className="nav-row-list"><a href="" className="nav-row-list-link">Smartphones</a></li>
                <li className="nav-row-list"><a href="" className="nav-row-list-link">furniture</a></li>
                <li className="nav-row-list"><a href="" className="nav-row-list-link">Toys</a></li>
                <li className="nav-row-list"><a href="" className="nav-row-list-link">Computing</a></li>
                <li className="nav-row-list"><a href="" className="nav-row-list-link">Games</a></li>
                <li className="nav-row-list"><a href="" className="nav-row-list-link">Automotive</a></li>
              </ul>
            </nav>
          </div>
        </header>
      );
}

export default Header