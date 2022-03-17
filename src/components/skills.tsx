import React,{Component} from 'react';
import styles from '../styles/skills/desktop.module.css'
import mobileStyles from '../styles/skills/mobile.module.css'
import Image from 'next/image'

type MyProps = {
  parent:any
};

type MyStates = {
  
};

interface Skills {
  parent: any
}

class Skills extends Component<MyProps, MyStates>
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
    return  <section className={this.parent.state.isMobile ? mobileStyles.container : styles.container} id='skills'>
              <div className={this.parent.state.isMobile ? mobileStyles.titles : styles.titles}>
                <div className={this.parent.state.isMobile ? mobileStyles.titlesInner : styles.titlesInner}>
                  <h1 className={this.parent.state.isMobile ? mobileStyles.h11 : styles.h11}>
                    SKILLS & TOOLS
                  </h1>
                  <h1 className={this.parent.state.isMobile ? mobileStyles.h12 : styles.h12}>
                    My Toolbox & Things I Can Do
                  </h1>
                </div>
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
                    <Image src="/skills/nextjs.png" alt="me" width="103" height="62" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>Next.js</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/responsive.png" alt="me" width="62" height="42" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>
                    <p>Responsive</p><p>Websites</p>
                  </div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/sass.png" alt="me" width="82" height="62" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>SASS</div>
                </div>
              
                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/cmd.png" alt="me" width="62" height="47" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>Command Line</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/jquery.png" alt="me" width="53" height="52" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>jQuery</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/vscode.png" alt="me" width="62" height="62" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>VS Code</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/postgresql.png" alt="me" width="60" height="62" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>Postgresql</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/nodejs.png" alt="me" width="101" height="62" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>Node.js</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? [mobileStyles.icon, mobileStyles.iconCenter].join(' ') : [styles.icon, styles.iconCenter].join(' ')}>
                    <div className={this.parent.state.isMobile ? mobileStyles.pug : styles.pug}>
                      <Image src="/skills/pug.png" alt="me" width="48" height="20" />
                    </div>
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>Pug</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/prisma.png" alt="me" width="129" height="45" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>Prisma</div>
                </div>

                <div className={this.parent.state.isMobile ? [mobileStyles.item, mobileStyles.itemMargin].join(' ') : [styles.item, styles.itemMargin].join(' ')}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/ror.png" alt="me" width="159" height="56" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>Ruby on Rails</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/w3c.png" alt="me" width="111" height="59" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>
                    <p>Web</p><p>Accessibility</p>
                  </div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/git.png" alt="me" width="62" height="62" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>Git</div>
                </div>

                <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                  <div className={this.parent.state.isMobile ? mobileStyles.icon : styles.icon}>
                    <Image src="/skills/react.png" alt="me" width="60" height="53" />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.name : styles.name}>
                  <p>React</p><p>Native</p>
                  </div>
                </div>

              </div>
            </section>
  }//END render

}//END class IndexPage


export default Skills;
