import express from 'express'
import {config} from 'dotenv'
import morgan from 'morgan'
import path, { join } from 'path'
import { fileURLToPath } from  'url'
import exphbs from 'express-handlebars'
import indexRouter from './routes/index.routes.js'
config()

//Inicialización
const app = express()
const _dirname = path.dirname(fileURLToPath(import.meta.url))

//Settings
app.set('views',path.join(_dirname,'views'));

//Settings handlebars
app.engine('.hbs',exphbs.engine({
    defaultLayout:'main',
    layoutsDir:join(app.get('views'),'layouts'),
    partialsDir:join(app.get('views'),'partials'),
    extname:'.hbs'
}))

app.set('view engine','.hbs')
//Midlewares
app.use(morgan('dev'))

//Public files
app.use(express.static(join(_dirname,'public')));

app.use(indexRouter)

//Routes
app.get('/',(req,res)=>{
    res.render('index')
})
app.listen(3000,()=>console.log(`App runing ${process.env.SERVER_URL}`))