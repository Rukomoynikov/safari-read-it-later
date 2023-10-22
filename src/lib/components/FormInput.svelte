<script lang="ts">
	export let label: string = '';
	export let symbol: string | null = null;
	export let placeholder: string = '';
</script>

<div>
	<label for="price" class="block text-sm font-medium leading-6 text-gray-900">{label}</label>
	<div class="relative mt-2 rounded-md shadow-sm">
		{#if symbol}
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<span class="text-gray-500 sm:text-sm">{symbol}</span>
			</div>
		{/if}
		<input
			type="text"
			name="price"
			id="price"
			class:pl-7={symbol}
			class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			{placeholder}
		/>
	</div>
</div>
