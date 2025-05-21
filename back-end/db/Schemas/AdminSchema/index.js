import { Schema, model } from "mongoose";

const AdminSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

const Admin = model("Admin", AdminSchema);

export default Admin;
