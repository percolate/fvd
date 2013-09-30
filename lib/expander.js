var own = require('own')

var PROTOTYPE = {

    expand: function (input) {
        if (typeof input !== 'string' || input.length !== 2) return null
        var result = [null, null]
        var key, property, values, value
        for (var i = 0; i < this.properties.length; i++) {
            key = input[i]
            property = this.properties[i]
            values = this.values[property]
            for (j = 0; j < values.length; j++) {
                value = values[j]
                if (value[0] !== key) continue
                result[i] = [this.properties[i], value[1]].join(':')
            }
        }
        return (result.indexOf(null) < 0) ? (result.join(';') + ';') : null
    }

}

exports.create = create

function create(properties, values) {
    return Object.create(PROTOTYPE, own({
        properties: properties,
        values: values
    }))
}
