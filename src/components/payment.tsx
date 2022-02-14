import React,{Component} from 'react';
import styles from '../styles/payment/desktop.module.css'
import mobileStyles from '../styles/payment/mobile.module.css'

type MyProps = {
  parent:any
};

type MyStates = {
  
};

interface Payment {
  parent: any
}

class Payment extends Component<MyProps, MyStates>
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
                <div className={this.parent.state.isMobile ? mobileStyles.titlesInner : styles.titlesInner}>
                  <h1 className={this.parent.state.isMobile ? mobileStyles.h11 : styles.h11}>Payment API</h1>
                  <h1 className={this.parent.state.isMobile ? mobileStyles.h12 : styles.h12}>Ecommerce Website</h1>
                </div>
              </div>
              <article className={this.parent.state.isMobile ? mobileStyles.description : styles.description}>
                <p>
                I can make a website with payment gateway, so visitor can shop and pay online.
                </p>
              </article>
              <div className={this.parent.state.isMobile ? mobileStyles.buttonArea : styles.buttonArea}>
                <div className={'button'}>
                    Donate
                </div>
              </div>
            </section>
  }//END render

}//END class IndexPage


export default Payment;
