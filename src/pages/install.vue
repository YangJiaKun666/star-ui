<template>
    <page-slot title="安装与使用">
        <div class="card">
            <h2>下载</h2>
            <p>
                使用
                <code>npm</code>下载ui组件库
            </p>
            <pre><code>npm i @yangjiakun/star-ui</code></pre>
        </div>
        <div class="card">
            <h2>使用</h2>
            <p>
                在文件
                <code>main.js</code>中引入
            </p>
            <pre><code><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">"vue"</span>
    <span class="hljs-keyword">import</span> STAR_UI <span class="hljs-keyword">from</span> <span class="hljs-string">"@yangjiakun/star-ui/lib/star-ui.common"</span> <span class="hljs-comment">// 引入js文件</span>
    <span class="hljs-keyword">import</span> <span class="hljs-string">"@yangjiakun/star-ui/lib/star-ui.css"</span> <span class="hljs-comment">// 引入css文件</span>
    Vue.<span class="hljs-keyword">use</span>(STAR_UI)
    </code></pre>
        </div>
    </page-slot>
</template>