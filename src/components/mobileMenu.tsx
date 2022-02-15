import React,{Component} from 'react';
import styles from '../styles/mobileMenu/desktop.module.css'
import mobileStyles from '../styles/mobileMenu/mobile.module.css'
import Link from 'next/link'

type MyProps = {
  parent:any
};

type MyStates = {
  open:boolean
  isAnimating:boolean
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
      open: false,
      isAnimating:false,
    }//END state
    
    this.emptyAreaClick = this.emptyAreaClick.bind(this);
    this.onWrapperAnimationEnd = this.onWrapperAnimationEnd.bind(this);
  }//END constructor

  emptyAreaClick()
  {
    //console.log('emptyAreaClick');
    this.setState({ 
      isAnimating: true,
      open:false
     });
  }//END emptyAreaClick

  onWrapperAnimationEnd()
  {
    //console.log('anim end~~~')
    this.setState({ 
      isAnimating: false
     });
  }//END onWrapperAnimationEnd

  render() 
  {
    let containerClass  = this.parent.parent.state.isMobile ? mobileStyles.container : styles.container;
    let wrapperClass    = mobileStyles.wrapper;
    if(!this.state.isAnimating)
      containerClass  = [containerClass, this.state.open?  mobileStyles.open : mobileStyles.close].join(' ');
    
    if(this.state.isAnimating && this.state.open)
    {
      wrapperClass  = [wrapperClass, mobileStyles.fadeIn].join(' ');
    }
    else if(this.state.isAnimating && !this.state.open)
    {
      wrapperClass  = [wrapperClass, mobileStyles.fadeOut].join(' ');
    }

    return  <div className={containerClass}>
        
              <div className={wrapperClass} onAnimationEnd={this.onWrapperAnimationEnd}>
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

              <div className={mobileStyles.emptyArea} onClick={this.emptyAreaClick}>
                
              </div>

            </div>
  }//END render

}//END class MobileMenu

export default MobileMenu;
