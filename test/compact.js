var fvd = require('../')
var should = require('should')

describe('compact', function(){

    // style

    it('should transfrom an empty description to "n4"', function(){
        fvd.compact().should.equal('n4')
    })

    it('should transfrom normal to "n"', function(){
        fvd.compact('font-style:normal;').should.equal('n4')
    })

    it('should transfrom italic to "i"', function(){
        fvd.compact('font-style:italic;').should.equal('i4')
    })

    it('should transfrom oblique to "o"', function(){
        fvd.compact('font-style:oblique;').should.equal('o4')
    })

    it('should transfrom unknown to "n"', function(){
        fvd.compact('font-style:other;').should.equal('n4')
    })

    // weight

    it('should transfrom normal to 4', function(){
        fvd.compact('font-weight:normal;').should.equal('n4')
    })

    it('should transfrom bold to 7', function(){
        fvd.compact('font-weight:bold;').should.equal('n7')
    })

    it('should transfrom 100 to 1', function(){
        fvd.compact('font-weight:100;').should.equal('n1')
    })

    it('should transfrom 200 to 2', function(){
        fvd.compact('font-weight:200;').should.equal('n2')
    })

    it('should transfrom 300 to 3', function(){
        fvd.compact('font-weight:300;').should.equal('n3')
    })

    it('should transfrom 400 to 4', function(){
        fvd.compact('font-weight:400;').should.equal('n4')
    })

    it('should transfrom 500 to 5', function(){
        fvd.compact('font-weight:500;').should.equal('n5')
    })

    it('should transfrom 600 to 6', function(){
        fvd.compact('font-weight:600;').should.equal('n6')
    })

    it('should transfrom 700 to 7', function(){
        fvd.compact('font-weight:700;').should.equal('n7')
    })

    it('should transfrom 800 to 8', function(){
        fvd.compact('font-weight:800;').should.equal('n8')
    })

    it('should transfrom 900 to 9', function(){
        fvd.compact('font-weight:900;').should.equal('n9')
    })

    it('should transfrom 1000 to 4', function(){
        fvd.compact('font-weight:1000;').should.equal('n4')
    })

    it('should transfrom 123 to 4', function(){
        fvd.compact('font-weight:123;').should.equal('n4')
    })

    // combo

    it('should transfrom combos', function(){
        fvd.compact('font-weight:600;font-style:italic;').should.equal('i6')
    })

    // strings

    it('should transfrom extra spaces', function(){
        fvd.compact('       font-weight:  600; font-style:    italic;').should.equal('i6')
    })

    it('should transfrom unhandled properties', function(){
        fvd.compact('font-weight:600;font-style:italic;font-fanciness:superfancy;').should.equal('i6')
    })

})
