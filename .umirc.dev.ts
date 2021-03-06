const { UMI_ENV } = process.env;

export default {
    define: {
        DOMAIN: "https://xxx.xxx.com",
        TYPE: 'dev'
    },
    outputPath: UMI_ENV === 'dev' ? 'dev' : 'dist', // 打包到不同文件夹
};