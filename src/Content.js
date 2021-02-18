import React, { Component } from 'react'
import howto from './assets/logo.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas)


export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <div class="container">
                    {/* today top tipster */}
                    <h2 className="topic">TODAY FREE TIPS</h2>
                    <div class="form-group betting-type">
                        <label for="exampleFormControlSelect1"></label>
                        <select class="form-control" id="exampleFormControlSelect1" style={{float:"left", background:"none",color:"#888",width:"22%" }}>
                        <option>Betting Type-All</option>
                        <option>Asian Handicap Full Time</option>
                        <option>Asian Handicap Half Time</option>
                        <option>Total Goal Full Time</option>
                        <option>Total Goal Half Time</option>
                        </select>
                    </div>
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
                            <tr>
                                <td style={{borderLeft: "none"}}><p>12-02-21<br/><span>16:30</span></p></td>
                                <td><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                <td><p>ASIAN HANDICAP<br/><span>FULL TIME</span></p></td>
                                <td><p style={{color:"#FB6E00"}}>LEE YUAN<br/><span>JUNIOR TIPSTERS</span></p></td>
                                <td><p><button className="login-to-btn">LOG IN TO VIEW TIPS & ODDS</button></p></td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: "none"}}><p>12-02-21<br/><span>16:30</span></p></td>
                                <td><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                <td><p>ASIAN HANDICAP<br/><span>FULL TIME</span></p></td>
                                <td><p style={{color:"#FB6E00"}}>LEE YUAN<br/><span>JUNIOR TIPSTERS</span></p></td>
                                <td><p><button className="login-to-btn">LOG IN TO VIEW TIPS & ODDS</button></p></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <a href="" target="_blank"><button className="more-btn">VIEW MORE</button></a> */}

                    {/* today top 5 tipster */}
                    <h2 className="topic">TODAY TOP 5 TIPSTER</h2>
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
                                <td style={{borderLeft: "none"}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p>+284.50</p></td>
                                <td><p><button className="login-to-btn">VIEW MORE</button></p></td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: "none"}}><p>2</p></td>
                                <td style={{borderLeft: "none",fontSize:"3rem"}}><FontAwesomeIcon icon={['fas', 'user-circle']} /></td>
                                <td style={{borderLeft: "none"}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p>+284.50</p></td>
                                <td><p><button className="login-to-btn">VIEW MORE</button></p></td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: "none"}}><p>3</p></td>
                                <td style={{borderLeft: "none",fontSize:"3rem"}}><FontAwesomeIcon icon={['fas', 'user-circle']} /></td>
                                <td style={{borderLeft: "none"}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p>+284.50</p></td>
                                <td><p><button className="login-to-btn">VIEW MORE</button></p></td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: "none"}}><p>4</p></td>
                                <td style={{borderLeft: "none",fontSize:"3rem"}}><FontAwesomeIcon icon={['fas', 'user-circle']} /></td>
                                <td style={{borderLeft: "none"}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p>+284.50</p></td>
                                <td><p><button className="login-to-btn">VIEW MORE</button></p></td>
                            </tr>
                            <tr>
                                <td style={{borderLeft: "none"}}><p>5</p></td>
                                <td style={{borderLeft: "none",fontSize:"3rem"}}><FontAwesomeIcon icon={['fas', 'user-circle']} /></td>
                                <td style={{borderLeft: "none"}}><p>JONG PSV - HELMOND SPORT<br/><span>NETHERLANDS 2-EERSTE DIVISIE</span></p></td>
                                <td><p>80.0%</p></td>
                                <td><p>+284.50</p></td>
                                <td><p><button className="login-to-btn">VIEW MORE</button></p></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <a href="" target="_blank"><button className="more-btn">VIEW MORE</button></a> */}
                </div>
            </div>
        )
    }
}
