import React,{Component} from 'react';

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
    return  <>
             i am Introduction {this.parent.state.isMobile ? 'mobile' : 'desktop'}
            </>
  }//END render

}//END class IndexPage

export default Introduction
