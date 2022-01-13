import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles  } from '@material-ui/core/styles';
import styles from '../styles/IntroductionDesktop.module.css'
import mobileStyles from '../styles/IntroductionMobile.module.css'
import Avatar from '@material-ui/core/Avatar';

const muistyles = theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
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
              <h1 className={this.parent.state.isMobile ? mobileStyles.title : styles.title}>
                Hey, I’m Hei Yeung
              </h1>
              <h3>
                I am a Full-stack Developer. Well-versed in back-end frameworks such as Node.js, Next.js, Express.js and Ruby on rails.
Also I have experience in front-end frameworks such as react and jQuery.
Now I am mainly coding in reactjs because I can coding in javascript on both font-end and back-end.
Moreover, I have learn react native to make mobile App in both ios and android.
              </h3>
            </div>
  }//END render

}//END class IndexPage

Introduction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(muistyles)(Introduction);

