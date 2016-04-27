# You-Don't-Need-jQuery-Assessment

## Introduce

由于我目前不知道如何在 Node.js 环境下模拟 DOM 操作，所以测试环境得在浏览器端。目前的设想是在 answer.js 回答，通过比较 jQuery 和 Native 执行结果来判断测试是否通过。

对于页面来说，一个是展示结果页，一个是测试页面，该页面会提供一些 HTML 元素，用于测试。目前是将两个页面融为一块的。目前尚未想到分开的方法以及分开的必要性。

另外，对于 index.html，目前主要是 div#mocha 来输出测试结果，可能需要进一步查文档来了解其他细节，比如 div#message 等

document.getElement... 等操作应该限定在 div#test 中
