const express = require('express')
const QRCode = require('qrcode')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/qrcode', async (req, res) => {
  try {
    const url = req.query.url || 'https://www.google.com'
    const qrCodeImage = await QRCode.toDataURL(url)
    res.send(`<img src="${qrCodeImage}" alt="QR Code"/>`);
  } catch(err) {
    console.error(err)
    res.status(500).send('Internal Server Error')
  }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})