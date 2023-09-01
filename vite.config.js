import * as path from 'node:path';

export default {
  publicDir: path.resolve(__dirname, 'src'),
  server: {
    open: 'index.html',
    host: '0.0.0.0',
    port: '5173',
  },
}
