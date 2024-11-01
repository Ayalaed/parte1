const express = require("express"); 
const router = express.Router(); 

router.get('/', (req, res, next) => {
    res.render("page/index");
    next();
});
  
router.get('/form', (req, res, next) => {
    res.render("page/form");
    next();
});

router.post('/submit', (req, res) => {
    if (!req.body || !('name' in req.body) || !('age' in req.body) || !('email' in req.body)) {
      return res.status(400).send('Missing required data in the request body.');
    }
  
    const { name, age, email } = req.body;
    
    console.log(`Nombre: ${name}, Edad: ${age}, Correo: ${email}`);
    
    res.redirect(`/confirmation?name=${name}&age=${age}&email=${email}`);
});

router.get('/confirmation', (req, res) => {
    const { name, age, email } = req.query;
    res.render('page/confirmation', { name, age, email });
});
    
module.exports = router;