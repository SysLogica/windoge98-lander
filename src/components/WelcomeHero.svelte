<style scoped>
.floating {
	animation-name: floating;
	animation-duration: 5s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
	margin-top: 5px;
}

@keyframes floating {
	0% {
		transform: translate(0, 0px);
	}
	50% {
		transform: translate(0, 10px);
	}
	100% {
		transform: translate(0, -0px);
	}
}
</style>

<script lang="ts">
import { scrollRef } from "svelte-scrolling";
import NextSectionButton from "./NextSectionButton.svelte";
import Navbar from "./Navbar.svelte";

let innerWidth = 0;
let innerHeight = 0;
let imageSizeClass = "w-3/4";
let marginClass = "mt-16";

$: condition = innerWidth * 1.33 <= innerHeight;
$: console.log(innerHeight);
$: if (innerHeight < 800) {
	imageSizeClass = "w-1/2";
	marginClass = "mt-4";
} else {
	imageSizeClass = "w-3/4";
	marginClass = "mt-12";
}
</script>

<svelte:window
	bind:innerWidth="{innerWidth}"
	bind:innerHeight="{innerHeight}" />

<div
	use:scrollRef="{'welcome'}"
	class="hero min-h-screen bg-base-200 max-h-full flex flex-col"
	style="background-image: url(/windows_bg.webp);">
	<Navbar />

	<div class="{`hero-content flex-wrap w-100 justify-center ${marginClass}`}">
		<div class="lg:mt-0 flex justify-center flex-wrap">
			<h2 class="text-5xl lg:text-7xl font-extrabold text-center z-0 w-full">
				The Future is 1998
			</h2>

			<p class="text-lg max-w-2xl font-thin text-center mt-4">
				Recreating the look and feel of 1998 on the blockchain, our desktop and
				dapp suite is the most advanced memetech on the market. Wow. Much alien
				tech.
			</p>
		</div>
		<img
			src="./windoge_desktop_screen_2.png"
			class="{`floating rounded-lg shadow-xl ${imageSizeClass}`}" />
	</div>

	<NextSectionButton
		ref="where-to-buy"
		duration="{1200}"
		btnClasses="bg-blue-500 bg-opacity-50 hover:bg-opacity-80 hover:bg-blue-500" />
</div>
