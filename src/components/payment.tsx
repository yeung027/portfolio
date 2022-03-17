import React,{Component} from 'react';
import styles from '../styles/payment/desktop.module.css'
import mobileStyles from '../styles/payment/mobile.module.css'
import Braintree from './braintree'

type MyProps = {
  parent:any
};

type MyStates = {
  showDonateBtn: boolean
};

interface Payment {
  parent: any
  braintreeRef: any
}

class Payment extends Component<MyProps, MyStates>
{
  constructor(props)
  {
    super(props);
    this.parent = props.parent;

    this.state = {
      showDonateBtn: true
    }//END state

    this.braintreeRef = React.createRef();

    this.donateBtnClick             = this.donateBtnClick.bind(this);
  }//END constructor

  donateBtnClick()
  {
    //console.log('donateBtnClick: '+this.braintreeRef.current.state.show);
    if(this.braintreeRef && this.braintreeRef.current)
    {
      this.braintreeRef.current.show();
      this.setState({ 
        showDonateBtn: false
       });
    }
  }//END donateBtnClick

  render() 
  {
    var buttonAreaClass = this.parent.state.isMobile ? mobileStyles.buttonArea : styles.buttonArea;
        if(!this.state.showDonateBtn)
          buttonAreaClass = [buttonAreaClass, this.parent.state.isMobile ? mobileStyles.buttonAreaHide : styles.buttonAreaHide].join(' ');
    return  <section className={this.parent.state.isMobile ? mobileStyles.container : styles.container} id='payment'>
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
              <div className={buttonAreaClass}>
                <div className={'button'} onClick={this.donateBtnClick}>
                    Donate
                </div>
              </div>

              <Braintree parent={this} ref={this.braintreeRef} />
            </section>
  }//END render

}//END class IndexPage


export default Payment;
