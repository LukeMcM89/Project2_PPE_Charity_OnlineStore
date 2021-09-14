const { Products } = require('../models');

const productsData = [
    {
        title: 'Face Mask',
        description: 'Medical grade, double layer, PPE compliant',
        filename: 'FaceMask.png',
    },
    {
        title: 'Face Shield',
        description: 'Medical grade, non-fogging, PPE compliant',
        filename: 'FaceShield.png',
    },
    {
        title: 'Hand Sanitizer',
        description: 'Kills 99% of germs. PPE compliant',
        filename: 'HandSanitizer.png',
    },
    {
        title: 'Medical Gloves',
        description: 'Block germs from your hands, PPE compliant',
        filename: 'MedicalGloves.png',
    },
    {
        title: 'Sanitizer Wipes',
        description: 'Kills germs too, PPE compliant',
        filename: 'SanitizerWipes.png',
    },
    {
        title: 'Toilet Paper',
        description: 'PPE compliant',
        filename: 'ToiletPaper.png',
    },
];

const seedProducts = () => Products.bulkcreate(productsData);

module.exports = seedProducts;