'use strict';

exports.type = 'full';

exports.active = true;

exports.description = 'removes elements in <defs> without id';

var nonRendering = require('./_collections').elemsGroups.nonRendering;

/**
 * Removes content of defs and properties that aren't rendered directly without ids.
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Lev Solntsev
 */
exports.fn = function(item) {

    // non-empty elements
    var svg = item.content[0];
    if (svg.isElem('svg') && !svg.isEmpty()) {
        svg.content.forEach(function(def, i) {
            if (def.isElem('defs') && !def.isEmpty()) {
                svg.spliceContent(i, 1, def.content);
            }
        });
    }
    return item;
};