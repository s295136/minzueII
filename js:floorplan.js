let currentFloorKey = '1F';

function switchFloor(floorKey) {
  currentFloorKey = floorKey;
  
  document.querySelectorAll('.floor-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === floorKey || (floorKey === '9F_MEZZ' && btn.textContent.trim() === '夾層'));
  });

  const fl = buildingData[floorKey];
  document.getElementById('circleBadge').textContent = fl.badge;
  document.getElementById('sheetTitle').textContent = fl.title;
  document.getElementById('flTotal').textContent = fl.flTotal;
  document.getElementById('flVol').textContent = fl.flVol;
  document.getElementById('flBal').textContent = fl.flBal;
  document.getElementById('flHeight').textContent = fl.height;
  document.getElementById('flUnits').textContent = fl.unitsCount;

  if (fl.isBasement) {
    renderBasementSVG(fl);
  } else {
    renderFloorSVG(fl);
  }
}

function renderFloorSVG(floor) {
  const svg = document.getElementById('planSvg');
  svg.innerHTML = '';

  const outerWall = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  outerWall.setAttribute('points', '40,40 740,40 740,370 40,370');
  outerWall.setAttribute('fill', 'none');
  outerWall.setAttribute('stroke', '#0f172a');
  outerWall.setAttribute('stroke-width', '3');
  svg.appendChild(outerWall);

  const coreGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  
  const coreRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  coreRect.setAttribute('x', '220'); coreRect.setAttribute('y', '50');
  coreRect.setAttribute('width', '300'); coreRect.setAttribute('height', '140');
  coreRect.setAttribute('class', 'core-service');
  coreGroup.appendChild(coreRect);

  const stair1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  stair1.setAttribute('x', '240'); stair1.setAttribute('y', '70');
  stair1.setAttribute('width', '50'); stair1.setAttribute('height', '40');
  stair1.setAttribute('class', 'stair-hatch');
  coreGroup.appendChild(stair1);

  const stair2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  stair2.setAttribute('x', '450'); stair2.setAttribute('y', '70');
  stair2.setAttribute('width', '50'); stair2.setAttribute('height', '40');
  stair2.setAttribute('class', 'stair-hatch');
  coreGroup.appendChild(stair2);

  const coreTxt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  coreTxt.setAttribute('x', '370'); coreTxt.setAttribute('y', '125');
  coreTxt.setAttribute('class', 'unit-label');
  coreTxt.textContent = '【 垂直梯廳 / 客貨電梯 / 安全梯服務核 】';
  coreGroup.appendChild(coreTxt);
  svg.appendChild(coreGroup);

  floor.units.forEach((u, i) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    if (parseFloat(u.bal) > 0) {
      const balRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      balRect.setAttribute('x', u.x + 6);
      balRect.setAttribute('y', u.y + u.h - 14);
      balRect.setAttribute('width', u.w - 12);
      balRect.setAttribute('height', '12');
      balRect.setAttribute('class', 'balcony-rect');
      g.appendChild(balRect);
    }

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', u.x);
    rect.setAttribute('y', u.y);
    rect.setAttribute('width', u.w);
    rect.setAttribute('height', u.h);
    rect.setAttribute('class', 'unit-rect' + (i === 0 ? ' active' : ''));
    rect.setAttribute('id', 'unit-' + u.id);
    rect.onclick = () => selectUnit(u);
    g.appendChild(rect);

    const t1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t1.setAttribute('x', u.x + u.w / 2);
    t1.setAttribute('y', u.y + u.h / 2 - 4);
    t1.setAttribute('class', 'unit-label');
    t1.textContent = u.name.split(' ')[0];
    g.appendChild(t1);

    const t2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t2.setAttribute('x', u.x + u.w / 2);
    t2.setAttribute('y', u.y + u.h / 2 + 12);
    t2.setAttribute('class', 'unit-sublabel');
    t2.textContent = `${u.ping}坪 (${u.sqm}㎡)`;
    g.appendChild(t2);

    svg.appendChild(g);
  });

  const pillars = [
    {x:36,y:36},{x:140,y:36},{x:220,y:36},{x:365,y:36},{x:515,y:36},{x:640,y:36},{x:734,y:36},
    {x:36,y:195},{x:140,y:195},{x:734,y:195},
    {x:36,y:364},{x:140,y:364},{x:220,y:364},{x:365,y:364},{x:515,y:364},{x:640,y:364},{x:734,y:364}
  ];
  pillars.forEach(p => {
    const col = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    col.setAttribute('x', p.x); col.setAttribute('y', p.y);
    col.setAttribute('width', '10'); col.setAttribute('height', '10');
    col.setAttribute('class', 'column-pillar');
    svg.appendChild(col);
  });

  if (floor.units.length > 0) {
    selectUnit(floor.units[0]);
  }
}

