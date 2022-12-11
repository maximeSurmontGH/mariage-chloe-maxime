<script>
	export let withSeparator = false;
	export let height = 10;
	export let width = 'full-width';
</script>

{#if withSeparator}
	<div
		style={`height: ${height / 2}px; width: ${
			width === 'full-width' ? '100%' : width + 'px'
		}; border-bottom: 1px solid var(--agriflux-blue);`}
	/>
	<div
		style={`height: ${height / 2}px; width: ${width === 'full-width' ? '100%' : width + 'px'};`}
	/>
{:else}
	<div style={`height: ${height}px; width: ${width === 'full-width' ? '100%' : width + 'px'};`} />
{/if}
