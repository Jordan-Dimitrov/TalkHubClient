<script lang="ts">
    import { baseUrl } from "$lib/backend";
    import axios from "axios";
    import { getJwtToken, setJwtToken } from "$lib/backend";
    import { refreshJwtToken } from "$lib/backend";
    import { onMount } from "svelte";
    let username: string;
    let password: string;
    const getCategories = async () => {
        console.log("2");
        const response = await axios({
            method: 'get',
            url: `${baseUrl}/Category`,
            withCredentials: true,
            headers: {
                Authorization: 'bearer ' + getJwtToken()
            }
        });
        console.log(response.data)
    }



</script>
<button on:click={getCategories}>Login</button>