import { createHash, isLonger, isString } from "./utils.js";
import { TRIVIAL_PARTITION_KEY } from "./const.js";

const deterministicPartitionKey = (event) => {
  if (!event) return TRIVIAL_PARTITION_KEY;

  if (!event.partitionKey) return createHash(event);

  if (!isString(event.partitionKey)) return JSON.stringify(event.partitionKey);

  if (isLonger(event.partitionKey)) return createHash(event.partitionKey);

  return event.partitionKey;
};

export default deterministicPartitionKey;
