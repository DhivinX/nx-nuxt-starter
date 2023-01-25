<template>
    <div>
        <NuxtWelcome />
    </div>
</template>

<script setup lang="ts">
import { exampleMultiplication, exampleSum } from '@workspace/shared';

onMounted(() => {
    console.log(`1 + 1 = ${exampleSum({ a: 1, b: 1 })}`);
    console.log(`5 * 5 = ${exampleMultiplication({ a: 5, b: 5 })}`);
});
</script>
