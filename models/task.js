import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      // define associations here
    }
  }

  Task.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      completed: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Task',
    }
  );

  return Task;
};
