<template>
    <div>
        <p class="com-p">基本用法</p>
        <div class="com-card">
            <div :style="{ display: 'flex',	justifyContent: 'center' }">
                <star-image
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597561773387&di=a7fcfe1c6c573ead1587c65d5bd155cb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fe%2F5791807c25be0.jpg"
                ></star-image>
            </div>
        </div>
        <p class="com-p">加载失败</p>
        <div class="com-card">
            <div :style="{ display: 'flex',	justifyContent: 'space-around' }">
                <star-image src="xx.png"></star-image>
                <star-image src="xx.png">
                    <template #error>
                        <star-icon name="picture-o" color="#cdcdcd" size="20"></star-icon>
                    </template>
                </star-image>
            </div>
        </div>
        <p class="com-p">剪切模式</p>
        <div class="com-card">
            <div>
                <star-image
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597575842097&di=f8970b124647e273e71ff85901357740&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201505%2F03%2F1905264kp1k1ns5pph444v.jpg"
                    fit="cover"
                ></star-image>
                <star-image
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597575842097&di=f8970b124647e273e71ff85901357740&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201505%2F03%2F1905264kp1k1ns5pph444v.jpg"
                    fit="contain"
                ></star-image>
                <star-image
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597575842097&di=f8970b124647e273e71ff85901357740&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201505%2F03%2F1905264kp1k1ns5pph444v.jpg"
                    fit="fill"
                ></star-image>
                <star-image
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597575842097&di=f8970b124647e273e71ff85901357740&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201505%2F03%2F1905264kp1k1ns5pph444v.jpg"
                    fit="scale-down"
                ></star-image>
                <star-image
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597575842097&di=f8970b124647e273e71ff85901357740&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201505%2F03%2F1905264kp1k1ns5pph444v.jpg"
                    fit="none"
                ></star-image>
            </div>
        </div>
    </div>
</template>
<style scoped>
.com-card div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
.com-card div:first-child > * {
    margin-bottom: 10px;
}
</style>