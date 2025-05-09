
// temporary array for messages
let contactMessages = []; // Ideally this would be in a database

module.exports = {
    home: (req, res) => {
        res.render('pages/home'); // Renders the 'home.ejs' view
    },
    about: (req, res) => {
        res.render('pages/about');
    },
    events: (req, res) => {
        res.render('pages/events');
    },
    contact: (req, res) => {
        res.render('pages/contact');
    },
    thankyou: (req, res) => {
        res.render('pages/thankyou');
    },
    submitContact: (req, res) => {
        contactMessages.push(req.body); // Store message (in-memory)
        res.redirect('/thankyou');
    }
};