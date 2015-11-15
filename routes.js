const ACTIONS_FOLDER = './actions/';
const ROUTER_FOLDER = './routes/';
const ACTIONS = ['create', 'retriece', 'update', 'update', 'delete'];
var Routes = [];

ACTIONS.forEach(function  (action) {
        const Action = require(ACTIONS_FOLDER + 'action.' + action+ '.js');
        const Config = require(ACTIONS_FOLDER + 'route.' + action + '.config');
        const Route = require(ACTIONS_FOLDER + 'route.default.js')(Action, Config);

        Routes.push(Route);
});