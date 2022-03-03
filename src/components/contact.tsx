import React,{Component} from 'react';
import styles from '../styles/contact/desktop.module.css'
import mobileStyles from '../styles/contact/mobile.module.css'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';

type MyProps = {
  parent:any
};

type MyStates = {
  nameError: boolean
  emailError: boolean
  messageError: boolean
  nameErrorMsg: string
  emailErrorMsg: string
  messageErrorMsg: string
  snackOpen: boolean
  snackType: any
  snackMsg: string
};

interface Contact {
  parent: any
  nameRef:any
  emailRef:any
  messageRef:any
}

class Contact extends Component<MyProps, MyStates>
{
  constructor(props)
  {
    super(props);
    this.parent = props.parent;

    this.state = {
      nameError: true,
      emailError: true,
      messageError: true,
      nameErrorMsg: null,
      emailErrorMsg: null,
      messageErrorMsg: null,
      snackOpen: false,
      snackType: 'success',
      snackMsg: null
    }//END state
    
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.messageRef = React.createRef();

    this.sendOnClick = this.sendOnClick.bind(this);
    this.createContact = this.createContact.bind(this);
    this.validation = this.validation.bind(this);
    this.setEmailErrorMessage     = this.setEmailErrorMessage.bind(this);
    this.setNameErrorMessage      = this.setNameErrorMessage.bind(this);
    this.setMessageErrorMessage   = this.setMessageErrorMessage.bind(this);
    this.onInputKeyUp             = this.onInputKeyUp.bind(this);
    this.snackOnClick             = this.snackOnClick.bind(this);
    this.getSnackTransition       = this.getSnackTransition.bind(this);
    this.snackOnClose             = this.snackOnClose.bind(this);
  }//END constructor

  snackOnClose()
  {
    this.setState({ 
      snackOpen: false,
    });
  }//END snackOnClose

  getSnackTransition(props) {
    if(this.state.snackType=='success')
      return <Slide {...props} direction="left" />;
    else
      return <Grow {...props} />
  }//END getSnackTransition

  snackOnClick(e)
  {
    this.setState({ 
      snackOpen: false,
    });
  }//END snackOnClick

  onInputKeyUp(e)
  {
    //console.log('onInputKeyUp');
    this.validation();
  }//END onInputKeyUp

  setNameErrorMessage(visible, msg)
  {
    if(!msg || msg.trim()=='') msg='Please enter your name';
    this.setState({ 
      nameError: visible,
      nameErrorMsg:msg
     });

     //console.log('name error: '+this.state.nameError);
  }//END setNameErrorMessage

  setEmailErrorMessage(visible, msg)
  {
    if(!msg || msg.trim()=='') msg='Invalid email address';
    this.setState({ 
      emailError: visible,
      emailErrorMsg:msg
     });

     //console.log('email error: '+this.state.emailError);
  }//END setEmailErrorMessage

  setMessageErrorMessage(visible, msg)
  {
    if(!msg || msg.trim()=='') msg='Please enter details of your enquiry';
    this.setState({ 
      messageError: visible,
      messageErrorMsg:msg
     });

     //console.log('message error: '+this.state.messageError);
  }//END setMessageErrorMessage


  validation()
  {
    var error = 0;
    var name      = this.nameRef.current ? this.nameRef.current.value : null;
    var email     = this.emailRef.current ? this.emailRef.current.value : null;
    var message   = this.messageRef.current ? this.messageRef.current.value : null;

    const emailRegexp  =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var emailV  = emailRegexp.test(email);

    if(!emailV) 
    {
      this.setEmailErrorMessage(true, null);
      error++;
    }
    else this.setEmailErrorMessage(false, null);

    if(name.trim()=='')
    {
      this.setNameErrorMessage(true, null);
      error++;
    }
    else this.setNameErrorMessage(false, null);

    if(message.trim()=='')
    {
      this.setMessageErrorMessage(true, null);
      error++;
    }
    else this.setMessageErrorMessage(false, null);


    return error <= 0;
  }//END validation

  createContact()
  {
    this.setState({ 
      snackOpen: true,
      snackType: 'error',
      snackMsg: 'Something went wrong, please try again later, sorry for the inconvenience.'
     });
    //console.log('parent this.strapiBaseUrl : '+this.parent.strapiBaseUrl);
    if(!this.validation()) return;

    var name      = this.nameRef.current ? this.nameRef.current.value : null;
    var email     = this.emailRef.current ? this.emailRef.current.value : null;
    var message   = this.messageRef.current ? this.messageRef.current.value : null;

    axios.post(this.parent.strapiBaseUrl+'/api/portfolio-contacts', {
      data:{name: name, email: email, message: message}
    })
    .then(function (response) {
      //console.log(response);
      this.setState({ 
        snackOpen: true,
        snackType: 'success',
        snackMsg: 'Message send successly! Thanks for your enquiry!'
       });
    })
    .catch(function (error) {
      //console.log(error);
      this.setState({ 
        snackOpen: true,
        snackType: 'error',
        snackMsg: 'Something went wrong, please try again later, sorry for the inconvenience.'
       });
    });



  }//END createContact

  sendOnClick()
  {
    //console.log('sendOnClick~~');
    this.createContact();
    
  }//END sendOnClick

