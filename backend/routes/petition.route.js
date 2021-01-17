const express = require('express');
const app = express();
const petitionRoute = express.Router();

let Petition = require('../models/Petition');

// Add Petition
petitionRoute.route('/create').post((req, res, next) => {
  Petition.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Petitions
petitionRoute.route('/').get((req, res) => {
  Petition.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Petition
petitionRoute.route('/read/:id').get((req, res) => {
  Petition.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Petition
petitionRoute.route('/update/:id').put((req, res, next) => {
  Petition.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Petition updated successfully')
    }
  })
})

// Delete Petition
petitionRoute.route('/delete/:id').delete((req, res, next) => {
  Petition.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = petitionRoute;