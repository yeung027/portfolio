import React,{Component} from 'react';
import { WithUserAgentProps, withUserAgent } from 'next-useragent'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

class IndexPage extends Component<WithUserAgentProps> 
{
  static async getInitialProps(ctx) 
  {
    return { useragent: ctx.ua.source }
  }

  render() 
  {
    const { ua, useragent } = this.props
    return  <>
              <p>{ useragent }</p>
              {ua.isMobile ? <div className={styles.mobile}>mobile</div> : <div className={styles.desktop}>desktop</div>}
            </>
  }

}

export default withUserAgent(IndexPage)
