const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send ('Hello World this is  node');
});

const users=[
    {id :0, name:'suborna', email:'suborna@gmail.com', phn: '017256655'},
    {id :1, name:'Borsa', email:'suba@gmail.com', phn: '017756655'},
    {id :2, name:'Borna', email:'borna@hotmail.com', phn: '017256695'},
    {id :3, name:'jhoorna', email:'jhoorna@gmail.com', phn: '019256655'},
    {id :4, name:'moniraa', email:'monira@bdx.com', phn: '018856655'},
    {id :5, name:'jhumur', email:'jhumur@yahoo.com', phn: '0188565855'}
]

app.get('/users',(req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user =>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    
})
//app MRTHODE

app.post('/users',(req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hiting the post', req.body);
    // res.send('post got hitted')
    res.json(newUser)
})

app.get('/users/:id',(req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})
app.get('/fruits/',(req,res)=>{
    res.send(['mango','orange','banana','apple','narikel'])
})

app.get('/fruits/mango/fazli',(req,res)=>{
    res.send('This is tak fazli mango')
})

app.listen(port, ()=>{
    console.log('listenig to port',port);
})