import axios from 'axios'

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
  .catch(async function (error) {
    await createContactError(res, error);
  });

  
}//END default async function handler

async function createContactSuccess(res, name, email, message, response) 
{

  await sendMailToMyself(res, name, email, message, response);

}//END createContactSuccess

async function createContactError(res, error) 
{
  return res.status(500).json( { 
    error:'Server Error!'
  })
}//END createContactError

async function sendMailToMyself(res, name, email, message, response) 
{
  
  return res.status(200).json( { 
    name:name
  })

}//END sendMailToMyself