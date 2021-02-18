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
                        <div className="col-lg-10"><h2 className="topic">MEMBER DASHBOARD</h2></div>
                        <div class="row">
                            <div className="col-lg-10 profile" style={{padding:"0px"}}>
                                <div className="profile-text">
                                    <h4 style={{textAlign:"left"}}>WELLCOME BACK</h4>
                                </div>
                                    
                                    <div className="more-text more-text2">
                                        <div class="row">
                                            <div className="col-6 edit-profile">
                                                <img src={user}/><br/>
                                                <a href=""><button className="more-btn">EDIT PHOFILE</button></a>
                                            </div>
                                            <div className="col-6">
                                                <div class="your-credits">
                                                    <p>Your Credits : <span id="credits">$1000</span></p>
                                                </div>
                                                <div class="yesterday-tips">
                                                    <div class="row">
                                                        <div class="col-4" id=""><p>10</p></div>
                                                        <div class="col-4" id=""><p>8</p></div>
                                                        <div class="col-4" id=""><p>2</p></div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4"><p>Yesterday bought tips</p></div>
                                                        <div class="col-4"><p>Yesterday win tips</p></div>
                                                        <div class="col-4"><p>Yesterday lost tips</p></div>
                                                    </div>
                                                </div>
                                                
                                                <div class="today-tips">
                                                    <div class="row">
                                                        <div class="col-6" id=""><p>10</p></div>
                                                        <div class="col-6" id=""><p>8</p></div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-6"><p>Today Sale</p></div>
                                                        <div class="col-6"><p>Today Tips Sold</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="profile-text" style={{backgroundImage: "linear-gradient(to right, #000,  #0000FF , #0000FF)"}}>
                                        <h4 style={{textAlign:"left"}}>
                                            <FontAwesomeIcon icon={['fas', 'shopping-cart']} style={{color: "green"}}/>
                                            &nbsp;&nbsp;BUY MODE
                                        </h4>
                                    </div>
                                    <div className="more-text more-text2">
                                        <div id="accordion">
                                            <div class="row">
                                                <div class="col-4">
                                                    <div>
                                                        <div class="button-header">
                                                            <a class="button-running" data-toggle="collapse"  role="button" aria-expanded="false" aria-controls="mytips-performance" href="#mytips-performance">
                                                                MY TIPS PERFORMANCE
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div>
                                                        <div class="button-header">
                                                            <a class="button-running" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="yesterday-result" href="#yesterday-result">
                                                                YESTERDAY RESULT
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div>
                                                        <div class="button-header">
                                                            <a class="button-running" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="transaction-history" href="#transaction-history">
                                                                TRANSACTION HISTORY
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* mytips performance */}
                                            <div id="mytips-performance" class="collapse show" data-parent="#accordion">
                                                <div class="card-body">
                                                    <table className="tips-table" style={{marginTop:"20px"}}>
                                                        <thead className="table-header" style={{backgroundImage: "linear-gradient(to right, #000,  #0000FF , #0000FF)"}}>
                                                            <tr>
                                                                <th style={{borderLeft: "none"}}>DATE</th>
                                                                <th>EVENT</th>
                                                                <th>TYPE</th>
                                                                <th>TIPSTERS</th>
                                                                <th>ADDS</th>
                                                                <th>+/-</th>
                                                                <th>RESULT</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="table-body">
                                                            <tr>
                                                                <td style={{borderLeft: "none",padding:"5px"}}><p>12-02-21<br/><span>16:30</span></p></td>
                                                                <td style={{padding:"5px"}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                                                <td style={{padding:"5px"}}><p>ASIAN HANDICAP<br/><span>FULL TIME</span></p></td>
                                                                <td style={{padding: "5px"}}><p>JONG PSV +0.25</p></td>
                                                                <td style={{padding:"5px"}}><p>1.9</p></td>
                                                                <td style={{padding:"5px"}}><p>+10</p></td>
                                                                <td style={{padding:"5px"}}><p>99 ฿</p></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* yesterday result */}
                                            <div id="yesterday-result" class="collapse" data-parent="#accordion">
                                                <div class="card-body">
                                                    <table className="tips-table" style={{marginTop:"20px"}}>
                                                        <thead className="table-header" style={{backgroundImage: "linear-gradient(to right, #000,  #0000FF , #0000FF)"}}>
                                                            <tr>
                                                                <th style={{borderLeft: "none"}}>DATE</th>
                                                                <th>EVENT</th>
                                                                <th>TYPE</th>
                                                                <th>TIPSTERS</th>
                                                                <th>ADDS</th>
                                                                <th>+/-</th>
                                                                <th>RESULT</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="table-body">
                                                            <tr>
                                                                <td style={{borderLeft: "none",padding:"5px"}}><p>12-02-21<br/><span>16:30</span></p></td>
                                                                <td style={{padding:"5px"}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                                                <td style={{padding:"5px"}}><p>ASIAN HANDICAP<br/><span>FULL TIME</span></p></td>
                                                                <td style={{padding: "5px"}}><p>JONG PSV +0.25</p></td>
                                                                <td style={{padding:"5px"}}><p>1.9</p></td>
                                                                <td style={{padding:"5px"}}><p>+10</p></td>
                                                                <td style={{padding:"5px"}}><p>99 ฿</p></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* transaction history */}
                                            <div id="transaction-history" class="collapse" data-parent="#accordion">
                                                <div class="card-body">
                                                    <table className="tips-table" style={{marginTop:"20px"}}>
                                                        <thead className="table-header" style={{backgroundImage: "linear-gradient(to right, #000,  #0000FF , #0000FF)"}}>
                                                            <tr>
                                                                <th style={{borderLeft: "none"}}>DATE</th>
                                                                <th>DESCRIPTION</th>
                                                                <th>CREDITS</th>
                                                                <th>DEBIT</th>
                                                                <th>BALANCE</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="table-body">
                                                            <tr>
                                                                <td style={{borderLeft: "none",padding:"2px"}}><p>ยัง</p></td>
                                                                <td style={{padding:"2px"}}><p>ไม่</p></td>
                                                                <td style={{padding:"2px"}}><p>รู้</p></td>
                                                                <td style={{padding: "2px"}}><p>จะใส่</p></td>
                                                                <td style={{padding:"2px"}}><p>อะไร นะจ๊ะ</p></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="profile-text">
                                        <h4 style={{textAlign:"left"}}><img className="sale-icon" src={sale}/>SALE MODE</h4>
                                    </div>
                                    
                                    <div className="more-text more-text2">
                                    <div id="accordion2">
                                            <div class="row">
                                                <div class="col-4">
                                                    <div>
                                                        <div class="button-header">
                                                            <a class="button-running" data-toggle="collapse"  role="button" aria-expanded="false" aria-controls="statement" href="#statement">
                                                                STATEMENT
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div>
                                                        <div class="button-header">
                                                            <a class="button-running" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="mysale" href="#mysale">
                                                                MY SALE
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div>
                                                        <div class="button-header">
                                                            <a class="button-running" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="yesterday-result2" href="#yesterday-result2">
                                                                YESTERDAY RESULT
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* mytips performance */}
                                            <div id="statement" class="collapse show" data-parent="#accordion2">
                                                <div class="card-body">
                                                    <table className="tips-table" style={{marginTop:"20px"}}>
                                                        <thead className="table-header">
                                                            <tr>
                                                                <th style={{borderLeft: "none"}}>DATE</th>
                                                                <th>SETTLYMENT DETAILS</th>
                                                                <th>COMMISSION</th>
                                                                <th>STATUS</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="table-body">
                                                            <tr>
                                                                <td style={{borderLeft: "none",padding:"5px"}}><p>12-02-21<br/><span>16:30</span></p></td>
                                                                <td style={{padding:"5px"}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                                                <td style={{padding:"5px"}}><p>ASIAN HA19.8 ฿<br/><span>(20%)</span></p></td>
                                                                <td style={{padding: "5px"}}><p>UNDER 2.25</p></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* yesterday result */}
                                            <div id="mysale" class="collapse" data-parent="#accordion2">
                                                <div class="card-body">
                                                    <table className="tips-table" style={{marginTop:"20px"}}>
                                                        <thead className="table-header">
                                                            <tr>
                                                                <th style={{borderLeft: "none"}}>DATE</th>
                                                                <th >EVENT</th>
                                                                <th>TYPE</th>
                                                                <th>TIP</th>
                                                                <th>ADDS</th>
                                                                <th>PYRECHASE</th>
                                                                <th>RESULT</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="table-body">
                                                            <tr>
                                                                <td style={{borderLeft: "none",padding:"2px"}}><p>12-02-21<br/><span>16:30</span></p></td>
                                                                <td style={{padding:"2px",}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                                                <td style={{padding:"2px"}}><p>ASIAN HANDICAP<br/><span>FULL TIME</span></p></td>
                                                                <td style={{padding:"2px"}}><p>JONG PSV +0.25</p></td>
                                                                <td style={{padding:"2px"}}><p>1.9</p></td>
                                                                <td style={{padding:"2px"}}><p>99 ฿</p></td>
                                                                <td style={{padding:"2px",color:"red"}}><p>00:47:56<br/><span>UNTIL KICK-OFF</span></p></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* yesterday result */}
                                            <div id="yesterday-result2" class="collapse" data-parent="#accordion2">
                                                <div class="card-body">
                                                    <table className="tips-table" style={{marginTop:"20px"}}>
                                                        <thead className="table-header">
                                                            <tr>
                                                                <th style={{borderLeft: "none"}}>DATE</th>
                                                                <th>EVENT</th>
                                                                <th>TYPE</th>
                                                                <th>TIPSTERS</th>
                                                                <th>ADDS</th>
                                                                <th>+/-</th>
                                                                <th>RESULT</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="table-body">
                                                            <tr>
                                                                <td style={{borderLeft: "none",padding:"5px"}}><p>12-02-21<br/><span>16:30</span></p></td>
                                                                <td style={{padding:"5px"}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                                                <td style={{padding:"5px"}}><p>ASIAN HANDICAP<br/><span>FULL TIME</span></p></td>
                                                                <td style={{padding: "5px"}}><p>JONG PSV +0.25</p></td>
                                                                <td style={{padding:"5px"}}><p>1.9</p></td>
                                                                <td style={{padding:"5px"}}><p>+10</p></td>
                                                                <td style={{padding:"5px"}}><p>99 ฿</p></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
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
