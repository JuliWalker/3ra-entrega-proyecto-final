import express  from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import 'dotenv/config'
import passport from "passport";
import './passport/local.js'
import morgan from "morgan";
// const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080



/** Middlewares */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(
    {
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: "mongodb+srv://julian:juliyluli@ecommerce.zjwuzjv.mongodb.net/ecommerce?retryWrites=true&w=majority",
            ttl: 60 * 10 // 10 minutes
            })
    }
));
app.use(passport.initialize())
app.use(passport.session())


/** Views */
app.set('views', 'src/views');
app.set('view engine', 'ejs');


/** Routes */
import homeRouter from './routes/home.js';
import routesProducts from './routes/products.js'
// import routesCart from './routes/cart'
import loginRouter from './routes/login.js';
import logoutRouter from './routes/logout.js';
import registerRouter from './routes/register.js';

app.use('/', homeRouter);
app.use('/api/productos',routesProducts)
// app.use('/api/carrito',routesCart)
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/registro', registerRouter);


/** Server */
try {
    app.listen(PORT);
    console.log(`Server on port ${PORT}...`)
} catch (error) {
    console.log('Error de conexión con el servidor...', error)
}


// Corregir la parte de Bcrypt y serialize para que pase bien los parametros de nombre del usuario.

// Modificar todas las credenciales que viajan desdel el archivo .env para ver si corre heroku.
// Agregar la parte de webmailing
// Habilitar el modo cluster para el server.
// Reemplazar algunos loggers con los loggers vistos en clase

// Cargar productos en la app con las imagenes cargadas bien
// Agregar a la tabla de usuarios todos los datos que pide el entregable
// Revisar que funcione Bcrypt para guardar las contraseñas
// agregar la parte del cart con la logica que subio Laura para leer desde ID todo el producto.