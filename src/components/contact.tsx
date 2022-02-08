import React,{Component} from 'react';
import styles from '../styles/contact/desktop.module.css'
import mobileStyles from '../styles/contact/mobile.module.css'
import Image from 'next/image'

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
                  <Image src="/contact/1.png" alt="me" width="270" height="319" />
                </div>
                <div className={this.parent.state.isMobile ? mobileStyles.row2 : styles.row2}>
                <div className={this.parent.state.isMobile ? mobileStyles.image2Wrapper : styles.image2Wrapper}>
                    <Image src="/contact/2.png" alt="me" width="270" height="105" 
                      className={this.parent.state.isMobile ? mobileStyles.image2 : styles.image2}
                    />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.handWrapper : styles.handWrapper}>
                    <Image src="/contact/hand.png" alt="me" width="47" height="40" 
                      className={this.parent.state.isMobile ? mobileStyles.hand : styles.hand}
                    />
                  </div>
                  <div className={this.parent.state.isMobile ? mobileStyles.roundBox : styles.roundBox}>
                    123
                  </div>
                </div>
              </div>
            </section>
  }//END render

}//END class IndexPage


export default Contact;
