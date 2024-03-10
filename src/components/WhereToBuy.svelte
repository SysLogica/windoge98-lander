<script lang="ts">
import { scrollRef } from "svelte-scrolling";
import NextSectionButton from "./NextSectionButton.svelte";
</script>

<div
	use:scrollRef="{'where-to-buy'}"
	class="hero min-h-screen bg-green-50 relative"
	style="background-image: url(/buy_bg2.png);">
	<div
		class="flex justify-center items-center text-center text-gray-700 w-full">
		<div class="flex flex-wrap w-full justify-center">
			<h1 class="text-6xl lg:text-8xl font-semibold text-gray-700 mb-10 w-full">
				Trading EXE
			</h1>
			<div class="max-w-xl w-full">
				You can purchase EXE on all of the exchanges below. However, we
				recommend ICPSwap because it has the most liquidity.
			</div>
			<div
				class="mt-8 w-full flex flex-col lg:flex-row justify-center items-center px-2">
				<a
					href="https://app.icpswap.com/swap?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=rh2pm-ryaaa-aaaan-qeniq-cai"
					target="_blank"
					><img src="/icpswap_logo2.png" class="max-h-[150px]" /></a>
				<a href="https://app.sonic.ooo/swap" target="_blank"
					><img src="/sonic_logo.svg" class="h-[90px]" /></a>
			</div>
			<div
				class="mt-4 w-full flex flex-col lg:flex-row justify-center items-center px-2">
				<a href="https://iclight.io/ICDex/EXE/ICP" target="_blank"
					><img src="/icdex_logo.png" class="h-[150px]" /></a>
			</div>
		</div>
	</div>

	<NextSectionButton
		ref="tokenomics"
		duration="{1200}"
		btnClasses="bg-green-800 mb-8 opacity-40 shadow-none hover:bg-green-800 hover:bg-opacity-80"
		fill="white" />
</div>
