// Module Beers
const MODULE_NAME = 'beers';
// Usara MongoDb
// Model
const MODEL =  require('./model.beer.js');
// CRUD
// Create
var Action = require('./../../actions/action.create.js');
var RouteConfig = require('./../../routes/route.create.config');
var RouteCreate = require('./../../routes/route.default.js')(Action, RouteConfig);

// Retreive

// update

// Delete

const RoutesConfig = require('./routes.config');
const Routes = require('./../../routes/routes.express.factory')(RoutesConfig);