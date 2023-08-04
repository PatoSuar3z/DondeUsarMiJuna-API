
import express from 'express'
import localesRoutes from './routes/locales.routes.js'


const app = express()

app.use(express.json())

app.use('/api', localesRoutes)

app.use((req, res, next) => {
    res.status(404).json({message: "Not Found"})
})

export default app;