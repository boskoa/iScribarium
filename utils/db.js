const Sequelize = require("sequelize");
const { SequelizeStorage, Umzug } = require("umzug");
const { DATABASE_URL, PRODUCTION_DATABASE_URL } = require("./config");

const dataBase =
  process.env.NODE_ENV === "development"
    ? DATABASE_URL
    : PRODUCTION_DATABASE_URL;

const sequelize = new Sequelize(dataBase, {
  dialect: "postgres",
});

const migrtationsConf = {
  migrations: {
    glob: "migrations/*.js",
  },
  storage: new SequelizeStorage({
    sequelize,
    tableName: "migrations",
  }),
  context: sequelize.getQueryInterface(),
  logger: console,
};

async function runMigrations() {
  const migrator = new Umzug(migrtationsConf);
  const migrations = await migrator.up();
  console.log("Migrations up to date", {
    files: migrations.map((m) => m.name),
  });
}

async function rollbackMigrations() {
  await sequelize.authenticate();
  const migrator = new Umzug(migrtationsConf);
  await migrator.down();
}

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    await runMigrations();
    console.log("Connected to database");
  } catch (error) {
    console.log("Failed to connect to the database", error);
    return process.exit(1);
  }

  return null;
}

module.exports = {
  sequelize,
  rollbackMigrations,
  connectToDatabase,
};
