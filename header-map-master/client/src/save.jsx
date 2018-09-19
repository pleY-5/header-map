import React from 'react';
// import styles from '../dist/main.css';
import styles from 'https://s3-us-west-1.amazonaws.com/yelp-reactor-header/main.css';

export default class Save extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div id="save" className={styles.modal}>
      <div className={styles.saveContainer}>
        <div onClick={this.props.close} className={styles.close}>&times;</div>
        <div className={styles.save}>
          <div className={styles.saveHeader}>
            <h2 className={styles.saveHeaderTitle}>Sign Up for Yelp</h2>
            <p className={styles.saveHeaderSub}>Connect with great local businesses</p>
            <p className={styles.saveHeaderSS}>By signing up, you agree to Yelp’s Terms of Service and Privacy Policy.</p>
          </div>
          <div className={styles.saveSignUp}>
            <button className={styles.signFb}>
              <span>
                <div className={styles.signFbInner}>
                  <img src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/fb.png" width="24px" height="24px"></img>
                  <div className={styles.signFbtext}> Sign Up with Facebook</div>
                </div>
              </span>
            </button>
            <button className={styles.signGl}>
              <span>
                <div className={styles.signGlInner}>
                  <img src="https://s3-us-west-1.amazonaws.com/yelp-reactor-header/gl.png" width="24px" height="24px"></img>
                  <div className={styles.signGltext}> Sign Up with Google</div>
                </div>
              </span>
            </button>
            <p className={styles.signMessage}>Don't worry, we never post without your permission.</p>
            <fieldset className={styles.or}>
              <legend align="center">OR</legend>
            </fieldset>
          </div>
          <form className={styles.signUp}>
            <div className={styles.personInfo}>
              <ul className={styles.personName}>
                <li className={styles.namee}>
                  <input className={styles.nameInput} type="text" placeholder="First Name"></input>
                </li>
                <li className={styles.namee}>
                  <input className={styles.nameInput} type="text" placeholder="Last Name"></input>
                </li>
              </ul>
              <div className={styles.personEPCont}>
                <input className={styles.personEmail} type="text" placeholder="Enail"></input>
                <input className={styles.personPW} type="text" placeholder="Password"></input>
              </div>
            </div>
            <div className={styles.morePersonInfo}>
              <input className={styles.personZip} type="text" placeholder="Zip Code" ></input>
              <div className={styles.personOption}>
                <label className={styles.moreLabel}>Birthday</label>
                <span className={styles.moreSpan}>Optional</span>
                <fieldset className={styles.moreField}>
                  <ul className={styles.moreField}>
                    <li>
                      <select>
                        <option value>Month</option>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                      </select>
                    </li>
                    <li>
                      <select>
                        <option value>Day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                    </li>
                    <li>
                      <select>
                        <option value>Year</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1994">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                      </select>
                    </li>
                  </ul>
                </fieldset>
              </div>
            </div>
            <div className={styles.signBtnCont}>
              <button className={styles.signUpBtn}><div>Sign Up</div></button>
            </div>
            <div className={styles.smallCont}>
              <small>Already on Yelp? Log in</small>
            </div>
          </form>
        </div>
      </div>
    </div>);
  }
}