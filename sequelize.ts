
import { Sequelize } from 'sequelize';
import { settings } from './settings';

const sequelize = new Sequelize(settings.database, settings.user, settings.password.toString(), {
  host: settings.host,
  dialect: 'postgres' 
});

export default sequelize