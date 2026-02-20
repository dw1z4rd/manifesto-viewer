import { readFile } from 'fs/promises';
import { Marked } from 'marked';

export async function load() {
	const marked = new Marked();
	
	// Read the markdown file
	let markdown = await readFile('uncertainty-obligation-final-with-img.md', 'utf-8');
	
	// Replace relative image paths with static folder paths
	markdown = markdown.replace(/media\//g, '/media/');
	
	// Parse markdown to HTML
	const html = await marked.parse(markdown);
	
	return {
		html
	};
}
