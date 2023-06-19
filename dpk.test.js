const {
  deterministicPartitionKey,
  createHash,
  TRIVIAL_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH,
} = require("./dpk.js");

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

  it("should return hased value if partitionKey/candidateKey length exceeds MAX_PARTITION_KEY_LENGTH", () => {
    const partitionKey = Array(MAX_PARTITION_KEY_LENGTH)
      .fill(null)
      .map((_, index) => index)
      .join("");

    const expected = createHash(partitionKey);

    const trivialKey = deterministicPartitionKey({ partitionKey });

    expect(trivialKey).toBe(expected);
  });
});
