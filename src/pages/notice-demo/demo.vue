<template>
    <page-slot title="notice消息通知">
        <div class="card">
            <h2>基本用法</h2>
            <pre><code>&lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">click</span>"&gt;基本用法&lt;/<span class="hljs-name">star-button</span>&gt;
    
    <span class="hljs-keyword">export default</span> {
        methods: {
            <span class="hljs-attr">click()</span> {
                <span class="hljs-keyword">this.$notice</span>({
                    <span class="hljs-attr">message</span>: "<span class="hljs-attr">基本用法</span>",
                    <span class="hljs-attr">duration</span>: <span class="hljs-attr">2000</span>,
                })
                <span class="hljs-comment">// 另一个写法：this.$notice("基本用法")</span>
            }
        }
    }
    </code></pre>
        </div>
        <div class="card">
            <h2>不同类型的消息提示</h2>
            <p>
                传入<code>type</code>即可设置提示类型，可选值为：<code>primary</code>、<code>success</code>、<code>error</code>、<code
                    >warning</code
                >
            </p>
            <pre><code>&lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">click('primary','主要提示')</span>"&gt;主要提示&lt;/<span class="hljs-name">star-button</span>&gt;
    &lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">click('success','成功提示')</span>"&gt;成功提示&lt;/<span class="hljs-name">star-button</span>&gt;
    &lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">click('error','错误提示')</span>"&gt;错误提示&lt;/<span class="hljs-name">star-button</span>&gt;
    &lt;<span class="hljs-name">star-button</span> @<span class="hljs-attr">click</span>="<span class="hljs-string">click('warning','警告提示')</span>"&gt;警告提示&lt;/<span class="hljs-name">star-button</span>&gt;
    
    <span class="hljs-keyword">export default</span> {
        methods: {
            <span class="hljs-attr">click(type, text)</span> {
                <span class="hljs-keyword">this.$notice</span>({
                    <span class="hljs-attr">message</span>: <span class="hljs-attr">text</span>,
                    <span class="hljs-attr">type</span>,
                })
                <span class="hljs-comment">// 另一写法：</span>
                <span class="hljs-comment">// 主要提示->this.$notice.primary(text)</span>
                <span class="hljs-comment">// 成功提示->this.$notice.success(text)</span>
                <span class="hljs-comment">// 错误提示->this.$notice.error(text)</span>
                <span class="hljs-comment">// 警告提示->this.$notice.warning(text)</span>
            }
        }
    }
    </code></pre>
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
                    value: 'message',
                    decs: '提示的消息内容',
                    type: 'string',
                    default: '——',
                },
                {
                    value: 'type',
                    decs:
                        '提示框的内容，可选值为：primary，success，error，warning，info',
                    type: 'string',
                    default: 'info',
                },
                {
                    value: 'target',
                    decs:
                        '提示框挂载的DON元素，可传入class、id，也可使用 parentDOM > childDOM 这种格式，但请注意元素的唯一性',
                    type: 'string',
                    default: 'body',
                },
                {
                    value: 'duration',
                    decs: '提示框展示的时间',
                    type: 'string，number',
                    default: 2000,
                },
            ],
        }
    },
}
</script>
