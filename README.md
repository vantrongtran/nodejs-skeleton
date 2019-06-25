# Node skeleton project with mysql database
- Use Sequelize ORM
- Yarn
# Create datatabase

```
npm install -g sequelize-cli
yarn add sequelize
```
If use want to custom path in sequelize
```
touch .sequelizerc
```
And run command for create model and migrate
```
sequelize init
sequelize db:create --env development
sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
```
# Start server
```
yarn start:dev-server
```
