'use strict';

var pluralize = require('pluralize');
var camelCase = require('lodash/camelCase');
var capitalize = require('lodash/capitalize');

module.exports = function getTypeName(item) {
    return pluralize(capitalize(camelCase(item)), 1);
};