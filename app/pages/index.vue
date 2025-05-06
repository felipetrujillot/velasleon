<script setup lang="ts">
const { $trpc } = useNuxtApp();

const data = await $trpc.productos.getProductos.query();

definePageMeta({
  layout: "client-layout",
});
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <template
        v-for="producto in [...data, ...data, ...data, ...data]"
        :key="producto.id_producto"
      >
        <CardProducto :producto="producto" />
      </template>
    </div>
  </div>
</template>
