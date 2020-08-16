<template>
    <page-slot title="icon图标">
        <div class="card">
            <h2>使用方法</h2>
            <p>
                定义
                <code>name</code>属性可展示图标、
                <code>size</code>属性可设置图标大小、
                <code>color</code>属性可设置图标颜色
            </p>
            <pre><code><!-- <===STAR --><span
    class="hljs-comment"
>&lt;!-- 图标库————http://www.fontawesome.com.cn/faicon/ --&gt;</span><!-- END===> -->
<!-- <===STAR -->&lt;<span class="hljs-name">star-icon</span> <span class="hljs-attr">name</span>="<span class="hljs-string">heart</span>" <span class="hljs-attr">size</span>="<span class="hljs-string">14</span>" <span class="hljs-attr">color</span>="<span class="hljs-string">#333</span>" /&gt;<!-- END===> --></code></pre>
        </div>
        <!-- props -->
        <props-table :propsData="propsData"></props-table>
        <!-- event -->
        <event-table :eventsData="eventsData"></event-table>
    </page-slot>
</template>
<script>
export default {
    data() {
        return {
            propsData: [
                {
                    value: "name",
                    decs: "展示图标",
                    type: "string",
                    default: "——",
                },
                {
                    value: "size",
                    decs: "设置图标大小",
                    type: "string，number",
                    default: "14",
                },
                {
                    value: "color",
                    decs: "设置图标颜色",
                    type: "string",
                    default: "#333",
                },
            ],
            eventsData: [
                {
                    name: "click",
                    decs: "点击图标是触发",
                    value: "evnet: Event",
                },
            ],
        };
    },
};
</script>