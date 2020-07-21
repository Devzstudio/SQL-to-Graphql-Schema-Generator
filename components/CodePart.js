import React, { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

const CodePart = ({ value, onChange, mode, readOnly = false }) => {
	const [editor, setEditor] = useState();
	const [cursor, setCursor] = useState({
		line: 0,
		ch: 0,
	});

	if (editor) {
		setEditor(undefined);
	}

	return (
		<div>
			<CodeMirror
				cursor={cursor}
				onCursor={(editor, data) => {
					setCursor({
						line: data.line,
						ch: data.ch + 1,
					});
				}}
				autoRefresh
				editorDidMount={(ed) => {
					setEditor(ed);
				}}
				onChange={(editor, data, value) => {
					if (onChange) onChange(value);
				}}
				value={value}
				height="100%"
				options={{
					mode,
					theme: 'material',
					lineNumbers: true,
					readOnly,
				}}
			/>
		</div>
	);
};

export default CodePart;
