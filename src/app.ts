// Imports:
import express, { Application, Request, Response, NextFunction } from 'express'

// Global Vars:
const PORT: number = 5001

// Initialize:
const app: Application = express()

// Base Router:
app.get('/', (req: Request, res: Response) => {
  res.send('CrudTS Home Page')
})

// Establishing connection:
app.listen(PORT, () => {
  console.log(`[!]  Server is listening on port ${PORT}`)
})
