<script setup lang="ts">
const { $trpc } = useNuxtApp();

const data = await $trpc.productos.getProductos.query();
</script>

<template>
  <div class="bg-red-200">
    <Button>Hola</Button>

    {{ data }}
  </div>
</template>
