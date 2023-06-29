import crypto from "crypto";
import { MAX_PARTITION_KEY_LENGTH } from "./const.js";

export const isString = (key) => typeof key === "string";

export const isLonger = (key = "", len = MAX_PARTITION_KEY_LENGTH) =>
  key.length > len;

export const createHash = (key) => {
  const candidate = !isString(key) ? JSON.stringify(key) : key;

  return crypto.createHash("sha3-512").update(candidate).digest("hex");
};
