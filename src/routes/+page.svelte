<script lang="ts">
	import '../app.css';
	
	let { data } = $props();
</script>

<svelte:head>
	<title>The Uncertainty Obligation</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-4xl mx-auto">
		<!-- Academic Paper Container -->
		<article class="bg-white shadow-xl border border-gray-200 px-8 py-12 sm:px-12 sm:py-16">
			<!-- Content with Academic Styling -->
			<div class="prose prose-lg prose-slate max-w-none
				prose-headings:font-serif prose-headings:font-bold
				prose-h1:text-4xl prose-h1:text-center prose-h1:mb-2 prose-h1:mt-8
				prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-300 prose-h2:pb-2
				prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
				prose-p:text-justify prose-p:leading-relaxed prose-p:mb-4
				prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:my-6 prose-blockquote:not-italic
				prose-strong:text-gray-900 prose-strong:font-semibold
				prose-em:italic
				prose-ul:my-4 prose-ol:my-4
				prose-li:my-2
				prose-hr:my-8 prose-hr:border-gray-300
				prose-img:mx-auto prose-img:my-8 prose-img:shadow-lg
				prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
				{@html data.html}
			</div>
		</article>
		
		<!-- Footer Citation Style -->
		<div class="mt-8 text-center text-sm text-gray-500 font-sans">
			<p>Document rendered from markdown source</p>
		</div>
	</div>
</div>

<style>
	/* Additional custom styles for academic paper look */
	:global(.prose h1:first-of-type) {
		margin-top: 0;
	}
	
	:global(.prose blockquote p) {
		margin: 0.25rem 0;
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
	}
</style>
