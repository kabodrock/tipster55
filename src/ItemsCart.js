import React, { Component } from 'react'
import Headerall from './Header-all';
import Footer from './Footer';
import howto from './assets/logo.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas)

export default class ItemsCart extends Component {
    render() {
        return (
            <div>
                <Headerall />
                <div class="container">
                    <div className="content-all">
                        <div className="col-lg-10"><h2 className="topic">ITEMS IN CART</h2></div>
                        <div class="items-in-cart">
                                <div class="row">
                                    <div class="col-md-9 select-method" style={{padding:"0"}}>
                                            <div class="table-main table-responsive">
                                                <table class="table">
                                                    <thead class="title-all text-center" style={{background:"rgb(71, 0, 107)",color:"#fff"}}>
                                                        <tr>
                                                            <th  style={{border:"none"}}>
                                                                <div class="row items-th">
                                                                    <div class="col">TIPSTER</div>
                                                                    <div class="col">GAME</div>
                                                                    <div class="col">BETTING TYPE</div>
                                                                    <div class="col">TOTAL</div>
                                                                    <div class="col">DELETE</div>
                                                                    <div class="col">CONFIRM</div>
                                                                </div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="cart-items">
                                                                    <div class="row">
                                                                        <div class="col items">
                                                                            <p><span>DANIEL OLIVEIRA</span><br/>Bundle Tipsters</p>
                                                                        </div>
                                                                        <div class="col items">
                                                                            <p>PACKAGE 7 TIPS</p>
                                                                        </div>
                                                                        <div class="col items">
                                                                            <p>Bundle Tips</p>
                                                                        </div>
                                                                        <div class="col items">
                                                                            <p>$ 530.00</p>
                                                                        </div>
                                                                        <div class="col icon-close">
                                                                            <a href="#"><FontAwesomeIcon icon={['fas', 'times-circle']}/></a>
                                                                        </div>
                                                                        <div class="col icon-close">
                                                                            <button className="Confirm-btn">CONFIRM</button>
                                                                        </div>
                                                                        
                                                                    </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <a class="empty-cart" href="#">EMPTY CART</a>
                                    </div>
                                    <div class="col-md-3 check-out-p" style={{paddingLeft:"5px"}}>
                                        <div class="table-main table-responsive">
                                            <table class="table" style={{width:"100%"}}>
                                                <thead>
                                                    <tr class="title-all text-center">
                                                        <th style={{border:"none",background:"rgb(71, 0, 107)",color:"#fff"}}>ORDER SUMMARY</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="checkout">
                                                            <div class="row">
                                                                <div class="col"><p>ORDER TOTAL</p></div>
                                                                <div class="col"><span>$ 5555.55</span></div>
                                                            </div>
                                                            <button className="Proceed-btn">PROCEED</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
