const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn("authors", "admin", {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    });
    await queryInterface.addColumn("authors", "approved", {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn("authors", "admin");
    await queryInterface.removeColumn("authors", "approved");
  },
};
