<template>
    <!-- events -->
    <div class="card">
        <h2>events</h2>
        <table class="table">
            <thead>
                <tr>
                    <th class="props-width">事件名称</th>
                    <th class="props-width">说明</th>
                    <th class="props-width">回调参数</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) of eventsData" :key="index">
                    <td class="props-width">{{ item.name }}</td>
                    <td class="props-width">{{ item.decs }}</td>
                    <td class="props-width">{{ item.value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        eventsData: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
};
</script>