<template>
    <!-- slots -->
    <div class="card">
        <h2>slots</h2>
        <table class="table">
            <thead>
                <tr>
                    <th class="props-width">名称</th>
                    <th class="props-width">说明</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) of slotsData" :key="index">
                    <td class="props-width">{{ item.name }}</td>
                    <td class="props-width">{{ item.decs }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        slotsData: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
};
</script>