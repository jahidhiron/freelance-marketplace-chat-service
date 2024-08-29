import { IConversationDocument } from '@jahidhiron/jobber-shared';
import { Schema, model } from 'mongoose';

const conversationSchema = new Schema({
  conversationId: { type: String, required: true, unique: true, index: true },
  senderUsername: { type: String, required: true, index: true },
  receiverUsername: { type: String, required: true, index: true }
});

export const ConversationModel = model<IConversationDocument>('Conversation', conversationSchema, 'Conversation');
