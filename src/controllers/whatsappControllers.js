const verifyToken = (req, res) =>{
    res.send("Hola verificacion de token");
    /*
    try {
        var accessToken = process.env.WHATSAPP_WEBHOOK_KEY;
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];


        if (challenge != null && token != null && token == accessToken) {
            res.send(challenge);
        } else {
            res.status(400).send();
        }

    } catch (error) {
        res.status(400).send();
    }
    */
}

async function recivedMessage (req, res) {
    res.send("Hola recibido");

    /*
    try {
    var entry = (req.body['entry'])[0];
    var changes = (entry['changes'])[0];
    var value = changes['value'];
    var messageObject = value['messages'];


    if (typeof messageObject != 'undefined'){
        var messages = messageObject[0];
        var number = messages['from']; 
        var text = await getTextUser(messages);

        if (text != '') {

            await process.processMessage(text, number);
        } 

        //Seguir desde aqui
    }

    res.send('EVENT_RECEIVED');
    } catch (e) {

    res.send('EVENT_RECEIVED');
    }
    */
}


module.exports = {
    verifyToken,
    recivedMessage,
}