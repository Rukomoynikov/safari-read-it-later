import {describe, expect, it} from 'vitest';
import fs from 'fs';
import path from 'path';

import { ReadingListCheck } from '$lib/utilities/finders'
import { parse } from '$lib/utilities/parse'

describe("Parse content", () => {
    it("Responds with true when includes the regexp", () => {
        const fixturePath = path.join(__dirname, "fixtures", "small_file");
        const content = fs.readFileSync(fixturePath, { encoding: 'utf8', flag: 'r' });
        expect(ReadingListCheck.test(content)).toBe(true);
    })

    it("Responds with list of links", () => {
        const fixturePath = path.join(__dirname, "fixtures", "small_file");
        const content = fs.readFileSync(fixturePath, { encoding: 'utf8', flag: 'r' });

        expect(parse(content)?.length).toBe(1000);
    })
})