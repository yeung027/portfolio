import React,{Component} from 'react';
import dynamic from 'next/dynamic'
import styles from '../styles/introduction/desktop.module.css'
import mobileStyles from '../styles/introduction/mobile.module.css'

const Ninja = dynamic(() => import('@/components/canvas/Ninja'), {
  ssr: false,
})


type MyProps = {
  parent:any
};

type MyStates = {
  
};

interface Introduction {
  parent: any
  ninjaRef: any
}

class Introduction extends Component<MyProps, MyStates>
{
  constructor(props:MyProps)
  {
    super(props);
    this.parent = props.parent;
    this.state = {
      
    }//END state
    
    this.ninjaRef = React.createRef();

  }//END constructor
  


  render() 
  {
    return  <section className={this.parent.state.isMobile ? mobileStyles.container : styles.container}>
              <div className={this.parent.state.isMobile ? [mobileStyles.item, mobileStyles.left].join(' ') : [styles.item, styles.left].join(' ')}>
                <h1 className={this.parent.state.isMobile ? mobileStyles.h11 : styles.h11}>Hey! I&#39;m</h1>
                <h1 className={this.parent.state.isMobile ? mobileStyles.h12 : styles.h12}>Hei Yeung</h1>
                <article className={this.parent.state.isMobile ? mobileStyles.description : styles.description}>
                <p>
                  I am a Full-stack Developer. Well-versed in back-end frameworks such as Node.js, Next.js, Express.js and Ruby on rails.
                </p>
                <p>
                  Also I have experience in front-end frameworks such as react and jQuery.
                </p>
                <p>
                  Now I am mainly coding in reactjs because I can coding in javascript on both font-end and back-end.
                </p>
                <p>
                  Moreover, I have learn react native to make mobile App in both ios and android.
                </p>
                </article>
              </div>
              <div className={this.parent.state.isMobile ? [mobileStyles.item, mobileStyles.right].join(' ') : [styles.item, styles.right].join(' ')}>
                <Ninja parent={this} ref={this.ninjaRef} />
              </div>
            </section>
  }//END render

}//END class IndexPage


export default Introduction;
