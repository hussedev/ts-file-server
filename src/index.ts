import { app } from './app';
import { port, host } from './config';

app.listen(port, host, () => {
  console.log(`[server]: Server is running at http://${host}:${port} ⚡️⚡️⚡️`);
});
