const ProjectController = require('../controllers/stores.controller');

module.exports = app => {
    app.get('/api/stores', ProjectController.getAllStores);

    app.post('/api/stores', ProjectController.createStores);

    app.get('/api/stores/:id', ProjectController.getOneStores);

    app.put('/api/stores/:id', ProjectController.updateStore);

    app.delete('/api/stores/:id', ProjectController.deleteStore);
}
