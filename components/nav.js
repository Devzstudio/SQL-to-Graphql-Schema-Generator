import React from 'react';
import { Sun, Moon, RotateCw } from 'react-feather';

const Nav = ({ currentMode: { value }, changeMode }) => (
	<nav>
		<ul>
			<li>
				<span className="logo">
					<RotateCw />
					SQL To GraphQL Schema Generator
				</span>
			</li>
			<div className="flex">
				<li>
					<a
						href="https://github.com/Devzstudio/SQL-to-Graphql-Schema-Generator"
						target="_BLANK"
						rel="noreferrer,noopener"
					>
						<img src="https://img.shields.io/github/stars/devzstudio/SQL-to-Graphql-Schema-Generator?style=social" />
					</a>
				</li>
				<li>
					<span className="pointer" onClick={changeMode}>
						{value ? <Sun size="14" /> : <Moon size="14" />}
					</span>
				</li>
			</div>
		</ul>

		<style jsx>{`
			:global(body) {
				margin: 0;
				font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
			}
			nav {
				text-align: center;
			}

			ul {
				display: flex;
				justify-content: space-between;
			}
			nav > ul {
				padding: 4px 16px;
			}
			li {
				display: flex;
				padding: 6px 8px;
			}
			a {
				color: #067df7;
				font-family: Montserrat;
				text-decoration: none;
				font-size: 13px;
			}
		`}</style>
	</nav>
);

export default Nav;
