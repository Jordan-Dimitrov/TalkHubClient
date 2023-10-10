<script lang="ts">
    let count = 0;
    export let name: string;
</script>

<button on:click={() => count += 1}>
    Count of {name}: {count}
</button>