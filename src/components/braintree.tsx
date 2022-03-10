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
    show:boolean
};
  
interface Braintree {
    parent: any
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
            show: false
        }//END state

        this.show      = this.show.bind(this);
    }//END 

    show()
    {
        //console.log('show');
        if(!this.parent.parent.braintreeToken || this.parent.parent.braintreeToken.trim()=='')
            console.error('Braintree token not be loaded.');
        this.setState({ 
            show: true,
            braintreeToken: this.parent.parent.braintreeToken
        });
    }//END show

    render() 
    {
        var ele = null;
        if(!this.state.braintreeToken)
        {
            var circleProgressWrapperClass = this.parent.parent.state.isMobile ? mobileStyles.circleProgressWrapper : styles.circleProgressWrapper;
            if(this.state.show)
            {
                circleProgressWrapperClass  = [circleProgressWrapperClass, this.parent.parent.state.isMobile ? mobileStyles.circleProgressShow : styles.circleProgressShow].join(' ');
            }//END if show

            ele =   <div className={circleProgressWrapperClass} >
                        <CircularProgress size={30}/>
                    </div>
        }//END if null token
        else
        {
            ele =   <DropIn
                        options={{ authorization: this.state.braintreeToken }}
                        onInstance={(instance) => (this.instance = instance)}
                    />
        }//END else token loaded


        return  <>
                    {ele}
                </>
    }//END render

}//END class Braintree


export default Braintree;