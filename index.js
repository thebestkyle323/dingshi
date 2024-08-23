import { Telegraf } from 'telegraf';

// 从环境变量中读取配置
const TOKEN = process.env.TOKEN;
const CHANNEL_ID_1 = process.env.CHANNEL_ID_1; // Telegram 频道 ID

const IMAGE_URL = 'https://app.iwanshare.club/uploads/20240823/daa5482498fc93302a3b91af395fc091.png'; // 替换成实际的图片链接

const bot = new Telegraf(TOKEN);

async function sendTgMessage() {
  const htmlContent = `
    <b>苹果全权限UDID证书</b><a href="https://docs.qq.com/doc/DRlByYkFobFdGTE9Z">教程合集</a>\n
    
    证书支持：\n
    官微和多开微信无后台消息推送\n
    支持支付宝修改步数\n
    
    秒出证书（证书秒出，掉签秒补）\n
    质保1年:110，质保半年:90，质保30天:50，无质保:35\n
    预约证书（一般72小时出证书）\n
    质保1年:60，质保30天:30，无质保:15\n
    
    爱玩小店：<a href="https://m.iwanshare.club">证书购买</a>\n
    证书签名：<a href="https://udid.iwanshare.club">点击前往</a>\n

    <b>限时特惠，凡购买110和60年质保用户均送ipad证书一个</b>
  `;

  try {
    // 发送图片和 HTML 格式的内容到第一个频道
    await bot.telegram.sendPhoto(CHANNEL_ID_1, IMAGE_URL, {
      caption: htmlContent, // HTML 内容作为图片的 caption 发送
      parse_mode: 'HTML',
    });

    console.log('消息已发送');
  } catch (err) {
    console.error('发送消息失败:', err);
    process.exit(1); // 失败时退出并报告错误
  }
}

sendTgMessage().then(() => {
  console.log('脚本执行完毕');
  process.exit(0); // 成功时退出
});
