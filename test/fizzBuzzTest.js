QUnit.module('fizzBuzz', function() {
    QUnit.test('létezik-e', function(assert) {
      assert.ok(fizzBuzz, "Létezik-e a fizzBuzz?");
    });

    QUnit.test('függvény-e', function(assert) {
        assert.ok(typeof(fizzBuzz) === "function", "Függvény-e?");
    });

    QUnit.test('fizzBuzz(0)', function(assert) {
        assert.equal(fizzBuzz(0), "", "rossz");
    });

    /* QUnit.test('fizzBuzz(1)', function(assert) {
        assert.equal(fizzBuzz(1), "1", "rossz");
    });

    QUnit.test('fizzBuzz(2)', function(assert) {
        assert.equal(fizzBuzz(2), "1, 2", "rossz");
    });

    QUnit.test('fizzBuzz(3)', function(assert) {
        assert.equal(fizzBuzz(3), "1, 2, fizz");
    }); */

    QUnit.test('fizzBuzzErtek()', function(assert) {
        const NEM_OSZTHATO_LISTA = [1, 2, 4, 7, 8, 11, 13, 14];

        for (const iterator of NEM_OSZTHATO_LISTA) {
            assert.equal(fizzBuzzErtek(iterator), iterator);
        }
        /* NEM_OSZTHATO_LISTA.forEach(ertek => {
            ...
        }); */
    });

    QUnit.test('fizzBuzzErtek() - 3-al oszthato', function(assert) {
        const OSZTHATO = [3, 6, 9, 12];

        for (const iterator of OSZTHATO) {
            assert.equal(fizzBuzzErtek(iterator), "fizz");
        }
        /* NEM_OSZTHATO_LISTA.forEach(ertek => {
            ...
        }); */
    });

    QUnit.test('fizzBuzzErtek() - 5-el oszthato', function(assert) {
        const OSZTHATO = [5, 10];

        for (const iterator of OSZTHATO) {
            assert.equal(fizzBuzzErtek(iterator), "buzz");
        }
        /* NEM_OSZTHATO_LISTA.forEach(ertek => {
            ...
        }); */
    });

    QUnit.test('fizzBuzzErtek() - 15-el oszthato', function(assert) {
        const OSZTHATO = [15];

        for (const iterator of OSZTHATO) {
            assert.equal(fizzBuzzErtek(iterator), "fizzbuzz");
        }
        /* NEM_OSZTHATO_LISTA.forEach(ertek => {
            ...
        }); */
    });

    QUnit.test('fizzBuzz(15)', function(assert) {

        assert.equal(fizzBuzz(15), "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz");
    });




  });