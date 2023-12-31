import deterministicPartitionKey from "../dpk.js";

import { TRIVIAL_PARTITION_KEY, MAX_PARTITION_KEY_LENGTH } from "../const.js";
import { createHash } from "../utils.js";

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();

    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
  });

  it("should return a hash if given a value", () => {
    const event = 1;

    const trivialKey = deterministicPartitionKey(event);
    const expected = createHash(JSON.stringify(event));

    expect(trivialKey).toBe(expected);
  });

  it("should return partitionKey if it's present in event", () => {
    const partitionKey = "1";
    const trivialKey = deterministicPartitionKey({ partitionKey });

    expect(trivialKey).toBe(partitionKey);
  });

  it("should return stringify value if partitionKey/candidateKey is not string", () => {
    const partitionKey = { test: "test key" };
    const trivialKey = deterministicPartitionKey({ partitionKey });

    expect(trivialKey).toBe(JSON.stringify(partitionKey));
  });

  it("should return hased value if partitionKey/candidateKey length exceeds MAX_PARTITION_KEY_LENGTH", () => {
    const partitionKey = Array(MAX_PARTITION_KEY_LENGTH + 1)
      .fill(0)
      .join("");

    const expected = createHash(partitionKey);

    const trivialKey = deterministicPartitionKey({ partitionKey });

    expect(trivialKey).toBe(expected);
  });
});
