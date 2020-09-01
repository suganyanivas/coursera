const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const leaders = require('../models/leaders');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());


leaderRouter.route('/:leaderId/comments')
.get((req,res,next) => {
    leaders.findById(req.params.leaderId)
    .then((leaders) => {
        if (leaders!= null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dish.comments);
        }
        else {
            err = new Error('leaders' + req.params.leaderId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    leaders.findById(req.params.leaderId)
    .then((leaders) => {
        if (leaders != null) {
            leaders.comments.push(req.body);
            leaders.save()
            .then((leaders) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(leaders);                
            }, (err) => next(err));
        }
        else {
            err = new Error('leaders' + req.params.leadersId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders/'
        + req.params.leaderId + '/comments');
})
.delete((req, res, next) => {
    Dishes.findById(req.params.leaderId)
    .then((leaders) => {
        if (leaders!= null) {
            for (var i = (leaders.comments.length -1); i >= 0; i--) {
                leaders.comments.id(leaders.comments[i]._id).remove();
            }
            leaders.save()
            .then((leaders) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);                
            }, (err) => next(err));
        }
        else {
            err = new Error('leaders ' + req.params.leaderId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));    
});




leaderRouter.route('/:leaderId/comments/:commentId')
.get((req,res,next) => {
    leaders.findById(req.params.leaderId)
    .then((leaders) => {
        if (leaders != null && leaders.comments.id(req.params.commentId) != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leaders.comments.id(req.params.commentId));
        }
        else if (leaders == null) {
            err = new Error('leaders ' + req.params.leaderId + ' not found');
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
    res.end('POST operation not supported on /leaders/'+ req.params.leaderId
        + '/comments/' + req.params.commentId);
})
.put((req, res, next) => {
    leaders.findById(req.params.leaderId)
    .then((leaders) => {
        if (leaders != null && leaders.comments.id(req.params.commentId) != null) {
            if (req.body.rating) {
                leaders.comments.id(req.params.commentId).rating = req.body.rating;
            }
            if (req.body.comment) {
                leaders.comments.id(req.params.commentId).comment = req.body.comment;                
            }
            leaders.save()
            .then((leaders) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);                
            }, (err) => next(err));
        }
        else if (leaders== null) {
            err = new Error('Dish ' + req.params.leaderId + ' not found');
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
    leaders.findById(req.params.leaderId)
    .then((leaders) => {
        if (leaders!= null && leaders.comments.id(req.params.commentId) != null) {
            leaders.comments.id(req.params.commentId).remove();
            leaders.save()
            .then((leaders) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);                
            }, (err) => next(err));
        }
        else if (leaders == null) {
            err = new Error('leaders ' + req.params.leadersId + ' not found');
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
});