// routes.config.js
const routes = [{
      action: 'create'
    , method: 'post'
    , url: '/'
    , callback: function () {

    }
    },
   {
      action: 'retrieve'
    , method: 'get'
    , url: '/'
    , callback: function () {

    }
  },
  {
      action: 'get'
    , method: 'get'
    , url: '/:id'
    , callback: function () {

    }
  },
  {
      action: 'update'
    , method: 'put'
    , url: '/:id'
    , callback: function () {

    }
  },
  {
      action: 'delete'
    , method: 'delete'
    , url: '/:id'
    , callback: function () {

    }
  }
];

module.exports = routes;