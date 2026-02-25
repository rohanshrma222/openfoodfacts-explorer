import DOMPurify from 'isomorphic-dompurify';

export function sanitizeHtml(dirty: string): string {
	return DOMPurify.sanitize(dirty, {
		ALLOWED_TAGS: [
			'b',
			'i',
			'u',
			'em',
			'strong',
			'a',
			'ul',
			'ol',
			'li',
			'p',
			'br',
			'span',
			'div',
			'table',
			'thead',
			'tbody',
			'tr',
			'th',
			'td',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6'
		],
		ALLOWED_ATTR: ['class', 'href', 'target', 'rel']
	});
}
