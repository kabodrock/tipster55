import React, { Component } from 'react'
import bg from './assets/bg.png';
import logo from './assets/logo.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas)


export default class Home extends Component {
    render() {
        return (
            <div className="header">
                {/* background */}
                <div className="bg"><img src={bg} /></div>
                <header className="main-header">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a href=""><img src={logo} /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "pink"}}>Today Tips</a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Today Free Tips</a>
                                    <a class="dropdown-item" href="#">Today Advance Tips</a>
                                    <a class="dropdown-item" href="#">Today Master Tips</a>                  
                                </div>
                            </li>
                        
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "pink"}}>
                                    Tipsters
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">General Tipsters</a>
                                    <a class="dropdown-item" href="#">Advance Tipsters</a>
                                    <a class="dropdown-item" href="#">Master Tipsters</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" style={{color: "pink"}}>Features</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "pink"}}>
                                    ForSellTips
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Dashboard</a>
                                <a class="dropdown-item" href="#">My Sales</a>
                                <a class="dropdown-item" href="#">Select Tipsters</a>
                                <a class="dropdown-item" href="#">My Profile Setting</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "pink"}}>
                                    <FontAwesomeIcon icon={['fas', 'shopping-cart']} style={{color: "green"}}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    </nav>
                </header>
            </div>
        )
    }
}

