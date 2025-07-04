// 여기서 만든 핸들러 연결
import { createMiddleware } from '@mswjs/http-middleware';
import express from 'express';
import cors from 'cors';
import { articlesHandlers } from '@/mocks/articles-handlers';

const app = express();
const port = 9090;

app.use(
  cors({
    origin: 'http://localhost:3000', // 클라이언트 주소
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());
app.use(createMiddleware(...articlesHandlers));
// NSW핸들러연결

app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
