import { model, Schema, Document, Types } from "mongoose";

export interface IMovement extends Document {
  id: Number;
  amount: Number;
  // account: Types.ObjectId;
  category: Types.ObjectId;
  // date: Date;
  income: Boolean;
  // User: Types.ObjectId;
}
const Movementschema = new Schema({
  id: { type: Number, required: true },
  amount: { type: Number, required: true },
  // account: { type: Schema.Types.ObjectId, ref: "Account", required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  // date: Date,
  income: { type: Boolean, required: true },
  // User: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default model<IMovement>("Movement", Movementschema);
