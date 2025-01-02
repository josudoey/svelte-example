<script>
    import { onDestroy } from "svelte";
    import { page } from "$app/stores";
    let url;

    const unsubscribe = page.subscribe(($page) => (url = $page.url));
    onDestroy(() => unsubscribe());

    /** @type {number} */
    let number = $state();

    async function roll() {
        const response = await fetch(url.pathname + "/roll");
        number = await response.json();
    }
</script>

<!-- ref https://svelte.dev/tutorial/kit/get-handlers -->
<button onclick={roll}>Roll the dice</button>

{#if number !== undefined}
    <p>You rolled a {number}</p>
{/if}
