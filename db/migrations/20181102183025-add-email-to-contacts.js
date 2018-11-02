'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Contact', 
      'Email',
      Sequelize.STRING  
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Contact', 'Email')
  }
};
