import test from 'node:test';
import assert from 'node:assert';
import sortLines from './sort-lines.js';

import mbtaData from '../data/static-data.json' with {type:'json'};

let mockLines = mbtaData.lines.slice(0, 5);
let mockRoutes = mbtaData.routes.slice(0, 5);

let {getLinesByTransitType} = sortLines;
test('Is null deepStrictEqual to null', () => {
    assert.deepStrictEqual(null, null);
});

test('should return null if invalid transitType', () => {
    let invalidTransitType = 'foo';
    // let result = sortLines.getLinesByTransitType([], [], invalidTransitType);
    let result = getLinesByTransitType([], [], invalidTransitType);
    assert.deepStrictEqual(result, null);
});

test('should return ok', () => {
    let result = mockLines[0];
    assert.deepStrictEqual(result, mockLines[1]);
});