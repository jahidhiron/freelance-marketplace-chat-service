import { health } from '@chat/controllers/health';
import express, { Router } from 'express';

const router = express.Router();

export const healthRoutes = (): Router => {
  router.get('/chat-health', health);

  return router;
};
