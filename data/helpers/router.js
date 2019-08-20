const express = require('express');
const Hubs = require('../helpers/projectModel.js');
const actionHubs = require('../helpers/actionModel.js');
const router = express.Router();

router.use((req, res, next) => {
    console.log('We are in the hubs router!');
    next();
  });

  router.get('/:id', (req, res) => {
    res.status(200).json(req.hub);
  });

router.post('/:id', (req, res) => {
  Hubs.insert(req.params.id, req.body)
  .then(hub => {
    res.status(201).json(hub);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error',
    });
  })
})

router.put('/:id', (req, res) => {
  Hubs.update(req.params.id, req.body)
  .then(hub => {
    res.status(200).json(hub);
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error updating the hub',
    });
  });
});

router.delete('/:id', (req, res) => {
  Hubs.remove(req.params.id)
  .then(count => {
    res.status(200).json({ message: 'The hub has been destroyed' });
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error removing the hub',
    });
  });
});

router.get('/:id/actions', (req, res) => {
  Hubs.getProjectActions(req.params.id)
  .then(messages => {
    res.status(200).json(messages);
  })
  .catch (error => {
    console.log(error);
    res.status(500).json({
      message: 'Error getting the messages for the hub',
    });
  });
});

// ACTION MODEL

router.post('/:id', (req, res) => {
    actionHubs.insert(req.params.id, req.body)
    .then(hub => {
      res.status(201).json(hub);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error',
      });
    })
  });

  router.put('/:id', (req, res) => {
    actionHubs.update(req.params.id, req.body)
    .then(hub => {
      res.status(200).json(hub);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error updating the hub',
      });
    });
  });

router.delete('/:id', (req, res) => {
  actionHubs.remove(req.params.id)
  .then(count => {
    res.status(200).json({ message: 'The hub has been destroyed' });
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error removing the hub',
    });
  });
});
module.exports = router;