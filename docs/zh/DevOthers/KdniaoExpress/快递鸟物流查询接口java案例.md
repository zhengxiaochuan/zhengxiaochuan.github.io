# 快递鸟物流查询接口java案例

> 对接快递鸟物流API案例的全部代码都贴出来了，复制粘贴即可上手，需要注意配置文件数据一定要准确，1个配置文件，2个实体类，1个接口，1个接口实现类，总共5个文件。



## 1、配置文件

- propertise文件

```properties
# 快递鸟   配置
# 用户ID，快递鸟提供
kdniao.eBusinessID=
# API key，快递鸟提供
kdniao.apiKey=
# 请求url
kdniao.reqURL=https://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx
```



## 2、快递鸟 返回参数实体类

`集成了Lombok插件`，没有集合的小伙伴手动生成get\set方法。

- 引入Maven

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.16.18</version>
    <scope>provided</scope>
</dependency>
```

- Traces 实体类

```java
package common.api.kdniao;

import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;

/**
 * 快递鸟 返回参数实体类  轨迹描述对象
 *
 * @author Ryu
 */
@Getter
@Setter
public class Traces implements Serializable {

    private static final long serialVersionUID = 16357363409066330L;

    /**
     * 轨迹发生时间，示例：
     * 2021-01-01 09:00:00
     */
    private String AcceptTime;

    /**
     * 轨迹描述
     */
    private String AcceptStation;
    /**
     * 当前城市
     */
    private String Location;
    /**
     * 增值物流状态：0-暂无轨迹信息
     * 1-已揽收,2-在途中,201-到达派件城市,202-派件中,211-已放入快递柜或驿站
     * 3-已签收,301-正常签收,302-派件异常后最终签收,304-代收签收,311-快递柜或驿站签收
     * 4-问题件,401-发货无信息,402-超时未签收,403-超时未更新,404-拒收(退件),405-派件异常,406-退货签收,407-退货未签收,412-快递柜或驿站超时未取
     * 10-待揽件
     */
    private String Action;
}
```



- KdniaoResponse 实体类

```java
package common.api.kdniao;

import java.io.Serializable;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

/**
 * 快递鸟 返回参数  对象
 *
 * @author Ryu
 */
@Getter
@Setter
public class KdniaoResponse implements Serializable {
    private static final long serialVersionUID = 16357363409066330L;

    /**
     * 用户 ID
     */
    private String EBusinessID;
    /**
     * 订单编号
     */
    private String OrderCode;
    /**
     * 快递公司编码
     */
    private String ShipperCode;
    /**
     * 快递单号
     */
    private String LogisticCode;
    /**
     * 成功与否(true/false)
     */
    private Boolean Success;
    /**
     * 普通物流状态：0-暂无轨迹信息;1-已揽收;2-在途中;3-签收;4-问题件
     */
    private String State;
    /**
     * 增值物流状态：
     * 0-暂无轨迹信息;1-已揽收;2-在途中;201-到达派件城市;202-派件中;211-已放入快递柜或驿站
     * 3-已签收;301-正常签收;302-派件异常后最终签收;304-代收签收;311-快递柜或驿站签收
     * 401-发货无信息;402-超时未签收;403-超时未更新;404-拒收(退件);405-派件异常;406-退货签收;407-退货未签收;412-快递柜或驿站超时未取;
     * 10-待揽件
     */
    private String StateEx;
    /**
     * 所在城市
     */
    private String Location;
    /**
     * 轨迹信息
     */
    private List<Traces> Traces;
}
```



## 3、接口

```java
package common.api.kdniao;

import basic.exception.BusinessException;
/**
 * 快递鸟 接口  
 *
 * @author diudiu
 */
public interface Kdniao {

    /**
     * 快递鸟 -- 即时查询接口( 增值版)
     *
     * @param ShipperCode 快递公司编码
     * @param LogisticCode 快递单号
     * @param CustomerName ShipperCode 为 SF 时必填，对应寄件人/收件人手机号后四位；
     * @return
     */
    KdniaoResponse getLogisticsInfo(String ShipperCode, String LogisticCode, String CustomerName) throws BusinessException;
}
```

## 4、接口实现类Impl

```java
package common.api.kdniao.impl;

import basic.exception.BusinessException;
import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;
import common.api.kdniao.Kdniao;
import common.api.kdniao.KdniaoResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.security.MessageDigest;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * 快递鸟 物流查询
 *
 * @author diudiu
 */
@Service
public class KdniaoImpl implements Kdniao {

    //用户ID，快递鸟提供，注意保管，不要泄漏
    @Value("${kdniao.eBusinessID:}")
    private String EBusinessID;//即用户ID，登录快递鸟官网会员中心获取 https://www.kdniao.com/UserCenter/v4/UserHome.aspx
    //API key，快递鸟提供，注意保管，不要泄漏
    @Value("${kdniao.apiKey:}")
    private String ApiKey;//即API key，登录快递鸟官网会员中心获取 https://www.kdniao.com/UserCenter/v4/UserHome.aspx
    //请求url, 正式环境地址
    @Value("${kdniao.reqURL:}")
    private String ReqURL;

