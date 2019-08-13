# 董少帅的简历

## 基本信息

* 姓名：董少帅
* 院校与专业：上海金融学院，计算机科学与技术，学士
* 毕业时间： 2015.6
* 出生年月：1992.02.26
* 年龄：27
* 电话：15618513060
* 邮箱：dongsoso@hotmail.com
* 籍贯：山东烟台
* 政治面貌：党员
* 工作年限：4年
* 目前状态：在职（蔚来汽车）
* 期望职位：后端开发（NodeJS/Go）

## 链接

* github：https://github.com/Dongss
* 博客（新）：https://github.com/Dongss/dogs/
* 博客（旧）：http://blog.csdn.net/dongshaoshuai

## 专业技能

开发语言： NodeJS, TypeScript, Golang

熟练使用：Linux, Docker, GraphQL, Mysql, MongoDB, Rancher, Redis, GRPC, Websocket, Kafka, Graylog

自我总结：

* 可独立完成 NodeJS/Golang 后端项目体系搭建开发和部署运维
* 有主导Docker容器化迁移经验
* 有完成部门日志收集和告警工作经验
* 可承担部分 DevOps 工作
* 具有良好的开发规范和习惯
* 善于发现研究新技术并应用到实际工作

## 工作经历：

* 2018.03-至今 [蔚来汽车](https://www.nio.cn/) 数据服务工程师
* 2017.07-2018.03 [银联智慧](https://www.unionpaysmart.com/) Nodejs工程师
* 2014.10-2017.07 [UCloud](https://www.ucloud.cn/) Nodejs工程师

## 项目经验

以下按时间倒序：

### 蔚来汽车 智能客服多轮会话引擎

2019

项目介绍：

智能客服多轮会话引擎，负责会话任务调度的状态机，与 AI、意图识别、内部系统等交互，与客户进行对话。（未上线）

职责： 主要后端开发

使用技术：Golang, Docker, MongoDB

详细：使用 Golang 开发多轮任务引擎，引擎有单独后台配置页面配置对话流程，数据存储在 MongoDB，基于 Docker 部署。

### 蔚来汽车 报表中台

2018, 2019

项目介绍：

公司级别的报表系统，移动端、PC端，对接大数据处理端，提供可配置的可视化报表。

整体是基于ECharts的数据可视化系统，NodeJS 服务端支撑移动端(企业微信) 报表，可视化方面提供配置页面供用户配置报表，数据方面提供 HTTP 接口、Kafka 推送、 主动拉取等多种方式。并围绕报表提供权限控制、总结统计、社交等功能。

职责：后端微服务搭建和开发

使用技术：NodeJS, Golang, Docker, Rancher, Kafka, MongoDB, Graylog, Prometheus

详细：基于 Docker 部署，Rancher 做的容器管理，Graylog 负责日志收集和日志告警，Prometheus 提供指标监控和告警。

### 银联智慧 广告投放系统

2017

项目介绍：

用于管理广告投放的系统，创建订单、投放广告等。

职责：后端开发

使用技术：NodeJS, TypeScript, MySQL, Redis

### 银联智慧 权限系统

2017

项目介绍：

基于角色的权限控制系统，用于控制用户登陆权限、操作权限，是基于RBAC模型拓展的权限系统。

职责：后端开发

使用技术：NodeJS, TypeScript, MySQL

### UCloud uworkflow 产品

2017

项目介绍：

云端工作流引擎，简单配制即可与云端服务深度集成（未上线）

系统核心是基于redis的ttl来控制job执行，基于elasticsearch的历史任务搜索，基于Conductor可以做到百万级的并发调度。

职责：研发

使用技术：NodeSJ，Conductor, Docker，Redis, ardb, LevelDB

### UCloud uautoscaling 产品

2016, 2017

项目介绍：

ucloud自动伸缩产品，帮助客户自动伸缩集群规模或带宽大小。可主动调整、按负载自动调整、定时调整。

系统本身是一个基于状态机的任务调度系统，由调度中心负责管理和响应伸缩的策略，通过消息队列发送任务，由 worker 完成需要执行的操作。

职责：主要研发，产品主要负责人

使用技术：NodeJS, TypeScript, Docker, Mysql, Rancher, Zookeeper, LevelDB, Graylog, Prometheus, RabbitMQ

### UCloud support 平台

2015, 2016

项目介绍：

内部系统，分case，alarm，ticket三个子系统，目标是帮助技术支持更快更好的解决客户问题。为SPT人员提供查看、操作的入口，和排查问题的流程。

职责：全栈开发、维护

使用技术：NodeJS, Mysql, JQuery, VueJS, MongoDB
