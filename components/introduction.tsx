import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles  } from '@material-ui/core/styles';
import styles from '../styles/IntroductionDesktop.module.css'
import mobileStyles from '../styles/IntroductionMobile.module.css'
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
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
    return  <div>
              i am Introduction {this.parent.state.isMobile ? 'mobile' : 'desktop'}
            </div>
  }//END render

}//END class IndexPage

Introduction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Introduction);
