<script setup>
    import Card from "@/components/cards/CardIO.vue"
</script>
<template>
    <Card>
        <template v-slot:header-icon>
            <i class="fa fa-dollar"></i>
        </template>
        <template v-slot:header-title>RECEITA TOTAL</template>

        <template v-slot:card-content-body>
            is here
        </template>
    </Card>
</template>