'use strict';

exports.type = 'full';

exports.active = true;

exports.description = 'removes <defs> and pulls them out into the root <svg> with ids removed';

var nonRendering = require('./_collections').elemsGroups.nonRendering;

/**
 * Removes <defs> and pulls them out into the root <svg> with ids removed
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Sergei Grishin
 */
exports.fn = function(item) {

    // non-empty elements
    var svg = item.content[0];
    if (svg.isElem('svg') && !svg.isEmpty()) {
        svg.content.forEach(function(def, i) {
            if (def.isElem('defs') && !def.isEmpty()) {
                def.content.forEach(function(el, i) {
                    el.removeAttr('id');
                })
                svg.spliceContent(i, 1, def.content);
            }
        });
    }
    return item;
};