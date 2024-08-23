import dayjs from 'dayjs';
import { Telegraf } from 'telegraf';

// 从环境变量中读取配置
const TOKEN = process.env.TOKEN;
const CHANNEL_ID_1 = process.env.CHANNEL_ID_1; // Telegram 频道 ID

const IMAGE_URL = 'https://app.iwanshare.club/uploads/20240814/cf643ec476d0a9afff266f7a18695bea.jpg'; // 替换成实际的图片链接

const bot = new Telegraf(TOKEN);

async function sendTgMessage() {
  const htmlContent = `
    <b>每日消息</b>\n
    这是一个固定的 HTML 格式的消息内容。<br>\n
    <ul>\n
      <li><a href="https://www.baidu.com">项目1</a></li>\n
      <li>项目2</li>\n
      <li>项目3</li>\n
    </ul>
  `;

  try {
    // 发送图片和 HTML 格式的内容到第一个频道
    await bot.telegram.sendPhoto(CHANNEL_ID_1, IMAGE_URL, {
      caption: '请查看以下内容：',
      parse_mode: 'HTML',
    });

    await bot.telegram.sendMessage(CHANNEL_ID_1, htmlContent, {
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
