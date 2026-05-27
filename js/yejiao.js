const initFooterLogic = () => {
    // 1. 版权图标动态显示
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        // 修正：如果元素存在才修改，且注意 By 后的 Cicade 署名
        copyrightElement.style.color = "#555555"; // 直接把容器设为黑色
        copyrightElement.innerHTML = `@2026 - ${currentYear} <i class="fa-fw fas fa-star fa-beat" style="color: #FFC864;"></i> By Cicade`;
    }

    // 2. 运行时间显示容器初始化
    const frameworkInfo = document.querySelector('.framework-info');
    if (frameworkInfo && !document.getElementById('span_dt_dt')) {
        frameworkInfo.style.color = "#555555"; // 直接把容器设为黑色
        frameworkInfo.innerHTML = '本站居然已经运行了 <span id="span_dt_dt"></span>';
    }

    // 启动计时器（如果没启动的话）
    if (window.timerId) clearInterval(window.timerId);
    window.timerId = setInterval(showDateTime, 1000);
};

function showDateTime() {
    const timeDisplay = document.getElementById('span_dt_dt');
    if (!timeDisplay) return;

    const startTime = new Date("2026-02-18T12:00:00"); // 修正了日期格式
    const now = new Date();
    const seconds = Math.floor((now - startTime) / 1000);

    const d = Math.floor(seconds / (24 * 3600));
    const h = Math.floor((seconds % (24 * 3600)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    timeDisplay.innerHTML = `${d} 天 ${h} 时 ${m} 分 ${s} 秒`;
}

// 同时兼容首次加载和 Pjax 切换
document.addEventListener('DOMContentLoaded', initFooterLogic);
document.addEventListener('pjax:complete', initFooterLogic);