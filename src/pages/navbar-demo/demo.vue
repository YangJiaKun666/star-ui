<template>
    <page-slot title="navbar导航">
        <div class="card">
            <h2>基本用法</h2>
            <p>
                <code>star-navbar</code>配合<code>star-navbar-item</code>使用，
                通过定义<code>v-model</code>绑定默认激活的按钮，默认时通过定义下标
            </p>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 绑定v-model来设置默认激活的按钮 --&gt;</span><!-- END===> -->
    <!-- <===START -->&lt;<span class="hljs-name">star-navbar</span> <span class="hljs-attr">v-model</span>="<span class="hljs-string">defaultActive</span>"&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span>&gt;首页&lt;/<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span>&gt;购物车&lt;/<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span>&gt;分类&lt;/<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span>&gt;我的&lt;/<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
    <!-- <===START -->&lt;/<span class="hljs-name">star-navbar</span>&gt;<!-- END===> -->

    <span class="hljs-keyword">export default</span> {
        data() {
            <span class="hljs-keyword">return</span> {
                <span class="hljs-attr">defaultActive</span>: <span class="hljs-string">0</span> <span class="hljs-comment">// 此处定义的时是元素下标，第一个元素被选中</span>
            }
        }
    }
    </code></pre>
        </div>
        <div class="card">
            <h2>通过名字匹配</h2>
            <p>
                除了通过元素下标匹配，还可使用名称匹配，给每一个<code>star-navbar-item</code>定义一个名称，通过这个名称可匹配到对应的元素
            </p>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 绑定v-model来设置默认激活的按钮 --&gt;</span><!-- END===> -->
    <!-- <===START -->&lt;<span class="hljs-name">star-navbar</span> <span class="hljs-attr">v-model</span>="<span class="hljs-string">nameActive</span>"&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span> <span class="hljs-name">name</span>="<span class="hljs-string">index</span>"&gt;首页&lt;/<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span> <span class="hljs-name">name</span>="<span class="hljs-string">cart</span>"&gt;购物车&lt;/<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span> <span class="hljs-name">name</span>="<span class="hljs-string">screen</span>"&gt;分类&lt;/<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span> <span class="hljs-name">name</span>="<span class="hljs-string">myed</span>"&gt;我的&lt;/<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
    <!-- <===START -->&lt;/<span class="hljs-name">star-navbar</span>&gt;<!-- END===> -->

    <span class="hljs-keyword">export default</span> {
        data() {
            <span class="hljs-keyword">return</span> {
                <span class="hljs-attr">nameActive</span>: <span class="hljs-string">"index"</span> <span class="hljs-comment">// 默认选中的元素名称</span>
            }
        }
    }
    </code></pre>
        </div>
        <div class="card">
            <h2>展示图标</h2>
            <p>
                可设置<code>iconName</code>来展示图标
            </p>
            <pre><code><!-- <===START -->&lt;<span class="hljs-name">star-navbar</span> <span class="hljs-attr">v-model</span>="<span class="hljs-string">nameActive</span>"&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span> <span class="hljs-name">name</span>="<span class="hljs-string">index</span>" <span class="hljs-name">iconName</span>="<span class="hljs-string">envelope-o</span>"&gt;消息&lt;/<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span> <span class="hljs-name">name</span>="<span class="hljs-string">cart</span>" <span class="hljs-name">iconName</span>="<span class="hljs-string">heart-o</span>"&gt;我喜欢的&lt;/<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span> <span class="hljs-name">name</span>="<span class="hljs-string">screen</span>" <span class="hljs-name">iconName</span>="<span class="hljs-string">diamond</span>"&gt;分类&lt;/<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span> <span class="hljs-name">name</span>="<span class="hljs-string">myed</span>" <span class="hljs-name">iconName</span>="<span class="hljs-string">user-o</span>"&gt;我的&lt;/<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
    <!-- <===START -->&lt;/<span class="hljs-name">star-navbar</span>&gt;<!-- END===> -->

    <span class="hljs-keyword">export default</span> {
        data() {
            <span class="hljs-keyword">return</span> {
                <span class="hljs-attr">nameActive</span>: <span class="hljs-string">"index"</span> <span class="hljs-comment">// 默认选中的元素名称</span>
            }
        }
    }
    </code></pre>
        </div>
        <div class="card">
            <h2>
                选中展示图标，未选中展示文字
            </h2>
            <p>
                除了以上几种使用方法，此组件还可设置为：选中时展示图标，未选中时展示文字
            </p>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 此处使用了循环 --&gt;</span><!-- END===> -->
    <!-- <===START -->&lt;<span class="hljs-name">star-navbar</span> <span class="hljs-attr">v-model</span>="<span class="hljs-string">iconActive</span>" @<span class="hljs-attr">click</span>="<span class="hljs-string">(value)=>iconActive = value</span>"&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span>
            <span class="hljs-attr">v-for</span>="<span class="hljs-string">( navbar , index ) of navbars</span>"
            :<span class="hljs-attr">key</span>="<span class="hljs-string">index</span>"
            :<span class="hljs-attr">iconName</span>="<span class="hljs-string">iconActive == index ? navbar.icon : ''</span>"
            :<span class="hljs-attr">hideText</span>="<span class="hljs-string">iconActive == index</span>"
        &gt;<span><span>{</span><span>{</span> navbar.label <span>}</span><span>}</span></span>&lt;/<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
    <!-- <===START -->&lt;/<span class="hljs-name">star-navbar</span>&gt;<!-- END===> -->

    <span class="hljs-keyword">export default</span> {
        data() {
            <span class="hljs-keyword">return</span> {
                <span class="hljs-attr">iconActive</span>: <span class="hljs-string">0</span>,
                <span class="hljs-attr">navbars</span>:[
                    { <span class="hljs-attr">label</span>: <span class="hljs-string">"消息"</span>,<span class="hljs-attr">icon</span>: <span class="hljs-string">"envelope-o"</span> },
                    { <span class="hljs-attr">label</span>: <span class="hljs-string">"我喜欢的"</span>,<span class="hljs-attr">icon</span>: <span class="hljs-string">"heart-o"</span> },
                    { <span class="hljs-attr">label</span>: <span class="hljs-string">"分类"</span>,<span class="hljs-attr">icon</span>: <span class="hljs-string">"diamond"</span> },
                    { <span class="hljs-attr">label</span>: <span class="hljs-string">"我的"</span>,<span class="hljs-attr">icon</span>: <span class="hljs-string">"user-o"</span> },
                ],
            }
        }
    }
    </code></pre>
        </div>
        <div class="card">
            <h2>自定义图标</h2>
            <p>除了使用内置的图标以外，还可自定义图标或者图片</p>
            <pre><code><!-- <===START --><span class="hljs-comment">&lt;!-- 设置template为#icon即可自定义 --&gt;</span><!-- END===> -->
    <!-- <===START -->&lt;<span class="hljs-name">star-navbar</span>&gt;<!-- END===> -->
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
            <!-- <===START -->&lt;<span class="hljs-name">template</span> <span class="hljs-string">#iocn</span>&gt;<!-- END===> -->
                <!-- <===START -->&lt;<span class="hljs-name">star-icon</span> <span class="hljs-string">name</span>="<span class="hljs-string">hearbeat</span>" <span class="hljs-string">size</span>="<span class="hljs-string">18</span>" /&gt;<!-- END===> -->
            <!-- <===START -->&lt;<span class="hljs-name">template</span>&gt;<!-- END===> -->
            自定义图标
        <!-- <===START -->&lt;<span class="hljs-name">star-navbar-item</span>&gt;<!-- END===> -->
    <!-- <===START -->&lt;/<span class="hljs-name">star-navbar</span>&gt;<!-- END===> -->
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
                    value: 'name',
                    decs: '通过名字匹配对应的元素',
                    type: 'string，number',
                    default: '——',
                },
                {
                    value: 'iconName',
                    decs: '图标名称',
                    type: 'string',
                    default: '——',
                },
                {
                    value: 'hideText',
                    decs: '是否显示文字',
                    type: 'boolean',
                    default: 'fasle',
                },
            ],
            eventsData: [
                {
                    name: 'change',
                    decs: '当选中值发生变化时出发',
                    value: '返回当前选中的标识',
                },
            ],
            slotsData: [
                { name: 'icon', decs: '自定义图标' },
                { name: 'default', decs: '默认' },
            ],
        }
    },
}
</script>
