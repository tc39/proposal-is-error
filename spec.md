# IsError Abstract Operation
  1. If Type(_argument_) is not Object, return **false**.
  1. If _argument_ has an [[ErrorData]] internal slot, return **true**.
  1. If _argument_ is a Proxy exotic object, then
    1. If the value of the [[ProxyHandler]] internal slot of _argument_ is **null**, throw a _TypeError_ exception.
    1. Let _target_ be the value of the [[ProxyTarget]] internal slot of _argument_.
    1. Return IsError(_target_).
  1. Return **false**.

# Error.isError( arg )

When the _isError_ function is called with argument _arg_, the following steps are taken:
  1. Return IsError(_arg_).
