const ucwords = string => string.charAt(0).toUpperCase() + string.slice(1);

const selectDatatype = fieldLine => {
	if (fieldLine.includes('varchar') || fieldLine.includes('text') || fieldLine.includes('char')) return 'String';

	if (fieldLine.includes('decimal') || fieldLine.includes('float')) return 'Float';

	if (fieldLine.includes('tinyint') || fieldLine.includes('float')) return 'Boolean';

	if (
		fieldLine.includes('int') ||
		fieldLine.includes('bigint') ||
		fieldLine.includes('numeric') ||
		fieldLine.includes('real')
	)
		return 'Int';
};

const checkField = line => {
	const dataTypes = ['int', 'varchar', 'char', 'numeric', 'bigint', 'real', 'tinyint', 'decimal', 'text', 'float'];

	const checkFields = dataTypes.map(it => {
		if (line.includes(it)) return true;
	});

	if (checkFields.includes(true)) return true;
	return false;
};

export { ucwords, selectDatatype, checkField };
