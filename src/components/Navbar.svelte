<script lang="ts">
import { scrollTo } from "svelte-scrolling";
</script>

<nav class="navbar bg-transparent z-50">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"></path
					></svg>
			</div>
			<ul
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				<li>
					<a use:scrollTo="{{ ref: 'where-to-buy', duration: 1200 }}"
						>Trading</a>
				</li>
				<li>
					<a use:scrollTo="{{ ref: 'tokenomics', duration: 1200 }}"
						>Tokenomics</a>
				</li>

				<li>
					<a use:scrollTo="{{ ref: 'whitepaper', duration: 1200 }}"
						>Whitepaper</a>
				</li>
				<li>
					<a>Community</a>
					<ul class="p-2">
						<li>
							<a
								href="https://oc.app/community/ow6el-gyaaa-aaaar-av5na-cai/?ref=y3rqn-fyaaa-aaaaf-a7z6a-cai"
								target="_blank">OpenChat</a>
						</li>
						<li>
							<a
								href="https://aqs24-xaaaa-aaaal-qbbea-cai.ic0.app/groups/mbor6-2qkmn-qxiz3-soaaa-aaaaa-hqaoe-qbaea-aaalh"
								target="_blank">Catalyze</a>
						</li>
						<li>
							<a href="https://taggr.link/#/WINDOGE98" target="_blank">Taggr</a>
						</li>
						<li>
							<a href="https://t.me/windoge98" target="_blank">Telegram</a>
						</li>
						<li>
							<a href="https://discord.gg/CnMRrtaj3h" target="_blank"
								>Discord</a>
						</li>
						<li>
							<a href="https://dscvr.one/p/windoge98" target="_blank">DSCVR</a>
						</li>
					</ul>
				</li>
				<li>
					<a
						href="https://app.icpswap.com/swap?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=rh2pm-ryaaa-aaaan-qeniq-cai"
						class="btn btn-success text-white"
						target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							class="h-4 fill-white"
							><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
								d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
							></path
							></svg>
						Buy on ICPSwap</a>
				</li>
				<li>
					<a
						href="https://desktop.windoge98.com/#/boot"
						class="btn btn-primary text-white"
						target="_blank"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							class="h-4 fill-white"
							><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
								d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
							></path
							></svg
						>Boot Desktop</a>
				</li>
			</ul>
		</div>
		<a
			class="btn btn-ghost text-xl justify-center items-center hidden lg:flex"
			use:scrollTo="{'#welcome'}"
			><div class="w-16 flex justify-center items-center">
				<img src="/logo_off_black.png" alt="Logo" />
			</div>
			Windoge98</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li>
				<a use:scrollTo="{{ ref: 'where-to-buy', duration: 1200 }}">Trading</a>
			</li>
			<li>
				<a use:scrollTo="{{ ref: 'tokenomics', duration: 1200 }}">Tokenomics</a>
			</li>
			<li>
				<a use:scrollTo="{{ ref: 'whitepaper', duration: 1200 }}">Whitepaper</a>
			</li>
			<li>
				<details class="z-50">
					<summary>Community</summary>
					<ul class="p-2">
						<li>
							<a
								href="https://oc.app/community/ow6el-gyaaa-aaaar-av5na-cai/?ref=y3rqn-fyaaa-aaaaf-a7z6a-cai"
								target="_blank">OpenChat</a>
						</li>
						<li>
							<a
								href="https://aqs24-xaaaa-aaaal-qbbea-cai.ic0.app/groups/mbor6-2qkmn-qxiz3-soaaa-aaaaa-hqaoe-qbaea-aaalh"
								target="_blank">Catalyze</a>
						</li>
						<li>
							<a href="https://taggr.link/#/WINDOGE98" target="_blank">Taggr</a>
						</li>
						<li>
							<a href="https://t.me/windoge98" target="_blank">Telegram</a>
						</li>
						<li>
							<a href="https://discord.gg/CnMRrtaj3h" target="_blank"
								>Discord</a>
						</li>
						<li>
							<a href="https://dscvr.one/p/windoge98" target="_blank">DSCVR</a>
						</li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
	<a
		class="btn btn-ghost text-2xl md:text-xl justify-center items-center flex lg:hidden"
		use:scrollTo="{'#welcome'}"
		><div class="w-16 flex justify-center items-center">
			<img src="/logo_off_black.png" alt="Logo" />
		</div>
		Windoge98</a>
	<div class="navbar-end">
		<a
			href="https://app.icpswap.com/swap?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=rh2pm-ryaaa-aaaan-qeniq-cai"
			class="hidden lg:flex btn btn-success text-white mr-2"
			target="_blank">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				class="h-4 fill-white"
				><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
					d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
				></path
				></svg>
			Buy on ICPSwap</a>
		<a
			href="https://desktop.windoge98.com/#/boot"
			class="hidden lg:flex btn btn-primary text-white"
			target="_blank"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				class="h-4 fill-white"
				><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
					d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
				></path
				></svg
			>Boot Desktop</a>
	</div>
</nav>
