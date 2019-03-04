describe("FizzBuzz", function() {

  it('returns 7 when passed 7', function() {
    expect(fizzBuzz(7)).toEqual(7);
  });

  it('returns "fizz when passed 3', function() {
    expect(fizzBuzz(3)).toEqual('fizz');
  });

  it('returns "buzz" when passed 5', function() {
    expect(fizzBuzz(5)).toEqual('buzz');
  });

  it('returns "fizzbuzz" when passed 15', function() {
    expect(fizzBuzz(15)).toEqual('fizzbuzz');
  });

});