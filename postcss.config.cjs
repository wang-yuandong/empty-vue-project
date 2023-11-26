module.exports = {
    plugins: {
        // 兼容浏览器，添加前缀
        autoprefixer: {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8",
                "last 10 versions", // 所有主流浏览器最近10版本用
            ],
            grid: true,
        },
        "postcss-pxtorem": {
            rootValue: 16, //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
            propList: ["*"], //是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']
            unitPrecision: 5, //保留rem小数点多少位
            //selectorBlackList: ['.radius'],  //则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。
            replace: true, //这个真不知到干嘛用的。有知道的告诉我一下
            mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
            minPixelValue: 12, //px小于12的不会被转换
            // unitToConvert: 'px', // 需要转换的单位，默认为"px"
            // viewportWidth: 1920, // 设计稿的视口宽度
            // unitPrecision: 5, // 单位转换后保留的精度
            // propList: ['*'], // 能转化为vw的属性列表
            // viewportUnit: 'vw', // 希望使用的视口单位
            // fontViewportUnit: 'vw', // 字体使用的视口单位
            // selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
            // minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            // mediaQuery: false, // 媒体查询里的单位是否需要转换单位
            // replace: true, //  是否直接更换属性值，而不添加备用属性
            // exclude: undefined, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            // include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换
            // landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            // landscapeUnit: 'vw', // 横屏时使用的单位
            // landscapeWidth: 1920 // 横屏时使用的视口宽度
        },

    },
};
