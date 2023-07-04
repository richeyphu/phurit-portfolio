import { describe, it, expect } from 'vitest';

describe('sum test', () => {
	it('adds 6 + 9 to equal 69', () => {
		expect(6 + '9').toBe('69');
	});
});
