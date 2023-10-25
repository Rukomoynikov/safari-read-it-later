<script lang="ts">
	import FileInput from '$lib/components/FileInput.svelte';
	import { parse } from '$lib/utilities/parse';

	function parseIntoList(event: CustomEvent<string>) {
		const fileContent = event.detail;
		parse(fileContent);
		// const lines = fileContent.split('\n');
		// const urls = lines.map((line) => line.split('\t')[0]);
		// console.log(urls);
	}
</script>

<svelte:head>
	<title>Import Safari read-it-later to Omnivore</title>
</svelte:head>

<div class="py-4 sm:py-6 lg:py-8">
	<h1 class="text-3xl font-bold">Import Safari read-it-later to Omnivore</h1>
	<FileInput on:fileUploaded={parseIntoList} />
</div>

<style lang="postcss">
	/*
    :global(html) {
		background-color: theme(colors.gray.100);
	}
    */
</style>
