<script>
  import { page } from '$app/stores';
</script>
<div style="text-align: center;">
    <h1>{$page.status}</h1>
    {$page.error.message}
</div>

