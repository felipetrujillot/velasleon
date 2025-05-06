<script setup lang="ts">
import { LucideShoppingCart } from "lucide-vue-next";
</script>

<template>
  <div class="h-12">
    <div class="min-w-screen fixed top-0 border-b h-12 bg-white">
      <div class="container mx-auto">
        <div class="flex justify-between gap-4 items-center h-12">
          <NuxtLink> Velas León </NuxtLink>

          <div>
            <Button variant="ghost">
              <LucideShoppingCart />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
