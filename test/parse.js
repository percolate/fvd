var fvd = require('../')
var should = require('should')

describe('parse', function(){

    // style

    it('should parse n4', function(){
        fvd.parse('n4').should.eql({
            'font-style': 'normal',
            'font-weight': '400'
        })
    })

    it('should parse i4', function(){
        fvd.parse('i4').should.eql({
            'font-style': 'italic',
            'font-weight': '400'
        })
    })

    it('should parse o4', function(){
        fvd.parse('o4').should.eql({
            'font-style': 'oblique',
            'font-weight': '400'
        })
    })

    // weight

    it('should parse n1', function(){
        fvd.parse('n1').should.eql({
            'font-style': 'normal',
            'font-weight': '100'
        })
    })

    it('should parse n2', function(){
        fvd.parse('n2').should.eql({
            'font-style': 'normal',
            'font-weight': '200'
        })
    })

    it('should parse n3', function(){
        fvd.parse('n3').should.eql({
            'font-style': 'normal',
            'font-weight': '300'
        })
    })

    it('should parse n4', function(){
        fvd.parse('n4').should.eql({
            'font-style': 'normal',
            'font-weight': '400'
        })
    })

    it('should parse n5', function(){
        fvd.parse('n5').should.eql({
            'font-style': 'normal',
            'font-weight': '500'
        })
    })

    it('should parse n6', function(){
        fvd.parse('n6').should.eql({
            'font-style': 'normal',
            'font-weight': '600'
        })
    })

    it('should parse n7', function(){
        fvd.parse('n7').should.eql({
            'font-style': 'normal',
            'font-weight': '700'
        })
    })

    it('should parse n8', function(){
        fvd.parse('n8').should.eql({
            'font-style': 'normal',
            'font-weight': '800'
        })
    })

    it('should parse n9', function(){
        fvd.parse('n9').should.eql({
            'font-style': 'normal',
            'font-weight': '900'
        })
    })

    // invalid

    it('should expand undefined to null', function(){
        should.equal(fvd.parse(), null)
    })

    it('should expand "x0" to null', function(){
        should.equal(fvd.parse('x0'), null)
    })

    it('should expand "n0" to null', function(){
        should.equal(fvd.parse('n0'), null)
    })

    it('should expand "n" to null', function(){
        should.equal(fvd.parse('n'), null)
    })

    it('should expand 1 to null', function(){
        should.equal(fvd.parse(1), null)
    })

    it('should expand "n1x" to null', function(){
        should.equal(fvd.parse('n1x'), null)
    })

})
