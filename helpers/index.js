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

export { ucwords, selectDatatype };
