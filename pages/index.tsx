import React,{Component} from 'react';
import { WithUserAgentProps, withUserAgent } from 'next-useragent'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/IndexDesktop.module.css'
import mobileStyles from '../styles/IndexMobile.module.css'

class IndexPage extends Component<WithUserAgentProps> 
{
  constructor(props)
  {
    super(props);
    const { ua, useragent } = this.props;
    this.state = {
      isMobile: ua.isMobile
    }

  }//END constructor

  static async getInitialProps(ctx) 
  {
    return { useragent: ctx.ua.source }
  }//END getInitialProps

  render() 
  {
    const { ua, useragent } = this.props
    return  <>
              <Head>
                <title>Hei Yeung:Web Developer</title>
              </Head>
              <p>{ useragent }</p>
              <div className={this.state.isMobile ? styles.mobile:styles.desktop}>{ua.isMobile ? "mobile" : "desktop"}</div>
            </>
  }//END render

}//END class IndexPage

export default withUserAgent(IndexPage)
