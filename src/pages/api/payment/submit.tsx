const braintree = require("braintree");

export default function handler(req, res) 
{
  var nonce = null;
  if(req.body.data != null && req.body.data.nonce != null && req.body.data.nonce.trim()!='')
  {
    nonce = req.body.data.nonce
    const gateway = new braintree.BraintreeGateway({
      environment: braintree.Environment.Sandbox,
      merchantId: process.env.merchantId,
      publicKey: process.env.publicKey,
      privateKey: process.env.privateKey
    });


    const newTransaction = gateway.transaction.sale({
      amount: '10.00',
      paymentMethodNonce: nonce,
      options: {
        // This option requests the funds from the transaction
        // once it has been authorized successfully
        submitForSettlement: true
      }
    }, (error, result) => {
        if (result) {
          res.send(result);
        } else {
          res.status(500).send(error);
        }
    });

   /* gateway.clientToken.generate({}, (err, response) => {
      const clientToken = response.clientToken
      let data	= { clientToken: clientToken };
      res.status(200).json(data);
    });*/

  }//END if nonce not null
  else
  {
    res.status(500).json({message: ''});
  }
}
