import stringSimilarity from 'string-similarity';

export const testStringSimilarity = (valueToTest, valueToMatch, bestMatchRating) => {
	if (!valueToMatch || valueToTest.toUpperCase().includes(valueToMatch.toUpperCase())) {
		return true;
	}
	const similarity = stringSimilarity.compareTwoStrings(
		valueToMatch.toUpperCase(),
		valueToTest.toUpperCase()
	);
	const minimalRatingValue = bestMatchRating - 0.05 / bestMatchRating;
	const minimalRatingValueIsConsistent = valueToMatch.length < 4 || minimalRatingValue > 0.3;
	const isSimilar = similarity > minimalRatingValue;

	if (minimalRatingValueIsConsistent && isSimilar) {
		return true;
	} else {
		return false;
	}
};
