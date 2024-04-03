import http from 'http'
import { app } from './app'
//import env from './config/environment'
//import { Succ } from './services/globalService'
//import database from './config/database'
import {Log, Env as env} from 'nork'
//const env = {
//	APP_PORT: 9000,
//	APP_HOSTNAME: 'localhost'
//}
const port: number = env.APP_PORT || 8080
const hostname: string = env.APP_HOSTNAME || 'localhost'
export const server = http.createServer(app)

// Server
export function runServer(): void {
	try {
		server.listen(port, hostname, () => {
			Log.info(200, `Server is listening on http://${hostname}:${port}`)
		})
	} catch (error) {
		Log.error(500, 'cannot start server', error)
		throw(error)
	}
}

runServer()

//if (!env.NORK.database) {
//	runServer()
//} else {
//	//const db_connection = database()
//	//runServer()
//}