    public static void main(String[] args) {
        try {
            KdniaoImpl api = new KdniaoImpl();
            KdniaoResponse SS = api.getLogisticsInfo("SF", "SF1325964624374", "7118");

            //根据公司业务处理返回的信息......

            System.out.println();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 即时查询接口( 增值版)
     *
     * @param shipperCode 快递公司编码
     * @param logisticCode 快递单号
     * @param customerName ShipperCode 为 SF(顺丰)时必填，对应寄件人/收件人手机号后四位；
     * @return
     */
    @Override
    public KdniaoResponse getLogisticsInfo(String shipperCode, String logisticCode, String customerName)
            throws BusinessException {
        // 组装应用级参数
        String RequestData =
                "{'CustomerName': '" + customerName + "','ShipperCode':'" + shipperCode + "','LogisticCode':'"
                        + logisticCode + "','Sort ':'" + 1 + "',}";
        System.out.println(RequestData.toString());
        // 组装系统级参数
        Map<String, String> params = new HashMap<String, String>();
        params.put("RequestData", urlEncoder(RequestData, "UTF-8"));
        params.put("EBusinessID", EBusinessID);
        params.put("RequestType", "8001");//免费即时查询接口指令1002/在途监控即时查询接口指令8001/地图版即时查询接口指令8003
        String dataSign = encrypt(RequestData, ApiKey, "UTF-8");
        params.put("DataSign", urlEncoder(dataSign, "UTF-8"));
        params.put("DataType", "2");
        // 以form表单形式提交post请求，post请求体中包含了应用级参数和系统级参数
        String result = sendPost(ReqURL, params);
        return com.alibaba.fastjson.JSONObject.parseObject(result, KdniaoResponse.class);
    }

    /**
     * MD5加密
     * str 内容
     * charset 编码方式
     *
     * @throws Exception
     */
    @SuppressWarnings("unused")
    private String MD5(String str, String charset) throws Exception {
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(str.getBytes(charset));
        byte[] result = md.digest();
        StringBuffer sb = new StringBuffer(32);
        for (int i = 0; i < result.length; i++) {
            int val = result[i] & 0xff;
            if (val <= 0xf) {
                sb.append("0");
            }
            sb.append(Integer.toHexString(val));
        }
        return sb.toString().toLowerCase();
    }

    /**
     * base64编码
     * str 内容
     * charset 编码方式
     *
     * @throws UnsupportedEncodingException
     */
    private String base64(String str, String charset) throws BusinessException {
        String encoded = null;
        try {
            encoded = Base64.encode(str.getBytes(charset));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            throw new BusinessException("base64编码异常");
        }
        return encoded;
    }

    @SuppressWarnings("unused")
    private String urlEncoder(String str, String charset) throws BusinessException {
        String result = null;
        try {
            result = URLEncoder.encode(str, charset);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            throw new BusinessException("base64编码异常");
        }
        return result;
    }

    /**
     * 电商Sign签名生成
     * content 内容
     * keyValue ApiKey
     * charset 编码方式
     *
     * @return DataSign签名
     * @throws UnsupportedEncodingException ,Exception
     */
    @SuppressWarnings("unused")
    private String encrypt(String content, String keyValue, String charset) throws BusinessException {
        try {
            if (keyValue != null) {
                return base64(MD5(content + keyValue, charset), charset);
            }
            return base64(MD5(content, charset), charset);
        } catch (Exception e) {
            e.printStackTrace();
        }

        throw new BusinessException("签名异常");
    }

    /**
     * 向指定 URL 发送POST方法的请求
     * url 发送请求的 URL
     * params 请求的参数集合
     *
     * @return 远程资源的响应结果
     */
    @SuppressWarnings("unused")
    private String sendPost(String url, Map<String, String> params) {
        OutputStreamWriter out = null;
        BufferedReader in = null;
        StringBuilder result = new StringBuilder();
        try {
            URL realUrl = new URL(url);
            HttpURLConnection conn = (HttpURLConnection) realUrl.openConnection();
            // 发送POST请求必须设置如下两行
            conn.setDoOutput(true);
            conn.setDoInput(true);
            // POST方法
            conn.setRequestMethod("POST");
            // 设置通用的请求属性
            conn.setRequestProperty("accept", "*/*");
            conn.setRequestProperty("connection", "Keep-Alive");
            conn.setRequestProperty("user-agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
            conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            conn.connect();
            // 获取URLConnection对象对应的输出流
            out = new OutputStreamWriter(conn.getOutputStream(), "UTF-8");
            // 发送请求参数
            if (params != null) {
                StringBuilder param = new StringBuilder();
                for (Map.Entry<String, String> entry : params.entrySet()) {
                    if (param.length() > 0) {
                        param.append("&");
                    }
                    param.append(entry.getKey());
                    param.append("=");
                    param.append(entry.getValue());
                    System.out.println(entry.getKey() + ":" + entry.getValue());
                }
                System.out.println("param:" + param.toString());
                out.write(param.toString());
            }
            // flush输出流的缓冲
            out.flush();
            // 定义BufferedReader输入流来读取URL的响应
            in = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
            String line;
            while ((line = in.readLine()) != null) {
                result.append(line);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        //使用finally块来关闭输出流、输入流
        finally {
            try {
                if (out != null) {
                    out.close();
                }
                if (in != null) {
                    in.close();
                }
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
        return result.toString();
    }
}
```





参考链接：[https://blog.csdn.net/tiantian929/article/details/122563714](https://blog.csdn.net/tiantian929/article/details/122563714)