  render() 
  {
    var nameColumnClass = this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.formColumnWrapper : styles.formColumnWrapper;
    var nameErrorClass = this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.errorMessageWrapper : styles.errorMessageWrapper
    
    var emailColumnClass = this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.formColumnWrapper : styles.formColumnWrapper;
    var emailErrorClass = this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.errorMessageWrapper : styles.errorMessageWrapper
    
    var messageColumnClass = this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.formColumnWrapper : styles.formColumnWrapper;
    var messageErrorClass = this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.errorMessageWrapper : styles.errorMessageWrapper
    
    if(!this.state.nameError)
    {
      nameColumnClass = [nameColumnClass, this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.noError : styles.noError].join(' ');
      nameErrorClass  = [nameErrorClass, this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.noError : styles.noError].join(' ');
    }

    nameColumnClass = [nameColumnClass, this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.firstColumn : styles.firstColumn].join(' ');

    if(!this.state.emailError)
    {
      emailColumnClass = [emailColumnClass, this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.noError : styles.noError].join(' ');
      emailErrorClass  = [emailErrorClass, this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.noError : styles.noError].join(' ');
    }

    if(!this.state.messageError)
    {
      messageColumnClass = [messageColumnClass, this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.noError : styles.noError].join(' ');
      messageErrorClass  = [messageErrorClass, this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.noError : styles.noError].join(' ');
    }


    return  <section className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.container : styles.container}>
              <Snackbar 
                open={this.state.snackOpen} 
                autoHideDuration={6000} 
                onClose={this.snackOnClose}
                onClick={this.snackOnClick}
                TransitionComponent={this.getSnackTransition}
              >
                <MuiAlert 
                  elevation={6} 
                  variant="filled"
                  severity={this.state.snackType}
                >
                  {this.state.snackMsg}
                </MuiAlert>
              </Snackbar>
              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.titles : styles.titles}>
                <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.titlesInner : styles.titlesInner}>
                  <h1 className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.h11 : styles.h11}>Contact</h1>
                  <h1 className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.h12 : styles.h12}>Get In Touch</h1>
                </div>
              </div>
              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.contentWrapper : styles.contentWrapper}>
                <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.contentInner : styles.contentInner}>
                  <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.formContainer : styles.formContainer}>
                    <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row1 : styles.row1}>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row1Left : styles.row1Left}>
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row1Right : styles.row1Right}>
                        <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.ninjaDialog : styles.ninjaDialog}>
                          <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.ninjaDialogPointer : styles.ninjaDialogPointer}>
                          </div>
                          <article className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.dialogContent : styles.dialogContent}>
                            <p>
                              Send me a mail: 
                              <span className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.emailLink : styles.emailLink}>
                                <Link href="mailto:shinghei.yeung@gmail.com">
                                  <a target="_blank">
                                  shinghei.yeung@gmail.com
                                  </a>
                                </Link>
                              </span>
                            </p>
                            <p className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.orP : styles.orP}>OR</p>
                            <p className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.p2 : styles.p2}>
                              Fill in your info in the form below and I look forward to hearing from you!
                            </p>
                          </article>
                        </div>
                      </div>
                    </div>
                    <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row2 : styles.row2}>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row2L : styles.row2L}>
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row2L2 : styles.row2L2}>
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row2M : styles.row2M}>
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row2R : styles.row2R}>
                      </div>
                    </div>
                    <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row3 : styles.row3}>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row3L : styles.row3L}>
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row3M : styles.row3M}>
                      
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row3R : styles.row3R}>
                      </div>
                    </div>
                    <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row4 : styles.row4}>
                      <div 
                        className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row4L : styles.row4L}
                      >
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row4M : styles.row4M}>
                        <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.formWrapper : styles.formWrapper}>
                          <form action="#" method="POST">
                            <div className={nameColumnClass}>
                              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.input : styles.input}>
                                <input id="name" type="text" autoComplete="name" ref={this.nameRef} placeholder='Name' required onKeyUp={this.onInputKeyUp} />
                              </div>
                              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.star : styles.star}>*</div>
                            </div>
                            <div className={nameErrorClass}>
                              {this.state.nameErrorMsg}
                            </div>
                            <div className={emailColumnClass}>
                              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.input : styles.input}>
                                <input id="email" type="text" autoComplete="email" ref={this.emailRef} placeholder='email' required onKeyUp={this.onInputKeyUp} />
                              </div>
                              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.star : styles.star}>*</div>
                            </div>
                            <div className={emailErrorClass}>
                            {this.state.emailErrorMsg}
                            </div>
                            <div className={messageColumnClass}>
                              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.input : styles.input}>
                                <textarea id="message" ref={this.messageRef} placeholder='Message' required onKeyUp={this.onInputKeyUp} />
                              </div>
                              <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.star : styles.star}>*</div>
                            </div>
                            <div className={messageErrorClass}>
                            {this.state.messageErrorMsg}
                            </div>
                            <div className={'button'} onClick={this.sendOnClick}>
                              Send
                            </div>
                          </form>
                        </div>
                      </div>
                      <div 
                        className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row4R : styles.row4R}
                      >
                      </div>
                    </div>
                    <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row5 : styles.row5}>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row5L : styles.row5L}>
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row5M : styles.row5M}>
                      </div>
                      <div className={this.parent.state.isMobile || this.parent.state.isTablet ? mobileStyles.row5R : styles.row5R}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  }//END render

}//END class IndexPage


export default Contact;
