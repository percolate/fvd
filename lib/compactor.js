var own = require('own')

var DESCRIPTOR_RE = /\s+/g
var PROTOTYPE = {

    compact: function (input) {
        var result = ['n', '4']
        var descriptors = (input || '').split(';')
        var pair, property, value, index, values
        for (var i = 0; i < descriptors.length; i++) {
            pair = descriptors[i].replace(DESCRIPTOR_RE, '').split(':')
            if (pair.length !== 2) continue
            property = pair[0]
            value = pair[1]
            values = this.values[property]
            if (!values) continue
            for (var j = 0; j < values.length; j++) {
                if (values[j][1] !== value) continue
                result[this.properties.indexOf(property)] = values[j][0]
            }
        }
        return result.join('')
    }

}

exports.create = create

function create(properties, values) {
    return Object.create(PROTOTYPE, own({
        properties: properties,
        values: values
    }))
}
