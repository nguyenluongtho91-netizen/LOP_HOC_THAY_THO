// api/pay.js - Cổng hiển thị Mã QR học phí chuẩn Open Graph cho Zalo / Facebook / Web
export default function handler(req, res) {
  const { name = 'Học sinh', amount = '0', des = '', cls = '' } = req.query;
  const numAmount = parseInt(amount) || 0;
  const formattedAmount = numAmount.toLocaleString('vi-VN');
  const qrUrl = `https://qr.sepay.vn/img?bank=Vietcombank&acc=1070493932&template=compact&amount=${numAmount}&des=${encodeURIComponent(des)}`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mã QR Học Phí - ${name}</title>
  <meta property="og:title" content="Mã QR Học Phí: ${name} (${formattedAmount} đ)">
  <meta property="og:description" content="Vietcombank 1070493932 • Cú pháp: ${des}">
  <meta property="og:image" content="${qrUrl}">
  <meta property="og:image:width" content="540">
  <meta property="og:image:height" content="540">
  <meta property="og:image:type" content="image/png">
  <meta property="og:type" content="website">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f1f5f9; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 16px; }
    .card { background: white; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.08); padding: 24px; max-width: 400px; width: 100%; text-align: center; }
    h2 { margin: 0 0 6px; color: #0f766e; font-size: 20px; }
    .student { font-size: 16px; font-weight: 700; color: #1e293b; margin: 4px 0; }
    .fee { font-size: 24px; font-weight: 800; color: #059669; margin: 8px 0 16px; }
    .qr { width: 100%; max-width: 300px; height: auto; border-radius: 12px; border: 1px solid #e2e8f0; margin: 0 auto 16px; display: block; }
    .info { background: #f8fafc; border-radius: 12px; padding: 12px; font-size: 13px; text-align: left; color: #475569; line-height: 1.6; }
    .info b { color: #0f172A; }
    .btn { display: block; background: #0f766e; color: white; text-decoration: none; padding: 12px; border-radius: 12px; font-weight: bold; margin-top: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <h2>LỚP HỌC THẦY THỌ</h2>
    <div class="student">Học sinh: ${name}</div>
    <div class="fee">${formattedAmount} đ</div>
    <img src="${qrUrl}" alt="Mã QR Vietcombank" class="qr" />
    <div class="info">
      <div>Ngân hàng: <b>Vietcombank</b></div>
      <div>Số tài khoản: <b>1070493932</b></div>
      <div>Chủ TK: <b>HO KINH DOANH NGUYEN LUONG THO</b></div>
      <div>Nội dung CK: <b style="color:#0f766e">${des}</b></div>
    </div>
    <a href="${qrUrl}" download="QR_${name}.png" class="btn">Tải Ảnh Mã QR</a>
  </div>
</body>
</html>`);
}
