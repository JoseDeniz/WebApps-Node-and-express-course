var express = require('express');
var adminRouter = express.Router();

var router = (nav) => {

    adminRouter.route('/')
        .get((req, res) => res.send('Hello Admin!'));

    adminRouter.route('/addBooks')
        .get((req, res) => {
            res.send('inserting books');
        });

    return adminRouter;
};

module.exports = router;
