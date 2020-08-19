<template>
    <page-slot title="tabs分类栏">
        <div class="card">
            <h2>基本用法</h2>
            <p>
                <code>star-tabs</code
                >配合<code>star-tab-item</code>使用，通过元素下标匹配当前选中的元素
            </p>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 绑定v-model设置默认选中的元素 --&gt;</span><!-- END===> -->
    <!-- <===START -->&lt;<span class="hljs-name">star-tabs</span> <span class="hljs-attr">v-model</span>="<span class="hljs-string">current</span>"&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-tab-item</span> <span class="hljs-attr">label</span>="<span class="hljs-string">tab1</span>"&gt;tab1-内容&lt;/<span class="hljs-name">star-tab-item</span>&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-tab-item</span> <span class="hljs-attr">label</span>="<span class="hljs-string">tab2</span>"&gt;tab2-内容&lt;/<span class="hljs-name">star-tab-item</span>&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-tab-item</span> <span class="hljs-attr">label</span>="<span class="hljs-string">tab3</span>"&gt;tab3-内容&lt;/<span class="hljs-name">star-tab-item</span>&gt;<!-- END===> -->
    <!-- <===START -->&lt;/<span class="hljs-name">star-tabs</span>&gt;<!-- END===> -->

    <span class="hljs-keyword">export defalut</span> {
        data() {
            <span class="hljs-keyword">return</span> {
                <span class="hljs-attr">current</span>: <span class="hljs-string">0</span> <span class="hljs-comment">// 默认选中的元素下标</span>
            }
        }
    }
    </code></pre>
        </div>
        <div class="card">
            <h2>设置背景色</h2>
            <p>
                设置<code>background</code>属性可自定义背景颜色
            </p>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 设置一个粉色的背景颜色 --&gt;</span><!-- END===> -->
    <!-- <===START -->&lt;<span class="hljs-name">star-tabs</span> <span class="hljs-attr">v-model</span>="<span class="hljs-string">current</span>" <span class="hljs-attr">background</span>="<span class="hljs-string">pink</span>"&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-tab-item</span> <span class="hljs-attr">label</span>="<span class="hljs-string">tab1</span>"&gt;tab1-内容&lt;/<span class="hljs-name">star-tab-item</span>&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-tab-item</span> <span class="hljs-attr">label</span>="<span class="hljs-string">tab2</span>"&gt;tab2-内容&lt;/<span class="hljs-name">star-tab-item</span>&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-tab-item</span> <span class="hljs-attr">label</span>="<span class="hljs-string">tab3</span>"&gt;tab3-内容&lt;/<span class="hljs-name">star-tab-item</span>&gt;<!-- END===> -->
    <!-- <===START -->&lt;/<span class="hljs-name">star-tabs</span>&gt;<!-- END===> -->

    <span class="hljs-keyword">export defalut</span> {
        data() {
            <span class="hljs-keyword">return</span> {
                <span class="hljs-attr">current</span>: <span class="hljs-string">0</span> <span class="hljs-comment">// 默认选中的元素下标</span>
            }
        }
    }
    </code></pre>
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
                    value: 'label',
                    decs: 'tab的标题',
                    type: 'string',
                    default: '——',
                },
                {
                    value: 'background',
                    decs: '可设置背景色',
                    type: 'string',
                    default: '——',
                },
            ],
            eventsData: [
                {
                    name: 'change',
                    decs:
                        '当选中元素发生变化时触发，返回一个包含选中元素index和title的对象',
                    value: 'obj: {index , title}',
                },
                {
                    name: 'click',
                    decs:
                        '当点击元素发生时触发，返回一个包含选中元素index和title的对象',
                    value: 'obj: {index , title}',
                },
            ],
        }
    },
}
</script>
