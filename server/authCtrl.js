const bcrypt = require('bcryptjs');

module.exports = {
    async signup(req, res) {
        /*
        1. check db for existing username
            a. if exists, send error message
        2. generate salt and hash
        3. insert into db
        4. put user data on session
        5. send back 200 w/ user data
        */
        let { username, password } = req.body;
        let db = req.app.get('db')
        let foundUser = await db.find_user([username]);
        if (foundUser[0]) return res.status(200).send({ message: 'Username already in use' })
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let [createdUser] = await db.create_user([username, hash]);
        req.session.user = { username: createdUser.username };
        res.status(200).send({ message: 'loggedIn' })
    },
    async login(req, res) {
        /*
        1. check to make sure a user has the username from req.body
            a. if not, then send back proper message
        2. compare the password using compareSync
            a. if incorrect, send proper message
        3. logged in user on req.session
        4. send proper status back
        */
        let { username, password } = req.body;
        let db = req.app.get('db');
        let [foundUser] = await db.find_user([username]);
        if (foundUser) {
            //compareSync returns either true or false
            let result = bcrypt.compareSync(password, foundUser.password)
            if (result) {
                req.session.user = { username: foundUser.username };
                res.status(200).send({ message: 'loggedIn' })
            } else {
                res.status(401).send({ message: 'Incorrect password.' })
            }
        } else {

            res.status(401).send({ message: 'Username not found.' })
        }
    },
    userData(req, res) {
        if (req.session.user) {
            res.status(200).send(req.session.user);
        } else {
            res.sendStatus(401);
        }
    },
    logout(req, res) {
        req.session.destroy();
        res.redirect('http://localhost:3000')
    }
}