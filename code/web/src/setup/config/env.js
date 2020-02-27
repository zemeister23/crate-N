// Imports
import dotenv from 'dotenv'

// Load .env
dotenv.config()

// URL
export const APP_URL = process.env.APP_URL
export const APP_URL_API = process.env.APP_URL_API

// Environment
export const NODE_ENV = process.env.NODE_ENV

// Port
export const PORT = process.env.PORT || 3000
