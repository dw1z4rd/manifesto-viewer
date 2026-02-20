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
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-5xl mx-auto">
		<!-- Academic Paper Container -->
		<article bind:this={article} class="bg-white shadow-xl border border-gray-200 px-8 py-12 sm:px-16 sm:py-20">
			<!-- Content with Academic Styling -->
			<div class="prose prose-xl prose-slate max-w-none
				prose-headings:font-serif prose-headings:font-bold
				prose-h1:text-5xl prose-h1:text-center prose-h1:mb-3 prose-h1:mt-8 prose-h1:leading-tight
				prose-h2:text-4xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:border-b-2 prose-h2:border-gray-300 prose-h2:pb-3
				prose-h3:text-3xl prose-h3:mt-10 prose-h3:mb-4
				prose-p:text-xl prose-p:text-justify prose-p:leading-relaxed prose-p:mb-5
				prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:py-3 prose-blockquote:px-8 prose-blockquote:my-8 prose-blockquote:not-italic prose-blockquote:text-lg
				prose-strong:text-gray-900 prose-strong:font-semibold
				prose-em:italic
				prose-ul:my-5 prose-ul:text-xl prose-ol:my-5 prose-ol:text-xl
				prose-li:my-3 prose-li:leading-relaxed
				prose-hr:my-10 prose-hr:border-gray-300
				prose-img:mx-auto prose-img:my-10 prose-img:shadow-lg
				prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
				{@html data.html}
			</div>
		</article>
		
		<!-- Footer Citation Style -->
		<div class="mt-8 text-center text-base text-gray-500 font-sans">
			<p>Document rendered from markdown source</p>
		</div>
	</div>
</div>

<style>
	/* Fade-in animations */
	:global(.fade-in) {
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.8s ease-out, transform 0.8s ease-out;
	}
	
	:global(.fade-in-visible) {
		opacity: 1;
		transform: translateY(0);
	}
	
	/* Additional custom styles for academic paper look */
	:global(.prose h1:first-of-type) {
		margin-top: 0;
	}
	
	:global(.prose blockquote p) {
		margin: 0.5rem 0;
	}
	
	:global(.prose blockquote > p:first-child::before) {
		content: none;
	}
	
	:global(.prose blockquote > p:last-child::after) {
		content: none;
	}
	
	/* Print styles for actual paper printing */
	@media print {
		:global(body) {
			background: white;
		}
		
		.bg-gradient-to-b {
			background: white;
		}
		
		article {
			box-shadow: none;
			border: none;
		}
		
		:global(.fade-in) {
			opacity: 1 !important;
			transform: none !important;
		}
	}
	
	/* Responsive text sizes for mobile */
	@media (max-width: 640px) {
		:global(.prose) {
			font-size: 1.125rem;
		}
		
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
		}
	}
</style>
