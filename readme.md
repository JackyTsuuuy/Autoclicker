## Purpose  
* 本插件脚本目的旨在缓解前端页面的重复点击劳动，如投票，选课，秒杀抢购等
* 本脚本需配合tampermonkey插件使用  
* 插件地址：https://tampermonkey.net/  
* 新建->将代码复制进去->保存即可  

## Usage  
1. 这里用天猫做一个简单的例子  
2. 找到你想点击的按钮  
3. 按下'f12'打开浏览器的'开发者工具'  
4. 点击 元素选择 工具  
5. 选定要点击的按钮  
![1](https://github.com/JackyTsuuuy/Autoclicker/blob/master/1.png)
6. 假设这里使用方式四xpath，选中高亮的代码，右键->'copy'->'copy xpath'
7. 将代码填入str_xpath后的引号内，保存，再刷新页面就可自动点击了
![2](https://github.com/JackyTsuuuy/Autoclicker/blob/master/2.png)
8. 默认的间隔为1s（1000ms),可以在上方的cyce值中进行调节
9. 这里提供了4种常用的定位元素的模板，可直接修改相应的变量值使用，更复杂的点击逻辑，可自行修改编写  

---

**Contributors：**  
* [c0ny1](https://github.com/c0ny1)  
* [JackyTsuuuy](https://github.com/JackyTsuuuy)  