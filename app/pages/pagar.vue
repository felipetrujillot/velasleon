<script setup lang="ts">
const { $trpc } = useNuxtApp();

definePageMeta({
  layout: "client-layout",
});

const showSheet = useSheet();
const shopCart = useCart();
const totalCart = useTotalCart();
</script>

<template>
  <div>
    {{ shopCart }}
  </div>
</template>
