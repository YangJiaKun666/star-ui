<template>
    <!-- props -->
    <div class="card">
        <h2>props</h2>
        <table class="table">
            <thead>
                <tr>
                    <th class="props-width">参数</th>
                    <th class="props-width">说明</th>
                    <th class="props-width">类型</th>
                    <th class="props-width">默认值</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) of propsData" :key="index">
                    <td class="props-width">{{ item.value }}</td>
                    <td class="props-width">{{ item.decs }}</td>
                    <td class="props-width">{{ item.type }}</td>
                    <td class="props-width">{{ item.default }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        propsData: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
};
</script>