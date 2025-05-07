<script setup lang="ts">
import { LucideShoppingCart } from "lucide-vue-next";

const showSheet = useSheet();

const route = useRoute();
</script>

<template>
  <div class="h-12 px-4">
    <div class="min-w-screen fixed top-0 border-b h-12 bg-white">
      <div class="container mx-auto">
        <div class="flex justify-between gap-4 items-center h-12">
          <NuxtLink to="/"> Velas León </NuxtLink>

          <div v-if="route.name !== '/pagar'">
            <SheetCart />
            <!-- <Button variant="ghost" @click.prevent="showSheet = !showSheet">
              <LucideShoppingCart />
            </Button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
