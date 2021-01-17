<script lang="typescript">
  import { onMount } from "svelte";
  
  export let count: number = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<p>Page has been open for <code>{count}</code> seconds.</p>