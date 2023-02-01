import { Document } from "mongoose";

export interface UserInterface extends Document {
  matchPassword: (enteredPassword: string) => Promise<boolean>;
  getSignedJwtToken: () => string;
}
