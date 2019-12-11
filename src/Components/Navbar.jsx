import React from 'react';


const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <img className="logo" src={require('../Img/Golden-Shoe-Logo.png')} alt="GS Logo"></img>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/women" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Women
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/products">Heels</a>
                            <a class="dropdown-item" href="/boots">Boots</a>
                            <a class="dropdown-item" href="/shoes">Shoes</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/men" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Men
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/boots">Boots</a>
                            <a class="dropdown-item" href="/shoes">Shoes</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/kids">Kids</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/babies">Babies</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
                </form>
             </div>
        </nav>
    )
}
        
export default Nav;