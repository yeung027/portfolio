import React,{Component} from 'react';
import styles from '../styles/braintree/desktop.module.css'
import mobileStyles from '../styles/braintree/mobile.module.css'
import DropIn from "braintree-web-drop-in-react";
import CircularProgress from '@material-ui/core/CircularProgress';

type MyProps = {
    parent:any
};
  
type MyStates = {
    clientToken: string
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
            clientToken: null,
            show: true
        }//END state
        
        this.donate    = this.donate.bind(this);
        this.show       = this.show.bind(this);
    }//END 

    async donate()
    {

    }//END donate

    show()
    {
        console.log('sjow')
    }//END show

    render() 
    {
        var circleProgressWrapperClass = this.parent.parent.state.isMobile ? mobileStyles.circleProgressWrapper : styles.circleProgressWrapper;
        if(this.state.show)
            circleProgressWrapperClass  = [circleProgressWrapperClass, this.parent.parent.state.isMobile ? mobileStyles.circleProgressShow : styles.circleProgressShow].join(' ');


        return  <>
                    <div className={circleProgressWrapperClass} >
                        <CircularProgress size={30}/>
                    </div>
                </>
    }//END render

}//END class Braintree


export default Braintree;