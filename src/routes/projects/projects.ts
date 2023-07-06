export interface Project {
	title: string;
	description?: string;
	link?: string;
}

export const projects: Project[] = [
	{
		title: 'Slaviii',
		description: 'Never let your boss hungry again 🐈',
		link: 'https://github.com/richeyphu/Slaviii'
	},
	{
		title: 'Thai Regex Dict',
		description: 'Thai Regex Dictionary | พจนานุกรมนิพจน์ปรกติ',
		link: 'https://github.com/richeyphu/thai-regex-dict'
	},
	{
		title: 'Loremity',
		description: 'Ille infinitum volumen Lorem Ipsum',
		link: 'https://github.com/richeyphu/loremity'
	},
	{
		title: 'πery',
		description: 'Fresh baked π from your browser!',
		link: 'https://github.com/richeyphu/piery'
	},
	{
		title: 'GetMotivated',
		description: 'Stop hornie, be motivated. Chrome extension that will save you from 😭',
		link: 'https://github.com/richeyphu/GetMotivated'
	}
];
