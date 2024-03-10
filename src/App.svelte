<script lang="ts">
import "./app.css";
import Footer from "./components/Footer.svelte";
import HeadMeta from "./components/HeadMeta.svelte";
import { title } from "./stores/titleStore.ts";
import { onMount } from "svelte";
import { initJuno } from "@junobuild/core";
import Router from "svelte-spa-router";
import { routes } from "./router.js";
import { initOrbiter } from "@junobuild/analytics";

onMount(async () => {
	await initJuno({
		satelliteId: "5mwxz-fyaaa-aaaal-adxca-cai",
	});
	await initOrbiter({
		satelliteId: "5mwxz-fyaaa-aaaal-adxca-cai",
		orbiterId: "ikgsc-2qaaa-aaaal-adagq-cai",
	});
});
</script>

<HeadMeta />

<Router routes="{routes}" />
<Footer />
