import React,{Component} from 'react';
import styles from '../styles/contact/desktop.module.css'
import mobileStyles from '../styles/contact/mobile.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { urlObjectKeys } from 'next/dist/shared/lib/utils';

type MyProps = {
  parent:any
};

type MyStates = {
  
};

interface Contact {
  parent: any
}

class Contact extends Component<MyProps, MyStates>
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
    return  <section className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.container : styles.container}>
              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.titles : styles.titles}>
                <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.titlesInner : styles.titlesInner}>
                  <h1 className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.h11 : styles.h11}>Contact</h1>
                  <h1 className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.h12 : styles.h12}>Get In Touch</h1>
                </div>
              </div>
              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.contentWrapper : styles.contentWrapper}>
                <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.contentInner : styles.contentInner}>
                  <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.formContainer : styles.formContainer}>
                    <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row1 : styles.row1}>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row1Left : styles.row1Left}>
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row1Right : styles.row1Right}>
                        <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.ninjaDialog : styles.ninjaDialog}>
                          <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.ninjaDialogPointer : styles.ninjaDialogPointer}>
                          </div>
                          <article className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.dialogContent : styles.dialogContent}>
                            <p>
                              Send me a mail: 
                              <span className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.emailLink : styles.emailLink}>
                                <Link href="mailto:shinghei.yeung@gmail.com">
                                  <a target="_blank">
                                  shinghei.yeung@gmail.com
                                  </a>
                                </Link>
                              </span>
                            </p>
                            <p className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.orP : styles.orP}>OR</p>
                            <p className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.p2 : styles.p2}>
                              Fill in your info in the form below and I look forward to hearing from you!
                            </p>
                          </article>
                        </div>
                      </div>
                    </div>
                    <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row2 : styles.row2}>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row2L : styles.row2L}>
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row2L2 : styles.row2L2}>
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row2M : styles.row2M}>
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row2R : styles.row2R}>
                      </div>
                    </div>
                    <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row3 : styles.row3}>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row3L : styles.row3L}>
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row3M : styles.row3M}>
                      
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row3R : styles.row3R}>
                      </div>
                    </div>
                    <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row4 : styles.row4}>
                      <div 
                        className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row4L : styles.row4L}
                      >
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row4M : styles.row4M}>
                        <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.formWrapper : styles.formWrapper}>
                          <form action="#" method="POST">
                            <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.formColumnWrapper : styles.formColumnWrapper}>
                              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.input : styles.input}>
                                <input id="name" type="text" autoComplete="name" placeholder='Name' required />
                              </div>
                              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.star : styles.star}>*</div>
                            </div>
                            <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.formColumnWrapper : styles.formColumnWrapper}>
                              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.input : styles.input}>
                                <input id="email" type="text" autoComplete="email" placeholder='email' required />
                              </div>
                              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.star : styles.star}>*</div>
                            </div>
                            <span className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.formColumnWrapper : styles.formColumnWrapper}>
                              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.input : styles.input}>
                                <textarea id="message" placeholder='Message' required />
                              </div>
                              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.star : styles.star}>*</div>
                            </span>
                          </form>
                        </div>
                      </div>
                      <div 
                        className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row4R : styles.row4R}
                      >
                      </div>
                    </div>
                    <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row5 : styles.row5}>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row5L : styles.row5L}>
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row5M : styles.row5M}>
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row5R : styles.row5R}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  }//END render

}//END class IndexPage


export default Contact;
