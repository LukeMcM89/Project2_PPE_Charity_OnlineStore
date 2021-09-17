module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear() + 5
      }`;
    },
    withAuth : (req, res, next) => {
      console.log(req);
      // If the user is not logged in, redirect the request to the login route
      if (!req.session.loggedIn) {
        res.redirect('/login');
      } else {
        next();
      }
    }
  };