<template>
    <page-slot title="输入框组件">
        <!-- 基本用法 -->
        <div class="card">
            <h2>基本用法</h2>
            <p>
                可通过
                <code>v-mode</code>双向绑定输入框的值，通过
                <code>placeholder</code>设置设置占位文字。
            </p>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 基本用法 --&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-input</span> <span class="hljs-attr">type</span>="<span class="hljs-string">text</span>" <span class="hljs-attr">v-model</span>="<span class="hljs-string">value</span>" <span class="hljs-attr">placeholder</span>="<span class="hljs-string">基本用法</span>" /&gt;</span><!-- END===> -->

    <span class="hljs-keyword">export default</span>{
        data(){
            <span class="hljs-keyword">return</span>{
                <span class="hljs-attr">value</span>: <span class="hljs-string">''</span>
            }
        }
    }
    </code></pre>
        </div>
        <!-- 自定义类型 -->
        <div class="card">
            <h2>自定义类型</h2>
            <p>
                根据
                <code>type</code>定义不同类型的输入框，默认为
                <code>text</code>
            </p>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 文本类型，调起普通键盘 --&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-input</span> <span class="hljs-attr">type</span>="<span class="hljs-string">text</span>" <span class="hljs-attr">v-model</span>="<span class="hljs-string">text</span>" <span class="hljs-attr">placeholder</span>="<span class="hljs-string">文本输入框</span>" /&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-comment">&lt;!-- 手机号类型，调起数字键盘 --&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-input</span> <span class="hljs-attr">type</span>="<span class="hljs-string">tel</span>" <span class="hljs-attr">v-model</span>="<span class="hljs-string">tel</span>" <span class="hljs-attr">placeholder</span>="<span class="hljs-string">手机号输入框</span>" /&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-comment">&lt;!-- 数字类型，调起数字键盘 --&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-input</span> <span class="hljs-attr">type</span>="<span class="hljs-string">number</span>" <span class="hljs-attr">v-model</span>="<span class="hljs-string">number</span>" <span class="hljs-attr">placeholder</span>="<span class="hljs-string">数字输入框</span>" /&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-comment">&lt;!-- 密码类型，调起密码键盘 --&gt;</span>
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-input</span> <span class="hljs-attr">type</span>="<span class="hljs-string">password</span>" <span class="hljs-attr">v-model</span>="<span class="hljs-string">passwrod</span>" <span class="hljs-attr">placeholder</span>="<span class="hljs-string">密码输入款</span>" /&gt;</span><!-- END===> -->

    <span class="hljs-keyword">export default</span>{
        data(){
            <span class="hljs-keyword">return</span>{
                <span class="hljs-attr">text</span>: <span class="hljs-string">''</span>
                <span class="hljs-attr">tel</span>: <span class="hljs-string">''</span>
                <span class="hljs-attr">number</span>: <span class="hljs-string">''</span>
                <span class="hljs-attr">password</span>: <span class="hljs-string">''</span>
            }
        }
    }
    </code></pre>
        </div>
        <!-- 可限制输入长度 -->
        <div class="card">
            <h2>可限制输入长度</h2>
            <p>
                可通过
                <code>maxlength</code>限制最大输入长度，当
                <code>type="number"</code>时失效。
            </p>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 最多输入十个字符 --&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-input</span> <span class="hljs-attr">type</span>="<span class="hljs-string">text</span>" <span class="hljs-attr">v-model</span>="<span class="hljs-string">max</span>" <span class="hljs-attr">placeholder</span>="<span class="hljs-string">最多输入十个字符</span>" <span class="hljs-attr">maxlength</span>="<span class="hljs-string">10</span>" /&gt;</span><!-- END===> -->

    <span class="hljs-keyword">export default</span>{
        data(){
            <span class="hljs-keyword">return</span>{
                <span class="hljs-attr">max</span>: <span class="hljs-string">''</span>
            }
        }
    }
    </code></pre>
        </div>
        <!-- 清除输入框内容 -->
        <div class="card">
            <h2>清除输入框内容</h2>
            <p>
                设置
                <code>clear</code>属性，可显示清除按钮
            </p>
            <pre><code><!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-input</span> <span class="hljs-attr">type</span>="<span class="hljs-string">text</span>" <span class="hljs-attr">v-model</span>="<span class="hljs-string">clr</span>" <span class="hljs-attr">placeholder</span>="<span class="hljs-string">删除输入框内容</span>" <span class="hljs-attr">clear</span> /&gt;</span><!-- END===> -->

    <span class="hljs-keyword">export default</span>{
        data(){
            <span class="hljs-keyword">return</span>{
                <span class="hljs-attr">clr</span>: <span class="hljs-string">''</span>
            }
        }
    }
    </code></pre>
        </div>
        <!-- 输入框的禁用和只读 -->
        <div class="card">
            <h2>输入框的禁用和只读</h2>
            <p>
                设置
                <code>disabled</code>禁用输入框，
                设置
                <code>readonly</code>输入框为只读状态。
            </p>
            <pre><code><!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-input</span> <span class="hljs-attr">placeholder</span>="<span class="hljs-string">禁用输入框</span>" <span class="hljs-attr">disabled</span> /&gt;</span><!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-input</span> <span class="hljs-attr">placeholder</span>="<span class="hljs-string">输入框只读</span>" <span class="hljs-attr">readonly</span> /&gt;</span><!-- END===> -->
    </code></pre>
        </div>
        <!-- 显示图标 -->
        <div class="card">
            <h2>显示图标</h2>
            <p>
                可设置
                <code>#icon</code>
                来展示图标
            </p>
            <pre><code><!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-input</span> <span class="hljs-attr">placeholder</span>="<span class="hljs-string">显示图标</span>"&gt;</span><!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">template</span> <span class="hljs-string">#icon</span>&gt;<!-- END===> -->
            <!-- <===START --><span class="hljs-comment">&lt;!-- 此处还可定义其他内容， Tips：目前暂不支持图片格式，在以后的版本中会更新 --&gt;</span><!-- END===> -->
            <!-- <===START -->&lt;<span class="hljs-name">star-icon</span> <span class="hljs-attr">name</span>="<span class="hljs-string">ravelry</span>" /&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">template</span> /&gt;<!-- END===> -->
    <!-- <===START --><span class="hljs-tag">&lt;<span class="hljs-name">star-input</span> /&gt;</span><!-- END===> -->
    </code></pre>
        </div>
        <!-- props -->
        <props-table :propsData="propsData"></props-table>
        <!-- events -->
        <event-table :eventsData="eventsData"></event-table>
        <!-- slots -->
        <slot-table :slotsData="slotsData"></slot-table>
    </page-slot>
