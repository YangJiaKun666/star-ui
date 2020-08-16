<template>
    <page-slot title="颜色主题">
        <div class="card">
            <p>
                可自定义背景色、文本颜色、选中颜色，主题更换使用的是
                <code>less</code>的函数加上
                <code>css</code>的
                <code>var</code>函数；
                使用
                <code>less</code>函数定义全局公用的
                <code>class</code>变量（类），
                再通过
                <code>css</code>的
                <code>var</code>函数将定义的主题颜色分别添加到对应的变量中。
                引入组件库后，会自动在
                <code>body</code>标签上添加一个
                <code>class</code>类，
                当自定义时，则会再添加一段内联样式，自定义主题就是基于这个类名和内联完成的。
            </p>
            <pre><code><span class="hljs-comment">// main.js</span>
<span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">"vue"</span>
<span class="hljs-keyword">import</span> STAR_UI <span class="hljs-keyword">from</span> <span class="hljs-string">"@yangjiakun/star-ui/lib/star-ui.common"</span> <span class="hljs-comment">// 引入js文件</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">"@yangjiakun/star-ui/lib/star-ui.css"</span> <span class="hljs-comment">// 引入css文件</span>
Vue.<span class="hljs-keyword">use</span>(STAR_UI，{
    <span class="hljs-comment">// 可通过定义backColor、textColor、fActiveColor变换不同的主题颜色，此处的值为默认值</span>
    <span class="hljs-attr">backColor</span>: <span class="hljs-string">linear-gradient(to right, #1cd8d2, #93edc7)</span>, <span class="hljs-comment">// 背景色</span>
    <span class="hljs-attr">textColor</span>: <span class="hljs-string">#333</span>, <span class="hljs-comment">// 文本颜色</span>
    <span class="hljs-attr">fActiveColor</span>: <span class="hljs-string">#1cd8d2</span>, <span class="hljs-comment">// 当复选框、tab、navbar等组件呈选中状态时的颜色</span>
})</code></pre>
        </div>
    </page-slot>
</template>
<style scoped>
p {
    white-space: normal;
}
</style>