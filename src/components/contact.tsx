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
    return  <section className={this.parent.state.isMobile ? mobileStyles.container : styles.container}>
              <div className={this.parent.state.isMobile ? mobileStyles.titles : styles.titles}>
                <h1 className={this.parent.state.isMobile ? mobileStyles.h11 : styles.h11}>Contact</h1>
                <h1 className={this.parent.state.isMobile ? mobileStyles.h12 : styles.h12}>Get In Touch</h1>
              </div>
              <div className={this.parent.state.isMobile ? mobileStyles.formContainer : styles.formContainer}>
                <div className={this.parent.state.isMobile ? mobileStyles.row1 : styles.row1}>
                  <div className={this.parent.state.isMobile ? mobileStyles.row1Left : styles.row1Left}>
                    <Image src="/contact/head.png"
                      width={this.parent.state.isMobile ? '272' : '272'} 
                      height={this.parent.state.isMobile ? '289' : '289'} 
                    />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.row1Right : styles.row1Right}>
                    <div className={this.parent.state.isMobile ? mobileStyles.ninjaDialog : styles.ninjaDialog}>
                      <div className={this.parent.state.isMobile ? mobileStyles.ninjaDialogPointer : styles.ninjaDialogPointer}>
                      </div>
                      <article className={this.parent.state.isMobile ? mobileStyles.dialogContent : styles.dialogContent}>
                        <p>
                          Send me a mail: 
                          <span className={this.parent.state.isMobile ? mobileStyles.emailLink : styles.emailLink}>
                            <Link href="mailto:shinghei.yeung@gmail.com">
                              <a target="_blank">
                              shinghei.yeung@gmail.com
                              </a>
                            </Link>
                          </span>
                        </p>
                        <p className={this.parent.state.isMobile ? mobileStyles.orP : styles.orP}>OR</p>
                        <p className={this.parent.state.isMobile ? mobileStyles.p2 : styles.p2}>
                          Fill in your info in the form below and I look forward to hearing from you!
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
                <div className={this.parent.state.isMobile ? mobileStyles.row2 : styles.row2}>
                  <div className={this.parent.state.isMobile ? mobileStyles.row2L : styles.row2L}>
                    <Image src="/contact/2l.png"
                      width={this.parent.state.isMobile ? '76' : '76'} 
                      height={this.parent.state.isMobile ? '55' : '55'} 
                    />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.row2L2 : styles.row2L2}>
                    <Image src="/contact/2l2.png"
                      width={this.parent.state.isMobile ? '196' : '196'} 
                      height={this.parent.state.isMobile ? '55' : '55'} 
                    />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.row2M : styles.row2M}>
                  <Image src="/contact/2m.png"
                      width={this.parent.state.isMobile ? '655' : '655'} 
                      height={this.parent.state.isMobile ? '55' : '55'} 
                    />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.row2R : styles.row2R}>
                  <Image src="/contact/2r.png"
                      width={this.parent.state.isMobile ? '53' : '53'} 
                      height={this.parent.state.isMobile ? '55' : '55'} 
                    />
                  </div>
                </div>
                <div className={this.parent.state.isMobile ? mobileStyles.row3 : styles.row3}>
                  <div className={this.parent.state.isMobile ? mobileStyles.row3L : styles.row3L}>
                  <Image src="/contact/3l.png"
                      width={this.parent.state.isMobile ? '76' : '76'} 
                      height={this.parent.state.isMobile ? '18' : '18'} 
                    />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.row3M : styles.row3M}>
                  
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.row3R : styles.row3R}>
                    <Image src="/contact/r.png"
                      width={this.parent.state.isMobile ? '53' : '53'} 
                      height={this.parent.state.isMobile ? '18' : '18'} 
                    />
                  </div>
                </div>
                <div className={this.parent.state.isMobile ? mobileStyles.row4 : styles.row4}>
                  <div 
                    className={this.parent.state.isMobile ? mobileStyles.row4L : styles.row4L}
                  >
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.row4M : styles.row4M}>
                    <div className={this.parent.state.isMobile ? mobileStyles.formWrapper : styles.formWrapper}>
                      <form action="#" method="POST">
                        <div className={this.parent.state.isMobile ? mobileStyles.formColumnWrapper : styles.formColumnWrapper}>
                          <input id="name" type="text" autoComplete="name" placeholder='Name' required />
                        </div>
                        <div className={this.parent.state.isMobile ? mobileStyles.formColumnWrapper : styles.formColumnWrapper}>
                          <input id="email" type="text" autoComplete="email" placeholder='email' required />
                        </div>
                        <span className={this.parent.state.isMobile ? mobileStyles.formColumnWrapper : styles.formColumnWrapper}>
                          <textarea id="message" placeholder='Message' required />
                        </span>
                      </form>
                    </div>
                  </div>
                  <div 
                    className={this.parent.state.isMobile ? mobileStyles.row4R : styles.row4R}
                  >
                  </div>
                </div>
                <div className={this.parent.state.isMobile ? mobileStyles.row5 : styles.row5}>
                  <div className={this.parent.state.isMobile ? mobileStyles.row5L : styles.row5L}>
                    <Image src="/contact/5l.png"
                      width={this.parent.state.isMobile ? '53' : '53'} 
                      height={this.parent.state.isMobile ? '55' : '55'} 
                    />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.row5M : styles.row5M}>
                    <Image src="/contact/5m.png"
                      width={this.parent.state.isMobile ? '851' : '851'} 
                      height={this.parent.state.isMobile ? '55' : '55'} 
                    />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.row5R : styles.row5R}>
                    <Image src="/contact/5r.png"
                      width={this.parent.state.isMobile ? '53' : '53'} 
                      height={this.parent.state.isMobile ? '55' : '55'} 
                    />
                  </div>
                </div>
              </div>
            </section>
  }//END render

}//END class IndexPage


export default Contact;
