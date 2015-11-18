# Error.isError( arg )

When the **isError** function is called with argument *arg*, the following steps are taken:
  1. If Type(_arg_) is not Object, return *false*.
  1. If *obj* does not have an [[ErrorData]] internal slot, return **false**.
  1. Return **true**.
