<script lang="ts">
    import { baseUrl } from "$lib/backend";
    import axios from "axios";
    import { getJwtToken, setJwtToken } from "$lib/backend";
    import { refreshJwtToken } from "$lib/backend";
    let username: string;
    let password: string;
    const register = async () => {
        console.log("2");
        const response = await axios({
            method: 'post',
            url: `${baseUrl}/User/register`,
            withCredentials: true,
            data: {
                username,
                password
            }
        });
    }

    const refreshInterval = 1000 * 5 * 60;
    setInterval(refreshJwtToken, refreshInterval);

    refreshJwtToken();
        
</script>
<input placeholder="username" type="text" autocomplete="username" bind:value={username}>
<input placeholder="password" type="password" autocomplete="current-password" bind:value={password}>
<button on:click={register}>Register</button>