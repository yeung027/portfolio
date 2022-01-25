import React,{Component} from 'react';
import styles from '../styles/SkillsDesktop.module.css'
import mobileStyles from '../styles/SkillsMobile.module.css'
import Image from 'next/image'

class Skills extends Component
{
  constructor(props)
  {
    super(props);
    this.parent = props.parent;

    this.state = {
      
    }//END state
    
  }//END constructor


  render() 
  {
    return  <section className={this.parent.state.isMobile ? mobileStyles.container : styles.container}>
              <div className={this.parent.state.isMobile ? mobileStyles.titles : styles.titles}>
                <h1 className={this.parent.state.isMobile ? mobileStyles.h11 : styles.h11}>SKILLS & TOOLS</h1>
                <h1 className={this.parent.state.isMobile ? mobileStyles.h12 : styles.h12}>My Toolbox & Things I Can Do</h1>
              </div>
              <div className={this.parent.state.isMobile ? mobileStyles.skillsList : styles.skillsList}>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                      <Image src="/skills/html5.png" alt="me" width="56" height="63" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>HTML5</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/css3.png" alt="me" width="56" height="63" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>CSS3</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/javascript.png" alt="me" width="62" height="62" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>Javascript</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/react.png" alt="me" width="60" height="53" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>React</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/html5.png" alt="me" width="56" height="63" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>HTML5</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/html5.png" alt="me" width="56" height="63" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>HTML5</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/html5.png" alt="me" width="56" height="63" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>HTML5</div>
                </div>
              
                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/html5.png" alt="me" width="56" height="63" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>HTML5</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/html5.png" alt="me" width="56" height="63" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>HTML5</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/html5.png" alt="me" width="56" height="63" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>HTML5</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/html5.png" alt="me" width="56" height="63" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>HTML5</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/html5.png" alt="me" width="56" height="63" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>HTML5</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/html5.png" alt="me" width="56" height="63" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>HTML5</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/html5.png" alt="me" width="56" height="63" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>HTML5</div>
                </div>

              </div>
            </section>
  }//END render

}//END class IndexPage


export default Skills;

