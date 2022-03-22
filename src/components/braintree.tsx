import React,{Component} from 'react';
import styles from '../styles/braintree/desktop.module.css'
import mobileStyles from '../styles/braintree/mobile.module.css'
import DropIn from "braintree-web-drop-in-react";
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import Link from 'next/link'

type MyProps = {
    parent:any
};
  
type MyStates = {
    braintreeToken: string
    show: boolean
    uiLoaded: boolean
    snackOpen: boolean
    snackType: any
    snackMsg: string
};
  
interface Braintree {
    parent: any
    dropinRef: any
}
  
class Braintree extends Component<MyProps, MyStates>
{
    instance;
    constructor(props)
    {
        super(props);
        this.parent = props.parent;

        this.state = {
            braintreeToken: null,
            show: false,
            uiLoaded: false,
            snackOpen: false,
            snackType: 'success',
            snackMsg: 'null'
        }//END state

        this.dropinRef = React.createRef();

        this.show                   = this.show.bind(this);
        this.checkUILoadStatus      = this.checkUILoadStatus.bind(this);
        this.submitOnClick          = this.submitOnClick.bind(this);
        this.snackOnClick             = this.snackOnClick.bind(this);
        this.getSnackTransition       = this.getSnackTransition.bind(this);
        this.snackOnClose             = this.snackOnClose.bind(this);
        this.submitSuccess            = this.submitSuccess.bind(this);
        this.submitError              = this.submitError.bind(this);
    }//END 

    snackOnClose()
    {
      this.setState({ 
        snackOpen: false,
      });
    }//END snackOnClose

    getSnackTransition(props) {
      if(this.state.snackType=='success')
        return <Grow {...props} />
      else
        return <Grow {...props} />
    }//END getSnackTransition

    snackOnClick(e)
    {
      this.setState({ 
        snackOpen: false,
      });
    }//END snackOnClick

    show()
    {
        //console.log('show');
        if(!this.parent.parent.braintreeToken || this.parent.parent.braintreeToken.trim()=='')
            return console.error('Braintree token not be loaded.');
        this.setState({ 
            show: true,
            braintreeToken: this.parent.parent.braintreeToken
        });

        this.checkUILoadStatus();
    }//END show


    submitSuccess(response)
    {
      var self = this;
      var clientToken = null;
      if(response.data != null) clientToken = response.data.clientToken;
      var success = false;
      if(response.data != null && response.data.success != null)
        success = Boolean(response.data.success);
      //console.log('okok....'+Boolean(response.data.success));
      if(success)
      {
        //console.log('okok....');
        this.setState({ 
          snackOpen: true,
          snackType: 'success',
          snackMsg: 'Success! Thanks for your donation'
        });
      }
      else
      {
        this.setState({ 
          snackOpen: true,
          snackType: 'error',
          snackMsg: 'Something went wrong, please try again later, sorry for the inconvenience.'
        });
      }
      
    }//END submitSuccess

    submitError(error)
    {
      var message = 'Something went wrong, please try again later, sorry for the inconvenience.';
      if(error.response.data != null && error.response.data.message != null && error.response.data.message.trim() !='')
        message = error.response.data.message;
      console.error(error.response.data.message);
      this.setState({ 
        snackOpen: true,
        snackType: 'error',
        snackMsg: message
      });
      
    }//END submitError

    async submitOnClick()
    {
      var self = this;
      const { nonce } = await this.instance.requestPaymentMethod();

      axios.post('/api/payment/submit', {
        data:{nonce: nonce}
      })
      .then(function (response) {
        self.submitSuccess(response);
      })
      .catch(function (error) {
        self.submitError(error);
      });
    }//END submitOnClick

    componentDidMount()
    {
      if(!this.state.show && (!this.dropinRef || !this.dropinRef.current || !this.dropinRef.current.wrapper || !this.dropinRef.current.wrapper.hasChildNodes()) )
      {
        this.setState({ 
          show: false,
        });
        this.parent.setState({ 
          showDonateBtn: true,
        });
      }
    }//END componentDidMount

    checkUILoadStatus()
    {
        if(this.dropinRef && this.dropinRef.current && this.dropinRef.current.wrapper && this.dropinRef.current.wrapper.hasChildNodes())
        {
          this.setState({ 
            uiLoaded: true
          });
          //console.log('yeah ^^');
          return true;
        }

        setTimeout(
          function() {
            this.checkUILoadStatus();
          }
          .bind(this),
          50
        );
    }//END checkUILoadStatus

    render() 
    {
        var progressEle = null;
        var dropinUI    = null;
        var noticeEle   = null;
        var submit      = null;
        if(this.state.show && this.state.braintreeToken)
        {
          if(this.state.uiLoaded)
          {
            submit  = <div className={'button'} onClick={this.submitOnClick}>
                        Submit & Donate
                      </div>
            noticeEle   = <div 
                            className={this.parent.parent.state.isMobile ? mobileStyles.notice : styles.notice}
                          >
                            <p>Because of some reasons,  I only have a sandbox account, so the payment dialog below only for demo, no real transaction at all, so you can play around with it :)</p>
                            <p>Also you may need some dummy credit-cards for test:</p>
                            <p>
                              <Link href="https://developer.paypal.com/braintree/docs/guides/credit-cards/testing-go-live/node">
                                <a target={'_blank'}>Testing Data</a>
                              </Link>
                            </p>
                          </div>
            
          }
          dropinUI =  <>
                        <DropIn
                          options={{ authorization: this.state.braintreeToken }}
                          onInstance={(instance) => (this.instance = instance)}
                          ref={this.dropinRef}
                        />
                        {submit}
                      </>
        }

        if(this.state.show)
        {
            var circleProgressWrapperClass = this.parent.parent.state.isMobile ? mobileStyles.circleProgressWrapper : styles.circleProgressWrapper;
            if(!this.state.uiLoaded)
            {
                circleProgressWrapperClass  = [circleProgressWrapperClass, this.parent.parent.state.isMobile ? mobileStyles.circleProgressShow : styles.circleProgressShow].join(' ');
            }//END if not uiLoaded
            progressEle =   <div className={circleProgressWrapperClass} >
                                <CircularProgress size={30}/>
                            </div>
        }

        return  <>
                    {noticeEle}
                    {progressEle}
                    {dropinUI}
                    <Snackbar 
                      open={this.state.snackOpen} 
                      autoHideDuration={6000} 
                      onClose={this.snackOnClose}
                      onClick={this.snackOnClick}
                      TransitionComponent={this.getSnackTransition}
                    >
                      <MuiAlert 
                        elevation={6} 
                        variant="filled"
                        severity={this.state.snackType}
                      >
                        {this.state.snackMsg}
                      </MuiAlert>
                    </Snackbar>
                </>
    }//END render

}//END class Braintree


export default Braintree;
