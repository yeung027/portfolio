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
      isMobile: ua.isMobile,
      useragent: useragent,
    }//END state

    this.introduction = React.createRef();
  }//END constructor

  static async getInitialProps(ctx) 
  {
    return { useragent: ctx.ua.source }
  }//END getInitialProps

  componentDidMount()
  {
    //console.log('index, componentDidMount: ' + this.introduction.current.state.hello);
  }

  render() 
  {
    return  <>
              <Head>
                <title>Hei Yeung:Web Developer</title>
              </Head>
              <p>{ this.state.useragent }</p>
              <div className={this.state.isMobile ? styles.mobile:styles.desktop}>{this.state.isMobile ? "mobile" : "desktop"}</div>
              <Introduction ref={this.introduction} parent={this} />
            </>
  }//END render

}//END class IndexPage

export default withUserAgent(IndexPage)
