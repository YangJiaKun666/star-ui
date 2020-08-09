# star-ui

## 安装与使用

下载：

```
npm i @yangjiakun/star-ui
```

在 main.js 中引入

```
import STAR_UI from '@yangjiakun/star-ui/lib/star-ui.common'

import '@yangjiakun/star-ui/lib/star-ui.css'

Vue.use(STAR_UI,{ // 可更改主题颜色

    backColor: '···', // 背景色

    textColor: '···', // 文本默认颜色

    fActiveColor: '···' // 文本选中颜色

})
```

## 组件示例

input 输入框

```
<star-input type="···" placeholder="···" maxlength="···" v-model="···" clear disabled readonly>
    <template #icon>
        ··· // 此处可自定义内容，比如图标
    </template>
</star-input>

type：输入类型，text、password、number、tel，默认为text

placeholder：占位符

maxlength：最大输入长度，type为number时无效

v-model：绑定值

clear：是否需要清除按钮，默认为false

disabled：是否禁止输入，默认为false

readonly：是否只读，默认为false

```

button 按钮

```
<star-button>按钮</star-button>
```
