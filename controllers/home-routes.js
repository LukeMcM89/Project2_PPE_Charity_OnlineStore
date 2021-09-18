const router = require('express').Router();
const { Products, Shopper, Project } = require('../models');
const getData = require('../Covid-Latest-Totals');

// GET all products for product page
router.get('/products', async (req, res) => {
  try {
    const dbProductData = await Products.findAll();

    const products = dbProductData.map((product) =>
      product.get({ plain: true })
    );
    const projectData = await Project.findAll({
      include: [
        {
          model: Shopper,
          attributes: ['username'],
        },
      ],
    });
        // Serialize data so the template can read it
        const projects = projectData.map((project) => project.get({ plain: true }));
    //Send over the 'products' session variable to the 'homepage' template
    getData(([json]) => {
      res.render('storefront', {
        products,
        projects,
        json,
        loggedIn: req.session.loggedIn,
      });
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET products --
router.get('/products/:id', async (req, res) => {
  try {
    const dbProductsData = await Products.findByPk(req.params.id, {
      include: [
        {
          model: Products,
          attributes: [
            'id',
            'title',
            'filename',
            'description',
          ],
        },
      ],
    });

    const Product = dbProductsData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'product' template
    res.render('product', { products, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET one product
router.get('/products/:id', async (req, res) => {
  try {
    const dbProductsData = await Products.findByPk(req.params.id);

    const products = dbProductsData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('products', { products, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: Shopper,
          attributes: ['username','password'],
          
        },
      ],
    });
    console.log(projectData);

    const project = projectData.get({ plain: true });
    console.log(project);
    res.render('project', {
      project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get('/', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/products');
    return;
  }
  // Otherwise, render the 'login' template
  getData(([json]) => {
    res.render('login', {json});
  });

});

module.exports = router;
