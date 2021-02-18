import React, { Component } from 'react'
import Headerall from './Header-all';
import Footer from './Footer';
import sale from './assets/sale.png';
import user from './assets/user.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas)

export default class MemberDashboard extends Component {
    render() {
        return (
            <div>
                <Headerall />
                <div class="container">
                    <div className="content-all">
                        {/* today top tipster */}
                        <div className="col-lg-10"><h2 className="topic">TIPSTER PROFILE</h2></div>
                        <div class="row">
                            <div className="col-lg-10 profile" style={{padding:"0px"}}>
                                <div className="profile-text">
                                    <h4 style={{textAlign:"left"}}>TIPSTER DETAIL</h4>
                                </div>
                                    
                                    <div className="more-text more-text2">
                                        <div class="row">
                                            <div className="col-6 edit-profile">
                                                <img src={user}/><br/>
                                                <p style={{color:"#FB6E00"}}>LEE YUAN<br/><span style={{color:"#666"}}>GENERAL TIPSTERS</span></p>
                                            </div>
                                            <div className="col-6">
                                                <div class="detail-tips">
                                                    <div class="row">
                                                        <div class="col-4" id=""><p>456</p></div>
                                                        <div class="col-4" id=""><p>7890</p></div>
                                                        <div class="col-4" id=""><p>99,999</p></div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4"><p>HITS</p></div>
                                                        <div class="col-4"><p>ODDS</p></div>
                                                        <div class="col-4"><p>PROFITS</p></div>
                                                    </div>
                                                </div>
                                                <p className="per-text">PERFORMANCE</p>
                                                <div class="row">
                                                    <div className="col-sm-6">
                                                        <p className="number-tips"><span className="span-tips">TOTAL TIPS</span><span className="span-num">2910</span></p>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="number-tips"><span className="span-tips">TOTAL TIPS</span><span className="span-num">2910</span></p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div className="col-sm-6">
                                                        <p className="number-tips"><span className="span-tips">TOTAL TIPS</span><span className="span-num">2910</span></p>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="number-tips"><span className="span-tips">TOTAL TIPS</span><span className="span-num">2910</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* table */}
                                    <table className="tips-table" style={{marginTop:"20px"}}>
                                            <thead className="table-header">
                                                <tr>
                                                    <th style={{borderLeft: "none"}}>DATE</th>
                                                    <th>EVENT</th>
                                                    <th>TYPE</th>
                                                    <th>TIP</th>
                                                    <th>ADDS</th>
                                                    <th>+/-</th>
                                                    <th>RESULT</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-body">
                                                <tr>
                                                    <td style={{borderLeft: "none",padding:"2px"}}><p>12-02-21<br/><span>16:30</span></p></td>
                                                    <td style={{padding:"2px"}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                                    <td style={{padding:"2px"}}><p>ASIAN HANDICAP<br/><span>FULL TIME</span></p></td>
                                                    <td style={{padding:"2px"}}><p style={{color:"#FB6E00"}}>LEE YUAN<br/><span>JUNIOR TIPSTERS</span></p></td>
                                                    <td style={{padding:"2px"}}><p>1.9</p></td>
                                                    <td style={{padding:"2px"}}><p>+10</p></td>
                                                    <td style={{padding:"2px",color:"#2D9834"}}><p>WIN<br/><span>2-1 (1-0)</span></p></td>
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
