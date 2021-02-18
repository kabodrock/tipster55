import React, { Component } from 'react'
import Headerall from './Header-all';
import Footer from './Footer';
import howto from './assets/logo.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas)

export default class TodayAdvanceTipster extends Component {
    render() {
        return (
            <div>
                <Headerall />
                <div class="container">
                    <div className="content-all">
                    <div class="row">
                        <div className="col-lg-10" style={{padding:"0"}}>
                            <div><h2 className="topic">TODAY ADVANCE TIPS</h2></div>
                            <div class="form-group betting-type">
                                <label for="exampleFormControlSelect1"></label>
                                <select class="form-control" id="exampleFormControlSelect1" style={{background:"none",color:"#888",width:"22%"}}>
                                <option>Betting Type-All</option>
                                <option>Asian Handicap Full Time</option>
                                <option>Asian Handicap Half Time</option>
                                <option>Total Goal Full Time</option>
                                <option>Total Goal Half Time</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div className="col-lg-10" style={{padding:"0"}}>
                            <table className="tips-table">
                                <thead className="table-header">
                                    <tr>
                                        <th style={{borderLeft: "none"}}>DATE</th>
                                        <th>EVENT</th>
                                        <th>TYPE</th>
                                        <th>TIPSTERS</th>
                                        <th>TIPS & ODDS</th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    <tr>
                                        <td style={{borderLeft: "none"}}><p>12-02-21<br/><span>16:30</span></p></td>
                                        <td><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                        <td><p>ASIAN HANDICAP<br/><span>FULL TIME</span></p></td>
                                        <td><p style={{color:"#FB6E00"}}>LEE YUAN<br/><span>JUNIOR TIPSTERS</span></p></td>
                                        <td><p><button className="login-to-btn">LOG IN TO VIEW TIPS & ODDS</button></p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                            <div className="col-lg-2" style={{paddingLeft:"5px"}}>
                                <div class="responsive-hide">
                                    <div class="table-main table-responsive">
                                        <table class="table" >
                                            <thead>
                                                <tr class="credit-pack">
                                                    <th style={{border:"none", fontSize: "0.9rem", background:"#47006b",color:"#fff"}}>SELECT CREDIT PACK</th>
                                                </tr>
                                            </thead>
                                            <tbody class="select-credit">
                                                <tr>
                                                    <td id="select-credit-pack" style={{border:"none"}}>
                                                        <div class="button-credit">
                                                            <p class="starter-kit">STARTER KIT</p>
                                                            <p class="credit-price">150</p>
                                                            <br/>
                                                            <div class="credit-bg"><a href="{% url 'pay' %}" target="_blank"><span>BUY NOW</span></a></div>
                                                        </div>
                                                        <div class="button-credit">
                                                            <p>STARTER KIT</p>
                                                            <p class="credit-price">500</p>
                                                            <br/>
                                                            <div class="credit-bg"><a href="{% url 'pay' %}" target="_blank"><span>BUY NOW</span></a></div>
                                                        </div>
                                                        <div class="button-credit">
                                                            <p>STARTER KIT</p>
                                                            <p class="credit-price">1000</p>
                                                            <br/>
                                                            <div class="credit-bg"><a href="{% url 'pay' %}" target="_blank"><span>BUY NOW</span></a></div>
                                                        </div>
                                                        <div class="button-credit">
                                                            <p>STARTER KIT</p>
                                                            <p class="credit-price">2000</p>
                                                            <br/>
                                                            <div class="credit-bg"><a href="{% url 'pay' %}" target="_blank"><span>BUY NOW</span></a></div>
                                                        </div>
                                                        <div class="button-credit">
                                                            <p>STARTER KIT</p>
                                                            <p class="credit-price">3000</p>
                                                            <br/>
                                                            <div class="credit-bg"><a href="{% url 'pay' %}" target="_blank"><span>BUY NOW</span></a></div>
                                                        </div>
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
