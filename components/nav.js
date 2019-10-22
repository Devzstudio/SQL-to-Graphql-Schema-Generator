import React from 'react';
import Link from 'next/link';

const Nav = () => (
	<nav>
		<ul>
			<li>
				<span className="logo">SQL To GraphQL Schema Generator</span>
			</li>
			<div>
				<li>
					<Link href="https://github.com/Devzstudio/SQL-to-Graphql-Schema-Generator">
						<a target="_BLANK" rel="noreferrer,noopener">
							Github
						</a>
					</Link>
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
			.logo {
				font-family: Montserrat;
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
