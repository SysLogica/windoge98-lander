<script lang="ts">
import { scrollTop, scrollRef } from "svelte-scrolling";
</script>

<footer
	use:scrollRef="{'footer'}"
	class="footer relative p-10 bg-gray-900 text-gray-300">
	<aside>
		<img src="/logo_text_dark.png" alt="Logo" class="w-96" />
		<p class="pl-2">
			The most advanced memecoin on the Internet Computer Protocol.
		</p>
	</aside>
	<nav>
		<h6 class="footer-title">Social Media</h6>
		<div class="grid grid-flow-col gap-4">
			<a href="https://x.com/windoge_98" target="_blank"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="25"
					height="25"
					class="fill-gray-300"
					viewBox="0 0 50 50">
					<path
						d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"
					></path>
				</svg></a>
			<a href="https://taggr.link/#/realm/WINDOGE98" target="_blank"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					class="fill-gray-300"
					height="25"
					><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
						d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"
					></path
					></svg
				></a>
			<a href="https://t.me/windoge98" target="_blank"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 496 512"
					class="fill-gray-300"
					height="25"
					><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
						d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
					></path
					></svg
				></a>

			<a
				href="https://oc.app/community/ow6el-gyaaa-aaaar-av5na-cai/?ref=y3rqn-fyaaa-aaaaf-a7z6a-cai"
				target="_blank">
				<img src="/oc_logo_svg.svg" class="h-6" />
			</a>
		</div>
	</nav>
	<button class="btn btn-ghost right-4 bottom-4 absolute hover:bg-transparent"
		><div class="flex justify-center flex-col text-gray-300">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 384 512"
				height="25"
				class="fill-gray-300"
				on:click="{scrollTop}"
				><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
					d="M350 177.5c3.8-8.8 2-19-4.6-26l-136-144C204.9 2.7 198.6 0 192 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26s12.5 14.5 22 14.5h88l0 192c0 17.7-14.3 32-32 32H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32l80 0c70.7 0 128-57.3 128-128l0-192h88c9.6 0 18.2-5.7 22-14.5z"
				></path
				></svg> <span class="w-100 mt-2">Back to Top</span>
		</div></button>
</footer>
