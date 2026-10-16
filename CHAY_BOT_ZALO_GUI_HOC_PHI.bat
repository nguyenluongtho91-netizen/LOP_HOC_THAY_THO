@echo off
chcp 65001 > nul
title BOT ZALO TU DONG GUI THONG BAO HOC PHI KEM MA VIETQR - THAY THO
cls
echo =====================================================================
echo    ROBOT TỰ ĐỘNG GỬI HỌC PHÍ ZALO KÈM MÃ VIETQR - LỚP THẦY THỌ
echo =====================================================================
echo.
echo 1. Kiểm tra môi trường Node.js...
node -v >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo.
    echo [LƯU Ý] Máy tính chưa cài đặt Node.js hoặc chưa nhận diện lệnh 'node'.
    echo 👉 Thầy Thọ có thể sử dụng ngay tính năng "🚀 Gửi Zalo Hàng Loạt"
    echo    trực tiếp trên Web tại: https://lop-hoc-thay-tho.vercel.app
    echo    (Gửi siêu tốc trên cả Điện thoại và Máy tính, không cần cài đặt gì thêm!)
    echo.
    pause
    exit /b
)

echo 2. Đang khởi chạy Zalo Automation Bot...
cd /d "E:\Desktop\THAY_THO\LOP_HOC_THAY_THO"
node scripts/zalo-bot.js
echo.
pause
