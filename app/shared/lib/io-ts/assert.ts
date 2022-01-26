import type { Either } from 'fp-ts/Either';
import type { Errors } from 'io-ts';
import { isRight } from 'fp-ts/Either';

export const assert = <E extends Errors, A>(either: Either<E, A>) => {
  if (isRight(either)) return either.right;

  // eslint-disable-next-line no-console
  console.trace({ failedAssertion: either.left });
  throw new Error(`Assertion failed: ${either.left}`); // TODO: make format fn for errors
};
