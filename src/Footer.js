import React, { Component } from 'react'
import footer from './assets/footer.jpg';
import money from './assets/money-back.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas)
export default class Footer extends Component {
    render() {
        return (
            <div className="footer" style={{marginTop:"50px"}}>
                <div className="bg-footer"><img src={footer} /></div>

            <footer>
                <div class="footer-main">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-12 col-sm-12">
                                <div class="footer-widget">
                                    <h4>WHY TIPSTER55 ?</h4>
                                    <p>TIPSTER55.COM is a comprehensive tipster and prediction site that provides in-depth tips and soccer news to punters looking for reliable information. Based on expert analysis, all football tips provided by TipsPaul are created to help user take calculated risks and reduce their margins of error.</p> 							
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-12 col-sm-12">
                                <div class="footer-link" style={{marginLeft: "50px"}}>
                                    <h4>TIPSTER55.COM</h4>
                                    <ul>
                                        <li><a href="">PROMOTIONS</a></li>
                                        <li><a href="">ABOUT US</a></li>
                                        <li><a href="">BLOG</a></li>
                                        <li><a href="">SIGN IN</a></li>
                                        <li><a href="">REGISTER</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-12 col-sm-12">
                                <div class="footer-link" style={{marginLeft: "50px"}}>
                                    <h4>TIPSTER LEVEL</h4>
                                    <ul>
                                        <li><a href="">GENERAL TIPSTER</a></li>
                                        <li><a href="">ADVANCE TIPSTER</a></li>
                                        <li><a href="">MASTER TIPSTER</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-12 col-sm-12">
                                <div class="footer-link-contact">
                                    <h4>PAYMENT METHOD</h4> 
                                    <ul>
                                        <img src={money} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        )
    }
}
