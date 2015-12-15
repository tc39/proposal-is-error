# [Error.isError]()
ES7 Proposal, specs, and reference implementation for `Error.isError`

Spec drafted by [@ljharb](https://github.com/ljharb).

This proposal is currently seeking [stage 0](https://github.com/tc39/ecma262) of the [process](https://tc39.github.io/process-document/).

## Rationale
I brought up concerns to the committee about `Symbol.toStringTag`, and how previously reliable and unspoofable `Object#toString` calls would now no longer be reliable. The committee consensus was that as long as there were prototype methods for all builtins that, at the least, threw an error when an internal slot was not present, that would be sufficient to serve as a reliable branding test.

However, the internal slot for `Error` instances (and its subclasses) is only checked in `Object#toString` itself - leaving no possible reliable test in a world with `Symbol.toStringTag`.

`instanceof Error`, of course, is unreliable because it will provide a false negative with a cross-realm (eg, from an iframe, or node's `vm` modules) `Error` instance.

## Spec
You can view the spec in [markdown format](spec.md) or rendered as [HTML](http://ljharb.github.io/proposal-is-error/).
