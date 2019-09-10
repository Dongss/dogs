# Shaoshuai Dong's resume

## Basic Infomation

* Name: Shaoshuai Dong
* Institutions and majors: Shanghai University of Finance, Computer Science and Technology, Bachelor
* Graduation time: 2015.6
* Date of birth: 1992.02.26
* Age: 27
* Tel: 15618513060
* E-mail: dongsoso@hotmail.com
* Birthplace: Yantai, Shandong
* Political appearance: Party members
* Working years: 4 years
* Current status: Resignation  (NIO 蔚来汽车)
* Desired position: Backend development (NodeJS/Go)

## Reference

* github: https://github.com/Dongss
* Blog (new): https://github.com/Dongss/dogs/
* Blog (old): http://blog.csdn.net/dongshaoshuai

## Professional Skill

Development Language: NodeJS, TypeScript, Golang

Skilled use: Linux, Docker, GraphQL, Mysql, MongoDB, Rancher, Redis, GRPC, Websocket, Kafka, Graylog

Self-summary:

* Independently complete NodeJS/Golang back-end project system construction development and deployment operation and maintenance
* Leading Docker containerized migration experience, significantly reducing operation and maintenance costs and risks
* Have experience in collecting department log collection and alarms, and uniformly store query alarms.
* Can take part in DevOps work
* Have good development practices and habits
* Good at discovering new technologies and applying them to practical work

## work experience:

* 2018.03-present [NIO](https://www.nio.cn/) Data Service Backend Engineer
* 2017.07-2018.03 [UnionPaySmart](https://www.unionpaysmart.com/) Nodejs back-end engineer
* 2014.10-2017.07 [UCloud](https://www.ucloud.cn/) Nodejs back-end engineer

## Main project experience

The following is reversed by time:

### NIO Intelligent customer service multi-round session engine

2019

Project Introduction:

Intelligent customer service multi-round session engine, responsible for the state machine of session task scheduling, interacting with AI, intent recognition, internal system, etc., and dialogue with customers. (not online)

Responsibilities: Main backend development

Using technology: Golang, Docker, MongoDB

Details: Use Golang to develop multiple rounds of task engines. The engine has a separate background configuration page to configure the dialog flow. The data is stored in MongoDB and is based on Docker deployment. Mainly responsible for module design, storage data structure design and engine development.

### NIO Report in the middle

2018, 2019

Project Introduction:

The company-level reporting system, mobile and PC, docks big data processing terminals and provides configurable visual reports.

The whole is based on ECharts' data visualization system. The NodeJS server supports mobile (Enterprise WeChat) reports. The visualization provides configuration pages for users to configure reports, decouples the data processing layer, and provides HTTP interface, Kafka push, and initiative. Pull and other methods. And provide permissions control, summary statistics, social and other functions around the report.

Responsibilities: Back-end microservices build and development

Using technology: NodeJS, Golang, Docker, Rancher, Kafka, MongoDB, Graylog, Prometheus

Details: Based on Docker deployment, Container management by Rancher, Graylog is responsible for log collection and log alerting, and Prometheus provides metric monitoring and alerting. Responsible for major architectural design, microservice module partitioning, deployment implementation, and partial backend development.

### UnionPay Smart Advertising System

2017

Project Introduction:

A system for managing ad serving, creating orders, serving ads, and more.

Responsibilities: Backend development

Using technology: NodeJS, TypeScript, MySQL, Redis

### UnionPay Wisdom Privilege System

2017

Project Introduction:

The role-based authority control system is used to control user login rights and operation rights, and is a permission system based on the RBAC model.

Responsibilities: Backend development

Using technology: NodeJS, TypeScript, MySQL

### UCloud uworkflow Products

2017

Project Introduction:

Cloud workflow engine, easy to integrate with cloud services (not online)

The core of the system is based on redis ttl to control job execution, based on historical search of elasticsearch, based on Conductor can achieve millions of concurrent scheduling.

Responsibilities: Backend development

Using technology: NodeJS, Conductor, Docker, Redis, ardb, LevelDB

### UCloud uautoscaling Products

2016, 2017

Project Introduction:

Ucloud auto-scaling products help customers automatically scale cluster size or bandwidth. Can be actively adjusted, automatically adjusted by load, timing adjustment.

The system itself is a state machine-based task scheduling system. The dispatching center is responsible for managing and responding to the scaling policy. The task is sent through the message queue, and the worker needs to perform the operations that need to be performed.

Service discovery and service registration through zookeeper, with active and standby, and the main owner is highly available.

Responsibilities: Main research and development, main person in charge of products

Using technology: NodeJS, TypeScript, Docker, Mysql, Rancher, Zookeeper, LevelDB, Graylog, Prometheus, RabbitMQ

### UCloud support Platform

2015, 2016

Project Introduction:

Internal system, divided into three subsystems: case, alarm, and ticket. The goal is to help technical support solve customer problems faster and better. Provide SPT personnel with access to view, operation, and process for troubleshooting issues.

Responsibilities: full stack development and maintenance

Using technology: NodeJS, Mysql, JQuery, VueJS, MongoDB