import { config } from '@chat/config';
import { winstonLogger } from '@jahidhiron/jobber-shared';
import client, { Channel, Connection } from 'amqplib';

const log = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'chatQueueConnection', 'debug');

export async function createConnection(): Promise<Channel | undefined> {
  try {
    const connection = await client.connect(`${config.RABBITMQ_ENDPOINT}`);
    const channel = await connection.createChannel();
    log.info('Chat server connected to queue successfully...');

    closeConnection(channel, connection);
    return channel;
  } catch (error) {
    log.log('error', 'ChatService createConnection() method error:', error);
    return undefined;
  }
}

function closeConnection(channel: Channel, connection: Connection): void {
  process.once('SIGINT', async () => {
    await channel.close();
    await connection.close();
  });
}
