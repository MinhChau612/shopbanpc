
import { Request, Response, NextFunction } from 'express'

const notFound = (req: Request, res: Response, next: NextFunction): void => {
    const error = new Error(`Route ${req.originalUrl} not found!`)
    res.status(404)
    next(error)
}

const errHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
): Response => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    return res.status(statusCode).json({
        success: false,
        message: error?.message || 'Something went wrong'
    })
}

export default { notFound, errHandler }
