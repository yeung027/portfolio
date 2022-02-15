import React,{Component} from 'react';
import styles from '../styles/mobileMenu/desktop.module.css'
import mobileStyles from '../styles/mobileMenu/mobile.module.css'
import Link from 'next/link'

type MyProps = {
  parent:any
};

type MyStates = {
  
};

interface MobileMenu {
  parent: any
}

class MobileMenu extends Component<MyProps, MyStates>
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

    return  <div className={this.parent.parent.state.isMobile ? mobileStyles.container : styles.container}>
              <div className={mobileStyles.wrapper}>
                <div className={mobileStyles.title}>
                  Hei Yeung
                </div>
                <div className={mobileStyles.item}>
                  <Link href="/">Home</Link>
                </div>
                <div className={mobileStyles.item}>
                  <Link href="/">About</Link>
                </div>
                <div className={mobileStyles.item}>
                  <Link href="/">Skills</Link>
                </div>
                <div className={mobileStyles.item}>
                  <Link href="/">Work</Link>
                </div>
                <div className={mobileStyles.item}>
                  <Link href="/">Contact</Link>
                </div>
              </div>
            </div>
  }//END render

}//END class MobileMenu

export default MobileMenu;
