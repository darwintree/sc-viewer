# readme

## 项目结构

- 基础项目结构 vue
- scripts workflow脚本和本地脚本
  - workflow脚本 定期执行 从Translation Data仓库获取项目结构。更新idol-info。重新部署
  - 本地脚本 更新部分图片文件 这部分的自动更新由服务器完成（或手动完成）并且自动部署。这部分的更新是可选的，不更新也只会影响样式，但是对可用性没有影响

## TODOS

### 项目结构重构

项目结构：脚本部分、静态文件部分、router部分、vuex部分

### 页面风格

点开偶像页面后 右侧是偶像简介 附有链接 如萌娘百科 wikiwiki
左侧是所有剧情 有icon 所有card平铺 按照时间顺序排序 没有的卡片暂时空着
点开会弹出抽屉
抽屉中包含所有章节（有默认的数个排序规则，用户也可以自行排序）
**汉化组帮助：排序文件、对话选项、非文字内容**
点开对应的章节进入阅读页 文本居中
最下方可以点击下一章节/上一章节
返回上一级时会自动展开抽屉

### 自动化

自动化从翻译仓库获取目录结构，更新索引文件

### 在线更正并下载csv

可以对部分内容进行更正 更正后可以下载更正后的csv

### others

- [ ] 重构
- [x] 面包屑导航
- [ ] 切换源
- [ ] 部署
- [ ] 在线更正并下载csv
- [ ] 选项的问题
- [x] 其他剧情跳转
