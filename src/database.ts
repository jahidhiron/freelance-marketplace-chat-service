import { winstonLogger } from '@jahidhiron/jobber-shared';
import { config } from '@chat/config';
import mongoose from 'mongoose';

const log = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'chatDatabaseServer', 'debug');

export const databaseConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(`${config.DATABASE_URL}`);
    log.info('Chat service successfully connected to database.');
  } catch (error) {
    log.log('error', 'ChatService databaseConnection() method error:', error);
  }
};
