
# LAUNDRY APP

Built with node.js, express.js, mysql and react js


## Authors

- [@IGedeMiarta](https://github.com/IGedeMiarta)


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Running Tests

To run tests, run the following command

```bash
  nodemon index
```


## Migrate database

To add tables in database you need to create a database in mysql and setting database name, username and password in .env file

```bash
DB_NAME = 
DB_USERNMAE = 
DB_PASSWORD = 
```

import spesific model to backend/index.js and add sync in try catch database
```javascipt
import Users from './models/users.js';

await Users.sync(); //just need 1 run
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
