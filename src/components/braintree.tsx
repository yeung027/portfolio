import React,{Component} from 'react';
import styles from '../styles/braintree/desktop.module.css'
import mobileStyles from '../styles/braintree/mobile.module.css'
import DropIn from "braintree-web-drop-in-react";
import CircularProgress from '@material-ui/core/CircularProgress';

type MyProps = {
    parent:any
};
  
type MyStates = {
    braintreeToken: string
    show: boolean
    uiLoaded: boolean
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
            uiLoaded: false
        }//END state

        this.dropinRef = React.createRef();

        this.show                   = this.show.bind(this);
        this.checkUILoadStatus      = this.checkUILoadStatus.bind(this);
    }//END 

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
        if(this.state.show && this.state.braintreeToken)
        {
          dropinUI = <DropIn
                        options={{ authorization: this.state.braintreeToken }}
                        onInstance={(instance) => (this.instance = instance)}
                        ref={this.dropinRef}
                      />
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
                    {progressEle}
                    {dropinUI}
                </>
    }//END render

}//END class Braintree


export default Braintree;