</template>
<script>
export default {
    data() {
        return {
            propsData: [
                {
                    value: "type",
                    decs: "类型，支持input原生的type属性。",
                    type: "string",
                    default: "text",
                },
                {
                    value: "placeholder",
                    decs: "展位文字符号。",
                    type: "string",
                    default: "——",
                },
                {
                    value: "maxlength",
                    decs: "限制最大输入长度，type为number时失效。",
                    type: "string，number",
                    default: "——",
                },
                {
                    value: "clear",
                    decs: "清除输入框内容",
                    type: "boolean",
                    default: "false",
                },
                {
                    value: "disabled",
                    decs: "禁用输入框，不可编辑。",
                    type: "boolean",
                    default: "false",
                },
                {
                    value: "readonly",
                    decs: "输入框只读状态，不可编辑。",
                    type: "boolean",
                    default: "false",
                },
            ],
            eventsData: [
                {
                    name: "input",
                    decs: "当输入框的值发生变化时触发",
                    value: "value: string, number",
                },
                {
                    name: "change",
                    decs: "仅在输入框失焦时触发",
                    value: "value: string, number",
                },
                {
                    name: "focus",
                    decs: "输入框聚焦时触发",
                    value: "event: event",
                },
                {
                    name: "blur",
                    decs: "输入框失焦时触发",
                    value: "event: event",
                },
            ],
            slotsData: [
                {
                    name: "icon",
                    decs: "在输入框最左侧显示图标，暂不支持图片格式",
                },
            ],
        };
    },
};
</script>