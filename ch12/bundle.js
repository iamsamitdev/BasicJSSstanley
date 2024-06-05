const QRCode = require('qrcode')

// Print the QR code to terminal
QRCode.toString('sample data', {type:'terminal'}, function (err, QRcode) {
 
    if(err) return console.log("error occurred")

    // Printing the generated code
    console.log(QRcode)
})
