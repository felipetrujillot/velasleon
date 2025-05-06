<script setup lang="ts">
definePageMeta({
  layout: "client-layout",
});

import { LucideStar } from "lucide-vue-next";

const route = useRoute();

const slug_producto = route.params.slug_producto as string;

const { $trpc } = useNuxtApp();

const producto = await $trpc.productos.getProductoSlug.query({ slug_producto });
</script>

<template>
  <div class="container mx-auto">
    <Button>Hola</Button>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4" v-if="producto">
      <div>
        <img :src="producto?.imagen" />
      </div>

      <div>
        <h1 class="text-3xl font-bold">
          {{ producto?.nombre }}
        </h1>

        <p>
          {{ producto?.descripcion }}
        </p>

        <p class="normal-nums text-2xl">
          {{ clpFormat(producto?.precio) }}
        </p>

        <div class="flex gap-1">
          <LucideStar fill="#111" />
          <LucideStar fill="#111" />
          <LucideStar fill="#111" />
          <LucideStar fill="#111" />
          <LucideStar fill="#111" />
        </div>

        <hr />

        <Button class="w-full">Agregar al carrito</Button>
      </div>
    </div>
  </div>
</template>
