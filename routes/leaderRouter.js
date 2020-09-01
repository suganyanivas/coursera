const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((_req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((_req,res,_next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, _next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((_req, res, _next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((_req, res, _next) => {
    res.end('Deleting all leaders');
});
leaderRouter.route('/:leaderId')
.get( (req,res,_next) => {
    res.end('Will send details of the leaders: ' + req.params.leaderId +' to you!');
})

.post((req, res, _next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
})
.put((req, res, _next) => {
  res.write('Updating the leaders: ' + req.params.leaderId + '\n');
  res.end('Will update the leaders: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete( (req, res, _next) => {
    res.end('Deleting leaders: ' + req.params.leaderId);
});

module.exports = leaderRouter;