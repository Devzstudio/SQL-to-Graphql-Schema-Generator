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
				<div className="flex a-c">
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
				<li className="border-left">
					<a
						target="_BLANK"
						href="https://codekeep.io?ref=sql-to-graphql"
						rel="noreferrer noopener"
						className="spons"
					>
						<span className="msg">Sponsored by</span>
						<img
							height="20px"
							src="https://camo.githubusercontent.com/691d71c68074e37ce9cffaf09e050cd645f2e65e/68747470733a2f2f636f64656b6565702e696f2f6173736574732f69636f6e2e737667"
						/>{' '}
						<span>CodeKeep</span>
					</a>
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
				margin: 0;
			}
			nav > ul {
				padding: 0px 16px;
			}
			.logo {
				padding: 10px;
			}
			li {
				display: flex;
				padding: 6px 8px;
			}
			.a-c {
				align-items: center;
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
