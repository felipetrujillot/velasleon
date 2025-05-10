<script setup lang="ts">
/**
 * Este componente recibe imágenes,
 * Las une a un array
 * Y utiliza drag and drop para
 * traer todo
 */
import { LucideImage, LucideX } from "lucide-vue-next";

const pictures_url = defineModel<string[]>();
const error = defineModel<boolean>("error");
const props = defineProps<{
  label: string;
  limit: number;
}>();

type PicturesT = {
  picture_encoded: string;
  picture_url: string;
  status: "error" | "success" | "upload";
  file: File;
};

const picturesList = ref<PicturesT[]>([]);

const reformatData = () => {
  pictures_url.value = picturesList.value.map((e) => {
    return e.picture_url;
  });
};
/**
 *
 */
const filesDrop = async (files: File[]) => {
  let showError = false;
  let errorMessage = "";

  files.forEach((f) => {
    if (
      f.type === "image/png" ||
      f.type === "image/jpeg" ||
      f.type === "image/jpg" ||
      f.type === "image/webp"
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        picturesList.value.push({
          status: "upload",
          picture_url: "",
          picture_encoded: e.target!.result as string,
          file: f,
        });

        checkPictures();
      };

      reader.readAsDataURL(f);
    } else {
      showError = true;
      errorMessage +=
        "Sólo se aceptan .png .jpeg .jpg .webp, de un peso máximo de 10 Mb";
      return;
    }
  });

  if (showError) {
    return toast("warning", errorMessage);
  }
};

/**
 *
 */
const checkPictures = async () => {
  const filtered = picturesList.value.filter((f) => {
    if (f.status === "upload") return f;
  });

  for (let i = 0; i < filtered.length; i++) {
    const f = filtered[i];
    if (f) await uploadPicture(f);
  }
  reformatData();
};
/**
 *
 */
const uploadPicture = async (f: PicturesT) => {
  const formData = new FormData();

  if (f.file) {
    formData.append("document", f.file);

    /**
     */
    const fileUrl = await $fetch<string>("/api/upload", {
      method: "POST",
      body: formData,
    });

    f.status = "success";
    f.picture_url = fileUrl;
  }
};

const reorderValue = (fromIndex: number, toIndex: number) => {
  // Ensure both indices are within valid bounds
  if (
    fromIndex >= 0 &&
    fromIndex < picturesList.value.length &&
    toIndex >= 0 &&
    toIndex < picturesList.value.length
  ) {
    // Remove the item from its current position
    const [item] = picturesList.value.splice(fromIndex, 1);

    // Insert the item at the new position
    picturesList.value.splice(toIndex, 0, item!);
  }
  reformatData();
};
/**
 *
 */
const onDrop = (event: DragEvent, toIndex: number) => {
  if (!event.dataTransfer) return;

  const fromIndex = parseInt(event.dataTransfer.getData("fromIndex"));

  reorderValue(fromIndex, toIndex);
};

/**
 *
 */
const startDrag = (event: DragEvent, item: number) => {
  if (!event.dataTransfer) return;

  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("fromIndex", item.toString());
};

/**
 * @param order
 */
const deletePicture = (order: number) => {
  picturesList.value = picturesList.value.filter((e, k) => {
    if (k !== order) return e;
  });
  reformatData();
  return;
};
</script>

<template>
  <div class="space-y-1">
    <Label v-if="label" :class="error === true ? 'text-destructive' : ''">
      {{ label }} <span class="text-destructive">*</span></Label
    >

    <Dropzone @files-dropped="filesDrop">
      <div class="min-h-40 border rounded-lg border-dashed cursor-pointer p-4">
        <div class="flex justify-center items-center h-full">
          <div class="space-y-4 text-center">
            <div class="flex justify-center">
              <LucideImage class="center" :size="42" />
            </div>
            <h1 class="text-md">
              Arrastra los objetos o haz click aquí para subirlos.
            </h1>
            <h2 class="text-sm text-muted-foreground">
              Formatos JPEG, PNG, WEBPG soportados.
            </h2>
          </div>
        </div>
      </div>
    </Dropzone>
    <Label v-if="error" class="fadeInFast text-destructive text-xs">
      Este campo es requerido
    </Label>
    <template v-if="picturesList.length > 0">
      <Label>Arrastra las imágenes para reordenarlas</Label>

      <div class="flex flex-wrap gap-4">
        <template v-for="(t, k) in picturesList" :key="k">
          <Card
            class="w-32 h-32 p-0 cursor-pointer"
            @drop="onDrop($event, k)"
            @dragenter.prevent
            @dragover.prevent
          >
            <div
              class="w-32 h-32"
              draggable="true"
              @dragstart="startDrag($event, k)"
            >
              <div class="relative">
                <div class="absolute w-32 h-32 p-2">
                  <div class="flex flex-col h-full w-full justify-between">
                    <div class="flex justify-between">
                      <h1>
                        {{ k + 1 }}
                      </h1>
                      <LucideX
                        class="cursor-pointer border hover:bg-gray-200 bg-white rounded-full"
                        @click.prevent="deletePicture(k)"
                      />
                    </div>

                    <div class="mt-auto">
                      <Badge v-if="t.status === 'upload'" class="w-full">
                        Subiendo...
                      </Badge>

                      <Badge
                        v-if="t.status === 'success'"
                        class="bg-green-500 hover:bg-green-600 w-full"
                      >
                        Subida
                      </Badge>
                    </div>
                  </div>
                </div>
                <img
                  class="object-cover w-32 h-32 rounded-2xl"
                  :src="t.picture_encoded"
                />
              </div>
            </div>
          </Card>
        </template>
      </div>
    </template>
  </div>
</template>