function renderBasementSVG(floor) {
  const svg = document.getElementById('planSvg');
  svg.innerHTML = '';

  const outerWall = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const pathData = `
    M 175,25 
    L 775,25 L 775,50 L 740,50 L 740,400 L 75,400 L 75,295 L 105,295 
    L 105,175 
    C 105,110 135,45 175,25 Z
  `;
  outerWall.setAttribute('d', pathData);
  outerWall.setAttribute('fill', '#ffffff');
  outerWall.setAttribute('stroke', '#0f172a');
  outerWall.setAttribute('stroke-width', '8');
  outerWall.setAttribute('stroke-linejoin', 'miter');
  svg.appendChild(outerWall);

  const rampGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  for (let r = 160; r >= 115; r -= 15) {
    const arc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    arc.setAttribute('d', `M 175,${25 + (160-r)} A ${r} ${r} 0 0 0 ${180-r},195`);
    arc.setAttribute('fill', 'none');
    arc.setAttribute('stroke', '#94a3b8');
    arc.setAttribute('stroke-width', '1.2');
    arc.setAttribute('stroke-dasharray', '3,3');
    rampGroup.appendChild(arc);
  }
  const rampText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  rampText.setAttribute('x', '135'); rampText.setAttribute('y', '150');
  rampText.setAttribute('class', 'slot-dim');
  rampText.setAttribute('transform', 'rotate(-45 135 150)');
  rampText.textContent = '◀ 下坡車道 (雙向 6.0M)';
  rampGroup.appendChild(rampText);
  svg.appendChild(rampGroup);

  const core1 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const c1Rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  c1Rect.setAttribute('x', '260'); c1Rect.setAttribute('y', '185');
  c1Rect.setAttribute('width', '95'); c1Rect.setAttribute('height', '58');
  c1Rect.setAttribute('fill', '#ffffff'); c1Rect.setAttribute('stroke', '#0f172a'); c1Rect.setAttribute('stroke-width', '2');
  core1.appendChild(c1Rect);
  
  const c1Txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  c1Txt.setAttribute('x', '307'); c1Txt.setAttribute('y', '218');
  c1Txt.setAttribute('class', 'slot-label');
  c1Txt.textContent = '電梯間 / 機房';
  core1.appendChild(c1Txt);
  svg.appendChild(core1);

  const core2 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const c2Rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  c2Rect.setAttribute('x', '555'); c2Rect.setAttribute('y', '185');
  c2Rect.setAttribute('width', '175'); c2Rect.setAttribute('height', '58');
  c2Rect.setAttribute('fill', '#ffffff'); c2Rect.setAttribute('stroke', '#0f172a'); c2Rect.setAttribute('stroke-width', '2');
  core2.appendChild(c2Rect);

  const c2Stair = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  c2Stair.setAttribute('x', '580'); c2Stair.setAttribute('y', '190');
  c2Stair.setAttribute('width', '28'); c2Stair.setAttribute('height', '48');
  c2Stair.setAttribute('class', 'stair-hatch');
  core2.appendChild(c2Stair);

  const c2Txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  c2Txt.setAttribute('x', '665'); c2Txt.setAttribute('y', '218');
  c2Txt.setAttribute('class', 'slot-label');
  c2Txt.textContent = '消防機房 / 中繼水池';
  core2.appendChild(c2Txt);
  svg.appendChild(core2);

  const driveway = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  driveway.setAttribute('d', 'M 195,115 L 725,115 C 740,115 740,315 725,315 L 180,315');
  driveway.setAttribute('fill', 'none');
  driveway.setAttribute('stroke', '#cbd5e1');
  driveway.setAttribute('stroke-width', '1.5');
  driveway.setAttribute('stroke-dasharray', '5,5');
  svg.appendChild(driveway);

  floor.slots.forEach((s, idx) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', s.x); rect.setAttribute('y', s.y);
    rect.setAttribute('width', s.w); rect.setAttribute('height', s.h);
    rect.setAttribute('class', 'parking-slot' + (idx === 8 ? ' active' : ''));
    rect.setAttribute('id', 'slot-' + s.id);
    rect.onclick = () => selectSlot(s);
    g.appendChild(rect);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', s.x + s.w/2); line.setAttribute('y1', s.y + 4);
    line.setAttribute('x2', s.x + s.w/2); line.setAttribute('y2', s.y + s.h - 14);
    line.setAttribute('stroke', '#94a3b8');
    line.setAttribute('stroke-width', '0.6');
    g.appendChild(line);

    const tNum = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    tNum.setAttribute('x', s.x + s.w / 2);
    tNum.setAttribute('y', s.y + s.h / 2 + 1);
    tNum.setAttribute('class', 'slot-label');
    tNum.textContent = s.numText;
    g.appendChild(tNum);

    const tDim = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    tDim.setAttribute('x', s.x + s.w / 2);
    tDim.setAttribute('y', s.y + s.h - 3);
    tDim.setAttribute('class', 'slot-dim');
    tDim.textContent = s.dim.replace('×','x');
    g.appendChild(tDim);

    svg.appendChild(g);
  });

  const bPillars = [
    {x:175,y:95},{x:250,y:95},{x:330,y:95},{x:420,y:95},{x:510,y:95},{x:600,y:95},{x:690,y:95},
    {x:175,y:190},{x:250,y:190},{x:355,y:190},{x:420,y:190},{x:510,y:190},{x:735,y:190},
    {x:175,y:290},{x:250,y:290},{x:355,y:290},{x:420,y:290},{x:510,y:290},{x:735,y:290},
    {x:175,y:395},{x:250,y:395},{x:330,y:395},{x:420,y:395},{x:510,y:395},{x:600,y:395},{x:690,y:395}
  ];
  bPillars.forEach(p => {
    const col = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    col.setAttribute('x', p.x); col.setAttribute('y', p.y);
    col.setAttribute('width', '9'); col.setAttribute('height', '9');
    col.setAttribute('class', 'column-pillar');
    svg.appendChild(col);
  });

  const defaultSlot = floor.slots.find(s => s.numText === '14') || floor.slots[0];
  if (defaultSlot) selectSlot(defaultSlot);
}

