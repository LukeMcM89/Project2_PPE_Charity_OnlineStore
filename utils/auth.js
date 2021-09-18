module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear()
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
    },
    format_date_string: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // format large numbers with commas
      return amount.toLocaleString();
    },
  };
