import { Schema, model } from "mongoose";
// import { type } from "os";

const MessageSchema = Schema({
  message: {
    type: String,
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
});

const Message = model("Message", MessageSchema);

export default Message;
