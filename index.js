const express = require('express');
const port    = process.env.PORT || 4000;
const app     = express();
const dest    = `${__dirname}/public`;

app.use(express.static(dest));

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));



// const express    = require('express');
// const bluebird   = require('bluebird');
// // const morgan     = require('morgan');
// // const mongoose   = require('mongoose');
// // const bodyParser = require('body-parser');
// const cors       = require('cors');
// // const expressJWT = require('express-jwt');
// const app        = express();
//
// const port    = process.env.PORT || 4000;
// const dest    = `${__dirname}/public`;
//
// // mongoose.connect('API');
// // mongoose.Promise = bluebird;
//
// if (app.get('env') !== 'production') app.use(cors());
// // app.use(morgan('dev'));
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(dest));
//
//
// app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));
//
// app.use('/api', expressJWT({ secret: "AUTH_SECRET" })
//   .unless({
//     path: [
//       { url: '/api/login', methods: ['POST'] },
//       { url: '/api/register', methods: ['POST'] }
//     ]
//   }));
//
// app.use(jwtErrorHandler);
//
// function jwtErrorHandler(err, req, res, next) {
//   if (err.name !== 'UnauthorizedError') return next();
//
//   return res.status(401).json({ message: 'Unauthorized request'});
// }
//
// // app.use('/api', routes);
// app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));
//
// app.listen(port, () => console.log(`Express has started on port: ${port}`));
//
//
// module.exports = app;
//
//
//
//
// // const mongoose   = require('mongoose');
//
// // const morgan     = require('morgan');
