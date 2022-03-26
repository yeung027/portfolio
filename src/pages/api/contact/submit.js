import axios from 'axios'
import nodemailer from 'nodemailer'

const mailSender = process.env.mailSender;

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: mailSender,
    pass: process.env.mailPasscode,
  },
  settings: {
    defaultFrom: mailSender,
    defaultReplyTo: mailSender,
  },
});

export default async function handler(req, res) 
{
  //'/api/portfolio-contacts'
  //process.env.strapiBaseUrl
  let name      = req.body.data ? req.body.data.name : null;
  let email     = req.body.data ? req.body.data.email : null;
  let message   = req.body.data ? req.body.data.message : null;
  const emailRegexp  =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let emailV  = emailRegexp.test(email);

  if(!emailV) return res.status(500).json( { message: 'Invalid email address' } );

  await axios.post(process.env.strapiBaseUrl + '/api/portfolio-contacts', {
    data:{name: name, email: email, message: message}
  })
  .then(async function (response) {
    await createContactSuccess(res, name, email, message, response);
  })
  .catch(function (error) {
    createContactError(res, error);
  });

  
}//END default async function handler

async function createContactSuccess(res, name, email, message, response) 
{

  await sendMailToMyself(res, name, email, message, response);

}//END createContactSuccess

function createContactError(res, error) 
{
  return res.status(500).json( { 
    error:'Server Error!'
  })
}//END createContactError

async function sendMailToMyself(res, name, email, message, response) 
{
  
  let html  = "<p>Hey me,</p>";
  html      += "<p>An new enquiry from <a href='portfolio.hei.ninja'>portfolio.hei.ninja</a>:</p>";
  html      += "<ul><li><b>From: </b>"+email+"</li>";
  html      += "<li><b>Message: </b>"+message+"</li>";
  html      += "</ul>";
  html      += "<p>thanks me,</p>";
  html      += "<p>Hei</p>";

  let info = await transporter.sendMail({
    from: mailSender, // sender address
    to: mailSender, // list of receivers
    subject: "An enquiry form portfolio.hei.ninja!!", // Subject line
    html: html, // html body
  })
  .then(
    function (response) {
      res.status(200).json( { 
        message:'success to send email'
      })
    }
  ).catch(
    function (response) {
      res.status(500).json( { 
        message:response
      })
    }
  );

  

}//END sendMailToMyself