# Linux单节点部署KubeSphere

## 1、开通服务器

4c8g；centos7.9；防火墙放行  30000~32767；指定hostname

```bash
hostnamectl set-hostname node1
```

  

## 2、安装

**1、准备KubeKey**

```bash
export KKZONE=cn


curl -sfL https://get-kk.kubesphere.io | VERSION=v1.1.1 sh -

chmod +x kk
```

**2、使用KubeKey引导安装集群**

```bash
#可能需要下面命令
yum install -y conntrack

./kk create cluster --with-kubernetes v1.20.4 --with-kubesphere v3.1.1
```



## 3、安装后开启功能

![img](https://cdn.nlark.com/yuque/0/2021/png/1613913/1631525467822-eb4ae77a-b77b-4c4b-81b6-b0275d18f33d.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_49%2Ctext_YXRndWlndS5jb20gIOWwmuehheiwtw%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)



