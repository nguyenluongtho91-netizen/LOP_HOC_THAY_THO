@echo off
chcp 65001 > nul
title DONG BO LOP HOC THAY THO - GITHUB & VERCEL
cls
echo =====================================================================
echo    HỆ THỐNG ĐỒNG BỘ: LỚP HỌC THẦY THỌ (BẢN MỚI AZOTA PRO)
echo =====================================================================
echo.
echo Đang đẩy toàn bộ mã nguồn lên GitHub: LOP_HOC_THAY_THO...
echo.

cd /d "E:\Desktop\THAY_THO\LOP_HOC_THAY_THO"
git push origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo =====================================================================
    echo   [THÀNH CÔNG] ĐÃ ĐẨY CODE LÊN GITHUB: LOP_HOC_THAY_THO!
    echo   Trang web đang được cập nhật tự động.
    echo =====================================================================
) else (
    echo =====================================================================
    echo   [LƯU Ý] Có lỗi xảy ra khi đẩy lên GitHub, mã lỗi: %ERRORLEVEL%
    echo =====================================================================
)
echo.
pause
