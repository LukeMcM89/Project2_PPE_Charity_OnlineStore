const { Products } = require('../models');

const productsData = [
    {
        title: 'Face Mask',
        description: '100% spun bond polypropylene and double layered. PPE compliant.',
        filename: 'FaceMask.png',
    },
    {
        title: 'Face Shield',
        description: 'Medical grade, plastic and non-fogging. Lightweight and durable. Provides clear visability. PPE compliant.',
        filename: 'FaceShield.png',
    },
    {
        title: 'Hand Sanitizer',
        description: 'Kills 99% of germs. 8 fluid-ounces. Easy and convenient to use. PPE compliant.',
        filename: 'HandSanitizer.png',
    },
    {
        title: 'Medical Gloves',
        description: 'Disposable Nitrile gloves. Good chemical, oil and solvent resistance. Touch screen compatible. Size Medium. PPE compliant.',
        filename: 'MedicalGloves.png',
    },
    {
        title: 'Sanitizer Wipes',
        description: 'Wet sanitizing wipes. Fragrance free. 75% alcohol and pure water formula. 80 count. PPE compliant.',
        filename: 'SanitizerWipes.png',
    },
    {
        title: 'Toilet Paper',
        description: 'The best toilet paper on the planet, Luke says.',
        filename: 'ToiletPaper.png',
    },
];

const seedProducts = () => Products.bulkCreate(productsData);

module.exports = seedProducts;