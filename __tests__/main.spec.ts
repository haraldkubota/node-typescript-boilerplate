import * as assert from 'assert';
import { Delays, greeter } from '../src/main';
import { SmokeTest } from '../src/smokeTest';

describe('greeter function', () => {
  // Read more about fake timers: http://facebook.github.io/jest/docs/en/timer-mocks.html#content
  jest.useFakeTimers();

  const name: string = 'John';

  let hello: string;

  // Act before assertions
  beforeAll(async () => {
    const p: Promise<string> = greeter(name);
    jest.runOnlyPendingTimers();
    hello = await p;
  });

  // Assert if setTimeout was called properly
  it('delays the greeting by 2 seconds', () => {
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(((setTimeout as Function) as jest.Mock).mock.calls[0][1]).toBe(
      Delays.Long,
    );
  });

  // Assert greeter result
  it('greets a user with `Hello, {name}` message', () => {
    expect(hello).toBe(`Hello, ${name}`);
  });
});

describe("smokeTest", () => {
  it("should say 'hello world'", () => {
    SmokeTest.helloWorld("Bello");
    assert.ok(true);
  })
});
