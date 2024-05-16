var _ = require('lodash');

/**
 * Reporter that simply dumps the summary object to file (default: newman-run-report.json).
 *
 * @param {Object} newman - The collection run object, with event hooks for reporting run details.
 * @param {Object} options - A set of collection run options.
 * @param {String} options.export - The path to which the summary object must be written.
 * @returns {*}
 */
module.exports = function (newman, options) {
    newman.on('beforeDone', function (err, o) {
        if (err) { return; }
        var count = 0;
        function replaceStream(obj) {
            _.forEach(obj, (value, key) => {
                ++count;
                if (_.isObject(value)) {
                    replaceStream(value); // Recursively traverse nested objects
                }
                if (key === 'stream') {
                    obj[key] = []; 
                } else if(key === 'exec') {
                    obj[key] = [];
                }
            });
            return obj;
        }
        const summary_run = replaceStream(o.summary.run)
        try {
            newman.exports.push({
                name: 'json-reporter',
                default: 'newman-extralight.json',
                path: options.jsonExtralightExport,
                content: JSON.stringify(_.omit(summary_run, 'exports'), 0, 2)
            });
        } catch (error) {
            console.error('Error stringifying object:', error);
        }
    });
};
