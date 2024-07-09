# [Error.isError]()
ECMAScript Proposal, specs, and reference implementation for `Error.isError`

Spec drafted by [@ljharb](https://github.com/ljharb).

This proposal is currently Stage 2 of the [process](https://tc39.github.io/process-document/).

## Rationale
I brought up concerns to the committee about `Symbol.toStringTag`, and how previously reliable and unspoofable `Object#toString` calls would now no longer be reliable. The committee consensus was that as long as there were prototype methods for all builtins that, at the least, threw an error when an internal slot was not present, that would be sufficient to serve as a reliable branding test.

However, the internal slot for `Error` instances (and its subclasses) is only checked in `Object#toString` itself - leaving no possible reliable test in a world with `Symbol.toStringTag`.

`instanceof Error`, of course, is unreliable because it will provide a false negative with a cross-realm (eg, from an iframe, or node's `vm` modules) `Error` instance.

## Use cases

This list is not exhaustive.

 - debugging: it is very helpful to humans, even if not always to programs, to know what kind of thing a value is. Knowing if something is a "real" native error is thus valuable information to make available, including to error-reporting libraries.
 - serialization: platforms such as [RunKit](https://runkit.com/) need to serialize values safely and reconstruct them or describe them in the user’s browser. brand checking is critical for this.
 - structuredClone: this HTML method, which is also in node, brand-checks, and has special behavior for native Errors. JS programs need a way to know in advance if this behavior will be applied
 - centralized error collection: reporting errors from an iframe (w/ same origin) to a top frame where all errors are collected, evaluated, and reported to a personalized server to be investigated at a later time. However, a `throw` statement can throw any exception with an unknown type of data, and a verification is required for the data to be collected. The `thrownData instanceof Error` doesn't satisfy `Error` because the thrown error will inherit the `Error` instance of another realm, meaning `contentWindow.Error` is the abstract and `thrownData instanceof document.getElementsByTagName('iframe')[0].contentWindow.Error`  is required to satisfy the validation.

## Spec
You can view the spec rendered as [HTML](https://tc39.es/proposal-is-error/).
