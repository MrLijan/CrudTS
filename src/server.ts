import errorHandler from 'errorhandler';
import app from './app';

/*
--> Error Handler - Provides full stack (?)
*/

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
}

/*
--> Start Express server
*/

const server = app.listen(app.get('port'), () => {
  console.log('[!]  App is running in %s mode', app.get('env'));
  console.log('[!]  App is listening on http://localhost:%d', app.get('port'));
  console.log('[?]  Press CTRL-C to stop \n');
});

process.on('SIGINT', () => {
  console.log('\n[!]  Process killed by the user');
  server.close();
  process.exit();
});

export default server;
