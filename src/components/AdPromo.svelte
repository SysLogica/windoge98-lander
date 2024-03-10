<script lang="ts">
import { scrollRef } from "svelte-scrolling";
import NextSectionButton from "./NextSectionButton.svelte";
</script>

<div use:scrollRef="{'promo'}" class="hero py-8 bg-white relative">
	<div
		class="flex flex-wrap items-center text-center text-neutral w-full justify-center pb-8">
		<h2 class="text-4xl font-light text-gray-600 mt-8 mb-12 w-full">
			Our Friends
		</h2>
		<div
			class="flex gap-x-12 w-full justify-center items-center mb-8 flex-wrap gap-y-8">
			<a href="https://dfinity.org" target="_blank"
				><img src="/dfinity_text_logo.jpg" class="max-h-[150px]" /></a>
			<a href="https://icpswap.com" target="_blank"
				><img src="/icpswap_logo.jpg" class="max-h-[149px]" /></a>
			<a href="https://oc.app/?ref=y3rqn-fyaaa-aaaaf-a7z6a-cai" target="_blank"
				><img src="/openchat_logo.png" class="max-h-[120px]" /></a>
			<a href="https://sonic.ooo" target="_blank"
				><img src="/sonic_logo.svg" class="h-[70px]" /></a>
			<a href="https://juno.build" target="_blank" class="max-h-[149px]">
				<img src="/juno_logo.svg" class="h-[50px]" />
			</a>
		</div>
	</div>
</div>
