#!/usr/bin/env node
import autocomplete from 'inquirer-autocomplete-standalone';
import {fastFindInFiles} from 'fast-find-in-files'
import {join, parse} from 'path'
import {findEpisode, getEpisode} from "./episodes.js";

import path from 'node:path';
import {fileURLToPath} from 'node:url';
import fs from "fs/promises";
import open from "open";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const txtDirectory = join(__dirname, 'text');
const jsonDirectory = join(__dirname, 'json');
// const ui = new inquirer.ui.BottomBar();
// ui.log.write(' ');
// console.clear();

const search = (input = '') => {
	return new Promise(async (resolve) => {
		let OUTPUT = []
		if (input.length > 3) {
			const result = fastFindInFiles(txtDirectory, input);

			console.log(result);

			let total = 0;

			const FOUND_IDS = new Set();

			for (const RES of result) {
				const id = parse(RES.filePath).name;
				const episode = getEpisode(id);
				FOUND_IDS.add(id);
				OUTPUT.push({
					name: episode,
					value: {
						id,
						line: episode
					}
				});

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

			const EPISODES = findEpisode(input, FOUND_IDS);
			OUTPUT = [...EPISODES, ...OUTPUT];
		}
		resolve(OUTPUT);
	});
}

const openBrowser = (url) => {
	console.log("Open:");
	console.log(`url`)
	open(url)
}

const openYoutube = async (answer) => {
	let url;
	console.log(answer)
	console.log(answer.query)
	if(answer.query) {
		const id = parse(answer.query.link).name;
		const FILE = await fs.readFile(join(jsonDirectory, `${id}.json`));
		const current = JSON.parse(FILE)[answer.query.lineNumber - 1];
		url = `https://www.youtube.com/watch?v=${id}&t=${Math.floor(current.start)}`
	} else {
		url = `https://www.youtube.com/watch?v=${answer.id}`;
	}
	openBrowser(url)
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
	openYoutube(answer)
}
main();

// findEpisode("debiteuren")

// const T = await search("debiteuren")
// console.log(T[0].value.query)