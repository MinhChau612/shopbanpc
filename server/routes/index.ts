
import { Application } from 'express'
import userRouter from './user.js'
import err from '../middlewares/errHandler.js'

const initRoutes = (app: Application): void => {
    app.use('/api/user', userRouter)

    app.use(err.notFound)
    app.use(err.errHandler)
}

export default initRoutes