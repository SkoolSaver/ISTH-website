import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  eventDate: Date;
  nasioUrl: string;
  imageUrl: string;
  category: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    eventDate: { type: Date, required: true },
    nasioUrl: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

// Use 'Event' as the model name, which maps to 'events' collection in MongoDB
const EventsModel: Model<IEvent> = mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

export default EventsModel;
