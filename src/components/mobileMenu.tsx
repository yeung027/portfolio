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
    this.onclick = this.onclick.bind(this);
  }//END constructor

  onclick()
  {
    if(this.state.open && !this.state.isAnimating)
    {
      this.setState({ 
        isAnimating: true,
        open:false
       });

       this.parent.setState({ 
        menuIconAnim: true,
        mobileMenuOpen: false
       });

       this.parent.parent.setState({ 
        bodyFixed: false
       });
    }
  }//END onclick

  emptyAreaClick()
  {
    //console.log('emptyAreaClick');
    this.setState({ 
      isAnimating: true,
      open:false
     });
     if(this.parent)
     {
      this.parent.setState({ 
        mobileMenuOpen: false
       });
     }

     this.parent.parent.setState({ 
      bodyFixed: false
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
        
              <div className={wrapperClass} onAnimationEnd={this.onWrapperAnimationEnd} onClick={this.onclick}>
                <div className={mobileStyles.title}>
                  Hei Yeung
                </div>
                <div className={mobileStyles.item}>
                  <Link href="/">Home</Link>
                </div>
                <div className={mobileStyles.item}>
                  <Link href="/#introduction">About</Link>
                </div>
                <div className={mobileStyles.item}>
                  <Link href="/#skills">Skills</Link>
                </div>
                <div className={mobileStyles.item}>
                  <Link href="/#work">Work</Link>
                </div>
                <div className={mobileStyles.item}>
                  <Link href="/#payment">Donate</Link>
                </div>
                <div className={mobileStyles.item}>
                  <Link href="/#contact">Contact</Link>
                </div>
              </div>

              <div className={mobileStyles.emptyArea} onClick={this.emptyAreaClick}>
                
              </div>

            </div>
  }//END render

}//END class MobileMenu

export default MobileMenu;
