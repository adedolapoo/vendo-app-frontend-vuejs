<template>
  <transition name="fade">
    <div
      ref="my"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      v-show="showModal"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

        <transition enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                    leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"
               ></div>
        </transition>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <transition enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                    leave-from="opacity-100 translate-y-0 sm:scale-100"
                    leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            ref="modal">
            <div class="bg-white">

              <!--Modal Header-->
              <div class="flex justify-between items-center p-4 border-b" v-if="modalTitle">
                <h2 class="text-xl font-semibold">{{modalTitle}}</h2>
                <button class=" cursor-pointer transition-transform hover:scale-125" @click="closeModal">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!--Modal Content-->
              <div class="p-8">
                <Component
                  v-if="modalComponent"
                  v-bind="props"
                  v-on="events"
                  :is="modalComponent"
                  @close="closeModal"
                ></Component>
                <template v-else-if="content">
                  <div v-html="content" />
                </template>
                <slot v-else :close="closeModal"/>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>


<script setup lang="ts">
  const emit = defineEmits(['close'])

  const props = defineProps({
    title: String,
    show: Boolean,
    component: [Object, Function, String],
    events: Object,
    content: [String, Array],
  })

  const modalComponent = ref(props.component);
  const modalTitle = ref(props.title);

  const { $bus } = useNuxtApp();
  const modal = ref(null);

  const showModal = ref(false)

  const openModal = ({ open, component, title }) => {
    showModal.value = open;
    if(component) modalComponent.value = component
    if(title) modalTitle.value = title
  }

  const closeModal = () => {
    showModal.value = false;
    emit('close')
  }

  onClickOutside(modal, () => {
    if (showModal.value) closeModal();
  });

  watchEffect(() => {
    showModal.value = props.show
  })

  onMounted(() => {
    $bus.$on('modal', openModal);
  })

</script>

<style>
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s ease;
  }
</style>
