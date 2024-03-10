<script lang="ts">
import { scrollRef } from "svelte-scrolling";
import NextSectionButton from "./NextSectionButton.svelte";
</script>

<div
	use:scrollRef="{'whitepaper'}"
	class="hero min-h-screen bg-gray-50 relative">
	<div
		class="flex justify-center items-center text-center text-gray-700 w-full">
		<div class="flex flex-col w-full">
			<h1 class="text-4xl lg:text-9xl font-bold text-gray-300 mb-10">
				Whitepaper
			</h1>
			<p>Our whitepaper is available for download in PDF format.</p>
			<div class="mt-8">
				<button
					on:click="{() => {
						window.open('https://windoge98.com/whitepaper.pdf', '_blank');
					}}"
					class="btn btn-lg btn-ghost text-2xl rounded-lg hover:bg-black hover:text-white">
					Download PDF</button>
			</div>
		</div>
	</div>
	<NextSectionButton
		ref="footer"
		duration="{1200}"
		btnClasses="bg-white mb-8 bg-opacity-90 shadow-none"
		fill="black" />
</div>
