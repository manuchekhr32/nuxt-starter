<template>
  <pre>
    {{ data }}
  </pre>
</template>

<script lang="ts" setup>
const $route = useRoute();
const $api = useApi();

const data = await useAsyncData(async () => {
  try {
    return $api.$get(`/todos/${$route.params.id}`);
  } catch {
    showError({
      statusCode: 404,
    });
  }
});
</script>
