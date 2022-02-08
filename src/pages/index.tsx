import React,{Component} from 'react';
import { WithUserAgentProps, withUserAgent } from 'next-useragent'
import Head from 'next/head'
import styles from '../styles/index/desktop.module.css'
import mobileStyles from '../styles/index/mobile.module.css'
import Introduction from '../components/introduction'
import TopMenu from '../components/topMenu'
import Skills from '../components/skills'
import Work from '../components/work'
import Payment from '../components/payment'

let minDesktopWindowWidth: number;
minDesktopWindowWidth = 980;


type MyProps = {
    ua: any,
    useragent: any,
};

type MyStates = {
    originIsMobile: any,
    isMobile: boolean,
    useragent: string
};

interface IndexPage {
  topMenuRef: any
  introductionRef: any
  skillsRef: any
  workRef: any
  paymentRef: any
}

class IndexPage extends Component<MyProps & WithUserAgentProps, MyStates> 
{
  constructor(props)
  {
    super(props);
    const ua  = this.props.ua;
    let useragent: string;
    useragent = this.props.useragent;
    this.state = {
      originIsMobile: ua.isMobile,
      isMobile: ua.isMobile,
      useragent: useragent,
    }//END state

    this.topMenuRef = React.createRef();
    this.introductionRef = React.createRef();
    this.skillsRef = React.createRef();
    this.workRef = React.createRef();
    this.paymentRef = React.createRef();

    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.updateIsMobile = this.updateIsMobile.bind(this);

  }//END constructor

  updateIsMobile()
  {
    if(typeof window !== "undefined")
    {
        if(process.env.minDesktopWindowWidth) 
        {
            
            minDesktopWindowWidth   = parseInt(process.env.minDesktopWindowWidth);
        }
        else console.warn('CANNOT FIND process.env.minDesktopWindowWidth');

      if(!this.state.originIsMobile) 
      {
        let temp:boolean;
        temp  = window.innerWidth <= minDesktopWindowWidth;
        this.setState({ isMobile: temp });
      }

    }//END typeof window
  }//END updateIsMobile

  windowResizeHandler()
  {
    this.updateIsMobile();
  }//END windowResizeHandler

  static async getInitialProps(ctx) 
  {
    return { useragent: ctx.ua.source }
  }//END getInitialProps

  componentDidMount()
  {
    window.addEventListener('resize', this.windowResizeHandler);
    this.updateIsMobile();
  }//END componentDidMount

  componentWillUnmount()
  {
    window.removeEventListener('resize', this.windowResizeHandler);
    this.updateIsMobile();
  }//END componentWillUnmount

  render() 
  {
    return  <>
              <Head>
                <title>Hei Yeung:Web Developer</title>
              </Head>
              <div className={this.state.isMobile? mobileStyles.outer : styles.outer}>
              <div className={this.state.isMobile? mobileStyles.container : styles.container}>
                <TopMenu ref={this.topMenuRef} parent={this} />
                <Introduction ref={this.introductionRef} parent={this} />
                <Skills ref={this.skillsRef} parent={this} />
                <Work ref={this.workRef} parent={this} />
                <Payment ref={this.paymentRef} parent={this} />
              </div>
              </div>
              
            </>
  }//END render

}//END class IndexPage


export default withUserAgent(IndexPage);

