export const parseTextWithLinks = (text: string) => {
	const linkRegex = /<a href="(.*?)" target="_blank">(.*?)<\/a>/g;

	const parts = [];
	let lastIndex = 0;
	let match;

	while ((match = linkRegex.exec(text)) !== null) {
		const [fullMatch, href, linkText] = match;

		// Push preceding text before the match
		parts.push(text.slice(lastIndex, match.index));

		// Push link as <a> element
		parts.push(
			<a
				key={href}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="text-blue-500 underline"
			>
				{linkText}
			</a>,
		);

		// Update lastIndex
		lastIndex = match.index + fullMatch.length;
	}

	// Push remaining text after the last match
	parts.push(text.slice(lastIndex));

	return parts;
};
