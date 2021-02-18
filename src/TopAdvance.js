import React, { Component } from 'react'
import Headerall from './Header-all';
import Footer from './Footer';
import howto from './assets/logo.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas)

export default class TopAdvance extends Component {
    render() {
        return (
            <div>
                <Headerall />
                <div class="container">
                    <div className="content-all">
                        {/* today top tipster */}
                        <div className="col-lg-10"><h2 className="topic">TOP PERFORMANCE ADVANCE TIPSTERS</h2></div>
                    <div class="row">
                        <div className="col-lg-10" style={{padding:"0"}}>
                        <table className="tips-table">
                        <thead className="table-header">
                            <tr>
                                <th colspan="3" style={{borderLeft: "none"}}>TIPSTERS</th>
                                <th>HITS</th>
                                <th>PROFITS</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            <tr>
                                <td style={{borderLeft: "none"}}><p>1</p></td>
                                <td style={{borderLeft: "none",fontSize:"3rem"}}><FontAwesomeIcon icon={['fas', 'user-circle']} /></td>
                                <td style={{borderLeft: "none",color:"#FB6E00"}}><p>DOUGLAS MARTINS FERNANDES<br/><span>SENIOR TIPSTER</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p style={{color:"#FB6E00"}}>LEE YUAN<br/><span>JUNIOR TIPSTERS</span></p></td>
                                <td><p><button className="login-to-btn">LOG IN TO VIEW TIPS & ODDS</button></p></td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: "none"}}><p>2</p></td>
                                <td style={{borderLeft: "none",fontSize:"3rem"}}><FontAwesomeIcon icon={['fas', 'user-circle']} /></td>
                                <td style={{borderLeft: "none",color:"#FB6E00"}}><p>DOUGLAS MARTINS FERNANDES<br/><span>SENIOR TIPSTER</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p style={{color:"#FB6E00"}}>LEE YUAN<br/><span>JUNIOR TIPSTERS</span></p></td>
                                <td><p><button className="login-to-btn">LOG IN TO VIEW TIPS & ODDS</button></p></td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: "none"}}><p>3</p></td>
                                <td style={{borderLeft: "none",fontSize:"3rem"}}><FontAwesomeIcon icon={['fas', 'user-circle']} /></td>
                                <td style={{borderLeft: "none",color:"#FB6E00"}}><p>DOUGLAS MARTINS FERNANDES<br/><span>SENIOR TIPSTER</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p style={{color:"#FB6E00"}}>LEE YUAN<br/><span>JUNIOR TIPSTERS</span></p></td>
                                <td><p><button className="login-to-btn">LOG IN TO VIEW TIPS & ODDS</button></p></td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: "none"}}><p>4</p></td>
                                <td style={{borderLeft: "none",fontSize:"3rem"}}><FontAwesomeIcon icon={['fas', 'user-circle']} /></td>
                                <td style={{borderLeft: "none",color:"#FB6E00"}}><p>DOUGLAS MARTINS FERNANDES<br/><span>SENIOR TIPSTER</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p style={{color:"#FB6E00"}}>LEE YUAN<br/><span>JUNIOR TIPSTERS</span></p></td>
                                <td><p><button className="login-to-btn">LOG IN TO VIEW TIPS & ODDS</button></p></td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: "none"}}><p>5</p></td>
                                <td style={{borderLeft: "none",fontSize:"3rem"}}><FontAwesomeIcon icon={['fas', 'user-circle']} /></td>
                                <td style={{borderLeft: "none",color:"#FB6E00"}}><p>DOUGLAS MARTINS FERNANDES<br/><span>SENIOR TIPSTER</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p style={{color:"#FB6E00"}}>LEE YUAN<br/><span>JUNIOR TIPSTERS</span></p></td>
                                <td><p><button className="login-to-btn">LOG IN TO VIEW TIPS & ODDS</button></p></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <a href="" target="_blank"><button className="more-btn">VIEW MORE</button></a> */}



                    <h2 className="topic">ADVANCE TIPSTERS LEADERBOARD</h2>
                        <table className="tips-table">
                        <thead className="table-header">
                            <tr>
                                <th colspan="2" style={{borderLeft: "none"}}>TIPSTERS</th>
                                <th>HITS</th>
                                <th>PROFITS</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            <tr>
                                <td style={{borderLeft: "none",fontSize:"3rem"}}><FontAwesomeIcon icon={['fas', 'user-circle']} /></td>
                                <td style={{borderLeft: "none",color:"#FB6E00"}}><p>DOUGLAS MARTINS FERNANDES<br/><span>SENIOR TIPSTER</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p style={{color:"#FB6E00"}}>LEE YUAN<br/><span>JUNIOR TIPSTERS</span></p></td>
                                <td><p><button className="login-to-btn">LOG IN TO VIEW TIPS & ODDS</button></p></td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: "none",fontSize:"3rem"}}><FontAwesomeIcon icon={['fas', 'user-circle']} /></td>
                                <td style={{borderLeft: "none",color:"#FB6E00"}}><p>DOUGLAS MARTINS FERNANDES<br/><span>SENIOR TIPSTER</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p style={{color:"#FB6E00"}}>LEE YUAN<br/><span>JUNIOR TIPSTERS</span></p></td>
                                <td><p><button className="login-to-btn">LOG IN TO VIEW TIPS & ODDS</button></p></td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: "none",fontSize:"3rem"}}><FontAwesomeIcon icon={['fas', 'user-circle']} /></td>
                                <td style={{borderLeft: "none",color:"#FB6E00"}}><p>DOUGLAS MARTINS FERNANDES<br/><span>SENIOR TIPSTER</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p style={{color:"#FB6E00"}}>LEE YUAN<br/><span>JUNIOR TIPSTERS</span></p></td>
                                <td><p><button className="login-to-btn">LOG IN TO VIEW TIPS & ODDS</button></p></td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: "none",fontSize:"3rem"}}><FontAwesomeIcon icon={['fas', 'user-circle']} /></td>
                                <td style={{borderLeft: "none",color:"#FB6E00"}}><p>DOUGLAS MARTINS FERNANDES<br/><span>SENIOR TIPSTER</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p style={{color:"#FB6E00"}}>LEE YUAN<br/><span>JUNIOR TIPSTERS</span></p></td>
                                <td><p><button className="login-to-btn">LOG IN TO VIEW TIPS & ODDS</button></p></td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: "none",fontSize:"3rem"}}><FontAwesomeIcon icon={['fas', 'user-circle']} /></td>
                                <td style={{borderLeft: "none",color:"#FB6E00"}}><p>DOUGLAS MARTINS FERNANDES<br/><span>SENIOR TIPSTER</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p style={{color:"#FB6E00"}}>LEE YUAN<br/><span>JUNIOR TIPSTERS</span></p></td>
                                <td><p><button className="login-to-btn">LOG IN TO VIEW TIPS & ODDS</button></p></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <a href="" target="_blank"><button className="more-btn">VIEW MORE</button></a> */}
                            


                            
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
