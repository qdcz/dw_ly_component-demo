import{_ as n,c as a,a as e,t as l,b as p,o as r}from"./app.818e6edc.js";const m=JSON.parse('{"title":"💡指南","titleTemplate":"让你更快上手dw组件库","description":"描述性文件","frontmatter":{"title":"💡指南","titleTemplate":"让你更快上手dw组件库","description":"描述性文件","editLink":true,"lastUpdated":true,"aside":true},"headers":[{"level":2,"title":"环境支持","slug":"环境支持","link":"#环境支持","children":[]},{"level":2,"title":"使用包管理器","slug":"使用包管理器","link":"#使用包管理器","children":[]},{"level":2,"title":"浏览器直接引入","slug":"浏览器直接引入","link":"#浏览器直接引入","children":[]},{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[{"level":3,"title":"完整引入","slug":"完整引入","link":"#完整引入","children":[]},{"level":3,"title":"按需导入","slug":"按需导入","link":"#按需导入","children":[]},{"level":3,"title":"手动导入","slug":"手动导入","link":"#手动导入","children":[]}]},{"level":2,"title":"测试文本 -------------","slug":"测试文本","link":"#测试文本","children":[]}],"relativePath":"guide/index.md"}'),i={name:"guide/index.md"},t=p(`<h2 id="环境支持" tabindex="-1">环境支持 <a class="header-anchor" href="#环境支持" aria-hidden="true">#</a></h2><p>DW UI 可以在支持 ES2018 和 ResizeObserver 的浏览器上运行。</p><p>由于 Vue 3 不再支持 IE11，Element Plus 也不再支持 IE 浏览器。</p><h2 id="使用包管理器" tabindex="-1">使用包管理器 <a class="header-anchor" href="#使用包管理器" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 选择一个你喜欢的包管理器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># NPM</span></span>
<span class="line"><span style="color:#A6ACCD;">$ npm install dw-ui --save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">$ yarn add dw-ui</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">$ pnpm install dw-ui</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>如果您的网络环境不好，建议使用相关镜像服务 cnpm 或 中国 NPM 镜像。</p><h2 id="浏览器直接引入" tabindex="-1">浏览器直接引入 <a class="header-anchor" href="#浏览器直接引入" aria-hidden="true">#</a></h2><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-hidden="true">#</a></h2><h3 id="完整引入" tabindex="-1">完整引入 <a class="header-anchor" href="#完整引入" aria-hidden="true">#</a></h3><h3 id="按需导入" tabindex="-1">按需导入 <a class="header-anchor" href="#按需导入" aria-hidden="true">#</a></h3><h3 id="手动导入" tabindex="-1">手动导入 <a class="header-anchor" href="#手动导入" aria-hidden="true">#</a></h3><h2 id="测试文本" tabindex="-1">测试文本 ------------- <a class="header-anchor" href="#测试文本" aria-hidden="true">#</a></h2><p>使用导入代码片段</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// #region snippet</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// ..</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">666</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// #endregion snippet</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> foo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,14);function c(s,o,d,h,u,b){return r(),a("div",null,[t,e("p",null,"使用一些头部变量 "+l(s.$frontmatter.title),1)])}const C=n(i,[["render",c]]);export{m as __pageData,C as default};
