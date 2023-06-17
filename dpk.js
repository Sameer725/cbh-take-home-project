const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const createHash = (key) =>
  crypto.createHash("sha3-512").update(key).digest("hex");

const deterministicPartitionKey = (event) => {
  if (!event) return TRIVIAL_PARTITION_KEY;

  let candidate = event.partitionKey || createHash(JSON.stringify(event));

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash(candidate);
  }

  return candidate;
};

module.exports = {
  deterministicPartitionKey,
  createHash,
  TRIVIAL_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH,
};
