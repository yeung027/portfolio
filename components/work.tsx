import React,{Component} from 'react';
import styles from '../styles/WorkDesktop.module.css'
import mobileStyles from '../styles/WorkMobile.module.css'
import Link from 'next/link'
import Image from 'next/image'

class Work extends Component
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
                <h1 className={this.parent.state.isMobile ? mobileStyles.h11 : styles.h11}>Work</h1>
                <h1 className={this.parent.state.isMobile ? mobileStyles.h12 : styles.h12}>Stuff I've Built</h1>
              </div>

              <div className={this.parent.state.isMobile ? mobileStyles.item : styles.item}>
                <div className={this.parent.state.isMobile ? mobileStyles.left : styles.left}>
                  <h5 className={this.parent.state.isMobile ? mobileStyles.workname : styles.workname}>思覺失調這一課</h5>
                  <article className={this.parent.state.isMobile ? mobileStyles.description : styles.description}>
                    <p>
                      A e-book written by a psychosis patient which about herself.
                    </p>
                    <p>
                      It is a responsive website written in nextjs. 
                    </p>
                    <p>
                      Also there are react native prototype version: 
                    </p>
                    <p className={this.parent.state.isMobile ? mobileStyles.linkP : styles.linkP}>
                      <Link href="https://expo.dev/@heyhei/appbook">https://expo.dev/@heyhei/appbook</Link>
                    </p>
                    <p className={this.parent.state.isMobile ? mobileStyles.qrP : styles.qrP}><Image src="/work/qr1.png" alt="me" width="84" height="84" /></p>
                    <div className={this.parent.state.isMobile ? mobileStyles.buttonArea : styles.buttonArea}>
                      
                      <div className={'button'}>
                        <Link href="http://iloveh3k.com">
                          <a target="_blank">View</a>
                        </Link>
                      </div>

                      <div className={'button'}>
                        <Link href="https://expo.dev/@heyhei/appbook">
                          <a target="_blank">React Native Version</a>
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
                <div className={this.parent.state.isMobile ? mobileStyles.right : styles.right}>
                  <Image src="/work/workpreview1.png" alt="me" width="370" height="319" />
                </div>
              </div>
            </section>
  }//END render

}//END class IndexPage


export default Work;

