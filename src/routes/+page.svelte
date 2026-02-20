<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>The Uncertainty Obligation</title>
</svelte:head>

<div class="container">
	<article class="prose">
		{@html data.html}
	</article>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		line-height: 1.6;
		color: #333;
		background: #ffffff;
	}
	
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}
	
	:global(.prose) {
		font-size: 1.125rem;
		line-height: 1.75;
	}
	
	:global(.prose h1) {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 2rem 0 1rem;
		line-height: 1.2;
		color: #1a1a1a;
	}
	
	:global(.prose h2) {
		font-size: 2rem;
		font-weight: 600;
		margin: 2rem 0 1rem;
		line-height: 1.3;
		color: #1a1a1a;
	}
	
	:global(.prose h3) {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 1.5rem 0 0.75rem;
		color: #2a2a2a;
	}
	
	:global(.prose p) {
		margin: 1rem 0;
		line-height: 1.75;
	}
	
	:global(.prose blockquote) {
		border-left: 4px solid #3b82f6;
		padding-left: 1.5rem;
		margin: 1.5rem 0;
		font-style: italic;
		color: #555;
	}
	
	:global(.prose blockquote > p) {
		margin: 0.5rem 0;
	}
	
	:global(.prose hr) {
		border: none;
		border-top: 2px solid #e5e7eb;
		margin: 3rem 0;
	}
	
	:global(.prose strong) {
		font-weight: 700;
		color: #1a1a1a;
	}
	
	:global(.prose em) {
		font-style: italic;
	}
	
	:global(.prose ul, .prose ol) {
		margin: 1rem 0;
		padding-left: 2rem;
	}
	
	:global(.prose li) {
		margin: 0.5rem 0;
	}
	
	:global(.prose img) {
		max-width: 100%;
		height: auto;
		margin: 2rem 0;
		display: block;
	}
	
	:global(.prose code) {
		background: #f3f4f6;
		padding: 0.2rem 0.4rem;
		border-radius: 0.25rem;
		font-size: 0.9em;
		font-family: 'Courier New', monospace;
	}
	
	:global(.prose pre) {
		background: #f3f4f6;
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin: 1.5rem 0;
	}
	
	:global(.prose pre code) {
		background: none;
		padding: 0;
	}
	
	@media (max-width: 640px) {
		.container {
			padding: 1rem 0.75rem;
		}
		
		:global(.prose) {
			font-size: 1rem;
		}
		
		:global(.prose h1) {
			font-size: 1.875rem;
		}
		
		:global(.prose h2) {
			font-size: 1.5rem;
		}
		
		:global(.prose h3) {
			font-size: 1.25rem;
		}
	}
</style>
