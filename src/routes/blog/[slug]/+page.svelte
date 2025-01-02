<!-- ref https://svelte.dev/docs/kit/load -->
<script lang="ts">
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<h1>{data.post.title}</h1>
<p>server time: {data.serverTime}</p>
<div>{@html data.post.content}</div>
