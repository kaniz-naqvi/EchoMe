import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// Security & parsing
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));

export default app;