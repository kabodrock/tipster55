import React, { Component } from 'react'
import Headerall from './Header-all';
import Footer from './Footer';
import payment01 from './assets/1.png';
import payment02 from './assets/2.png';
import payment03 from './assets/5.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas)

export default class Payment extends Component {
    render() {
        return (
            <div>
                <Headerall />
                <div class="container">
                    <div className="content-all">
                        <div className="col-lg-10"><h2 className="topic">MAKE A DEPOSIT</h2></div>
                        <div class="make-a-deposit">
            <div class="row">
				<div class="col-md-9 select-method" style={{padding:"0"}}>
                        <div class="table-main table-responsive">
                            <table class="table" >
                                <thead class="title-all text-center">
                                    <tr>
                                        <th style={{background:"rgb(71, 0, 107)",color:"#fff",border:"none"}}>SELECT PAYMENT METHOD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="select-payment">
                                            <form action="">
                                                <div class="row">
                                                    <div class="col-3 payments">
                                                        <input type="radio" checked="checked" id="paypal" name="payment" value="paypal"/>
                                                        <label for="visa"><img src={payment01}/></label>
                                                    </div>
                                                    <div class="col-3 payments">
                                                        <input type="radio" id="mastercard" name="payment" value="mastercard"/>
                                                        <label for="mastercard"><img src={payment02} /></label>
                                                    </div>
                                                    <div class="col-3 payments">
                                                        <input type="radio" id="mastercard" name="payment" value="mastercard"/>
                                                        <label for="paypal"><img src={payment03} /></label>
                                                    </div>
                                                    <div class="col-3 payments"></div>
                                                </div>
                                            </form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="select-payment">
                                            <form action="">
                                                <div class="row">
                                                    <div class="col button-select-payment">
                                                        <button className="all2-btn">150 CREDIT PACK</button>
                                                    </div>
                                                    <div class="col button-select-payment">
                                                        <button className="all2-btn">500 CREDIT PACK</button>
                                                    </div>
                                                    <div class="col button-select-payment">
                                                        <button className="all2-btn">1000 CREDIT PACK</button>
                                                    </div>
                                                    <div class="col button-select-payment">
                                                        <button className="all2-btn">2000 CREDIT PACK</button>
                                                    </div>
                                                    <div class="col button-select-payment">
                                                        <button className="all2-btn">3000 CREDIT PACK</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="select-payment">
                                            <form action="">
                                                <div class="row">
                                                    <div class="col button-select-country">
                                                    <button className="all-btn">THAILAND</button>
                                                    </div>
                                                    <div class="col button-select-country">
                                                        <button className="all-btn">MALAYSIA</button>
                                                    </div>
                                                    <div class="col button-select-country">
                                                    <button className="all-btn">VIETNAM</button>
                                                    </div>
                                                    <div class="col button-select-country">
                                                    <button className="all-btn">INDONESIA</button>
                                                    </div>
                                                    <div class="col button-select-country"></div>
                                                    <div class="col button-select-country"></div>
                                                </div>
                                            </form>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
                <div class="col-md-3 check-out-p" style={{paddingLeft:"5px"}}>
                    <div class="table-main table-responsive">
                        <table class="table" >
                            <thead>
                                <tr class="title-all text-center">
                                    <th style={{background:"rgb(71, 0, 107)",color:"#fff",border:"none"}}>CHECKOUT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="checkout">
                                        <div class="row">
                                            <div class="col"><p>SUB TOTAL</p></div>
                                            <div class="col"><p>$00.00</p></div>
                                        </div>
                                        <div class="row">
                                            <div class="col"><p>COUPON CODE</p></div>
                                            <div class="col"><p>-</p></div>
                                        </div>
                                        <div class="pro-code"><a href="#"><span>HAVE A PROMO CODE?</span></a></div>
                                        <div class="row">
                                            <div class="col"><p>GRAND TOTAL</p></div>
                                            <div class="col"><span><p>$0.00</p></span></div>
                                        </div>
                                        <button className="Proceed-btn">CHECKOUT</button>
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
