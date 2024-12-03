const assert = require('assert');
const { sumSortedLists } = require('../day-1');

describe('sumSortedLists', function() {
    it('returns the correct sum for two lists of equal length', function() {
        const list1 = [3, 1, 4];
        const list2 = [1, 5, 9];
        const result = sumSortedLists(list1, list2);
        assert.strictEqual(result, 7);
    });

    it('returns 0 for two empty lists', function() {
        const list1 = [];
        const list2 = [];
        const result = sumSortedLists(list1, list2);
        assert.strictEqual(result, 0);
    });

    it('returns the right number for two lists of equal length', function() {
        const list1 = [3, 4, 2, 1, 3, 3];
        const list2 = [4, 3, 5, 3, 9, 3];
        let result = sumSortedLists(list1, list2);
        assert.equal( result, 11);
    });

});