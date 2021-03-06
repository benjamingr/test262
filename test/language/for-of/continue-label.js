// Copyright (C) Copyright 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.6.4.13 S5.n
description: >
    Control flow during body evaluation should honor labeled `continue`
    statements.
---*/

function* values() {
  yield 1;
}
var iterable = values();
var i = 0;
var loop = true;

outer:
while (loop) {
  loop = false;

  for (var x of iterable) {
    i++;
    continue outer;

    $ERROR('This code is unreachable (inside for-of).');
  }
  $ERROR('This code is unreachable (inside while).');
}

assert.sameValue(i, 1);
