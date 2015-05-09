/*global unexpected*/
// THIS FILE IS AUTOGENERATED! DO NOT CHANGE IT MANUALLY.
// It is built based on the examples in the documentation folder
// when the documentation site gets build by running "make site-build".
it.skipIf = function (condition) {
    (condition ? it.skip : it).apply(it, Array.prototype.slice.call(arguments, 1));
};

describe("documentation tests", function () {
    var isBrowser = typeof weknowhow !== 'undefined';
    var isPhantom = typeof mochaPhantomJS !== 'undefined';
    var expect;
    beforeEach(function () {
        expect = unexpected.clone();
        expect.output.preferredWidth = 80;

    });

    it("assertions/array-like/given-call-order.md contains correct examples", function () {
        var testPromises = [];
        var obj = {
            foo: function () { return 'foo'; },
            bar: function () { return 'bar'; },
            baz: function () { return 'baz'; }
        };
        sinon.spy(obj, 'foo');
        sinon.spy(obj, 'bar');
        sinon.spy(obj, 'baz');
        obj.foo();
        obj.bar();
        obj.baz();
        expect([obj.foo, obj.bar, obj.baz], 'given call order');

        try {
            expect([obj.bar, obj.foo, obj.baz], 'given call order');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect([obj.bar, obj.foo, obj.baz], 'given call order');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected bar, foo, baz to be called in order but were called as foo, bar, baz"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/threw.md contains correct examples", function () {
        var testPromises = [];
        var stub = sinon.stub();
        var error = new TypeError('wat');
        stub.throws(error);
        try { stub(); } catch (e) {}

        expect(stub, 'threw');
        expect(stub, 'threw', 'TypeError');
        expect(stub, 'threw', error);

        try {
            expect(sinon.spy(), 'threw', 'SyntaxError');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(sinon.spy(), 'threw', 'SyntaxError');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "spy did not throw exception"
            );
        }

        var stub = sinon.stub();
        var error = new TypeError('wat');
        stub.throws(error);
        try { stub(); } catch (e) {}

        expect(stub, 'always threw');
        expect(stub, 'always threw', 'TypeError');
        expect(stub, 'always threw', error);

        try {
            stub.throws(new SyntaxError('waat'));
            try { stub(); } catch (e) {}

            expect(stub, 'always threw', 'TypeError');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("stub.throws(new SyntaxError('waat'));").nl();
                output.code("try { stub(); } catch (e) {}").nl();
                output.code("").nl();
                output.code("expect(stub, 'always threw', 'TypeError');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "stub did not always throw exception\n" +
                "    stub() !TypeError(wat)\n" +
                "    stub() !SyntaxError(waat)"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/was-called-on.md contains correct examples", function () {
        var testPromises = [];
        var obj = { spy: sinon.spy() };
        obj.spy();
        expect(obj.spy, 'was called on', obj);

        try {
            var another = {};
            expect(obj.spy, 'was called on', another);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var another = {};").nl();
                output.code("expect(obj.spy, 'was called on', another);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy to be called with {  } as this but was called with { spy: function spy() {} }"
            );
        }

        expect(obj.spy, 'was always called on', obj);

        try {
            obj.spy.call({});
            expect(obj.spy, 'was always called on', obj);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("obj.spy.call({});").nl();
                output.code("expect(obj.spy, 'was always called on', obj);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy to always be called with { spy: function spy() {} } as this but was called with { spy: function spy() {} }, {  }"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/was-called-times.md contains correct examples", function () {
        var testPromises = [];
        var increment = sinon.spy();
        increment(41);
        increment(42);
        increment(43);
        expect(increment, 'was called times', 3);

        try {
            var add = sinon.spy();
            add(41, 42);
            add(41, 43);
            add(41, 44);
            add(41, 45);
            expect(add, 'was called times', 2);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var add = sinon.spy();").nl();
                output.code("add(41, 42);").nl();
                output.code("add(41, 43);").nl();
                output.code("add(41, 44);").nl();
                output.code("add(41, 45);").nl();
                output.code("expect(add, 'was called times', 2);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy to be called twice but was called 4 times\n" +
                "    spy(41, 42)\n" +
                "    spy(41, 43)\n" +
                "    spy(41, 44)\n" +
                "    spy(41, 45)"
            );
        }

        var spy = sinon.spy();
        spy(1);
        expect(spy, 'was called once');
        spy(2);
        expect(spy, 'was called twice');
        spy(3);
        expect(spy, 'was called thrice');
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/was-called-with.md contains correct examples", function () {
        var testPromises = [];
        var spy = sinon.spy();
        spy({ foo: 'bar' }, 'baz', 'qux', 'quux');
        expect(spy, 'was called with', { foo: 'bar' }, 'baz', sinon.match.truthy);

        try {
            expect(spy, 'was called with', 'baz', { foo: 'bar' });
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(spy, 'was called with', 'baz', { foo: 'bar' });").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy to be called with arguments baz, { foo: \"bar\" }\n" +
                "    spy({ foo: \"bar\" }, baz, qux, quux)"
            );
        }

        var spy = sinon.spy();
        spy({ foo: 'bar' }, 'baz', 'qux', 'quux');
        spy({ foo: 'bar' }, 'baz', 'qux', 'quux');
        expect(spy, 'was always called with', { foo: 'bar' }, 'baz', sinon.match.truthy);

        try {
            spy({ foo: 'bar' }, 'baz');
            expect(spy, 'was always called with', { foo: 'bar' }, 'baz', sinon.match.truthy);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("spy({ foo: 'bar' }, 'baz');").nl();
                output.code("expect(spy, 'was always called with', { foo: 'bar' }, 'baz', sinon.match.truthy);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy to always be called with arguments { foo: \"bar\" }, baz, truthy\n" +
                "    spy({ foo: \"bar\" }, baz, qux, quux)\n" +
                "    spy({ foo: \"bar\" }, baz, qux, quux)\n" +
                "    spy({ foo: \"bar\" }, baz)"
            );
        }

        var spy = sinon.spy();
        spy({ foo: 'bar' }, 'baz', 'qux', 'quux');
        expect(spy, 'was called with exactly', { foo: 'bar' }, 'baz', sinon.match.truthy, 'quux');

        try {
            expect(spy, 'was called with exactly', { foo: 'bar' }, 'baz', sinon.match.truthy);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(spy, 'was called with exactly', { foo: 'bar' }, 'baz', sinon.match.truthy);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy to be called with exact arguments { foo: \"bar\" }, baz, truthy\n" +
                "    spy({ foo: \"bar\" }, baz, qux, quux)"
            );
        }

        var spy = sinon.spy();
        spy({ foo: 'bar' }, 'baz', 'qux');
        spy({ foo: 'bar' }, 'baz', 'qux');
        expect(spy, 'was always called with exactly', { foo: 'bar' }, 'baz', sinon.match.truthy);

        try {
            spy({ foo: 'bar' }, 'baz');
            expect(spy, 'was always called with exactly', { foo: 'bar' }, 'baz', sinon.match.truthy);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("spy({ foo: 'bar' }, 'baz');").nl();
                output.code("expect(spy, 'was always called with exactly', { foo: 'bar' }, 'baz', sinon.match.truthy);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy to always be called with exact arguments { foo: \"bar\" }, baz, truthy\n" +
                "    spy({ foo: \"bar\" }, baz, qux)\n" +
                "    spy({ foo: \"bar\" }, baz, qux)\n" +
                "    spy({ foo: \"bar\" }, baz)"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/was-called.md contains correct examples", function () {
        var testPromises = [];
        var increment = sinon.spy();
        increment(42);
        expect(increment, 'was called');

        try {
            expect(sinon.spy(), 'was called');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(sinon.spy(), 'was called');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy to have been called at least once but was never called"
            );
        }

        expect(sinon.spy(), 'was not called');

        try {
            var add = sinon.spy();
            add(42, 42);
            expect(add, 'was not called');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var add = sinon.spy();").nl();
                output.code("add(42, 42);").nl();
                output.code("expect(add, 'was not called');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy to not have been called but was called once\n" +
                "    spy(42, 42)"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("index.md contains correct examples", function () {
        var testPromises = [];
        var obj = { spy: sinon.spy() };
        obj.spy(42);
        obj.spy({ foo: 'bar' }, 'baz', "qux");
        expect(obj.spy, "was called twice");
        expect(obj.spy, 'was called with', { foo: 'bar' }, 'baz', sinon.match.truthy);
        expect(obj.spy, 'was always called on', obj);

        var spy = sinon.spy();
        spy({ foo: 'bar' }, 'baz');
        spy('qux');
        spy('quux');

        expect(spy.args, 'to equal', [
            [{ foo: 'bar' }, 'baz'],
            ['qux'],
            ['quux']
        ]);

        expect(spy.args[1], 'to equal', ['qux']);

        expect(spy.args, 'to satisfy', {
            0: [
                { foo: 'bar' },
                expect.it('to be a string').and('to have length', 3)
            ],
            2: ['quux']
        });
        return expect.promise.all(testPromises);
    });
});
