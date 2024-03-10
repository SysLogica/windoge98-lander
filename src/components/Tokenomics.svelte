<style scoped>
.demo-wrap {
	position: relative;
}

.demo-wrap:before {
	content: " ";
	display: block;
	position: absolute;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	opacity: 0.6;
	background-size: 360px;
	background-image: url("/gold_coins.png");
	background-repeat: no-repeat;
	background-position: bottom 20px right 10px;
}
</style>

<script lang="ts">
import { Principal } from "@dfinity/principal";
import { onMount } from "svelte";
import { canisterId, createActor } from "../declarations/windoge";
import NextSectionButton from "./NextSectionButton.svelte";
import { scrollRef } from "svelte-scrolling";

const host =
	process.env.DFX_NETWORK === "local"
		? "http://127.0.0.1:4943"
		: "https://icp-api.io";
let circulatingSupply: string;
let totalBurned: string;
let treasuryEXE: string;
let treasuryICP: string;

onMount(async () => {
	const agentOptions = {
		host: host,
		identity: undefined,
	};
	const exeActor = createActor(canisterId, { agentOptions });
	const icpActor = createActor("ryjl3-tyaaa-aaaaa-aaaba-cai", { agentOptions });
	const circulatingSupplyRes = await exeActor.icrc1_total_supply();
	circulatingSupply = formatBigDecimalToString(circulatingSupplyRes);
	const totalBurnedRes = 1_000_000_000_000_000n - circulatingSupplyRes;
	totalBurned = formatNumberWithSuffix(totalBurnedRes);
	const treasuryEXERes = await exeActor.icrc1_balance_of({
		owner: Principal.fromText(
			"3scjg-z33zr-ll3bt-hdsov-kkitm-3tsml-tvgkt-d6jwa-onz35-hkfq5-zae"
		),
		subaccount: [],
	});
	treasuryEXE = formatNumberWithSuffix(treasuryEXERes);
	const treasuryICPRes = await icpActor.icrc1_balance_of({
		owner: Principal.fromText(
			"3scjg-z33zr-ll3bt-hdsov-kkitm-3tsml-tvgkt-d6jwa-onz35-hkfq5-zae"
		),
		subaccount: [],
	});
	treasuryICP = formatNumberWithSuffix(treasuryICPRes);
});

function formatBigDecimalToString(amount: bigint) {
	// Convert the number to a string
	let amountStr = amount.toString();

	// Ensure there are at least 8 digits to add leading zeros if necessary
	amountStr = amountStr.padStart(9, "0"); // Ensure at least 8 digits + 1 for leading zeros

	// Insert the decimal point at the correct position
	let formattedAmount = amountStr.slice(0, -8) + "." + amountStr.slice(-8);

	// If the number is less than 1, ensure it starts with '0.'
	if (formattedAmount.startsWith(".")) {
		formattedAmount = "0" + formattedAmount;
	}

	// comma separate the number to left of the decimal point
	formattedAmount =
		formattedAmount.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
		"." +
		formattedAmount.split(".")[1].slice(0, 2);

	return formattedAmount;
}

function formatNumberWithSuffix(amount: bigint): string {
	// Convert the fixed-point number to a regular number by dividing by 10^8
	const num = Number(amount) / 1e8; // Adjust this divisor based on the fixed-point precision

	// Define thresholds for suffixes
	const thousand = 1e3;
	const million = 1e6;
	const billion = 1e9;
	const trillion = 1e12;

	// Determine the suffix and divisor based on the number's size
	let divisor = 1;
	let suffix = "";
	if (num >= trillion) {
		divisor = trillion;
		suffix = "T";
	} else if (num >= billion) {
		divisor = billion;
		suffix = "B";
	} else if (num >= million) {
		divisor = million;
		suffix = "M";
	} else if (num >= thousand) {
		divisor = thousand;
		suffix = "K";
	}

	// Format the number with the suffix, rounding to two decimal places
	const formattedNumber = (num / divisor).toFixed(2) + suffix;
	return formattedNumber;
}
</script>

