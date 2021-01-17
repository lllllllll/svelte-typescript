<script>
  import { users } from '../store';
  console.log('>>>> ', $users);
</script>

<h1>Users All</h1>

<!-- { $users } -->
<ul>
	{#each $users as { id, login }, i}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={id}">
			{i + 1}: {login}
		</a></li>
	{/each}
</ul>