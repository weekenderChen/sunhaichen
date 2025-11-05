// 刮刮乐彩票配置文件
// 可以在后台修改每张彩票的文字、是否中奖、二维码等信息

const ticketConfig = [
  // 第1张彩票 - 示例：使用本地图片
  {
    title: "幸运刮刮乐",
    subtitle: "第一张",
    prize: "恭喜中奖！",
    hasQRCode: true,
    qrCodeUrl: "images/qrcode1.svg", // 本地SVG图片路径
    footer: "¥5.00 微信红包"
  },
  // 第2张彩票
  {
    title: "幸运刮刮乐",
    subtitle: "第二张",
    prize: "谢谢参与",
    hasQRCode: false,
    qrCodeUrl: "",
    footer: "感谢参与，继续加油！"
  },
  // 第3张彩票
  {
    title: "幸运刮刮乐",
    subtitle: "第三张",
    prize: "恭喜中奖！",
    hasQRCode: true,
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=WeChatRedPacket3",
    footer: "¥2.00 微信红包"
  },
  // 第4张彩票
  {
    title: "幸运刮刮乐",
    subtitle: "第四张",
    prize: "谢谢参与",
    hasQRCode: false,
    qrCodeUrl: "",
    footer: "感谢参与，继续加油！"
  },
  // 第5张彩票
  {
    title: "幸运刮刮乐",
    subtitle: "第五张",
    prize: "恭喜中奖！",
    hasQRCode: true,
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=WeChatRedPacket5",
    footer: "¥8.00 微信红包"
  },
  // 第6张彩票
  {
    title: "幸运刮刮乐",
    subtitle: "第六张",
    prize: "谢谢参与",
    hasQRCode: false,
    qrCodeUrl: "",
    footer: "感谢参与，继续加油！"
  },
  // 第7张彩票
  {
    title: "幸运刮刮乐",
    subtitle: "第七张",
    prize: "谢谢参与",
    hasQRCode: false,
    qrCodeUrl: "",
    footer: "感谢参与，继续加油！"
  },
  // 第8张彩票 - 示例：使用本地图片
  {
    title: "幸运刮刮乐",
    subtitle: "第八张",
    prize: "恭喜中奖！",
    hasQRCode: true,
    qrCodeUrl: "images/qrcode8.svg", // 本地SVG图片路径
    footer: "¥10.00 微信红包"
  },
  // 第9张彩票
  {
    title: "幸运刮刮乐",
    subtitle: "第九张",
    prize: "谢谢参与",
    hasQRCode: false,
    qrCodeUrl: "",
    footer: "感谢参与，继续加油！"
  },
  // 第10张彩票
  {
    title: "幸运刮刮乐",
    subtitle: "第十张",
    prize: "谢谢参与",
    hasQRCode: false,
    qrCodeUrl: "",
    footer: "感谢参与，继续加油！"
  },
  // 第11张彩票
  {
    title: "幸运刮刮乐",
    subtitle: "第十一张",
    prize: "恭喜中奖！",
    hasQRCode: true,
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=WeChatRedPacket11",
    footer: "¥3.00 微信红包"
  },
  // 第12张彩票
  {
    title: "幸运刮刮乐",
    subtitle: "第十二张",
    prize: "谢谢参与",
    hasQRCode: false,
    qrCodeUrl: "",
    footer: "感谢参与，继续加油！"
  },
  // 第13张彩票
  {
    title: "幸运刮刮乐",
    subtitle: "第十三张",
    prize: "恭喜中奖！",
    hasQRCode: true,
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=WeChatRedPacket13",
    footer: "¥1.00 微信红包"
  },
  // 第14张彩票
  {
    title: "幸运刮刮乐",
    subtitle: "第十四张",
    prize: "谢谢参与",
    hasQRCode: false,
    qrCodeUrl: "",
    footer: "感谢参与，继续加油！"
  },
  // 第15张彩票 - 示例：使用本地图片
  {
    title: "幸运刮刮乐",
    subtitle: "第十五张",
    prize: "恭喜大奖！",
    hasQRCode: true,
    qrCodeUrl: "images/qrcode15.svg", // 本地SVG图片路径
    footer: "¥20.00 微信红包"
  }
];

// 配置说明：
// 1. 可以修改每张彩票的以下属性：
//    - title: 彩票标题
//    - subtitle: 彩票副标题（可选）
//    - prize: 刮开后显示的文字
//    - hasQRCode: 是否显示二维码（true/false）
//    - qrCodeUrl: 二维码图片URL（当hasQRCode为true时必填）
//    - footer: 底部说明文字
// 2. 中奖概率约为40%（15张中有6张中奖）
// 3. 图片配置方法：
//    - 网络图片：直接使用完整的HTTP/HTTPS URL，如："https://example.com/qrcode.png"
//    - 本地图片：将图片文件放在images目录下，然后使用相对路径，如："images/qrcode1.svg"
// 4. 实际使用时，请将二维码URL替换为真实的微信红包二维码图片地址