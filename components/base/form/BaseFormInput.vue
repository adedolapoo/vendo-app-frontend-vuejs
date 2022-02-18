<template>
  <div>
    <BaseFormLabel :for="state.uniqueId" v-if="label">{{label}}</BaseFormLabel>
    <input
      :id="uniqueId"
      v-bind="$attrs"
      v-model = "computedValue"
      :placeholder="placeholder || label"
      class="input input-solid w-full text-[1rem]"
      :class="{
                    'border-2 border-red-600': error,
                    'border-2 border-green-600': success,
                    'border-2 border-blue-600': info,
                    'border-2 border-yellow-400': warning,
                }"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    />
  </div>
</template>

<script lang="ts">
  export default {
    inheritAttrs: false
  }
</script>

<script setup lang="ts">
  const props = defineProps({
    value: {
      type: [String, Number, Boolean, Object, Array, Function, Date],
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    success: Boolean,
    info: Boolean,
    warning: Boolean
  });

  const emit = defineEmits(['input']);

  const newValue = ref(props.value);
  const uniqueId = ref('');

  const computedValue = computed({
    get() {
      return newValue.value
    },
    set(value) {
      newValue.value = value
      emit('input', value)
    }
  });

  onMounted(() => {
    uniqueId.value = props.id || Math.random()
      .toString(16)
      .slice(2)
  })
</script>

