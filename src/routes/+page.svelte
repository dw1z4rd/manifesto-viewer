<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	
	let { data } = $props();
	let article: HTMLElement;
	
	onMount(() => {
		// Set up Intersection Observer for scroll animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('fade-in-visible');
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px'
			}
		);
		
		// Observe all paragraphs, headings, blockquotes, and images
		const elements = article.querySelectorAll('h1, h2, h3, p, blockquote, hr, ul, ol, img');
		elements.forEach(el => {
			el.classList.add('fade-in');
			observer.observe(el);
		});
		
		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>The Uncertainty Obligation</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-academic-cream via-white to-academic-cream py-16 px-4 sm:px-6 lg:px-8">
	<div class="max-w-5xl mx-auto">
		<!-- Academic Paper Container with enhanced shadows -->
		<article 
			bind:this={article} 
			class="bg-academic-paper shadow-2xl border border-academic-border px-8 py-12 sm:px-20 sm:py-24 
			relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-academic-cream/10 before:pointer-events-none">
			
			<!-- Decorative top border -->
			<div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-academic-accent to-transparent"></div>
			
			<!-- Content with Enhanced Academic Styling -->
			<div class="prose prose-xl prose-academic max-w-none
				prose-headings:font-serif prose-headings:font-bold prose-headings:text-academic-ink
				prose-h1:text-6xl prose-h1:text-center prose-h1:mb-4 prose-h1:mt-0 prose-h1:leading-tight prose-h1:tracking-tight prose-h1:text-balance
				prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b-2 prose-h2:border-academic-accent/30 prose-h2:pb-4 prose-h2:text-balance
				prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-5 prose-h3:text-academic-accent
				prose-p:text-xl prose-p:text-justify prose-p:leading-loose prose-p:mb-6 prose-p:text-academic-ink
				prose-blockquote:border-l-[6px] prose-blockquote:border-academic-accent prose-blockquote:bg-gradient-to-r prose-blockquote:from-academic-accent/5 prose-blockquote:to-transparent 
				prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:my-10 prose-blockquote:not-italic prose-blockquote:text-lg prose-blockquote:text-academic-muted prose-blockquote:shadow-sm
				prose-strong:text-academic-ink prose-strong:font-bold
				prose-em:italic prose-em:text-academic-ink
				prose-ul:my-6 prose-ul:text-xl prose-ol:my-6 prose-ol:text-xl
				prose-li:my-3 prose-li:leading-loose prose-li:text-academic-ink
				prose-hr:my-12 prose-hr:border-academic-border prose-hr:border-t-2
				prose-img:mx-auto prose-img:my-12 prose-img:shadow-2xl prose-img:rounded-sm prose-img:ring-1 prose-img:ring-academic-border
				prose-a:text-academic-accent prose-a:no-underline hover:prose-a:underline hover:prose-a:text-academic-accent-light prose-a:transition-colors
				prose-code:bg-academic-cream prose-code:text-academic-accent prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-base">
				{@html data.html}
			</div>
			
			<!-- Decorative bottom border -->
			<div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-academic-accent to-transparent"></div>
		</article>
		
		<!-- Footer Citation Style -->
		<div class="mt-12 text-center">
			<div class="inline-block px-8 py-3 bg-white/60 backdrop-blur-sm rounded-full shadow-sm border border-academic-border/50">
				<p class="text-sm text-academic-muted font-sans m-0">
					Document rendered from markdown source • February 2026
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	/* Fade-in animations with stagger effect */
	:global(.fade-in) {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), 
					transform 1s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	:global(.fade-in-visible) {
		opacity: 1;
		transform: translateY(0);
	}
	
	/* First heading appears immediately */
	:global(.prose h1:first-of-type) {
		margin-top: 0;
		opacity: 1;
		transform: none;
	}
	
	/* Drop cap for first paragraph after H1 */
	:global(.prose h1 + p::first-letter) {
		float: left;
		font-size: 4.5rem;
		line-height: 3.5rem;
		padding-right: 0.5rem;
		padding-top: 0.25rem;
		font-weight: 700;
		color: theme('colors.academic.accent');
	}
	
	/* Enhanced blockquote styling */
	:global(.prose blockquote p) {
		margin: 0.75rem 0;
		position: relative;
	}
	
	:global(.prose blockquote > p:first-child::before) {
		content: none;
	}
	
	:global(.prose blockquote > p:last-child::after) {
		content: none;
	}
	
	/* Custom list markers */
	:global(.prose ul > li) {
		position: relative;
		padding-left: 0.5rem;
	}
	
	:global(.prose ul > li::marker) {
		color: theme('colors.academic.accent');
		font-weight: bold;
	}
	
	:global(.prose ol > li::marker) {
		color: theme('colors.academic.accent');
		font-weight: bold;
	}
	
	/* Section dividers */
	:global(.prose hr) {
		background: linear-gradient(
			to right,
			transparent,
			theme('colors.academic.accent') 20%,
			theme('colors.academic.accent') 80%,
			transparent
		);
		border: none;
		height: 2px;
		position: relative;
	}
	
	:global(.prose hr::after) {
		content: '§';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: theme('colors.academic.paper');
		padding: 0 1rem;
		color: theme('colors.academic.accent');
		font-size: 1.5rem;
	}
	
	/* Print styles */
	@media print {
		:global(body) {
			background: white;
		}
		
		.bg-gradient-to-br {
			background: white;
		}
		
		article {
			box-shadow: none;
			border: 1px solid #ccc;
		}
		
		:global(.fade-in) {
			opacity: 1 !important;
			transform: none !important;
		}
		
		article::before {
			display: none;
		}
	}
	
	/* Responsive adjustments */
	@media (max-width: 640px) {
		:global(.prose h1) {
			font-size: 2.5rem !important;
		}
		
		:global(.prose h2) {
			font-size: 2rem !important;
		}
		
		:global(.prose h3) {
			font-size: 1.75rem !important;
		}
		
		:global(.prose p) {
			font-size: 1.125rem !important;
			line-height: 1.75 !important;
		}
		
		:global(.prose h1 + p::first-letter) {
			font-size: 3.5rem;
			line-height: 2.5rem;
		}
	}
	
	/* Smooth scrolling */
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
