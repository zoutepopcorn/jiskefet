#!/usr/bin/env node
import inquirer from 'inquirer';
import autocomplete, {Separator} from 'inquirer-autocomplete-standalone';
import {fastFindInFiles} from 'fast-find-in-files'
import open from 'open';
import {join, parse} from 'path'
import {getEpisode} from "./episodes.js";
import fs from "fs/promises";

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const txtDirectory = join(__dirname, 'text');
const jsonDirectory = join(__dirname, 'json');
const ui = new inquirer.ui.BottomBar();
ui.log.write(' ');
console.clear();

const search = (input = '') => {
	return new Promise(async (resolve) => {
		const OUTPUT = []
		if (input.length > 3) {
			const result = fastFindInFiles(txtDirectory, input);


			let total = 0;
			for (const RES of result) {
				const id = parse(RES.filePath).name;
				const episode = getEpisode(id);
				OUTPUT.push(new Separator());
				OUTPUT.push(new Separator(`${episode}`));
				for (const QUERY of RES.queryHits) {
					OUTPUT.push({
						name: `\t${QUERY.line}`,
						value: {
							query: QUERY
						}
					})
				}
				total += RES.totalHits;
			}
		}
		resolve(OUTPUT);
	});
}

const main = async () => {
	const answer = await autocomplete(
		{
			name: 'search',
			message: 'Zoek een tekst ',
			emptyText: ' nog niets gevonden',
			source: search,
			pageSize: 20
		})
	const id = parse(answer.query.link).name;
	const FILE = await fs.readFile(join(jsonDirectory, `${id}.json`));
	const current = JSON.parse(FILE)[answer.query.lineNumber - 1];
	console.log("Open:");
	console.log(`https://www.youtube.com/watch?v=${id}&t=${Math.floor(current.start)}`)
	open(`https://www.youtube.com/watch?v=${id}&t=${Math.floor(current.start)}`)
}
main();