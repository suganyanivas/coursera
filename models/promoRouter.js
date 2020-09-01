const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const promotions = require('../models/promotions');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());


promoRouter.route('/:promoId/comments')
.get((req,res,next) => {
    promotions.findById(req.params.promoId)
    .then((promotions) => {
        if (promotions != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promo.comments);
        }
        else {
            err = new Error('promo ' + req.params.promoId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    promo.findById(req.params.promoId)
    .then((promotions) => {
        if (promotions!= null) {
            promotions.comments.push(req.body);
            promotions.save()
            .then((promotions) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(promotions);                
            }, (err) => next(err));
        }
        else {
            err = new Error('promotions' + req.params.promoId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions/'
        + req.params.dishId + '/comments');
})
.delete((req, res, next) => {
    promotions.findById(req.params.dishId)
    .then((promotions) => {
        if (promotions!= null) {
            for (var i = (dish.comments.length -1); i >= 0; i--) {
                dish.comments.id(promotions.comments[i]._id).remove();
            }
            promotions.save()
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);                
            }, (err) => next(err));
        }
        else {
            err = new Error('Dish ' + req.params.dishId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));    
});




promoRouter.route('/:promoId/comments/:commentId')
.get((req,res,next) => {
    promo.findById(req.params.dishId)
    .then((dish) => {
        if (promotions != null && promotions.comments.id(req.params.commentId) != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dish.comments.id(req.params.commentId));
        }
        else if (promotions == null) {
            err = new Error('Dish ' + req.params.promoId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Comment ' + req.params.commentId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.promoId
        + '/comments/' + req.params.commentId);
})
.put((req, res, next) => {
    promotions.findById(req.params.dishId)
    .then((promotions) => {
        if (promotions != null && dish.comments.id(req.params.commentId) != null) {
            if (req.body.rating) {
                promotions.comments.id(req.params.commentId).rating = req.body.rating;
            }
            if (req.body.comment) {
                promotions.comments.id(req.params.commentId).comment = req.body.comment;                
            }
            promotions.save()
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);                
            }, (err) => next(err));
        }
        else if (promotions== null) {
            err = new Error('Dish ' + req.params.promoId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Comment ' + req.params.commentId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    promotions.findById(req.params.dishId)
    .then((promotions) => {
        if (promotions != null && promotions.comments.id(req.params.commentId) != null) {
            promotions.comments.id(req.params.commentId).remove();
            promotions.save()
            .then((promotions) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);                
            }, (err) => next(err));
        }
        else if (promotions== null) {
            err = new Error('promotions ' + req.params.promoId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Comment ' + req.params.promoId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
});