function selectUnit(u) {
  document.querySelectorAll('.unit-rect, .parking-slot').forEach(el => el.classList.remove('active'));
  const activeEl = document.getElementById('unit-' + u.id);
  if (activeEl) activeEl.classList.add('active');

  document.getElementById('uTag').textContent = '專屬單元';
  document.getElementById('uName').textContent = u.name;
  document.getElementById('uPing').textContent = u.ping;
  document.getElementById('uSqm').textContent = u.sqm;
  document.getElementById('uInner').textContent = `${u.inner} (${u.ping}坪)`;
  document.getElementById('uBal').textContent = u.bal;
  document.getElementById('uUsage').textContent = u.usage;
  document.getElementById('uVolStatus').textContent = '計入容積樓地板';
  document.getElementById('uDesc').textContent = u.desc;
}

function selectSlot(s) {
  document.querySelectorAll('.unit-rect, .parking-slot').forEach(el => el.classList.remove('active'));
  const activeEl = document.getElementById('slot-' + s.id);
  if (activeEl) activeEl.classList.add('active');

  document.getElementById('uTag').textContent = s.typeTag;
  document.getElementById('uName').textContent = `${currentFloorKey}-${s.name}`;
  document.getElementById('uPing').textContent = s.ping;
  document.getElementById('uSqm').textContent = s.sqm;
  document.getElementById('uInner').textContent = `${s.name} (${s.dim} cm)`;
  document.getElementById('uBal').textContent = `${s.dim} cm 平面車位`;
  document.getElementById('uUsage').textContent = s.usage;
  document.getElementById('uVolStatus').textContent = '法定免計容積停車空間';
  document.getElementById('uDesc').textContent = s.desc;
}

function toggleRightPanel() {
  const panel = document.getElementById('rightPanel');
  const btn = document.getElementById('toggleBtn');
  const isClosed = panel.classList.toggle('closed');
  btn.classList.toggle('closed', isClosed);
  btn.innerHTML = isClosed ? '功能標籤 ▶' : '功能標籤 ◀';
}

function setTab(tabId, e) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
  
  if (e && e.currentTarget) {
    e.currentTarget.classList.add('active');
  }
  const target = document.getElementById(tabId);
  if (target) {
    target.style.display = 'flex';
  }
}

window.onload = () => {
  switchFloor('1F');
};