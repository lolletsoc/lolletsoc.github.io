<script lang="ts">
    import '../app.scss';
    import NavBar from '$lib/components/NavBar.svelte';
    import {AppShell} from '@skeletonlabs/skeleton';
</script>
<AppShell gap="gap-4">
    <svelte:fragment slot="pageHeader">
        <NavBar/>
    </svelte:fragment>
    <slot/> <!-- This tells the router where to put the 'stuff' -->
    <svelte:fragment slot="pageFooter"/>
</AppShell>
