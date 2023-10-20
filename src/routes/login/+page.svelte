<script lang="ts">
    import { baseUrl } from "$lib/backend";
    import axios from "axios";
    import { getJwtToken, setJwtToken } from "$lib/backend";
    import { refreshJwtToken } from "$lib/backend";
    let username: string;
    let password: string;
    const login = async () => {
        console.log("2");
        const response = await axios({
            method: 'post',
            url: `${baseUrl}/User/login`,
            withCredentials: true,
            data: {
                username,
                password
            }
        });
        setJwtToken(response.data);
        console.log(getJwtToken());
    }
</script>
<input placeholder="username" type="text" autocomplete="username" bind:value={username}>
<input placeholder="password" type="password" autocomplete="current-password" bind:value={password}>
<button on:click={login}>Login</button>