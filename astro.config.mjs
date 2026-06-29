// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://gabrielbarrosba.github.io',
	base: '/mariacrm',
	integrations: [
		tailwind(),
		starlight({
			title: 'MariaCRM',
			customCss: [
				'./src/styles/custom.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/gabrielbarrosba/mariacrm' }],
			sidebar: [
				{
					label: 'Instalação (Docs)',
					items: [
						{ label: 'Visão Geral', slug: 'instalar/overview' },
						{ label: 'Google Cloud Run (Recomendado)', slug: 'instalar/setup-cloudrun' },
						{ label: 'VPS / Máquina Virtual', slug: 'instalar/setup-vm' },
					],
				},
				{
					label: 'Guias Gerais',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
