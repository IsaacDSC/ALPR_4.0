const express = require('express')
const router = express()

router.get('/', (req, res) => res.send('FUNCIONANDO'))

router.post('/TCC', (req, res) => {
    console.log(req.body)
    res.status(200).send('OK')
})

module.exports = router