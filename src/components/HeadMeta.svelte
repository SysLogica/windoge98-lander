<script lang="ts">
import { title } from "../stores/titleStore.ts";
</script>

<svelte:head>
	<title>{$title}</title>
	<script
		async
		src="https://www.googletagmanager.com/gtag/js?id=MEASUREMENT_ID">
	</script>
	<script>
	window.dataLayer = window.dataLayer || [];

	function gtag() {
		dataLayer.push(arguments);
	}

	gtag("js", new Date());
	gtag("config", "MEASUREMENT_ID");
	</script>
</svelte:head>
