import React from 'react';
import styles from '../dist/main.css';
import _ from 'underscore';
// import styles from 'https://s3-us-west-1.amazonaws.com/yelp-reactor-header/main.css';1

export default class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      y1: true,
      y2: false,
      y3: false,
      py1: true,
      py2: false,
      py3: false,
      yr18: true,
      yr17: false,
      yr16: false,
      rendered: false
    };
    this.yr1 = this.yr1.bind(this);
    this.yr2 = this.yr2.bind(this);
    this.yr3 = this.yr3.bind(this);
    this.pyr = this.pyr.bind(this);
    this.draw1 = this.draw1.bind(this);
    this.draw2 = this.draw2.bind(this);
    this.draw3 = this.draw3.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this.draw1();
    this.draw2();
    this.draw3();
  }
  
  yr1() {
    let y1 = this.state.y1;
    let y2 = this.state.y2;
    let y3 = this.state.y3;
    this.setState({
      py1: y1,
      py2: y2,
      py3: y3,
      yr18: true,
      yr17: false,
      yr16: false
    }, () => {
      this.setState({
        y1: true,
        y2: false,
        y3: false,
      });
    });
  }

  yr2() {
    let y1 = this.state.y1;
    let y2 = this.state.y2;
    let y3 = this.state.y3;
    this.setState({
      py1: y1,
      py2: y2,
      py3: y3,
      yr18: false,
      yr17: true,
      yr16: false
    }, () => {
      this.setState({
        y1: false,
        y2: true,
        y3: false,
      });
    });
  }
  
  yr3() {
    let y1 = this.state.y1;
    let y2 = this.state.y2;
    let y3 = this.state.y3;
    this.setState({
      py1: y1,
      py2: y2,
      py3: y3,
      yr18: false,
      yr17: false,
      yr16: true
    }, () => {
      this.setState({
        y1: false,
        y2: false,
        y3: true,
      });
    });
  }
  
  pyr() {
    let py1 = this.state.py1;
    let py2 = this.state.py2;
    let py3 = this.state.py3;
    this.setState({
      y1: py1,
      y2: py2,
      y3: py3
    });
  }

  draw1() {
    var canvas = document.getElementById('canvas1');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgb(252, 214, 211';
      ctx.beginPath();
      let r2018 = this.props.ratings.yearly['2018'];
      let store = 12;
      for (let i = 0; i < r2018.length; i++) {
        if (!!r2018[i]) {
          if (i === 1) {
            ctx.lineTo(19 + (41 * i), 176 - (r2018[i] * 16.5));
          } else {
            ctx.lineTo(19 + (41 * i), 176 - (r2018[i] * 16.5));
          }
          if (i <= 10 ) {
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 2.5;
            ctx.stroke();
          } else {
            ctx.lineWidth = 0;
          }
          store = i;
        }
      }
      ctx.strokeStyle = 'transparent';
      ctx.lineWidth = 5;
      ctx.lineTo(19 + (41 * store), 172);
      ctx.lineTo(19 + (41 * 0), 172);
      ctx.fill();
    }
    this.setState({
      rendered: true
    });
  }

  draw2() {
    var canvas = document.getElementById('canvas2');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgb(252, 214, 211';
      ctx.beginPath();
      let r2018 = this.props.ratings.yearly['2017'];
      let store = 12;
      for (let i = 0; i < r2018.length; i++) {
        if (!!r2018[i]) {
          if (i === 1) {
            ctx.lineTo(19 + (41 * i), 176 - (r2018[i] * 16.5));
          } else {
            ctx.lineTo(19 + (41 * i), 176 - (r2018[i] * 16.5));
          }
          if (i <= 11 ) {
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 2.5;
            ctx.stroke();
          } else {
            ctx.lineWidth = 0;
          }
          store = i;
        }
      }
      ctx.strokeStyle = 'transparent';
      ctx.lineWidth = 5;
      ctx.lineTo(19 + (41 * store), 172);
      ctx.lineTo(19 + (41 * 0), 172);
      ctx.fill();
    }
  }

  draw3() {
    var canvas = document.getElementById('canvas3');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgb(252, 214, 211';
      ctx.beginPath();
      let r2018 = this.props.ratings.yearly['2016'];
      let store = 12;
      for (let i = 0; i < r2018.length; i++) {
        if (!!r2018[i]) {
          if (i === 1) {
            ctx.lineTo(19 + (41 * i), 176 - (r2018[i] * 16.5));
          } else {
            ctx.lineTo(19 + (41 * i), 176 - (r2018[i] * 16.5));
          }
          if (i <= 11 ) {
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 2.5;
            ctx.stroke();
          } else {
            ctx.lineWidth = 0;
          }
          store = i;
        }
      }
      ctx.strokeStyle = 'transparent';
      ctx.lineWidth = 5;
      ctx.lineTo(19 + (41 * store), 172);
      ctx.lineTo(19 + (41 * 0), 172);
      ctx.fill();
    }
  }

  show(canvasId) {
    var canvas = document.getElementById(canvasId);
    canvas.style.display = 'inline';
  }

  hide(canvasId) {
    var canvas = document.getElementById(canvasId);
    canvas.style.display = 'none';
  }

  render() {
    return (
      <div id="modal" className={styles.modal} >
        <div className={styles.ratingsCont} >
          <div onClick={this.props.close} className={styles.close}>&times;</div>
          <div className={styles.ratings}>
            <div className={styles.ratingsHeader}><h2>Rating Details</h2></div>
            <div className={styles.ratingsBody} >
              <div className={styles.monthlyTrend}>
                <div className={styles.rateMidHeader}>
                  <p className={styles.rateMonthlyTitle}>Monthly Trend</p>
                  <div className={styles.rateMidYears}>
                    <div className={styles.rateYrCont}>
                      <ul className={styles.rateTable}>
                        <li className={`${styles.rateCell} ${styles.rateCell1}`}>
                          { this.state.y1 ? 
                            <a onMouseLeave={this.pyr} onClick={this.yr1} className={`${styles.yrr}  ${styles.yrr1}`}>2018</a> :
                            <a onMouseEnter={this.yr1} onClick={this.yr1} className={`${styles.yr} ${styles.yr1}`}>2018</a>
                          }
                        </li>
                        <li className={`${styles.rateCell} ${styles.rateCell2}`}>
                          { this.state.y2 ? 
                            <a onMouseLeave={this.pyr} onClick={this.yr2} className={`${styles.yrr}  ${styles.yrr2}`}>2017</a> :
                            <a onMouseEnter={this.yr2} onClick={this.yr2} className={`${styles.yr} ${styles.yr2}`}>2017</a>
                          }
                        </li>
                        <li className={`${styles.rateCell} ${styles.rateCell3}`}>
                          { this.state.y3 ?
                            <a onMouseLeave={this.pyr} onClick={this.yr3} className={`${styles.yrr}  ${styles.yrr3}`}>2016</a> :
                            <a onMouseEnter={this.yr3} onClick={this.yr3} className={`${styles.yr} ${styles.yr3}`}>2016</a>
                          }
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={styles.monthlyAvg}>
                  <div className={styles.x}>
                    <div className={styles.xContent} style={{left: '-32px' }}>Jan</div>
                    <div className={styles.xContent} style={{left: '9px' }}>Feb</div>
                    <div className={styles.xContent} style={{left: '51px' }}>Mar</div>
                    <div className={styles.xContent} style={{left: '92px' }}>Apr</div>
                    <div className={styles.xContent} style={{left: '133px' }}>May</div>
                    <div className={styles.xContent} style={{left: '174px' }}>Jun</div>
                    <div className={styles.xContent} style={{left: '216px' }}>Jul</div>
                    <div className={styles.xContent} style={{left: '257px' }}>Aug</div>
                    <div className={styles.xContent} style={{left: '298px' }}>Sep</div>
                    <div className={styles.xContent} style={{left: '339px' }}>Oct</div>
                    <div className={styles.xContent} style={{left: '381px' }}>Nov</div>
                    <div className={styles.xContent} style={{left: '422px' }}>Dec</div>
                  </div>
                  <div className={styles.y}>
                    <div className={styles.yContent} style={{top: '172px' }}>0</div>
                    <div className={styles.yContent} style={{top: '140px' }}>1</div>
                    <div className={styles.yContent} style={{top: '108px' }}>2</div>
                    <div className={styles.yContent} style={{top: '76px' }}>3</div>
                    <div className={styles.yContent} style={{top: '44px' }}>4</div>
                    <div className={styles.yContent} style={{top: '12px' }}>5</div>
                  </div>
                  <canvas id="canvas1" width="490px" height="195px"></canvas>
                  <canvas id="canvas2" width="490px" height="195px"></canvas>
                  <canvas id="canvas3" width="490px" height="195px"></canvas>
                  { this.state.yr18 && this.state.rendered ?
                    this.show('canvas1') : this.state.rendered ? this.hide('canvas1') : null
                  }
                  { this.state.yr17 && this.state.rendered ?
                    this.show('canvas2') : this.state.rendered ? this.hide('canvas2') : null
                  }
                  { this.state.yr16 && this.state.rendered ?
                    this.show('canvas3') : this.state.rendered ? this.hide('canvas3') : null
                  }
                  { this.state.yr18 ? 
                    <div className={styles.graph}>
                      {_.map([0,1,2,3,4,5,6,7,8,undefined,undefined,undefined], (i) => {
                        if (i !== undefined) {
                          return <div className={styles.rateP} style={{'border': '1.5px solid red', 'margin-left': '-7px', 'margin-top': '-7px', 'border-radius': '50%' ,'height': '8px', 'width': '8px', 'background-color': 'white', 'position': 'absolute', 'top': `${176 - (this.props.ratings.yearly['2018'][i] * 16.5)}px`, 'left': `${19 + (41 * i)}px`}}></div>;
                        }
                      }, this)
                      }
                    </div> : this.state.yr17 ? 
                      <div className={styles.graph}>
                        {_.map([0,1,2,3,4,5,6,7,8,9,10,11], (i) => {
                          if (i !== undefined) {
                            return <div className={styles.rateP} style={{'border': '1.5px solid red', 'margin-left': '-7px', 'margin-top': '-7px', 'border-radius': '50%' ,'height': '8px', 'width': '8px', 'background-color': 'white', 'position': 'absolute', 'top': `${176 - (this.props.ratings.yearly['2017'][i] * 16.5)}px`, 'left': `${19 + (41 * i)}px`}}></div>;
                          }
                        }, this)
                        }
                      </div> : this.state.yr16 ?
                        <div className={styles.graph}>
                          {_.map([0,1,2,3,4,5,6,7,8,9,10,11], (i) => {
                            if (i !== undefined) {
                              return <div className={styles.rateP} style={{'border': '1.5px solid red', 'margin-left': '-7px', 'margin-top': '-7px', 'border-radius': '50%' ,'height': '8px', 'width': '8px', 'background-color': 'white', 'position': 'absolute', 'top': `${176 - (this.props.ratings.yearly['2016'][i] * 16.5)}px`, 'left': `${19 + (41 * i)}px`}}></div>;
                            }
                          }, this)
                          }
                        </div> : null
                  }
                </div>
                <small className={styles.graphFooter}>Understand how a business’ rating changes month-to-month. Learn more.</small>
              </div>
              <div className={styles.overallRatings}>Overall Rating</div>
              <p className={styles.yelpingSince}>Yelping Since {this.props.yelpingSince.substring(11, 15)} with {this.props.ratings.amount} reviews</p>
              <div className={styles.rateStarTable}>
                <div className={styles.rows}>
                  <div className={styles.rowStar5}>5 Star</div>
                  <div className={styles.innerStar}>
                    <div className={styles.bar5} style={{width: `${20 + (this.props.ratings.stars['5'] / this.props.ratings.amount) * 100}%`}}></div>
                    <div className={styles.ratetext}>{this.props.ratings.stars['5']}</div>
                  </div>
                </div>
                <div className={styles.rows}>
                  <div className={styles.rowStar4}>4 Star</div>
                  <div className={styles.innerStar}>
                    <div className={styles.bar4} style={{width: `${20 + (this.props.ratings.stars['4'] / this.props.ratings.amount) * 100}%`}}></div>
                    <div className={styles.ratetext}>{this.props.ratings.stars['4']}</div>
                  </div>
                </div>
                <div className={styles.rows}>
                  <div className={styles.rowStar3}>3 Star</div>
                  <div className={styles.innerStar}>
                    <div className={styles.bar3} style={{width: `${20 + (this.props.ratings.stars['3'] / this.props.ratings.amount) * 100}%`}}></div>
                    <div className={styles.ratetext}>{this.props.ratings.stars['3']}</div>
                  </div>
                </div>
                <div className={styles.rows}>
                  <div className={styles.rowStar2}>2 Star</div>
                  <div className={styles.innerStar}>
                    <div className={styles.bar2} style={{width: `${20 + (this.props.ratings.stars['2'] / this.props.ratings.amount) * 100}%`}}></div>
                    <div className={styles.ratetext}>{this.props.ratings.stars['2']}</div>
                  </div>
                </div>
                <div className={styles.rows}>
                  <div className={styles.rowStar1}>1 Star</div>
                  <div className={styles.innerStar}>
                    <div className={styles.bar1} style={{width: `${20 + (this.props.ratings.stars['1'] / this.props.ratings.amount) * 100}%`}}></div>
                    <div className={styles.ratetext}>{this.props.ratings.stars['1']}</div>
                  </div>
                </div>
              </div>
              <small className={styles.overallRFooter}>We calculate the overall star rating with randomly stored data! Learn More.</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}