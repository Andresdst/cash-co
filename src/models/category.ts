import { model, Schema, Document, Types } from "mongoose";

export interface ICategory extends Document {
  id: Number;
  name: String;
  // account: Types.ObjectId;
  movement: Types.ObjectId;
  // date: Date;
  income: Boolean;
  // User: Types.ObjectId;
}
const Categoryschema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  // account: { type: Schema.Types.ObjectId, ref: "Account", required: true },
  movement: [{ type: Schema.Types.ObjectId, ref: "Movement" }],
  // date: Date,
  income: { type: Boolean, required: true },
  // User: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default model<ICategory>("Category", Categoryschema);
