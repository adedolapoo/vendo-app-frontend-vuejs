<template>
    <label class="label font-semibold">
        <span class="label-text">
          <slot></slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'BaseLabel'
}
</script>

<script setup>
const props = defineProps({
    for: {
        type: String,
        default: ''
    }
})
</script>
