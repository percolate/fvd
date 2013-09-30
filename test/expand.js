var fvd = require('../')
var should = require('should')

describe('expand', function(){

    // style

    it('should expand n to normal', function(){
        fvd.expand('n4').should.equal('font-style:normal;font-weight:400;')
    })

    it('should expand i to italic', function(){
        fvd.expand('i4').should.equal('font-style:italic;font-weight:400;')
    })

    it('should expand o to oblique', function(){
        fvd.expand('o4').should.equal('font-style:oblique;font-weight:400;')
    })

    // weight

    it('should expand 1 to 100', function(){
        fvd.expand('n1').should.equal('font-style:normal;font-weight:100;')
    })

    it('should expand 2 to 200', function(){
        fvd.expand('n2').should.equal('font-style:normal;font-weight:200;')
    })

    it('should expand 3 to 300', function(){
        fvd.expand('n3').should.equal('font-style:normal;font-weight:300;')
    })

    it('should expand 4 to 400', function(){
        fvd.expand('n4').should.equal('font-style:normal;font-weight:400;')
    })

    it('should expand 5 to 500', function(){
        fvd.expand('n5').should.equal('font-style:normal;font-weight:500;')
    })

    it('should expand 6 to 600', function(){
        fvd.expand('n6').should.equal('font-style:normal;font-weight:600;')
    })

    it('should expand 7 to 700', function(){
        fvd.expand('n7').should.equal('font-style:normal;font-weight:700;')
    })

    it('should expand 8 to 800', function(){
        fvd.expand('n8').should.equal('font-style:normal;font-weight:800;')
    })

    it('should expand 9 to 900', function(){
        fvd.expand('n9').should.equal('font-style:normal;font-weight:900;')
    })

    // invalid

    it('should expand undefined to null', function(){
        should.equal(fvd.expand(), null)
    })

    it('should expand "x0" to null', function(){
        should.equal(fvd.expand('x0'), null)
    })

    it('should expand "n0" to null', function(){
        should.equal(fvd.expand('n0'), null)
    })

    it('should expand "n" to null', function(){
        should.equal(fvd.expand('n'), null)
    })

    it('should expand 1 to null', function(){
        should.equal(fvd.expand(1), null)
    })

    it('should expand "n1x" to null', function(){
        should.equal(fvd.expand('n1x'), null)
    })

})
