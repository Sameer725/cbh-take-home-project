const {
  deterministicPartitionKey,
  createHash,
  TRIVIAL_PARTITION_KEY,
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
});
