const app = require('./app');
const { connectDatabase } = require('./config/database');
const { env } = require('./config/env');

async function bootstrap() {
  await connectDatabase();

  app.listen(env.port, () => {
    console.log(`API server running on port ${env.port}`);
  });
}

bootstrap();
