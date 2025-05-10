<script setup lang="ts">
import { z } from "zod";
import UploadDragPhotos from "~/components/UploadDragPhotos.vue";

definePageMeta({
  layout: "admin-layout",
});

const CATEGORIAS = ["Nuevos lanzamientos", "Más populares"];

const inputProducto = ref({
  nombre: "",
  costo: 0,
  precio: 0,
  descripcion: "",
  imagenes: [],
  categoria: "",
});

const hasError = ref(false);

const form = {
  nombre: {
    val: "",
    label: "Nombre",
    type: "input",
    required: true,
    error: false,
    schema: z.string().min(1),
    errorSchema: "Debes agregar un nombre válido",
  },

  descripcion: {
    val: "",
    label: "Descripción",
    type: "select",
    required: true,
    error: false,
    schema: z.string().min(1),
    errorSchema: "Debes agregar una descripción válida",
  },

  costo: {
    val: 0,
    label: "Costo",
    type: "select",
    required: true,
    error: false,
    schema: z.string().min(0),
    errorSchema: "Debes agregar una descripción válida",
  },
};

/**
 *
 */
const addProducto = async () => {};
</script>

<template>
  <div class="space-y-4">
    <h1 class="font-semibold text-2xl">Nuevo producto</h1>

    <div class="flex flex-col md:flex-row gap-4">
      <div class="basis-3/5">
        <Card>
          <UploadDragPhotos
            v-model="inputProducto.imagenes"
            v-model:error="hasError"
            label="Imágenes"
            :limit="3"
          />
        </Card>
      </div>
      <div class="basis-2/5">
        <Card>
          <FormLabel text="Nombre" :required="true">
            <Input
              placeholder="Nombre de tu producto"
              v-model="inputProducto.nombre"
            />
          </FormLabel>

          <FormLabel text="Descripción">
            <Textarea
              placeholder="Descripción de tu producto"
              v-model="inputProducto.descripcion"
            />
          </FormLabel>
          <FormLabel text="Costo">
            <NumberField
              v-model="inputProducto.costo"
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
          </FormLabel>

          <FormLabel text="Precio">
            <NumberField
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
          </FormLabel>

          <FormLabel text="Categoría">
            <Select v-model="inputProducto.categoria">
              <SelectTrigger class="w-full">
                <SelectValue placeholder="Selecciona una categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Selecciona una categoría</SelectLabel>
                  <SelectItem
                    v-for="(e, k) in CATEGORIAS"
                    :key="k"
                    :value="e"
                    >{{ e }}</SelectItem
                  >
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormLabel>

          <Button @click.prevent="addProducto" class="w-full">
            Crear producto
          </Button>
        </Card>
      </div>
    </div>
  </div>
</template>
