import { createApp } from './app';
import { connectDatabase } from './lib/db';

const port = Number(process.env.PORT || 4000);

async function startServer() {
  const database = await connectDatabase();
  const app = createApp();

  app.listen(port, () => {
    console.log(`[foodiehub-api] listening on http://localhost:${port}`);
    console.log(`[foodiehub-api] database provider: ${database.provider}`);
  });
}

startServer().catch((error) => {
  console.error('[foodiehub-api] failed to start', error);
  process.exit(1);
});
