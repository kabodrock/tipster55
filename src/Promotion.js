import React, { Component } from 'react'
import Headerall from './Header-all';
import Footer from './Footer';
import pro from './assets/pro.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas)

export default class Promotion extends Component {
    render() {
        return (
            <div>
                <Headerall />
                <div class="container">
                    <div className="content-all">
                        {/* today top tipster */}
                        <div className="col-lg-10"><h2 className="topic">PROMOTIONS</h2></div>
                        <div class="row">
                            <div className="col-lg-10 promotion" style={{padding:"0 20px"}}>
                                <div className="promotion-text">
                                    <h3 style={{textAlign:"left"}}>Lorem </h3>
                                    <p style={{textAlign:"right",fontWeight:"200"}}>PROMOTION DATE: 01 JANUARY 2021 TO 01 JANUARY 2022</p>
                                </div>
                                <div className="more-text">
                                    <img src={pro} /><br/>
                                    <div className="promotion-more">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum interdum ex. Suspendisse potenti. Maecenas egestas rutrum mauris, vel consectetur tortor placerat in. Pellentesque eget ipsum ut odio efficitur tincidunt non non metus. Morbi eget tempus libero. Mauris nec arcu hendrerit, fringilla nibh et, efficitur eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor semper ultricies. Sed augue orci, dignissim nec quam vel, pulvinar tempus odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit lacus, pulvinar ut arcu a, rutrum sodales leo. Vestibulum ultricies purus ut nunc varius, non tempor erat convallis. Sed facilisis cursus tellus et convallis.</p>
                                        <br/>
                                        <a href="" target="_blank"><button className="more-btn" style={{margin:"20px"}}>VIEW MORE</button></a>
                                    </div>
                                </div>

                                <div className="promotion-text">
                                    <h3 style={{textAlign:"left"}}>Lorem</h3>
                                    <p style={{textAlign:"right",fontWeight:"200"}}>PROMOTION DATE: 01 JANUARY 2021 TO 01 JANUARY 2022</p>
                                </div>
                                <div className="more-text">
                                    <img src={pro} /><br/>
                                    <div className="promotion-more">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum interdum ex. Suspendisse potenti. Maecenas egestas rutrum mauris, vel consectetur tortor placerat in. Pellentesque eget ipsum ut odio efficitur tincidunt non non metus. Morbi eget tempus libero. Mauris nec arcu hendrerit, fringilla nibh et, efficitur eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor semper ultricies. Sed augue orci, dignissim nec quam vel, pulvinar tempus odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit lacus, pulvinar ut arcu a, rutrum sodales leo. Vestibulum ultricies purus ut nunc varius, non tempor erat convallis. Sed facilisis cursus tellus et convallis.</p>
                                        <br/>
                                        <a href="" target="_blank"><button className="more-btn" style={{margin:"20px"}}>VIEW MORE</button></a>
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
                                                            <div class="credit-bg"><a href="" target="_blank"><span>BUY NOW</span></a></div>
                                                        </div>
                                                        <div class="button-credit">
                                                            <p>STARTER KIT</p>
                                                            <p class="credit-price">500</p>
                                                            <br/>
                                                            <div class="credit-bg"><a href="" target="_blank"><span>BUY NOW</span></a></div>
                                                        </div>
                                                        <div class="button-credit">
                                                            <p>STARTER KIT</p>
                                                            <p class="credit-price">1000</p>
                                                            <br/>
                                                            <div class="credit-bg"><a href="" target="_blank"><span>BUY NOW</span></a></div>
                                                        </div>
                                                        <div class="button-credit">
                                                            <p>STARTER KIT</p>
                                                            <p class="credit-price">2000</p>
                                                            <br/>
                                                            <div class="credit-bg"><a href="" target="_blank"><span>BUY NOW</span></a></div>
                                                        </div>
                                                        <div class="button-credit">
                                                            <p>STARTER KIT</p>
                                                            <p class="credit-price">3000</p>
                                                            <br/>
                                                            <div class="credit-bg"><a href="" target="_blank"><span>BUY NOW</span></a></div>
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
