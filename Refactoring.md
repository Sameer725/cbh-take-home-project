# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

### Change Log

1. Define constants outside of the function such that if needed updation to them is easier and also export them from `dpk.js`, so that they can be used in other places (in test).
2. Add a helper function `createHash` to hash the provided value (hashing is done is multiple places) this avoids code duplication/repetation.
3. Return early with default value if no argument provided, this is the trivial(default) case and we don't need to proceed further if there is nothing to work on.
4. Use logical OR operator instead of if-else to set initial value of candidate key, it is more consice and readable.
5. Add test cases to check the function is working as expected.
