const express = require('express');
const port = 4000;

const admin = require("firebase-admin");

var serviceAccount = require("C:/Users/Kym/Desktop/school/ASI/crud-asi-firebase-adminsdk-7a4ne-36d5dd8171.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://crud-asi-default-rtdb.firebaseio.com"
});


//setting up the express app
const app = express();

app.use(express.json());
app.use(express.static('koh_navarro_pablo_reyes'));

const database = admin.database();
const usersRef = database.ref('/users');

app.get('/', (req, res) => {
    res.send('index');
});

app.post('/save', (req, res) => {
    const user_id = usersRef.push().key;
    usersRef.child(user_id).set({
        studnum: req.body.studnum,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        section: req.body.section
    });
});

app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});