<template>
  <div>
    <BaseFormLabel :for="state.uniqueId" v-if="label">{{label}}</BaseFormLabel>
    <select
      :id="state.uniqueId"
      v-model="computedValue"
      class="select input-solid w-full text-[1rem] border-0 font-normal"
      ref="select"
      :multiple="multiple"
      :size="nativeSize"
      v-bind="$attrs"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)">

      <template v-if="placeholder">
        <option
          v-if="computedValue == null"
          :value="null"
          disabled
          hidden>
          {{ placeholder }}
        </option>
      </template>
      <template v-if="items.length">
        <option
          v-for="item in items"
          :value="`${item[optionKey]}`"
          :key="`${item[optionKey]}`">
          {{ `${item[optionValue]}` }}
        </option>
      </template>
      <template v-else>
        <slot/>
      </template>

    </select>

  </div>
</template>

<script lang="ts">
  export default {
    inheritAttrs: false
  }
</script>

<script setup lang="ts">
  const {$axios} = useNuxtApp()
  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    items: {
      type : Array,
      default: () => []
    },
    optionKey:{
      type: [String,Number],
      default: 'id'
    },
    optionValue:{
      type: [String,Number],
      default: 'name'
    },
    value: {
      type: [String, Number, Boolean, Object, Array, Function, Date],
      default: null
    },
    placeholder: String,
    multiple: Boolean,
    nativeSize: [String, Number],
    dataKey: {
      type: [String,Number],
      default: 'data'
    },
    fetch: {
      type: String,
      default: null
    },
  })

  const emit = defineEmits(['input'])
  const value = ref(props.value);
  const selected = ref(props.value);

  const state = reactive({
    uniqueId: '',
    items: props.items,
    isLoading: false
  })

  const computedValue = computed({
    get() {
      return selected.value
    },
    set(value) {
      selected.value = value
      emit('input', value)
    }
  });

  const spanClasses = computed(()=>{
    return [props.size, {
      'is-fullwidth': props.expanded,
      'is-loading': props.loading,
      'is-multiple': props.multiple,
      'is-rounded': props.rounded,
      'is-empty': props.selected === null
    }]
  })

  watch(value,(value) => {
    selected.value = value
  })

  const getAsyncData = async () => {
   try{
     state.isLoading = true;
     if(_.isEmpty(props.fetch)) return;
     const response = await $axios.$get(`${props.fetch}`)
     state.items = response[props.dataKey]
   }catch (e) {
     console.log(e);
     state.items = []
   }finally {
     state.isLoading = false;
   }
  };

  onMounted(() => {
    getAsyncData();
    state.uniqueId = props.id || Math.random()
      .toString(16)
      .slice(2)
  })
</script>

