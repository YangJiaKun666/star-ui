<template>
    <page-slot title="checkbox复选框">
        <div class="card">
            <h2>基础用法</h2>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 定义v-model的绑定值，值为true或false，label为该选项的标题 --&gt;</span><!-- END===> -->
    <!-- <===START -->&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:style</span>="<span class="hljs-string">{ display: 'flex',justifyContent: 'space-around' }</span>"&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-checkbox</span> <span class="hljs-attr">label</span>="<span class="hljs-string">选项1</span>" <span class="hljs-attr">v-model</span>="<span class="hljs-string">value1</span>" /&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-checkbox</span> <span class="hljs-attr">label</span>="<span class="hljs-string">选项2</span>" <span class="hljs-attr">v-model</span>="<span class="hljs-string">value2</span>" /&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-checkbox</span> <span class="hljs-attr">label</span>="<span class="hljs-string">选项3</span>" <span class="hljs-attr">v-model</span>="<span class="hljs-string">value3</span>" /&gt;<!-- END===> -->
    <!-- <===START -->&lt;/<span class="hljs-name">div</span>&gt;<!-- END===> -->

    <span class="hljs-keyword">export default</span> {
        data() {
            <span class="hljs-keyword">return</span> {
                <span class="hljs-attr">value1</span>: <span class="hljs-string">false</span>,
                <span class="hljs-attr">value2</span>: <span class="hljs-string">true</span>,
                <span class="hljs-attr">value3</span>: <span class="hljs-string">false</span>,
            }
        }
    }
    </code></pre>
        </div>
        <div class="card">
            <h2>设置大小</h2>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 定义size属性可设置复选框大小，默认为mini --&gt;</span><!-- END===> -->
    <!-- <===START -->&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:style</span>="<span class="hljs-string">{ display: 'flex',justifyContent: 'space-around' }</span>"&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-checkbox</span> <span class="hljs-attr">label</span>="<span class="hljs-string">mini</span>" <span class="hljs-attr">size</span>="<span class="hljs-string">mini</span>" /&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-checkbox</span> <span class="hljs-attr">label</span>="<span class="hljs-string">small</span>" <span class="hljs-attr">size</span>="<span class="hljs-string">samll</span>" /&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-checkbox</span> <span class="hljs-attr">label</span>="<span class="hljs-string">langer</span>" <span class="hljs-attr">size</span>="<span class="hljs-string">langer</span>" /&gt;<!-- END===> -->
    <!-- <===START -->&lt;/<span class="hljs-name">div</span>&gt;<!-- END===> -->
    </code></pre>
        </div>
        <div class="card">
            <h2>圆形复选框</h2>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 定义round属性可将复选框变为圆形 --&gt;</span><!-- END===> -->
    <!-- <===START -->&lt;<span class="hljs-name">star-checkbox</span> <span class="hljs-attr">label</span>="<span class="hljs-string">圆形复选框</span>" <span class="hljs-attr">round</span> /&gt;<!-- END===> -->
    </code></pre>
            <!-- props -->
            <props-table :propsData="propsData"></props-table>
            <!-- event -->
            <event-table :eventsData="eventsData"></event-table>
        </div>
    </page-slot>
</template>
<script>
export default {
    data() {
        return {
            propsData: [
                {
                    value: "label",
                    decs: "该选项的标题",
                    type: "string",
                    default: "——",
                },
                {
                    value: "size",
                    decs: "可设置复选框大小，可选值为：mini、small、langer",
                    type: "string",
                    default: "mini",
                },
                {
                    value: "round",
                    decs: "设置为圆形复选框",
                    type: "boolean",
                    default: "false",
                },
            ],
            eventsData: [
                {
                    name: "change",
                    decs: "当复选框的绑定值发生变化是触发",
                    value: "value: boolean",
                },
            ],
        };
    },
};
</script>