export const redirectTo = (path: string) =>
	location.assign(`${window.location.href}${path}`);
