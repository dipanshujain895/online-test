const express = require('express');

const app = express();

const port = process.env.PORT || 2244;

const path = require('path');
const databaseUtil = require('../utils/DatabaseUtil');

const errorController = require('../controllers/ErrorController');
const studentRoutes = require('../routes/StudentRoutes');
const teacherRoutes = require('../routes/TeacherRoutes');

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"..","public")));

app.use('/student', studentRoutes);
app.use('/teacher', teacherRoutes);


app.get('', (req, res, next) => {
    res.render('index', {
        pageTitle: "Geeks Portal",
    }) 
});

app.use(errorController.get404);

databaseUtil.initDb((err, db) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {
            console.log("Server running at http://localhost:"+port);
        });
    }
});

