# 服务容器化 - Docker
## 微服务的落地需求
- 环境需求差异大：CPU业务型、GPU计算型、高吞吐I/O型
- 服务敏捷要求高：成百上千、快速启动、优雅停止

## 服务容器化的三大优势和助力
### 三大助力
- 码头林立：各种软件界平台层出不穷
- 微服务：高内聚、低耦合、分钟启停和部署
- 康威定律：组织决定上层建筑

## 编排技术
- Kubernetes(K8S)
- Mesos + Marathon
- Docker Swarm

## Docker本质
- 微小化(所有镜像非常小)
- 敏捷（启停快速敏捷）
- 通用（集装箱通用化）

### HelloWorld
```bash
docker run hello-world
```

### Redis高速缓存服务
```bash
docker run -d redis:3.2 redis-server
```
-d 以后台方式运行

### Nginx高性能HTTP&方向代理服务器
```bash
docker run -d -p 80:80 nginx
```

## Docker Client / Server 架构
### Client(客户端)：
- Docker命令 - `docker`
- Docker API

### Server(服务器)
- Docker Daemon - dockerd 
- Docker Daemon 配置文件
```bash
/etc/systemd/system/docker.service.d/
/etc/systemd/system/docker.service
/lib/systemd/system/docker.service
```

### 镜像仓库
- Docker Hub - Docker官方公有仓库（国内借助仓库加速器或者国内镜像）
- Docker Datacenter - Docker信任仓库
- Docker私有仓库

### 镜像
容器静态的文件
- Docker命令 - `docker commit`
- 构建文件 - Dockerfile

### 容器
- 隔离 - namespace(pid, net, ipc, mnt, uts)
- 限制 - cgroup(cpu、men， io)
- 文件系统 - UnionFS（AUFS, btrfs, vfs, DeviceMapper）

# Docker 环境搭建
## 脚本准备并执行
下载脚本
```bash
curl -fsSl get.docker.com -o get-docker.sh
```
执行脚本，并且制定阿里云的镜像源
```bash
sh get-docker.sh --mirror Aliyun
```
建议：重新刷`daemon-reload`在重启服务

重新刷新daemon-reload
```bash
systemctl daemon-reload 
```
重启docker服务
```bash
systemctl restart docker
```
查看docker版本
```bash
docker --version
```

