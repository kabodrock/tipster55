import React, { Component } from 'react'
import Headerall from './Header-all';
import Footer from './Footer';
import howto from './assets/logo.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas)

export default class SelectTipster extends Component {
    render() {
        return (
            <div>
                <Headerall />
                <div class="container">
                    <div className="content-all">
                        {/* today top tipster */}
                        <div className="col-lg-10 topic"><h2 className="topic">SELECT TIPSTER <br/>( TODAY EVENT )</h2></div>
                    <div class="row">
                        <div className="col-lg-10" style={{padding:"0"}}>
                            <div id="accordion">
                                <div class="row">
                                    <div class="col-6" style={{padding:"0"}}>
                                        <div>
                                            <div class="button-header">
                                                <a class="button-running" data-toggle="collapse"  role="button" aria-expanded="false" aria-controls="asian-handicap" href="#asian-handicap">
                                                    ASIAN HANDICAP<br/>
                                                </a>
                                                <span className="total" style={{color:"#666"}}>Total 26 games</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6" style={{padding:"0"}}>
                                        <div>
                                            <div class="button-header">
                                                <a class="button-running" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="total-golds" href="#total-golds">
                                                    TOTAL GOLDS<br/>
                                                </a>
                                                <span className="total" style={{color:"#666"}}>Total 26 games</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* running buy tip */}
                                <div id="asian-handicap" class="collapse show" data-parent="#accordion">
                                    <div class="card-body">
                                        <table className="tips-table" style={{marginTop:"20px"}}>
                                            <thead className="table-header">
                                                <tr>
                                                    <th colspan="5" style={{borderLeft: "none", borderBottom:"solid 2px #888"}}>ASIAN HANDICAP</th>
                                                </tr>
                                                <tr>
                                                    <th style={{borderLeft: "none"}}>LEAGUE</th>
                                                    <th>TIME</th>
                                                    <th>EVENT</th>
                                                    <th>FULL TIME</th>
                                                    <th>HALF TIME</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-body">
                                                <tr className="pd-select">
                                                    <td style={{borderLeft: "none"}}><p>LIGA 3</p></td>
                                                    <td><p style={{paddingTop:"8px"}}>LIVE<br/><span style={{color:"#2D9834"}}>2020 12:08</span><br/>00:00</p></td>
                                                    <td><p style={{color:"red"}}>BAYERN MUNCHEN II<br/><p style={{color:"blue"}}>FSV ZWICKAU</p></p></td>
                                                    <td>
                                                        <button className="button-market" 
                                                                data-toggle="collapse"  role="button" 
                                                                aria-expanded="false" aria-controls="show-markets-full" 
                                                                href="#show-markets-full">16 Markets
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button className="button-market"  
                                                                data-toggle="collapse"  role="button" 
                                                                aria-expanded="false" aria-controls="show-markets-half" 
                                                                href="#show-markets-half">16 Markets
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{border: "solid 2px #888",borderLeft: "none",borderRight: "none"}} colspan="5" id="show-markets-full" class="collapse feed-full">
                                                        <div class="col-lg-12">
                                                            <h3><span>FULL TIME</span></h3>
                                                            <hr class="line-color"/>
                                                            <div class="row">
                                                                <div class="col home-teams">
                                                                    <h3>HOME</h3>
                                                                    <hr class="line-color"/>
                                                                    <p>Home + 0 goals at odds 2.60</p>
                                                                    <a id="click-show-sell" style={{color:"#2D9834"}} data-toggle="modal" title="notification" data-target="#select-market">ADD THIS MATCH</a>
                                                                </div>
                                                                <div class="col away-teams">
                                                                    <h3>AWAY</h3>
                                                                    <hr class="line-color"/>
                                                                    <p>Away +0 goals at odds 1.48</p>
                                                                    <a id="click-show-sell" data-toggle="modal" title="notification" data-target="#select-market">ADD THIS MATCH</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{border: "solid 2px #888",borderLeft: "none",borderRight: "none"}} colspan="5" id="show-markets-half" class="collapse feed-half">
                                                        <div class="col-lg-12">
                                                            <h3><span>HALF TIME</span></h3>
                                                            <hr class="line-color"/>
                                                            <div class="row">
                                                                <div class="col home-teams">
                                                                    <h3>HOME</h3>
                                                                    <hr class="line-color"/>
                                                                    <p>Home + 0 goals at odds 2.60</p>
                                                                    <a id="click-show-sell" style={{color:"#2D9834"}} data-toggle="modal" title="notification" data-target="#select-market">ADD THIS MATCH</a>
                                                                </div>
                                                                <div class="col away-teams">
                                                                    <h3>AWAY</h3>
                                                                    <hr class="line-color"/>
                                                                    <p>Away +0 goals at odds 1.48</p>
                                                                    <a id="click-show-sell" data-toggle="modal" title="notification" data-target="#select-market">ADD THIS MATCH</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* running buy tip */}
                                <div id="total-golds" class="collapse" data-parent="#accordion">
                                    <div class="card-body">
                                        <table className="tips-table" style={{marginTop:"20px"}}>
                                            <thead className="table-header" style={{backgroundImage: "linear-gradient(to right, #000,  #0000FF , #0000FF)"}}>
                                                <tr>
                                                    <th colspan="5" style={{borderLeft: "none", borderBottom:"solid 2px #888"}}>ASIAN HANDICAP</th>
                                                </tr>
                                                <tr>
                                                    <th style={{borderLeft: "none"}}>LEAGUE</th>
                                                    <th>TIME</th>
                                                    <th>EVENT</th>
                                                    <th>FULL TIME</th>
                                                    <th>HALF TIME</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-body">
                                                <tr className="pd-select">
                                                    <td style={{borderLeft: "none"}}><p>LIGA 3</p></td>
                                                    <td><p style={{paddingTop:"8px"}}>LIVE<br/><span style={{color:"#2D9834"}}>2020 12:08</span><br/>00:00</p></td>
                                                    <td><p style={{color:"red"}}>BAYERN MUNCHEN II<br/><p style={{color:"blue"}}>FSV ZWICKAU</p></p></td>
                                                    <td>
                                                        <button className="button-market" 
                                                                data-toggle="collapse"  role="button" 
                                                                aria-expanded="false" aria-controls="show-markets-full" 
                                                                href="#show-markets-full">16 Markets
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button className="button-market"  
                                                                data-toggle="collapse"  role="button" 
                                                                aria-expanded="false" aria-controls="show-markets-half" 
                                                                href="#show-markets-half">16 Markets
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{border: "solid 2px #888",borderLeft: "none",borderRight: "none"}} colspan="5" id="show-markets-full" class="collapse feed-full">
                                                        <div class="col-lg-12">
                                                            <h3><span>FULL TIME</span></h3>
                                                            <hr class="line-color"/>
                                                            <div class="row">
                                                                <div class="col home-teams">
                                                                    <h3>HOME</h3>
                                                                    <hr class="line-color"/>
                                                                    <p>Home + 0 goals at odds 2.60</p>
                                                                    {/* <button className="login-btn"data-toggle="modal" title="notification" data-target="#modal-notification" style={{cursor:"pointer"}}>Log in</button> */}
                                                                    <a id="click-show-sell" style={{color:"#2D9834"}}>ADD THIS MATCH</a>
                                                                </div>
                                                                <div class="col away-teams">
                                                                    <h3>AWAY</h3>
                                                                    <hr class="line-color"/>
                                                                    <p>Away +0 goals at odds 1.48</p>
                                                                    <a id="click-show-sell" data-toggle="modal" title="notification" data-target="#modal-notification">ADD THIS MATCH</a>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{border: "solid 2px #888",borderLeft: "none",borderRight: "none"}} colspan="5" id="show-markets-half" class="collapse feed-half">
                                                        <div class="col-lg-12">
                                                            <h3><span>HALF TIME</span></h3>
                                                            <hr class="line-color"/>
                                                            <div class="row">
                                                                <div class="col home-teams">
                                                                    <h3>HOME</h3>
                                                                    <hr class="line-color"/>
                                                                    <p>Home + 0 goals at odds 2.60</p>
                                                                    <a id="click-show-sell" style={{color:"#2D9834"}}>ADD THIS MATCH</a>
                                                                </div>
                                                                <div class="col away-teams">
                                                                    <h3>AWAY</h3>
                                                                    <hr class="line-color"/>
                                                                    <p>Away +0 goals at odds 1.48</p>
                                                                    <a id="click-show-sell">ADD THIS MATCH</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                    
                                
                            </div>
                            

                            </div>
                            <div className="col-lg-2" style={{paddingLeft:"5px"}}>
                                {/*  */}
                                {/* <div id="sell-my-tips">
                                    <div class="table-main table-responsive">
                                        <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th rowspan="2">SELL MY TIPS</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="number-realtime">
                                                    <tr>
                                                        <td id="math">
                                                            <p id="team1">Cyprus</p>
                                                            <p id= "vs">-VS-</p>
                                                            <p id="team2">Luxembourg</p>
                
                                                            <div class="under-box">
                                                                <p>OU : 3.25 @ 1-1</p>
                                                                <p><span>Under</span></p>
                                                                <p>@ 0.87</p>
                                                            </div>
                
                                                            <form class="Predict-price" action="#">Pyrechase :<input type="text" id="Predict-price" nput tname="Predict-price"/></form>
                                                            <button type="button" class="btn btn-success">Sell</button>
                                                            <button type="button" class="btn btn-secondary">Cancel</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                        </table>
                                    </div>
                                </div> */}
                                {/*  */}
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
                                {/* <a id="click-show-sell" data-toggle="modal" title="notification" data-target="#modal-notification">ADD THIS MATCH</a> */}
                                                                    <div class="modal fade" id="select-market" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                                                                        <div class="modal-dialog ">
                                                                            <div id="userLogin" class="modal-content" style={{background: "none"}}>
                                                                            <div class="bg-login" style={{background:"none"}}>
                                                                                <div id="sell-my-tips">
                                                                                    <div class="table-main table-responsive">
                                                                                        <table class="table">
                                                                                                <thead>
                                                                                                    <tr>
                                                                                                        <th rowspan="2">SELL MY TIPS</th>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody class="number-realtime">
                                                                                                    <tr>
                                                                                                        <td id="math">
                                                                                                            <p id="team1">Cyprus</p>
                                                                                                            <p id= "vs">-VS-</p>
                                                                                                            <p id="team2">Luxembourg</p>
                                                                
                                                                                                            <div class="under-box">
                                                                                                                <p>OU : 3.25 @ 1-1</p>
                                                                                                                <p><span>Under</span></p>
                                                                                                                <p>@ 0.87</p>
                                                                                                            </div>
                                                                
                                                                                                            <form  class="Predict-price" action="#">Pyrechase : <input type="text" id="Predict-price"/></form>
                                                                                                            <button type="button" class="btn btn-success">Sell</button>
                                                                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
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
                
            </div>
        )
    }
}