<div
	use:scrollRef="{'tokenomics'}"
	class="hero demo-wrap items-start min-h-screen bg-blue-100 relative pb-20">
	<div
		class="flex relative justify-center items-start text-center text-blue-500 w-full mt-40">
		<div class="flex flex-col w-full justify-center">
			<h1 class="text-4xl lg:text-7xl font-bold text-gray-700 mb-8">
				EXE Tokenomics
			</h1>
			<div
				class="flex self-center flex-col mb-8 max-w-3xl lg:text-xl font-thin text-gray-500">
				Windoge98 (EXE) is a deflationary token with an initial supply of
				10,000,000 tokens. Rewards generated from the ICP/EXE liquidity pool are
				added to the treasury and burned, respectively.
			</div>
			<div class="flex mt-8 justify-center flex-col">
				<div
					class="mb-5 text-4xl lg:text-7xl font-semibold flex gap-x-24 justify-center">
					{#if circulatingSupply}
						{circulatingSupply}
					{:else}
						<progress class="progress w-36 progress-accent"></progress>
					{/if}
				</div>
				<div class="mb-5 text-2xl font-light text-gray-500">
					Circulating Supply (10M Initial)
				</div>
			</div>
			<div class="flex mt-8 justify-center flex-wrap">
				<div
					class="mb-5 text-4xl lg:text-7xl font-semibold flex flex-col items-center justify-center">
					{#if totalBurned}
						<div class="flex items-center text-nowrap">
							<span class="mr-1">🔥</span>
							{totalBurned}
						</div>
						<div
							class="text-xl lg:text-2xl w-full flex items-center mt-5 justify-center font-light text-gray-500">
							Burned
						</div>
					{:else}
						<progress class="progress w-16 progress-accent"></progress>
					{/if}
				</div>
			</div>

			<div class="flex mt-8 justify-center flex-wrap">
				<div
					class="mb-5 text-3xl lg:text-5xl lg:flex-nowrap font-bold flex flex-wrap gap-x-8 lg:gap-x-24 justify-center bg-blue-400 p-8 rounded-xl bg-opacity-40 max-w-100">
					<span class="flex items-center gap-x-4">
						<div class="avatar">
							<div class="w-8 lg:w-16 rounded-full">
								<img src="/windoge_token_logo.jpeg" />
							</div>
						</div>
						{#if treasuryEXE}
							{treasuryEXE}
						{:else}
							<progress class="progress w-16 progress-accent"></progress>
						{/if}
					</span>
					<div
						class=" mt-4 lg:mt-0 order-last text-center justify-center lg:order-none text-xl lg:text-2xl flex align-middle items-center font-light text-gray-500 w-full">
						Treasury
					</div>

					<span class="flex items-center gap-x-4">
						<div class="avatar">
							<div class="w-8 lg:w-16 rounded-full">
								<img src="/icp_token_logo.svg" />
							</div>
						</div>
						{#if treasuryICP}
							{treasuryICP}
						{:else}
							<progress class="progress w-16 progress-accent"></progress>
						{/if}
					</span>
				</div>
			</div>
			<span class="opacity-50 mt-4">* All numbers are real-time</span>
			<div class="flex justify-center mt-4 mb-32">
				<a
					href="https://icpcoins.com/#/token/EXE"
					target="_blank"
					class="btn border-none bg-blue-600 mt-4 btn-lg text-blue-100
					rounded-full bg-opacity-80 hover:bg-opacity-100 hover:bg-blue-600"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						class="h-6 fill-white"
						><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
						></path
						></svg
					>View charts on ICPCoins</a>
			</div>
		</div>
	</div>
	<NextSectionButton
		ref="whitepaper"
		duration="{1200}"
		btnClasses="bg-yellow-500 mb-8 bg-opacity-30 hover:bg-opacity-70 hover:bg-yellow-500"
		fill="white" />
</div>
