<script setup lang="ts">
definePageMeta({
  layout: "admin-layout",
});

const inputProducto = ref({
  nombre: "",
  precio: 0,
  descripcion: "",
});
</script>

<template>
  <div class="space-y-4">
    <h1 class="font-semibold text-2xl">Nuevo producto</h1>

    <div class="grid grid-cols-2 gap-4">
      <Card> </Card>
      <Card>
        <div class="space-y-1">
          <Label> Nombre </Label>
          <Input
            class="max-w-[380px]"
            placeholder="Nombre de tu producto"
            v-model="inputProducto.nombre"
          />
        </div>

        <div class="space-y-1">
          <Label> Descripción </Label>
          <Textarea
            class="max-w-[380px]"
            placeholder="Descripción de tu producto"
            v-model="inputProducto.nombre"
          />
        </div>

        <div class="space-y-1">
          <Label> Precio </Label>

          <NumberField
            class="max-w-[380px]"
            v-model="inputProducto.precio"
            :min="1"
            :default-value="1"
            locale="es-CL"
            :format-options="{
              minimumFractionDigits: 0,
            }"
          >
            <NumberFieldContent>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldContent>
          </NumberField>
        </div>
      </Card>
    </div>
  </div>
</template>
