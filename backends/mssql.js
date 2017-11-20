/* eslint camelcase: 0 */
'use strict';

var knex = require('knex');
var pluck = require('lodash/collection/pluck');
var mapKeys = require('lodash/object/mapKeys');
var contains = require('lodash/collection/includes');
var camelCase = require('lodash/string/camelCase');
var undef;


module.exports = function mssqlBackend(opts, callback) {
    var mssql = knex({
        client: 'mssql',
        connection: {
            host: opts.host,
            user: opts.user,
            password: opts.password,
            database: opts.database,
            options: {
                encrypt: true
            }
        }
    });

    process.nextTick(callback);

    return {
        getTables: function(tableNames, cb) {
            cb(null, undef);

        },

        getTableComment: function(tableName, cb) {
            cb(null, undef)
        },

        getTableStructure: function(tableName, tblCb)
        {
            cb(null, undef)
        },

        hasDuplicateValues: function(table, column, callback) {
            callback(null, undef)
        },

        close: function(cb) {
            mssql.destroy(cb);
        }
    }

}