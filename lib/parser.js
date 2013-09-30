var own = require('own')

var PROTOTYPE = {

    parse: function (input) {
        if (typeof input !== 'string' || input.length !== 2) return null
        var result = {}
        var key, property, values, value
        for (var i = 0; i < this.properties.length; i++) {
            key = input[i]
            property = this.properties[i]
            values = this.values[property]
            for (j = 0; j < values.length; j++) {
                value = values[j]
                if (value[0] !== key) continue
                result[this.properties[i]] = value[1]
            }
        }
        return (result[this.properties[0]] && result[this.properties[1]]) ? result : null
    }

}

exports.create = create

function create(properties, values) {
    return Object.create(PROTOTYPE, own({
        properties: properties,
        values: values
    }))
}
