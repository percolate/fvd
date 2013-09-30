var Compactor = require('./compactor')
var Expander = require('./expander')
var Parser = require('./parser')

var PROPERTIES = [
    'font-style',
    'font-weight'
]
var VALUES = {
    'font-style': [
        ['n', 'normal'],
        ['i', 'italic'],
        ['o', 'oblique']
    ],
    'font-weight': [
        ['4', 'normal'],
        ['7', 'bold'],
        ['1', '100'],
        ['2', '200'],
        ['3', '300'],
        ['4', '400'],
        ['5', '500'],
        ['6', '600'],
        ['7', '700'],
        ['8', '800'],
        ['9', '900']
    ]
}

var compactor, expander, parser

exports.compact = compact
exports.expand = expand
exports.parse = parse

function compact(input) {
    if (!compactor) compactor = Compactor.create(PROPERTIES, VALUES)
    return compactor.compact(input)
}

function expand(input) {
    if (!expander) expander = Expander.create(PROPERTIES, VALUES)
    return expander.expand(input)
}

function parse(input) {
    if (!parser) parser = Parser.create(PROPERTIES, VALUES)
    return parser.parse(input)
}
