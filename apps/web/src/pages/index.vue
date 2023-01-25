<template>
    <div>
        <NuxtWelcome />
    </div>
</template>

<script setup lang="ts">
import { exampleSum } from '@workspace/shared';

onMounted(() => {
    console.log(`1 + 1 = ${exampleSum(1, 1)}`);
});
</script>
