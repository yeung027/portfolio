import React,{Component} from 'react';
import styles from '../styles/PaymentDesktop.module.css'
import mobileStyles from '../styles/PaymentMobile.module.css'
import Link from 'next/link'
import Image from 'next/image'

class Payment extends Component
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
                <h1 className={this.parent.state.isMobile ? mobileStyles.h11 : styles.h11}>Payment API</h1>
                <h1 className={this.parent.state.isMobile ? mobileStyles.h12 : styles.h12}>Ecommerce Website</h1>
              </div>

             
            </section>
  }//END render

}//END class IndexPage


export default Payment;

