<script lang="ts">
    import { baseUrl } from "$lib/backend";
    import axios from "axios";
    import { getJwtToken, setJwtToken } from "$lib/backend";
    import { refreshJwtToken } from "$lib/backend";
    import { onMount } from "svelte";
    
    const refreshInterval = 1000 * 5 * 60;
    setInterval(refreshJwtToken, refreshInterval);

    onMount(() => {
        refreshJwtToken();
    })
</script>

<slot />