import React,{Component} from 'react';
import dynamic from 'next/dynamic'
import { WithUserAgentProps, withUserAgent } from 'next-useragent'
import PropTypes from 'prop-types'
import Head from 'next/head'
import styles from '../styles/index/desktop.module.css'
import mobileStyles from '../styles/index/mobile.module.css'

const Ninja = dynamic(() => import('@/components/canvas/Ninja'), {
  ssr: false,
})


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
                <Ninja />
              </div>
              </div>
              
            </>
  }//END render

}//END class IndexPage


export default withUserAgent(IndexPage);

