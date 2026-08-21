// 右上角漢堡選單展開/收合[cite: 1]
function toggleNavMenu() {
  const list = document.getElementById('navList');
  if (list) {
    list.classList.toggle('show');
  }
}

// 開啟指定 Drawer 彈窗，並在需要時延遲載入 quote.html[cite: 1]
function openModal(id) {
  document.querySelectorAll('.modal-drawer').forEach(drawer => {
    drawer.classList.remove('active');
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.scrollTop = 0;

    // 開啟「價目表」抽屜時，動態注入 quote.html[cite: 1]
    if (id === 'pricingDrawer') {
      const quoteFrame = document.getElementById('quoteFrame');
      if (quoteFrame && !quoteFrame.getAttribute('src')) {
        quoteFrame.src = 'quote.html';
      }
    }
  }
}

// 關閉 Drawer 彈窗[cite: 1]
function closeModal(id) {
  const target = document.getElementById(id);
  if (target) {
    target.classList.remove('active');
  }
}

// 自動調整報價單 iframe 高度[cite: 1]
function resizeQuoteIframe(iframe) {
  try {
    if (iframe.contentWindow && iframe.contentWindow.document.body) {
      const docHeight = iframe.contentWindow.document.documentElement.scrollHeight || iframe.contentWindow.document.body.scrollHeight;
      if (docHeight > 0) {
        iframe.style.height = (docHeight + 40) + 'px';
      }
    }
  } catch (e) {
    iframe.style.height = '1300px';
  }
}

// 建築規劃頁籤切換控制[cite: 1]
function switchPlanningTab(tabId, btnElement) {
  document.querySelectorAll('.sub-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  btnElement.classList.add('active');

  document.querySelectorAll('#planningDrawer .tab-content-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  const targetPanel = document.getElementById(tabId);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  const drawerContent = document.getElementById('planningDrawerContent');

  if (tabId === 'floorPlanTab') {
    drawerContent.classList.add('full-mode');
    const iframe = document.getElementById('floorplanFrame');
    if (iframe && !iframe.getAttribute('src')) {
      iframe.src = 'floorplan.html';
    }
  } else {
    drawerContent.classList.remove('full-mode');
  }
}

// 首頁背景圖片定時輪播[cite: 1]
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
if (slides.length > 0) {
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 6000);
}