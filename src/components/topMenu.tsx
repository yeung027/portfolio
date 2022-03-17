import React,{Component} from 'react';
import styles from '../styles/topMenu/desktop.module.css'
import mobileStyles from '../styles/topMenu/mobile.module.css'
import Link from 'next/link'
import MobileMenu from '../components/mobileMenu'

type MyProps = {
  parent:any
};

type MyStates = {
  menuIconAnim:boolean
  mobileMenuOpen:boolean
};

interface TopMenu {
  parent: any
  mobileMenuRef: any
}

class TopMenu extends Component<MyProps, MyStates>
{
  constructor(props)
  {
    super(props);
    this.parent = props.parent;

    this.state = {
      menuIconAnim: false,
      mobileMenuOpen: false
    }//END state
    
    this.mobileMenuRef = React.createRef();

    this.menuButtonClick = this.menuButtonClick.bind(this);
    this.menuButtonAnimationEnd = this.menuButtonAnimationEnd.bind(this);
    
  }//END constructor

  menuButtonClick() 
  {
    //console.log('menuButtonClick: this.mobileMenuRef: ' + this.mobileMenuRef.current.state.open);
    if(this.state.menuIconAnim) return false;

    this.setState({ 
      menuIconAnim: true,
      mobileMenuOpen: !this.state.mobileMenuOpen
     });
    if(this.mobileMenuRef && this.mobileMenuRef.current)
    this.mobileMenuRef.current.setState({ 
      isAnimating:true,
      open: !this.mobileMenuRef.current.state.open
     });
  }//END menuButtonClick

  menuButtonAnimationEnd()
  {
    //console.log('menuButtonAnimationEnd');
    this.setState({ 
      menuIconAnim: false
     });
  }//END menuButtonAnimationEnd

  render() 
  {
    let menuIconAnim = this.parent.state.isMobile ? [mobileStyles.mobileMenuButton, 'noselect'].join(' ') : [styles.mobileMenuButton, 'noselect'].join(' ');
    if(this.state.mobileMenuOpen)
    {
      menuIconAnim  = menuIconAnim.slice();
      menuIconAnim  = [menuIconAnim, mobileStyles.mobileMenuButtonOpen].join(' ');
    }
    else
    {
      menuIconAnim  = menuIconAnim.slice();
      menuIconAnim  = [menuIconAnim, mobileStyles.mobileMenuButtonClose].join(' ');
    }

    return  <div className={this.parent.state.isMobile ? mobileStyles.container : styles.container}>
              <MobileMenu ref={this.mobileMenuRef} parent={this} />
              <div className={this.parent.state.isMobile ? mobileStyles.group : styles.group}>
                <div className={this.parent.state.isMobile ? [mobileStyles.item].join(' ') : [styles.item].join(' ')}>Hei Yeung</div>
              </div>
              <div className={this.parent.state.isMobile ? [mobileStyles.group, mobileStyles.rightGroup].join(' ') : [styles.group, styles.rightGroup].join(' ')}>
                <div className={this.parent.state.isMobile ? [mobileStyles.item, mobileStyles.itemRight].join(' ') : [styles.item, styles.itemRight].join(' ')}>
                  <Link href="/">Home</Link>
                </div>
                <div className={this.parent.state.isMobile ? [mobileStyles.item, mobileStyles.itemRight].join(' ') : [styles.item, styles.itemRight].join(' ')}>
                  <Link href="/#introduction">About</Link>
                </div>
                <div className={this.parent.state.isMobile ? [mobileStyles.item, mobileStyles.itemRight].join(' ') : [styles.item, styles.itemRight].join(' ')}>
                  <Link href="/#skills">Skills</Link>
                </div>
                <div className={this.parent.state.isMobile ? [mobileStyles.item, mobileStyles.itemRight].join(' ') : [styles.item, styles.itemRight].join(' ')}>
                  <Link href="/#work">Work</Link>
                </div>
                <div className={this.parent.state.isMobile ? [mobileStyles.item, mobileStyles.itemRight, 'button'].join(' ') : [styles.item, styles.itemRight, 'button'].join(' ')}>
                  <Link href="/#contact">Contact</Link>
                </div>
                <div className={menuIconAnim} onClick={this.menuButtonClick} onAnimationEnd={this.menuButtonAnimationEnd}>
                  <div className={mobileStyles.menuIconOuter}>
                    <div className={mobileStyles.menuIconInner}>
                      <div className={mobileStyles.line1}></div>
                      <div className={mobileStyles.line2}></div>
                      <div className={mobileStyles.line3}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  }//END render

}//END class IndexPage

export default TopMenu;
