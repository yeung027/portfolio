export default function handler(req, res) 
{
  var nonce = null;
  if(req.body.data != null)
    nonce = req.body.data.nonce
	let data	= { name: "hello", nonce: nonce };
	
  res.status(200).json(data);
}
