import del from "del";

import path from "../config/path.js";
import app from "../config/app.js";

const clear = () => {
  return del(path.root);
};

export default clear;
