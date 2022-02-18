<template>
  <component
    :is="computedTag"
    class="btn"
    v-bind="$attrs"
    :type="nativeType"
    :class="[size, type, {
            'is-rounded': rounded,
            'loading': loading,
            'is-outlined': outlined,
            'is-fullwidth': expanded,
            'is-inverted': inverted,
            'is-focused': focused,
            'is-active': active,
            'is-hovered': hovered,
            'is-selected': selected
        }]"
    v-on="$listeners"
  >
    <b-icon
      v-if="iconLeft"
      :pack="iconPack"
      :icon="iconLeft"
      :size="iconSize"
    />
    <span v-if="label">{{ label }}</span>
    <span v-else-if="slots.default">
            <slot />
        </span>
    <b-icon
      v-if="iconRight"
      :pack="iconPack"
      :icon="iconRight"
      :size="iconSize"
    />
  </component>
</template>

<script setup lang="ts">
  const props = defineProps({
    type: [String, Object],
    size: String,
    label: String,
    iconPack: String,

    iconLeft: String,
    iconRight: String,
    rounded: {
      type: Boolean,
      default: false
    },
    loading: Boolean,
    outlined: Boolean,
    expanded: Boolean,
    inverted: Boolean,
    focused: Boolean,
    active: Boolean,
    hovered: Boolean,
    selected: Boolean,
    nativeType: {
      type: String,
      default: 'button',
      validator: (value) => {
        return [
          'button',
          'submit',
          'reset'
        ].indexOf(value) >= 0
      }
    },
    tag: {
      type: String,
      default: 'button',
      validator: (value) => {
        let defaultLinkTags = [
          'a',
          'button',
          'input',
          'router-link',
          'nuxt-link',
          'n-link',
          'RouterLink',
          'NuxtLink',
          'NLink'
        ];
        return defaultLinkTags.indexOf(value) >= 0
      }
    }
  })

  const slots = useSlots();
  const attrs = useAttrs();

  const computedTag = computed(() => {
    if (attrs.disabled !== undefined && attrs.disabled !== false) {
      return 'button'
    }
    return props.tag
  })

  const iconSize = computed(() => {
    if (!props.size || props.size === 'is-medium') {
      return 'is-small'
    } else if (props.size === 'is-large') {
      return 'is-medium'
    }
    return props.size
  })
</script>
