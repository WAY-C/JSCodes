// 转换 HTML 字符实体
// 请将字符串中的 &、<、>、"（双引号）和 '（单引号）转换为相应的 HTML 字符实体。
function convertHTML(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&apos;",
        '"': "&quot;"
    }
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

convertHTML("Dolce & Gabbana");