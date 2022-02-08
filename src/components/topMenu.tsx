import React,{Component} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/topMenu/desktop.module.css'
import mobileStyles from '../styles/topMenu/mobile.module.css'
import Link from 'next/link'

type MyProps = {
  parent:any
};

type MyStates = {
  
};

interface TopMenu {
  parent: any
}

class TopMenu extends Component<MyProps, MyStates> 
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
    return  <div className={this.parent.state.isMobile ? mobileStyles.container : styles.container}>
              <div className={this.parent.state.isMobile ? mobileStyles.group : styles.group}>
                <div className={this.parent.state.isMobile ? [mobileStyles.item].join(' ') : [styles.item].join(' ')}>Hei Yeung</div>
              </div>
              <div className={this.parent.state.isMobile ? mobileStyles.group : styles.group}>
                <div className={this.parent.state.isMobile ? [mobileStyles.item, mobileStyles.itemRight].join(' ') : [styles.item, styles.itemRight].join(' ')}>
                  <Link href="/">Home</Link>
                </div>
                <div className={this.parent.state.isMobile ? [mobileStyles.item, mobileStyles.itemRight].join(' ') : [styles.item, styles.itemRight].join(' ')}>
                  <Link href="/">About</Link>
                </div>
                <div className={this.parent.state.isMobile ? [mobileStyles.item, mobileStyles.itemRight].join(' ') : [styles.item, styles.itemRight].join(' ')}>
                  <Link href="/">Skills</Link>
                </div>
                <div className={this.parent.state.isMobile ? [mobileStyles.item, mobileStyles.itemRight].join(' ') : [styles.item, styles.itemRight].join(' ')}>
                  <Link href="/">Work</Link>
                </div>
                <div className={this.parent.state.isMobile ? [mobileStyles.item, mobileStyles.itemRight, 'button'].join(' ') : [styles.item, styles.itemRight, 'button'].join(' ')}>
                  <Link href="/">Contact</Link>
                </div>
              </div>
            </div>
  }//END render

}//END class IndexPage

export default TopMenu;
