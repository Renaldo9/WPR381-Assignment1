let contactMessages = [];

module.exports = {
    home: (req, res) => {
        const upcomingEvents = [
            { title: "Community Meetup", date: "2025-06-15", location: "City Hall", image: "event1.jpg" },
            { title: "Charity Run",     date: "2025-07-20", location: "Central Park", image: "event2.jpg" }
        ];
        res.render('pages/home', { title: 'Home', upcomingEvents });
    },

    about: (req, res) => {
        const team = [
            { name: "Renaldo Jardim", role: "Team Lead", bio: "Leads and coordinates the team." },
            { name: "Rudi Botha", role: "Backend Dev", bio: "Builds and maintains APIs." },
            { name: "Nicole Grace Ruvarashe Dube", role: "Frontend Dev", bio: "Designs UI and integrates EJS." }
        ];
        res.render('pages/about', { title: 'About', team });
    },

    events: (req, res) => {
        const events = [
            {
                title: "Braai Day",
                date: "2025-06-15",
                location: "Pretoria Campus",
                image: "event1.jpg",
                description: "Join us for a friendly community meetup."
            },
            {
                title: "Charity Run",
                date: "2025-07-20",
                location: "Stellenbosch Campus",
                image: "event2.jpg",
                description: "Help us raise funds while you run!"
            },
            {
                title: "Fun Day",
                date: "2025-08-05",
                location: "Pretoria Campus",
                image: "event3.jpg",
                description: "Food, fun, and friends at our summer Fun Day."
            }
        ];
        res.render('pages/events', { title: 'Events', events });
    },

    contact: (req, res) => {
        res.render('pages/contact', { title: 'Contact' });
    },

    thankyou: (req, res) => {
        const lastMessage = contactMessages[contactMessages.length - 1] || {};
        res.render('pages/thankyou', { title: 'Thank You', name: lastMessage.name || 'Guest' });
    },

    submitContact: (req, res) => {
        contactMessages.push(req.body); 
        console.log('Messages submitted:');
        console.log(req.body);
        res.redirect('/thankyou');
    }
};
