var posts=["2024/02/14/2023年度总结报告/","2024/01/24/2023我的创作纪念日/","2024/02/06/CSharp学习笔记-If条件判断语句【五】/","2024/02/06/CSharp学习笔记-Switch条件判断分支语句【六】/","2024/02/16/CSharp学习笔记-循环语句【七】/","2024/03/04/CSharp学习笔记-数组的声明, 初始化与赋值【九】/","2024/03/04/CSharp学习笔记-数组的遍历【十】/","2024/02/03/CSharp学习笔记-运算符【四】/","2024/05/01/CSharp学习笔记_三个经典算法题【十四】/","2024/02/03/CSharp学习笔记_Visual Studio Code配置Csharp运行环境【一】/","2024/03/10/CSharp学习笔记_字符串的常用操作方法【十一】/","2024/02/03/CSharp学习笔记_数据类型与变量赋值【三】/","2024/03/10/CSharp学习笔记_程变量常量与作用域【十二】/","2024/05/01/CSharp学习笔记_方法(Medthod)【十六】/","2024/02/03/CSharp学习笔记_程序的基本结构【二】/","2024/05/01/CSharp学习笔记_类(Class)【十五】/","2024/02/16/CSharp学习笔记_编程练习题 _输出奇偶数, 九九乘法表, 猜数字游戏【八】/","2024/01/23/FydeOS17国产操作系统全过程安装/","2024/01/14/HarmonyOS4.0应用开发【学习笔记3：安装DevEco Studio开发环境】/","2024/04/21/Linux 之父：11 岁学习编程，21 岁开发出 Linux 操作系统，活成了多数程序员羡慕的样子/","2024/05/02/Microsoft Office 365免费激活教程【白嫖篇】/","2023/06/22/Python Socket TCP初识【一】/","2023/06/22/Python Socket TCP单线程通信【三】/","2023/06/22/Python Socket TCP多线程通信【四】/","2024/03/05/Sublime Text4代码配色自定义方案/","2023/06/22/Python Socket TCP简单通信【二】/","2024/02/24/Sublime Text4配置CSharp运行环境/","2024/01/28/Typora序列号破解【白嫖篇】/","2024/04/21/关于面向对象与面向过程的基本概念/","2024/02/24/hello-world/","2024/01/23/我的个人博客发布成功啦/","2024/01/24/文章添加标签，封面，标题，日期（Hexo）/","2024/04/21/适合写代码的5款字体【推荐】/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };