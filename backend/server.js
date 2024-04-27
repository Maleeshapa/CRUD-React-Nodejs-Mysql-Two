//--------------------------------------Database connecting

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database...');
});


app.listen(8081, () => {
    console.log("Listening on port 8081");
});

//------------------------------------------------------Read  

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err,data)=>{
        if(err) return res.json ("Error");
        return res.json(data);
    })

});

//------------------------------------------------------Create

app.post('/create', (req,res)=>{
    const sql = 'INSERT INTO student (`Name`,`Email`) VALUES (?)';
    const values=[
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err,data)=>{
        if(err) return res.json("error");
        return res.json(data);
})
})


//------------------------------------------------------update

app.put('/update/:id', (req,res)=>{
    const sql = 'UPDATE student set `Name`=?, `Email`=? where Id=?';
    const values=[
        req.body.name,
        req.body.email
    ]
    const id = req.params.id;

    db.query(sql, [...values, id], (err,data)=>{
        if(err) return res.json("error");
        return res.json(data);
})
})

//------------------------------------------------------delete

app.delete('/student/:id', (req, res) => {
    const sql = 'DELETE FROM student WHERE Id=?';

    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
})
