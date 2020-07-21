const ucwords = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const selectDatatype = (fieldLineRaw) => {
	const fieldLine = fieldLineRaw.toLowerCase();

	if (
		fieldLine.includes('varchar') ||
		fieldLine.includes('text') ||
		fieldLine.includes('char') ||
		fieldLine.includes('datetime')
	)
		return 'String';

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

const checkField = (lineRaw) => {
	const line = lineRaw.toLowerCase();
	const excludeKeywords = ['charset', 'constraint', 'foreign key', 'engine'];
	const isBlacklisted = excludeKeywords.some((keyword) => line.includes(keyword));
	if (isBlacklisted) {
		return false;
	}

	const dataTypes = [
		'int',
		'varchar',
		'char',
		'numeric',
		'bigint',
		'real',
		'tinyint',
		'decimal',
		'text',
		'float',
		'datetime',
	];

	const checkFields = dataTypes.map((it) => {
		if (line.includes(it)) return true;
	});

	if (checkFields.includes(true)) return true;
	return false;
};

const camelCase = (str) => {
	return (str.slice(0, 1).toLowerCase() + str.slice(1))
		.replace(/([-_ ]){1,}/g, ' ')
		.split(/[-_ ]/)
		.reduce((cur, acc) => {
			return cur + acc[0].toUpperCase() + acc.substring(1);
		});
};

const generateTableName = (str) => {
	return ucwords(camelCase(str));
};

export { ucwords, selectDatatype, checkField, generateTableName };
