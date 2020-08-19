<template>
    <page-slot title="transition内置过渡">
        <div class="card">
            <h2>使用方法</h2>
            <p>
                这里提供到了<code>star-transition</code>这个组件，原理是简单的封装了<code>vue</code>提供的<code>transition</code>标签，使用此组件传入<code>name</code>属性即可使用对应的过渡效果
            </p>
            <pre><code>&lt;<span class="hljs-name">star-transition</span> <span class="hljs-attr">name</span>="<span class="hljs-string">star-fade</span>"&gt;
        ··· <span class="hljs-comment">&lt;!-- 这里是绑定了v-if、v-show的元素 --&gt;</span>
     &lt;/<span class="hljs-name">star-transition</span>&gt;</code></pre>
            <p>Tips：此组件暂时只能用于单个元素</p>
        </div>
        <!-- props -->
        <props-table :propsData="propsData"></props-table>
    </page-slot>
</template>
<script>
export default {
    data() {
        return {
            propsData: [
                {
                    value: 'name',
                    decs: '过渡效果的名称，具体请参考右侧手机示例',
                    type: 'string',
                    default: '——',
                },
                {
                    value: 'mode',
                    decs:
                        '过渡模式，可选值为：in-out(新元素先进行过渡，完成之后当前元素过渡离开)、out-in(当前元素先进行过渡，完成之后新元素过渡进入)',
                    type: 'string',
                    default: '——',
                },
            ],
        }
    },
}
</script>
