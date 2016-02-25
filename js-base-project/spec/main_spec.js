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

        var result = main(1,2);
        var expect_string = '3';
        
        expect(expect_string).to.equal(result);
    });

    it("测试用例2", function(){

        main(2,3);
        var result = _.flatten(console.log.args).join("\n");
        var expect_string = '5';

        expect(expect_string).to.equal(result);
    });
});