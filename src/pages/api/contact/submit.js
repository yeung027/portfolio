

export default function handler(req, res) 
{
  //'/api/portfolio-contacts'
  //rocess.env.strapiBaseUrl
  let name      = req.body.data ? req.body.data.name : null;
  let email     = req.body.data ? req.body.data.email : null;
  let message   = req.body.data ? req.body.data.message : null;
  res.status(200).json( { 
                          text: name,
                          ok:email,
                          rrrr:message
                        })
}