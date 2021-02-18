import React, { Component } from 'react'
import {Link } from "react-router-dom";
import './App.css';
import bg from './assets/bg.png';
import logo2 from './assets/logo2.png';
import facebook from './assets/facebook.png';
import google from './assets/google.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas)


export default class Header extends Component {

    
    render() {
        return (
            <div className="header">
                {/* background */}
                <div className="bg"><img src={bg} /></div>
                <header className="main-header">
                    <nav class="navbar navbar-expand-lg fixed-top navbar-light" style={{background: "rgba(0,0,0,0.9)"}}>
                        <a href="" className="logo-center" style={{marginLeft:"120px"}}><img className="logo-img" src={logo2} /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                        <ul class="navbar-nav"style={{float: "left",marginRight:"120px"}}>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "#fff"}}>Today Tips</a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Today Free Tips</a>
                                    <a class="dropdown-item" href="#">Today Advance Tips</a>
                                    <a class="dropdown-item" href="#">Today Master Tips</a>                  
                                </div>
                            </li><hr className="line-menu"/>
                        
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "#fff"}}>
                                    Tipsters
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">General Tipsters</a>
                                    <a class="dropdown-item" href="#">Advance Tipsters</a>
                                    <a class="dropdown-item" href="#">Master Tipsters</a>
                                </div>
                            </li><hr className="line-menu"/>
                            <li class="nav-item">
                                <a class="nav-link" href="#" style={{color: "#fff"}}>Promotions</a>
                            </li><hr className="line-menu"/>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "#fff"}}>
                                    ForSellTips
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Dashboard</a>
                                <a class="dropdown-item" href="#">Running Tips</a>
                                <a class="dropdown-item" href="#">Select Tips</a>
                                <a class="dropdown-item" href="#">My Profile Setting</a>
                                </div>
                            </li><hr className="line-menu"/>
                            <li class="nav-item dropdown">
                                <button className="login-btn"data-toggle="modal" title="notification" data-target="#modal-notification" style={{cursor:"pointer"}}>Log in</button>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "#fff"}}>
                                    <FontAwesomeIcon icon={['fas', 'shopping-cart']} style={{color: "green"}}/>
                                    <span class="badge">1</span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{width:"180px"}}>
                                    <div class="item">
                                        <ul class="cart-list">
                                            <li className="items-list">
                                                <p style={{color:"#FB6E00"}}>HDP(Full)<br/><span style={{fontSize:"0.8rem",color:"#fff"}}>Palestino vs Union La Calera</span></p>
                                                
                                                <hr/>
                                            </li>
                                            <li class="total">
                                                <p><span class="price">Total : ฿500.00</span></p><br/>
                                                <button className="all-btn">VIEW CART</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </nav>
                    {/* header content */}
                    <div className="container-fluid" style={{padding:"0"}}>
                        <div className="bg-header">
                            {/* <div className="col-lg-6"></div> */}
                            <div className="header-text">
                                <h1>SPORTS<br/>PREDICTIONS</h1>
                                <h4>MARKETPLACE</h4>
                                {/* <button className="login-btn"data-toggle="modal" title="notification" data-target="#modal-notification" style={{cursor:"pointer"}}>Log in</button> */}
                                        <a href="" target="_blank"><button className="pro-btn">Promotion</button></a>
                                        <a href="" target="_blank"><button className="reg-btn">Register</button></a>
                                <p>Do you want soccer tips?</p>
                                {/* <FontAwesomeIcon icon={['fas', 'angle-double-right']} style={{color: "#DC0574", fontSize: "3rem", paddingTop:"10px", marginRight:"10px"}}/><button className="pro-btn">Promotion</button> */}
                            </div>
                        </div>
                    </div>
                </header>
                
              
                <div class="modal fade" id="modal-notification" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class="modal-dialog ">
                        <div id="userLogin" class="modal-content" style={{background: "none"}}>
                        <div class="bg-login">
                            <h1 style={{color:"#fff"}}>LOGIN</h1><br/>
                            <form action="" method="POST" class="df-form">
                                <div class="df-input-box active">
                                    <input type="email" id="username"  name="username" placeholder="Email" required="required" />
                                    <label for="email"><i class="fa fa-user" aria-hidden="true" style={{color: "#490303"}}></i></label>
                                    <div class="invalid-feedback"></div>
                                </div>
                                <div class="df-input-box active">
                                    <input id="password" name="password" type="password" placeholder="Password" required="required" pattern="\d*"/>
                                    <label for="password"><i class="fa fa-lock" aria-hidden="true" style={{color: "#490303"}}></i></label>
                                    <div class="invalid-feedback"></div>
                                </div>

                                <a href="" target="_blank"><p>Forget Password ? </p></a><a href="" target="_blank"><p style={{textAlign:"center", color:"#fb6e00"}}>Register&nbsp;&nbsp;| &nbsp;&nbsp;</p></a>
                                
                                <input id="btn-login" type="submit" value="Log in"/>
                                <img style={{width:"70%",margin:"5px"}} src={facebook}/>
                                <img style={{width:"70%",margin:"5px"}} src={google}/>
                                
                                {/* <a id="btnfalse" class="btn bg-black border-1" style={{border: "1px solid #ccc",fontSize:"12px",width:"48",float: "right",color:"#fff",padding:"10px 8px",fontWeight: "100"}}>กำลังตรวจสอบ..</a> */}
                                <div class="invalid-feedback" style={{display:"block"}}></div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

