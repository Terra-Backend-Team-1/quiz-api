import { Document  } from "mongoose";
import { IUser } from "./user.interface";

export interface IQuestion extends Document{
    question: string;
    options: string[];
    correctOption: string;
    createdAt: Date;
}

