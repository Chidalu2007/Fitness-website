const { log, error } = require('console');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');



app.use(express.static(path.join(__dirname, 'public')));


// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { name, email, request } = req.body;
    console.log(`Received submission: Name - ${name}, Email - ${email}, Request - ${request}`);
    
    // Send a response to the user
    res.send(`<h2>Thank you, ${name}! We received your email: ${email}, We received your request: ${request}</h2>`);
});

app.post('/subscribe', (req,res)=>{
app.use(express.urlencoded({ extended: true }));
   
    const {email} =req.body;
    console.log(`You just subscribed to FitYourHealth ${email}`);
     
    res.sendFile(path.join(__dirname, 'public', '/message.html'), (err)=>{
        if(err){
            console.error('check your internet connection', err);
          return res.sendFile(path.join(__dirname, 'public', '/error.html'));
            
        }
        
    })
    
})

app.get('/', (req, res) => {  
    const filePath = path.join(__dirname,'public', 'index.html');

    console.log(filePath);
      
    res.sendFile(filePath);
});  
app.get('/about', (req, res) => {  
    const filePath = path.join(__dirname,'public', 'about.html');

    console.log(filePath);
      
    res.sendFile(filePath);
});  
app.get('/services', (req, res) => {  
    const filePath = path.join(__dirname, 'public', 'services.html');

    console.log(filePath);
      
    res.sendFile(filePath);
});  
app.get('/contact', (req, res) => {  
    const filePath = path.join(__dirname,'public', 'contact.html');

    console.log(filePath);
      
    res.sendFile(filePath);
});  
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`); 
})