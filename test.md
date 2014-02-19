
<style>
.center {
  text-align: center;
}
</style>


# OmniGraffle手册

移动对象

要移动一个对象,使用[选择工具]单击并拖动该对象到一个新的位置. 如果你想要移动线条,you might have to detach its end points from any objects they’re attached to. 要水平或者垂直移动一个对象,拖动的时候同时按住[Shift]

要旋转一个对象,安装[⌘]同时拖动选择的把手
你也可以同时按住[Shift]以15°增量旋转

TODO::实现Macbook pro多点触控板上的旋转动作

1. 功能检测, 检测当前设备是否支持多点触控
2. 浏览器API实现差异处理


## 缩放对象

[Shift] 保持对象的宽高比
[Option] 以对象的中心点作为锚点缩放
[Shift+Option] 保持对象的矿高比,同时以对象的中心点作为锚点缩放
[⌘] 旋转对象


如果你选中表格,表格四条边的中心点会显示一个[网格]图标,拖动网格图标向指定方向复制行或列

## 使用Pen工具绘制图形

Page.45

## 画布


画布边栏默认为打开, 列出了文档中的所有画布. 有多个选项来隐藏和显示画布:

在工具栏点击 **Hide/Show Sidebar** 按钮
选择菜单栏 **View > Hide/Show Sidebar**
使用 **Option+⌘+1** 快捷键

在边栏上单击画布的名称或单击预览图表可选择画布, 同时被选中的画布呈现蓝色边框, 画布中的任何对象就显示在位于OmniGraffile中间的工作区窗口内

每个画布都有一个标题,一个多层菱形下拉菜单显示画布中的层, 已经一个预览图

*   要选择一个画布,点击它的名称或则预览图,画布出现在工作窗口中, 可以在画布中添加对象或编辑对象
*   要重命名一个画布,双击位于边栏中的画布的名称
*   要创建一个新的画布,点击位于边栏底部的创建新画布按钮
*   要删除一个画布,选择位于边栏中的画布:
    * 按下 **Delete** 键
    * 选择菜单 **Edit > Canvases > Delete**
    * 按住 **Control** 键同时单击画布图表,从上下文菜单中选择 **Delete Canvas**
    * 从边栏的底部,点击动作按钮(齿轮图标)选择 **Delete Canvas**

注意:
任何文档都至少需要一个画布, 所以最后一个画布是不能删除的

画布可以通过拖动的方式改变它们的顺序, 可以在文档间复制画布

要改变一个画布的样式属性, 首先单击选择边栏中的画布, 然后使用 Canvas inspector(⌘–4) 来改变它的样式或其他属性, 比如尺寸, 单位, 网格已以及是否自动布局

## 在画布上创建和定位参考线

当在画布上编辑对象的时候,通常会使用参考线来对齐画布中的对象. 参考线可以通过选择菜单栏的(View > Rulers)命令或使用组合键(⌘-R)打开. 从水平标尺可以拖出水平参考线,从垂直标尺可以拖出垂直参考线到画布中.要精确地定位参考线,可以放大画布到像素级别, 这在创建用户界面圆形图的时候, 甚至在家庭或办公室空间布局方面, 是非常有帮助的.

如果你单击Guides图标(位于画布右侧的粉色方框), 可以以固定间隔,精确定位的方式创建一系列的参考线, Horizonal Guides为水平参考系, Vertical Guides为垂直参考线

![在画布上创建和定位参考线](https://raw.github.com/developerworks/omnigraffile-6-manual/master/images/createing_guides.png)

可以给参考线设置一个默认颜色, 也可以给参考线分别设置不同的颜色, 这在有不同颜色组成的背景图的时候特别有用,点击参考线设置弹出菜单右上角的图表,可以切换参考线是否可见, 或锁定参考线的位置(不能用鼠标拖动了)

## 层


层用于组织画布中的对象,每个画布至少必须有一个层,可以按需要添加任意数量的层, OmniGraffile中的层的概念和Photoshop中层的概念是高度相似的,如果你熟悉Photoshop那么在OmniGraffile中使用层是非常顺手的事情. 默认情况,层是隐藏的,可以单击画布预览图旁边的[菱形]图标显示和隐藏层,每个层都有一个预览图显示层中的内容,以及一个标题文本, 标题文本下为四个图标按钮

## Sharing Layers with Multiple Canvases (Pro)

You can share a layer between multiple canvases. That way, whenever you change the layer, it affects every canvas that uses that layer.

To share a layer between canvases, select the layer and then:

* Choose **Edit > Layer Settings > Shared Layer**
* Under the layer’s title, click the **Shared Layer** icon

When a layer is shared, the title turns orange and an orange tint is added
to the layer’s preview image.

![共享层](https://raw.github.com/developerworks/omnigraffile-6-manual/master/images/shared-layers.png)

To create a new shared layer:

* Choose **New Shared Layer** from the **Action Menu** at the bottom of the canvases sidebar. 
* Choose **Edit > Layers > New Shared Layer**

After creating (or designating an existing layer as) a new shared layer:

* Add and edit objects on the layer normally.
* Any further changes you make to any copy of the layer are also applied to all other copies of it.

Objects on shared layers, the corresponding items in the list sidebar, and shared layer previews in the canvases sidebar all appear in the distinctive shared layer color, to remind you that you could be affecting many canvases if you edit them.

To delete a shared layer, select the shared layer and:

* Press the Delete key
* Choose Edit > Delete from the menu Bar
* Control-click on the shared layer and select Delete Layer in the contextual menu
* Select Delete Layer from the Action Menu at the bottom of the sidebar

There is also a Delete [layer name] from All Canvases option that, when chosen, removes that shared layer from every canvas in your project.

## Contents

The Contents portion of the Sidebar offers three different ways to create, view, and edit the objects in your projects: List View, Outline Editor, and Selection Matrix.

![内容](https://raw.github.com/developerworks/omnigraffile-6-manual/master/images/contents.png)

To switch between the different sections of the Contents sidebar, you can either click on the buttons in the header row for the Contents sidebar, or:

* List View:
    * Choose **View > Show Contents > List View**
    * Use the **Option-⌘–2** keyboard shortcut
* Outline Editor:
    * Choose View > Show Contents > Outline Editor
    * Use the Option-⌘–3 keyboard shortcut
* Selection Matrix:
    * Choose View > Show Contents > Selection Matrix
    * Use the Option-⌘–4 keyboard shortcut































