#q2junit

Run QUnit with JUnit style assertions.

##Usage

Include the q2junit javascript after including qunit:

```html
<script src="http://code.jquery.com/qunit/qunit-git.js"></script>
<script src="../js/q2junit.js"></script>
```

Use like regular Qunit assertions:

```javascript

test("A test", function() {
    assertTrue(true);
});
```
##Assertions

**assertEquals([message], expected, actual)**
Same as `equal`.

**assertNotEquals([message], expected, actual)**
Same as `notEqual`.

**assertArrayEquals([message], expected, actual)**
Same as `deepEqual`.

**assertArrayNotEquals([message], expected, actual)**
Same as `notDeepEqual`.

**assertSame([message], expected, actual)**
Same as `strictEqual`.

**assertNotSame([message], expected, actual)**
Same as `notStrictEqual`.

**assertTrue([message], actual)**
Asserts *actual* is a truthy value.

**assertFalse([message], expected, actual)**
Asserts *actual* is a falsy value.

**assertTypeOf([message], expected, actual)**

**assertInstanceOf([message], expected, actual)**

**assertNotInstanceOf([message], expected, actual)**

**assertNumber([message], actual)**
Asserts *actual* is typeof `number` or an instance of `Number`.

**assertString([message], actual)**
Asserts *actual* is typeof `string` or an instance of `String`.

**assertBoolean([message], actual)**
Asserts *actual* is typeof `boolean` or an instance of `Boolean`.

**assertFunction([message], actual)**

**assertObject([message], actual)**

**assertArray([message], actual)**

**assertNull([message], actual)**

**assertNotNull([message], actual)**

**assertUndefined([message], actual)**

**assertNotUndefined([message], actual)**

**assertNaN([message], actual)**

**assertNotNaN([message], actual)**

**fail([message])**
Forces an assertion to fail.