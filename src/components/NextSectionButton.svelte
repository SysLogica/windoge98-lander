<script lang="ts">
	import { scrollTo } from 'svelte-scrolling';

	export let ref: string = 'welcome';
	export let duration: number = 1300;
	export let btnClasses: string = 'bg-blue-900  bg-opacity-30';
	export let fill: string = 'white';
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
	class={`btn btn-lg ${btnClasses} bottom-4 absolute rounded-full border-none`}
	use:scrollTo={{ ref, duration }}
>
	<svg class={`w-5 fill-${fill}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
		><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
			d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
		/></svg
	></a
>
