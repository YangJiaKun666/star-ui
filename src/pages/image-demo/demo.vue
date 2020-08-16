<template>
    <page-slot title="image图片">
        <div class="card">
            <h2>基本用法</h2>
            <pre><code><!-- <===STAR --><span class="hljs-comment">&lt;!-- 定义src属性，即可加载图片 --&gt;</span><!-- END===> -->
<!-- <===STAR -->&lt;<span class="hljs-name">star-image</span>
    <span class="hljs-attr">src</span>="<span
    class="hljs-string"
>https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597561773387&di=a7fcfe1c6c573ead1587c65d5bd155cb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fe%2F5791807c25be0.jpg</span>" 
/&gt;<!-- END===> -->
<!-- <===STAR --><span class="hljs-comment">&lt;!-- 当图片加载失败时，会展示图片加载失败的样式 --&gt;</span><!-- END===> -->
<!-- <===STAR -->&lt;<span class="hljs-name">star-image</span> <span class="hljs-attr">src</span>="<span class="hljs-string">xxx</span>" /&gt;<!-- END===> --></code></pre>
        </div>
        <div class="card">
            <h2>加载失败</h2>
            <p>
                可通过定义
                <code>#error</code>设置加载失败后的占位样式
            </p>
            <pre><code><!-- <===STAR --><span class="hljs-comment">&lt;!-- 默认样式 --&gt;</span><!-- END===> -->
<!-- <===STAR -->&lt;<span class="hljs-name">star-image</span> <span class="hljs-attr">src</span>="<span class="hljs-string">xx.png</span>" /&gt;<!-- END===> -->
<!-- <===STAR --><span class="hljs-comment">&lt;!-- 自定义 --&gt;</span><!-- END===> -->
<!-- <===STAR -->&lt;<span class="hljs-name">star-image</span> <span class="hljs-attr">src</span>="<span class="hljs-string">xx.png</span>"&gt;<!-- END===> -->
    <!-- <===STAR -->&lt;<span class="hljs-name">template</span> <span class="hljs-string">#error</span>&gt;<!-- END===> -->
        <!-- <===STAR -->&lt;<span class="hljs-name">star-icon</span> <span class="hljs-attr">name</span>="<span class="hljs-string">picture-o</span>" <span class="hljs-attr">size</span>="<span class="hljs-string">20</span>" <span class="hljs-attr">color</span>="<span class="hljs-string">#cdcdcd</span>" /&gt;<!-- END===> -->
    <!-- <===STAR -->&lt;/<span class="hljs-name">template</span>&gt;<!-- END===> -->
<!-- <===STAR --><!-- END===> -->&lt;/<span class="hljs-name">star-image</span>&gt;</code></pre>
        </div>
        <div class="card">
            <h2>剪切模式</h2>
            <p>
                可通过定义
                <code>fit</code>属性设置图片的剪切模式，来看看同一张图片不同模式下的展示状态
            </p>
            <pre><code><!-- <===STAR --><span class="hljs-comment">&lt;!-- cover：保持原有尺寸比例。但部分内容可能被剪切 --&gt;</span><!-- END===> -->
<!-- <===STAR -->&lt;<span class="hljs-name">star-image</span> <span class="hljs-attr">:src</span>="<span class="hljs-string">img</span>" <span class="hljs-attr">fit</span>="<span class="hljs-string">cover</span>" /&gt;<!-- END===> -->
<!-- <===STAR --><span class="hljs-comment">&lt;!-- contain：保持原有尺寸比例，内容被缩放 --&gt;</span><!-- END===> -->
<!-- <===STAR -->&lt;<span class="hljs-name">star-image</span> <span class="hljs-attr">:src</span>="<span class="hljs-string">img</span>" <span class="hljs-attr">fit</span>="<span class="hljs-string">contain</span>" /&gt;<!-- END===> -->
<!-- <===STAR --><span class="hljs-comment">&lt;!-- fill：不保证保持原有的比例，内容拉伸填充整个内容容器 --&gt;</span><!-- END===> -->
<!-- <===STAR -->&lt;<span class="hljs-name">star-image</span> <span class="hljs-attr">:src</span>="<span class="hljs-string">img</span>" <span class="hljs-attr">fit</span>="<span class="hljs-string">fill</span>" /&gt;<!-- END===> -->
<!-- <===STAR --><span
    class="hljs-comment"
>&lt;!-- scale-down：保持原有尺寸比例。内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些 --&gt;</span><!-- END===> -->
<!-- <===STAR -->&lt;<span class="hljs-name">star-image</span> <span class="hljs-attr">:src</span>="<span class="hljs-string">img</span>" <span class="hljs-attr">fit</span>="<span class="hljs-string">scale-down</span>" /&gt;<!-- END===> -->
<!-- <===STAR --><span class="hljs-comment">&lt;!-- none：保留原有元素内容的长度和宽度，也就是说内容不会被重置 --&gt;</span><!-- END===> -->
<!-- <===STAR -->&lt;<span class="hljs-name">star-image</span> <span class="hljs-attr">:src</span>="<span class="hljs-string">img</span>" <span class="hljs-attr">fit</span>="<span class="hljs-string">none</span>" /&gt;<!-- END===> -->

<span class="hljs-keyword">export default</span>{
    data() {
        <span class="hljs-keyword">return</span>{
            <span class="hljs-attr">img</span>: "<span
    class="hljs-string"
>https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597575842097&di=f8970b124647e273e71ff85901357740&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201505%2F03%2F1905264kp1k1ns5pph444v.jpg</span>"
        }
    }
}
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
                    value: "src",
                    decs: "url，图片的路径",
                    type: "string",
                    default: "——",
                },
                {
                    value: "fit",
                    decs:
                        "图片的剪切模式，可选值为：cover、contain、fill、scale-down、none",
                    type: "string",
                    default: "——",
                },
            ],
            eventsData: [
                {
                    name: "imageLoad",
                    decs: "图片加载时触发",
                    value: "event: Event",
                },
                {
                    name: "imageError",
                    decs: "图片加载失败时触发",
                    value: "event: Event",
                },
            ],
            slotsData: [
                {
                    name: "error",
                    decs: "自定义加载失败时的样式",
                },
            ],
        };
    },
};
</script>