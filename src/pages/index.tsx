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
import Contact from '../components/contact'

let minDesktopWindowWidth: number;
minDesktopWindowWidth = 980;


type MyProps = {
    ua: any,
    useragent: any,
    minDesktopWindowWidth: string,
    strapiBaseUrl: string
    braintreeToken: string
};

type MyStates = {
    originIsMobile: any,
    isMobile: boolean,
    isTablet: boolean,
    useragent: string,
    bodyFixed: boolean
};


interface IndexPage {
  topMenuRef: any
  introductionRef: any
  skillsRef: any
  workRef: any
  paymentRef: any
  contactRef: any
  minDesktopWindowWidth: string
  strapiBaseUrl: string
  braintreeToken: string
}

class IndexPage extends Component<MyProps & WithUserAgentProps, MyStates> 
{
  constructor(props)
  {
    super(props);
    const ua  = this.props.ua;
    let useragent: string;
    useragent = this.props.useragent;
    this.minDesktopWindowWidth  = this.props.minDesktopWindowWidth;
    this.strapiBaseUrl          = this.props.strapiBaseUrl;
    this.braintreeToken         = this.props.braintreeToken;


    this.state = {
      originIsMobile: ua.isMobile,
      isMobile: ua.isMobile,
      isTablet: ua.isTablet,
      useragent: useragent,
      bodyFixed: false
    }//END state

    this.topMenuRef = React.createRef();
    this.introductionRef = React.createRef();
    this.skillsRef = React.createRef();
    this.workRef = React.createRef();
    this.paymentRef = React.createRef();
    this.contactRef = React.createRef();

    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.updateIsMobile = this.updateIsMobile.bind(this);

    

  }//END constructor

  updateIsMobile()
  {
    if(typeof window !== "undefined")
    {
        if(this.minDesktopWindowWidth) 
        {
            minDesktopWindowWidth   = parseInt(this.minDesktopWindowWidth);
        }
        else console.warn('CANNOT FIND process.env.minDesktopWindowWidth');

      if(!this.state.originIsMobile) 
      {
        let temp:boolean;
        temp  = window.innerWidth <= minDesktopWindowWidth;
        this.setState({ isMobile: temp });
      }

      if(this.state.isTablet) this.setState({ isMobile: false });

    }//END typeof window


  }//END updateIsMobile

  windowResizeHandler()
  {
    this.updateIsMobile();
  }//END windowResizeHandler

  static async getInitialProps(ctx) 
  {
    return { 
      useragent: ctx.ua.source,
      minDesktopWindowWidth: process.env.minDesktopWindowWidth,
      strapiBaseUrl: process.env.strapiBaseUrl,
      braintreeToken: process.env.braintreeToken
    }
  }//END getInitialProps

  componentDidMount()
  {
    const that = this;
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

      let outerClass  = this.state.isMobile? mobileStyles.outer : styles.outer;
      if(this.state.bodyFixed)
        outerClass = [outerClass, this.state.isMobile? mobileStyles.bodyFixed : styles.bodyFixed].join(' ');
      let elements  = <div className={outerClass}> 
      <div className={this.state.isMobile? mobileStyles.container : styles.container}>
        <TopMenu ref={this.topMenuRef} parent={this} />
        <Introduction ref={this.introductionRef} parent={this} />
        <Skills ref={this.skillsRef} parent={this} />
        <Work ref={this.workRef} parent={this} />
        <Payment ref={this.paymentRef} parent={this} />
        <Contact ref={this.contactRef} parent={this} />
      </div>
      </div>

      if(this.state.isTablet)
      {
        elements  = <nav><div className={outerClass}> 
      <div className={this.state.isMobile? mobileStyles.container : styles.container}>
        <TopMenu ref={this.topMenuRef} parent={this} />
        <Introduction ref={this.introductionRef} parent={this} />
        <Skills ref={this.skillsRef} parent={this} />
        <Work ref={this.workRef} parent={this} />
        <Payment ref={this.paymentRef} parent={this} />
        <Contact ref={this.contactRef} parent={this} />
      </div>
      </div>
      </nav>
      }

    return  <>
              <Head>
                <title>Hei Yeung:Web Developer</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
              </Head>
              {elements}
              
            </>
  }//END render

}//END class IndexPage


export default withUserAgent(IndexPage);

