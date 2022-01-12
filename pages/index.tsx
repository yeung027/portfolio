import React,{Component} from 'react';
import { WithUserAgentProps, withUserAgent } from 'next-useragent'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/IndexDesktop.module.css'
import mobileStyles from '../styles/IndexMobile.module.css'
import Introduction from '../components/introduction'

class IndexPage extends Component<WithUserAgentProps> 
{
  constructor(props)
  {
    super(props);
    const { ua, useragent } = this.props;
    this.state = {
      originIsMobile: ua.isMobile,
      isMobile: ua.isMobile,
      useragent: useragent,
    }//END state

    this.introduction = React.createRef();

    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.updateIsMobile = this.updateIsMobile.bind(this);


    this.updateIsMobile();
  }//END constructor

  getIsMobile()
  {
    
  }

  updateIsMobile()
  {
    if(typeof window !== "undefined")
    {
      if(!process.env.minDesktopWindowWidth) console.warn('CANNOT FIND process.env.minDesktopWindowWidth');
      else if(!this.state.originIsMobile) 
      {
        let temp:boolean;
        temp  = window.innerWidth <= process.env.minDesktopWindowWidth;
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

    
  }//END componentDidMount

  componentWillUnmount()
  {
    window.removeEventListener('resize', this.windowResizeHandler);
  }//END componentWillUnmount

  render() 
  {
    return  <>
              <Head>
                <title>Hei Yeung:Web Developer</title>
              </Head>
              <>{this.state.isMobile? 'mobile' : 'desktop'}</><br/>
              <Introduction ref={this.introduction} parent={this} />
            </>
  }//END render

}//END class IndexPage

export default withUserAgent(IndexPage)
