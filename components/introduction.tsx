import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles  } from '@material-ui/core/styles';
import styles from '../styles/IntroductionDesktop.module.css'
import mobileStyles from '../styles/IntroductionMobile.module.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const muistyles = theme => ({
  root: {
    '& > *': {
      margin: 0,
    },
  },
});


class Introduction extends Component
{
  constructor(props)
  {
    super(props);
    this.parent = props.parent;

    this.state = {
      
    }//END state
    
  }//END constructor


  render() 
  {
    const { classes } = this.props;

    return  <div className={this.parent.state.isMobile ? mobileStyles.container : styles.container}>
      
              <div className={this.parent.state.isMobile ? mobileStyles.leftArea : styles.leftArea}>
                <h1 className={this.parent.state.isMobile ? mobileStyles.title : styles.title}>
                  Hey, I’m <span className={this.parent.state.isMobile ? mobileStyles.nameHighlight : styles.nameHighlight}>Hei Yeung</span>
                </h1>
                <h3 className={this.parent.state.isMobile ? mobileStyles.descritpion : styles.descritpion}>
                  <p>I am a Full-stack Developer. Well-versed in back-end frameworks such as Node.js, Next.js, Express.js and Ruby on rails.</p>
  <p>Also I have experience in front-end frameworks such as react and jQuery.</p>
  <p>Now I am mainly coding in reactjs because I can coding in javascript on both font-end and back-end.</p>
  <p>Moreover, I have learn react native to make mobile App in both ios and android.</p>
                </h3>
              </div>
              <div className={this.parent.state.isMobile ? mobileStyles.rightArea : styles.rightArea}>
                <div className={this.parent.state.isMobile ? mobileStyles.circleContainer : styles.circleContainer}></div>
              </div>
            </div>
  }//END render

}//END class IndexPage

Introduction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(muistyles)(Introduction);

