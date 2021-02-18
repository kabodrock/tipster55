import React, { Component } from 'react'
import Headerall from './Header-all';
import Footer from './Footer';
import howto from './assets/logo.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas)

export default class MySale extends Component {
    render() {
        return (
            <div>
                <Headerall />
                <div class="container">
                    <div className="content-all">
                        {/* today top tipster */}
                        <div className="col-lg-10"><h2>RUNNING TIPS</h2></div>
                    <div class="row">
                        <div className="col-lg-10" style={{padding:"0"}}>
                            <div id="accordion">
                                <div class="row">
                                    <div class="col-6">
                                        <div>
                                            <div class="button-header">
                                                <a class="button-running" data-toggle="collapse"  role="button" aria-expanded="false" aria-controls="running-buy" href="#running-buy">
                                                    RUNNING BUY TIPS
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div>
                                            <div class="button-header">
                                                <a class="button-running" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="running-sell" href="#running-sell">
                                                    RUNNING SELL TIPS
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* running buy tip */}
                                <div id="running-buy" class="collapse show" data-parent="#accordion">
                                    <div class="card-body">
                                        <table className="tips-table" style={{marginTop:"20px"}}>
                                            <thead className="table-header">
                                                <tr>
                                                    <th style={{borderLeft: "none"}}>DATE</th>
                                                    <th>EVENT</th>
                                                    <th>TYPE</th>
                                                    <th>TIP</th>
                                                    <th>ADDS</th>
                                                    <th>+/-</th>
                                                    <th>PYRECHASE</th>
                                                    <th>RESULT</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-body">
                                                <tr>
                                                    <td style={{borderLeft: "none",padding:"2px"}}><p>12-02-21<br/><span>16:30</span></p></td>
                                                    <td style={{padding:"2px"}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                                    <td style={{padding:"2px"}}><p>ASIAN HANDICAP<br/><span>FULL TIME</span></p></td>
                                                    <td style={{padding:"2px"}}><p>JONG PSV +0.25</p></td>
                                                    <td style={{padding:"2px"}}><p>1.9</p></td>
                                                    <td style={{padding:"2px"}}><p>+10</p></td>
                                                    <td style={{padding:"2px"}}><p>99 ฿</p></td>
                                                    <td style={{padding:"2px",color:"red"}}><p>00:47:56<br/><span>UNTIL KICK-OFF</span></p></td>
                                                </tr>
                                                <tr>
                                                    <td style={{borderLeft: "none",padding:"2px"}}><p>12-02-21<br/><span>16:30</span></p></td>
                                                    <td style={{padding:"2px"}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                                    <td style={{padding:"2px"}}><p>ASIAN HANDICAP<br/><span>FULL TIME</span></p></td>
                                                    <td style={{padding:"2px"}}><p>JONG PSV +0.25</p></td>
                                                    <td style={{padding:"5px"}}><p>1.9</p></td>
                                                    <td style={{padding:"2px"}}><p>-10</p></td>
                                                    <td style={{padding:"2px"}}><p>99 ฿</p></td>
                                                    <td style={{padding:"2px",color:"red"}}><p>00:47:56<br/><span>UNTIL KICK-OFF</span></p></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* running sell tip */}
                                <div id="running-sell" class="collapse" data-parent="#accordion">
                                    <div class="card-body">
                                        <table className="tips-table" style={{marginTop:"20px"}}>
                                            <thead className="table-header" style={{backgroundImage: "linear-gradient(to right, #000,  #0000FF , #0000FF)"}}>
                                                <tr>
                                                    <th style={{borderLeft: "none"}}>DATE</th>
                                                    <th>EVENT</th>
                                                    <th>TYPE</th>
                                                    <th>TIP</th>
                                                    <th>ADDS</th>
                                                    <th>+/-</th>
                                                    <th>PYRECHASE</th>
                                                    <th>RESULT</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-body">
                                                <tr>
                                                    <td style={{borderLeft: "none",padding:"2px"}}><p>12-02-21<br/><span>16:30</span></p></td>
                                                    <td style={{padding:"2px"}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                                    <td style={{padding:"2px"}}><p>ASIAN HANDICAP<br/><span>FULL TIME</span></p></td>
                                                    <td style={{padding: "2px"}}><p>JONG PSV +0.25</p></td>
                                                    <td style={{padding:"2px"}}><p>1.9</p></td>
                                                    <td style={{padding:"2px"}}><p>+10</p></td>
                                                    <td style={{padding:"2px"}}><p>99 ฿</p></td>
                                                    <td style={{padding:"2px",color:"red"}}><p>00:47:56<br/><span>UNTIL KICK-OFF</span></p></td>
                                                </tr>
                                                <tr>
                                                    <td style={{borderLeft: "none",padding:"2px"}}><p>12-02-21<br/><span>16:30</span></p></td>
                                                    <td style={{padding:"2px"}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                                    <td style={{padding:"2px"}}><p>ASIAN HANDICAP<br/><span>FULL TIME</span></p></td>
                                                    <td style={{padding:"2px"}}><p>JONG PSV +0.25</p></td>
                                                    <td style={{padding:"5px"}}><p>1.9</p></td>
                                                    <td style={{padding:"2px"}}><p>-10</p></td>
                                                    <td style={{padding:"2px"}}><p>99 ฿</p></td>
                                                    <td style={{padding:"2px",color:"red"}}><p>00:47:56<br/><span>UNTIL KICK-OFF</span></p></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                    
                                
                            </div>
                            

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
