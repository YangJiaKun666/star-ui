<template>
    <page-slot title="button按钮" subTitle="按钮组件，其定义了最小的宽度为120px，最大为100%">
        <div class="card">
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 基本用法 --&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-button</span>&gt;基本用法&lt;/<span class="hljs-name">star-button</span>&gt;</span><!-- END===> --></code></pre>
        </div>
        <div class="card">
            <p>
                可通过定义
                <code>type</code>属性来显示不同类型的按钮。
            </p>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 定义type属性展示不同颜色的按钮 --&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-button</span> <span class="hljs-attr">type</span>="<span class="hljs-string">primary</span>"&gt;primary主要按钮&lt;/<span class="hljs-name">star-button</span>&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-button</span> <span class="hljs-attr">type</span>="<span class="hljs-string">success</span>"&gt;success成功按钮&lt;/<span class="hljs-name">star-button</span>&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-button</span> <span class="hljs-attr">type</span>="<span class="hljs-string">error</span>"&gt;error错误按钮&lt;/<span class="hljs-name">star-button</span>&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-button</span> <span class="hljs-attr">type</span>="<span class="hljs-string">warning</span>"&gt;warning警告按钮&lt;/<span class="hljs-name">star-button</span>&gt;</span><!-- END===> -->
    </code></pre>
        </div>
        <div class="card">
            <p>
                可通过定义
                <code>size</code>属性来显示不同大小的按钮，默认值为
                <code>small</code>。
            </p>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 定义type属性展示不同大小的按钮 --&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-button</span> <span class="hljs-attr">type</span>="<span class="hljs-string">primary</span>" <span class="hljs-attr">size</span>="<span class="hljs-string">mini</span>"&gt;mini&lt;/<span class="hljs-name">star-button</span>&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-button</span> <span class="hljs-attr">type</span>="<span class="hljs-string">primary</span>" <span class="hljs-attr">size</span>="<span class="hljs-string">small</span>"&gt;small&lt;/<span class="hljs-name">star-button</span>&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-button</span> <span class="hljs-attr">type</span>="<span class="hljs-string">primary</span>" <span class="hljs-attr">size</span>="<span class="hljs-string">langer</span>"&gt;langer&lt;/<span class="hljs-name">star-button</span>&gt;</span><!-- END===> -->
    </code></pre>
        </div>
        <div class="card">
            <p>
                设置
                <code>round</code>为
                <code>true</code>可让按钮变为椭圆；
                定义
                <code>icon</code>属性可展示对应的图标；
                设置
                <code>loading</code>为
                <code>true</code>可展示loading效果，当
                <code>loading</code>设置为
                <code>true</code>时，传入的
                <code>icon</code>属性将会失效；
                设置
                <code>disabled</code>为
                <code>true</code>按钮呈现禁用状态。
            </p>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 椭圆按钮，显示图标，显示loading的按钮，按钮禁用 --&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-button</span> <span class="hljs-attr">type</span>="<span class="hljs-string">primary</span>" <span class="hljs-attr">round</span>&gt;椭圆按钮&lt;/<span class="hljs-name">star-button</span>&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-button</span> <span class="hljs-attr">type</span>="<span class="hljs-string">primary</span>" <span class="hljs-attr">icon</span>="<span class="hljs-string">heart</span>"&gt;显示图标&lt;/<span class="hljs-name">star-button</span>&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-button</span> <span class="hljs-attr">type</span>="<span class="hljs-string">primary</span>" <span class="hljs-attr">loading</span>&gt;loading&lt;/<span class="hljs-name">star-button</span>&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-button</span> <span class="hljs-attr">type</span>="<span class="hljs-string">primary</span>" <span class="hljs-attr">disabled</span>&gt;按钮禁用&lt;/<span class="hljs-name">star-button</span>&gt;</span><!-- END===> -->
    </code></pre>
        </div>
        <div class="card">
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 完整示例 --&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-button
        <span class="hljs-attr">@click</span>="<span class="hljs-string">onClick</span>"
        <span class="hljs-attr">type</span>="<span class="hljs-string">primary</span>"
        <span class="hljs-attr">:loading</span>="<span class="hljs-string">loading</span>"
        <span class="hljs-attr">:disabled</span>="<span class="hljs-string">loading</span>"
        <span class="hljs-attr">icon</span>="<span class="hljs-string">heartbeat</span>"
        <span class="hljs-attr">size</span>="<span class="hljs-string">small</span>"
    </span>&gt;!loading ? 点我试试~ : 稍等哈，我正在努力加载中~&lt;/<span class="hljs-name">star-button</span>&gt;</span><!-- END===> -->
    
    <span class="hljs-keyword">export default </span>{
        data(){
            <span class="hljs-keyword">return </span>{
                <span class="hljs-attr">loading</span>: <span class="hljs-string">false</span>
            }
        },
        methods: {
            <span class="hljs-attr">onClick()</span> {
                <span class="hljs-attr">this.loading</span> = <span class="hljs-string">true</span>;
                <span class="hljs-attr">setTimeout(() =></span> {
                    <span class="hljs-attr">this.loading</span> = <span class="hljs-string">false</span>;
                }, <span class="hljs-attr">2000)</span>;
            },
        },
    }</code></pre>
        </div>
        <!-- props -->
        <props-table :propsData="propsData"></props-table>
        <!-- events -->
        <event-table :eventsData="eventsData"></event-table>
    </page-slot>
</template>
<script>
export default {
    data() {
        return {
            propsData: [
                {
                    value: "type",
                    decs:
                        "类型，可定义按钮颜色，可选值为：primary、success、error、warning。",
                    type: "string",
                    default: "--",
                },
                {
                    value: "size",
                    decs: "可定义按钮大小，可选值为：mini、small、langer。",
                    type: "string",
                    default: "small",
                },
                {
                    value: "round",
                    decs: "是否为圆角（椭圆）按钮。",
                    type: "bollean",
                    default: "false",
                },
                {
                    value: "icon",
                    decs: "可使用该属性展示图标。",
                    type: "string",
                    default: "--",
                },
                {
                    value: "disabled",
                    decs: "禁用按钮。",
                    type: "boolean",
                    default: "false",
                },
                {
                    value: "loading",
                    decs:
                        "是否展示loading加载状态，当设置该值为true时，传入的icon将会失效",
                    type: "boolean",
                    default: "false",
                },
            ],
            eventsData: [
                {
                    name: "click",
                    decs: "点击按钮时触发",
                    value: "event: Event",
                },
            ],
        };
    },
};
</script>