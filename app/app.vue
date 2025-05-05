<script setup lang="ts">
/* useHead({
  bodyAttrs: {
    class: 'entel',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
    },
  ],
}) */
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <Toaster />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body,
#__nuxt,
#__layout {
  height: 100% !important;
  width: 100% !important;
}

.container-sm {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
}

.container-xs {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 720px;
}

.container-xl {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1260px;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fadeIn {
  animation: fade 0.3s ease-in-out;
}

.fadeInFast {
  animation: fade 0.2s ease-in-out;
}

@keyframes bouncegentle {
  0%,
  100% {
    transform: translateY(-10%);
    animation-timing-function: cubic-bezier(0.6, 0, 0.8, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
}

.slow-gentle-bounce {
  animation: bouncegentle 2s infinite;
}
</style>
