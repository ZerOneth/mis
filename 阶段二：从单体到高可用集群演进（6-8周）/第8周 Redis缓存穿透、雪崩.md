# Redis缓存穿透、雪崩
当缓存这种大量的key在同一时间失效，此时正好又有大量流量，因为redis缓存失效，这些大量的请求将直接打到数据库
![缓存雪崩](../static/images/004.png)

## 雪崩预防
- key永不过期
- 过期时间错开 
- 多缓存结合 如：redis->memcache->databbase
- 买第三方的Reids
    - 阿里云的Redis