import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode';
import sqlPrettier from 'sql-prettier';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Play, Clipboard } from 'react-feather';
import { useHotkeys } from 'react-hotkeys-hook';

import Head from 'next/head';
// import useLocalStorage from '../helpers/useLocalStorage';

import Nav from '../components/nav';
import { ucwords, selectDatatype, checkField } from '../helpers/index';
import './style.css';

const Home = () => {
	const [query, setQuery] = useState('');
	const [schema, setSchema] = useState('');
	const darkMode = useDarkMode(false);

	useHotkeys('ctrl+v', async () => {
		const text = await navigator.clipboard.readText();
		setQuery(text);
	});

	useHotkeys('ctrl+space', () => {
		makeSchema();
	});

	const handleQuery = e => setQuery(e.target.value);

	const makeSchema = () => {
		const newQuery = sqlPrettier.format(query);
		// setQuery(newQuery);
		const lines = newQuery.split('\n');
		let graphqlSchema = '';
		for (var i = 0; i < lines.length; i++) {
			if (lines[i].toLowerCase().includes('create table')) {
				const tableName = lines[i]
					.toLowerCase()
					.replace('create table', '')
					.replace(/[^\w\s]/gi, '');
				graphqlSchema += `type ${ucwords(tableName.trim())}{
        `;
			}

			if (lines[i].trim().startsWith(')')) {
				graphqlSchema += `}
`;
			}

			if (checkField(lines[i].trim())) {
				const fieldLine = lines[i].trim();
				const getField = fieldLine.substr(0, fieldLine.indexOf(' ')).replace(/[^\w\s]/gi, '');
				const notNull = fieldLine.includes('NOT NULL');
				let type = '';
				if (getField === 'id' || getField.includes('_id')) type = 'ID';
				else type = selectDatatype(fieldLine.toLowerCase());
				graphqlSchema += `${getField}: ${type}${notNull ? '!' : ''}
        `;
			}

			setSchema(graphqlSchema);
		}
	};

	return (
		<div>
			<Head>
				<title>SQL to GraphQL Schema Generator</title>
				<link rel="icon" href="/favicon.ico" />
				<meta charSet="UTF-8" />
				<meta name="title" content="SQL to GraphQL Schema Generator" />
				<meta name="description" content="Generate GraphQL schema from SQL Query" />
				<meta name="keywords" content="sql,GraphQL, schema, GraphQL schema generator, schema generator" />
				<meta name="author" content="Devzstudio" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<meta property="og:type" content="website" />
				<meta property="og:title" content="SQL to GraphQL Schema Generator" />
				<meta property="og:description" content="Generate GraphQL schema from SQL Query" />
				<meta property="og:image" content="/cover.png" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:title" content="SQL to GraphQL Schema Generator" />
				<meta property="twitter:description" content="Generate GraphQL schema from SQL Query" />
				<meta property="twitter:image" content="/cover.png" />
			</Head>

			<Nav currentMode={darkMode.value} changeMode={darkMode.toggle} />

			<div className="hero">
				<div className="flex h-90 ">
					<div className="flex">
						<textarea
							onChange={handleQuery}
							value={query}
							placeholder="Paste Your SQL Query Here (Create Table ....)"
						></textarea>
						<div className="btn-wrapper">
							<section>
								<div className="option">
									<button onClick={makeSchema}>
										<Play className="play-icon" />
									</button>
									<span className="tooltip">Run</span>
								</div>
							</section>
							{schema && (
								<section>
									<div className="option">
										<CopyToClipboard text={schema} onCopy={() => alert('Copied')}>
											<button>
												<Clipboard />
											</button>
										</CopyToClipboard>
										<span className="tooltip">Copy</span>
									</div>
								</section>
							)}
						</div>
					</div>
					<div>
						<textarea placeholder="Graphql Schema" value={schema} readOnly></textarea>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
