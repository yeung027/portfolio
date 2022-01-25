import React,{Component} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TopMenuDesktop.module.css'
import mobileStyles from '../styles/TopMenuMobile.module.css'
import Link from 'next/link'


class TopMenu extends Component
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
                <div className={this.parent.state.isMobile ? [mobileStyles.item, mobileStyles.itemRight, mobileStyles.button].join(' ') : [styles.item, styles.itemRight, styles.button].join(' ')}>
                  <Link href="/">Contact</Link>
                </div>
              </div>
            </div>
  }//END render

}//END class IndexPage

export default TopMenu;

