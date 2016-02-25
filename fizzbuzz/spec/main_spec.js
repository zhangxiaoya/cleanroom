"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("测试用例1", function(){

        var result = main(3,5,7);
        var expect_string = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50' + 
        ' 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100';
        
        expect(expect_string).to.equal(result);
    });

    it("测试用例1", function(){

        var result = main(3,5,7);
        var expect_string = '1 2 Fizz 4 Buzz Fizz Whizz 8 Fizz Buzz 11 Fizz 13 Whizz FizzBuzz 16 17 Fizz 19 Buzz FizzWhizz 22 23 Fizz Buzz 26 Fizz Whizz 29 FizzBuzz 31 32 Fizz 34 BuzzWhizz Fizz 37 38 Fizz Buzz 41 FizzWhizz 43 44 FizzBuzz 46 47 Fizz Whizz Buzz' + 
        ' Fizz 52 53 Fizz Buzz Whizz Fizz 58 59 FizzBuzz 61 62 FizzWhizz 64 Buzz Fizz 67 68 Fizz BuzzWhizz 71 Fizz 73 74 FizzBuzz 76 Whizz Fizz 79 Buzz Fizz 82 83 FizzWhizz Buzz 86 Fizz 88 89 FizzBuzz Whizz 92 Fizz 94 Buzz Fizz 97 Whizz Fizz Buzz';
        
        expect(expect_string).to.equal(result);
    });
});