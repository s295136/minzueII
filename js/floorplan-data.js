function generateBasementSlots(flName) {
  const slots = [];
  
  const topNumbers = ['06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22'];
  topNumbers.forEach((num, idx) => {
    let offset = idx >= 8 ? 20 : (idx >= 6 ? 10 : (idx >= 2 ? 5 : 0));
    slots.push({
      id: `${flName}-${num}`,
      name: `${num} 號車位`,
      typeTag: '自設平面',
      dim: '250×550',
      ping: '4.16', sqm: '13.75',
      usage: '法定免計容積停車位',
      desc: `位於 ${flName} 北側排位，鄰近北側通風採光天井與主車道。`,
      x: 185 + idx * 30 + offset, y: 35, w: 26, h: 56, numText: num
    });
  });

  slots.push(
    { id: `${flName}-75`, name: '75 號車位', typeTag: '自設', dim: '250×550', ping: '4.16', sqm: '13.75', usage: '自設車位', desc: '西側車道轉角旁車位。', x: 185, y: 145, w: 22, h: 42, numText: '75' },
    { id: `${flName}-74`, name: '74 號小車位', typeTag: '小車位', dim: '230×550', ping: '3.83', sqm: '12.65', usage: '自設小車位', desc: '中央標準小車位。', x: 210, y: 145, w: 20, h: 42, numText: '74' },
    { id: `${flName}-73`, name: '73 號車位', typeTag: '自設', dim: '250×550', ping: '4.16', sqm: '13.75', usage: '自設車位', desc: '近西側梯廳。', x: 233, y: 145, w: 22, h: 42, numText: '73' },
    { id: `${flName}-72`, name: '72 號大車位', typeTag: '大車位', dim: '250×600', ping: '4.54', sqm: '15.00', usage: '自設大車位', desc: '梯廳旁加長型車位。', x: 258, y: 145, w: 24, h: 42, numText: '72' },
    { id: `${flName}-71`, name: '71 號大車位', typeTag: '大車位', dim: '250×600', ping: '4.54', sqm: '15.00', usage: '自設大車位', desc: '西核心東側。', x: 330, y: 145, w: 24, h: 42, numText: '71' },
    { id: `${flName}-65`, name: '65 號車位', typeTag: '自設', dim: '250×550', ping: '4.16', sqm: '13.75', usage: '自設車位', desc: '近南側主車道。', x: 185, y: 245, w: 22, h: 42, numText: '65' },
    { id: `${flName}-66`, name: '66 號小車位', typeTag: '小車位', dim: '230×550', ping: '3.83', sqm: '12.65', usage: '自設小車位', desc: '標準小車位。', x: 210, y: 245, w: 20, h: 42, numText: '66' },
    { id: `${flName}-67`, name: '67 號車位', typeTag: '自設', dim: '250×550', ping: '4.16', sqm: '13.75', usage: '自設車位', desc: '南向標準車位。', x: 233, y: 245, w: 22, h: 42, numText: '67' },
    { id: `${flName}-68`, name: '68 號 (身障專用)', typeTag: '身障專用', dim: '350×600', ping: '6.35', sqm: '21.00', usage: '法定身障專用車位', desc: '附設 1.5M 專屬無障礙下車緩衝區，直通梯廳電梯。', x: 260, y: 240, w: 28, h: 47, numText: '♿68' },
    { id: `${flName}-69`, name: '69 號 (身障專用)', typeTag: '身障專用', dim: '350×600', ping: '6.35', sqm: '21.00', usage: '法定身障專用車位', desc: '直通避難無障礙電梯。', x: 292, y: 240, w: 28, h: 47, numText: '♿69' },
    { id: `${flName}-70`, name: '70 號車位', typeTag: '自設', dim: '250×550', ping: '4.16', sqm: '13.75', usage: '自設車位', desc: '梯廳南側車位。', x: 324, y: 245, w: 22, h: 42, numText: '70' }
  );

  const midTopRight = ['30','29','28','27','26','25','24','23'];
  midTopRight.forEach((num, idx) => {
    let offset = idx >= 4 ? 65 : (idx >= 3 ? 10 : 0);
    slots.push({
      id: `${flName}-${num}`,
      name: `${num} 號車位`,
      typeTag: (num==='29'||num==='25') ? '小車位' : (num==='27'?'大車位':'自設'),
      dim: (num==='29'||num==='25') ? '230×550' : (num==='27'?'250×600':'250×550'),
      ping: '4.16', sqm: '13.75',
      usage: '自設平面車位',
      desc: `鄰近中央東側服務梯廳與安全梯動線。`,
      x: 465 + idx * 23 + offset, y: 145, w: 20, h: 42, numText: num
    });
  });

  const midBottomRight = ['34','35','36','37','38','39','40','41','42'];
  midBottomRight.forEach((num, idx) => {
    let offset = idx >= 4 ? 35 : 0;
    slots.push({
      id: `${flName}-${num}`,
      name: `${num} 號車位`,
      typeTag: (num==='35'||num==='40') ? '小車位' : '自設',
      dim: (num==='35'||num==='40') ? '230×550' : '250×550',
      ping: '4.16', sqm: '13.75',
      usage: '自設車位',
      desc: `南側鄰中央消防與蓄水設備區。`,
      x: 465 + idx * 23 + offset, y: 245, w: 20, h: 42, numText: num
    });
  });

  const bottomNumbers = ['64','63','62','61','60','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43'];
  bottomNumbers.forEach((num, idx) => {
    let offset = idx >= 18 ? 35 : (idx >= 14 ? 25 : (idx >= 12 ? 15 : (idx >= 10 ? 10 : (idx >= 4 ? 5 : 0))));
    slots.push({
      id: `${flName}-${num}`,
      name: `${num} 號車位`,
      typeTag: '自設',
      dim: '250×550',
      ping: '4.16', sqm: '13.75',
      usage: '自設平面車位',
      desc: `位於 ${flName} 最南側排位，後方設有結構外牆。`,
      x: 85 + idx * 27 + offset, y: 340, w: 24, h: 54, numText: num
    });
  });

  return slots;
}

const buildingData = {
  '1F': {
    badge: '1F', title: '第壹層 平面配置圖', isBasement: false,
    flTotal: '2,144.75 m²', flVol: '1,360.92 m²', flBal: '214.48 m²', height: '5.80 M', unitsCount: '27 戶',
    units: [
      { id: '1F-S1', name: 'S1 戶 (福慧路旗艦)', ping: (104.56*0.3025).toFixed(2), sqm: '104.56', inner: '104.56 m²', bal: '9.70 m²', usage: 'G3 一般零售業', desc: '位於東北側角間臨福慧路，面寬視野大，適合銀行旗艦或大型連鎖超商。', x: 50, y: 50, w: 90, h: 100 },
      { id: '1F-S2', name: 'S2 戶 (中段零售)', ping: (70.80*0.3025).toFixed(2), sqm: '70.80', inner: '70.80 m²', bal: '0.00 m²', usage: 'G3 一般零售業', desc: '面臨主要林蔭步道，格局標準方正。', x: 50, y: 160, w: 90, h: 80 },
      { id: '1F-S3', name: 'S3 戶 (角間店面)', ping: (81.93*0.3025).toFixed(2), sqm: '81.93', inner: '81.93 m²', bal: '0.00 m²', usage: 'G3 一般零售業', desc: '東南側雙面臨路角間，採光極佳。', x: 50, y: 250, w: 90, h: 100 },
      { id: '1F-S5', name: 'S5 戶', ping: (40.70*0.3025).toFixed(2), sqm: '40.70', inner: '40.70 m²', bal: '7.05 m²', usage: 'G3 一般零售業', desc: '標準南向商鋪單元。', x: 150, y: 250, w: 65, h: 100 },
      { id: '1F-S6', name: 'S6 戶', ping: (32.69*0.3025).toFixed(2), sqm: '32.69', inner: '32.69 m²', bal: '7.00 m²', usage: 'G3 一般零售業', desc: '精品店面規格，坪數適中。', x: 225, y: 250, w: 60, h: 100 },
      { id: '1F-S7', name: 'S7 戶', ping: (32.46*0.3025).toFixed(2), sqm: '32.46', inner: '32.46 m²', bal: '7.75 m²', usage: 'G3 一般零售業', desc: '標準零售店面。', x: 295, y: 250, w: 60, h: 100 },
      { id: '1F-S8', name: 'S8 戶', ping: (35.94*0.3025).toFixed(2), sqm: '35.94', inner: '35.94 m²', bal: '6.90 m²', usage: 'G3 一般零售業', desc: '鄰中央走廊與垂直服務動線。', x: 365, y: 250, w: 60, h: 100 },
      { id: '1F-S9', name: 'S9 戶', ping: (32.00*0.3025).toFixed(2), sqm: '32.00', inner: '32.00 m²', bal: '6.90 m²', usage: 'G3 一般零售業', desc: '標準店鋪。', x: 435, y: 250, w: 60, h: 100 },
      { id: '1F-S10', name: 'S10 戶', ping: (32.00*0.3025).toFixed(2), sqm: '32.00', inner: '32.00 m²', bal: '7.40 m²', usage: 'G3 一般零售業', desc: '標準零售商鋪。', x: 505, y: 250, w: 60, h: 100 },
      { id: '1F-S11', name: 'S11 戶', ping: (34.32*0.3025).toFixed(2), sqm: '34.32', inner: '34.32 m²', bal: '10.30 m²', usage: 'G3 一般零售業', desc: '西側臨通路店面。', x: 575, y: 250, w: 60, h: 100 },
      { id: '1F-S12', name: 'S12 戶', ping: (47.77*0.3025).toFixed(2), sqm: '47.77', inner: '47.77 m²', bal: '10.30 m²', usage: 'G3 一般零售業', desc: '西側轉角商鋪。', x: 645, y: 250, w: 75, h: 100 },
      { id: '1F-S13', name: 'S13 戶 (大門大堂旁)', ping: (69.30*0.3025).toFixed(2), sqm: '69.30', inner: '69.30 m²', bal: '0.00 m²', usage: 'G3 一般零售業', desc: '挑高大廳旁優質商業門面。', x: 150, y: 50, w: 70, h: 100 },
      { id: '1F-S15', name: 'S15 戶', ping: (49.73*0.3025).toFixed(2), sqm: '49.73', inner: '49.73 m²', bal: '0.00 m²', usage: 'G3 一般零售業', desc: '北向優質商鋪。', x: 230, y: 50, w: 65, h: 100 },
      { id: '1F-S28', name: 'S28 戶', ping: (39.18*0.3025).toFixed(2), sqm: '39.18', inner: '39.18 m²', bal: '0.00 m²', usage: 'G3 一般零售業', desc: '標準門面。', x: 505, y: 50, w: 60, h: 100 },
      { id: '1F-S29', name: 'S29 戶', ping: (56.19*0.3025).toFixed(2), sqm: '56.19', inner: '56.19 m²', bal: '0.00 m²', usage: 'G3 一般零售業', desc: '西北角大店面。', x: 575, y: 50, w: 65, h: 100 },
      { id: '1F-S30', name: 'S30 戶 (西側端戶)', ping: (56.19*0.3025).toFixed(2), sqm: '56.19', inner: '56.19 m²', bal: '0.00 m²', usage: 'G3 一般零售業', desc: '西向主要人行出入口端戶。', x: 650, y: 50, w: 70, h: 100 }
    ]
  },
  '2F': {
    badge: '2F', title: '第貳層 平面配置圖', isBasement: false,
    flTotal: '2,040.48 m²', flVol: '1,352.75 m²', flBal: '204.05 m²', height: '4.20 M', unitsCount: '26 戶',
    units: [
      { id: '2F-S1', name: 'S1 戶 (東側角戶)', ping: (97.99*0.3025).toFixed(2), sqm: '97.99', inner: '97.99 m²', bal: '0.00 m²', usage: 'G3 一般零售業', desc: '二樓大視野角戶，適合企業多功能展售展示廳。', x: 50, y: 50, w: 90, h: 120 },
      { id: '2F-S2', name: 'S2 戶', ping: (76.26*0.3025).toFixed(2), sqm: '76.26', inner: '76.26 m²', bal: '1.57 m²', usage: 'G3 一般零售業', desc: '標準商業單元。', x: 50, y: 180, w: 90, h: 70 },
      { id: '2F-S3', name: 'S3 戶 (南向大戶)', ping: (142.06*0.3025).toFixed(2), sqm: '142.06', inner: '142.06 m²', bal: '0.00 m²', usage: 'G3 一般零售業', desc: '南向大面積商用空間，採光極佳。', x: 50, y: 260, w: 90, h: 100 },
      { id: '2F-S5', name: 'S5 戶', ping: (33.85*0.3025).toFixed(2), sqm: '33.85', inner: '33.85 m²', bal: '7.30 m²', usage: 'G3 一般零售業', desc: '南側標準單元。', x: 150, y: 260, w: 60, h: 100 },
      { id: '2F-S6', name: 'S6 戶', ping: (33.85*0.3025).toFixed(2), sqm: '33.85', inner: '33.85 m²', bal: '7.30 m²', usage: 'G3 一般零售業', desc: '南側標準單元。', x: 220, y: 260, w: 60, h: 100 },
      { id: '2F-S7', name: 'S7 戶', ping: (33.85*0.3025).toFixed(2), sqm: '33.85', inner: '33.85 m²', bal: '7.30 m²', usage: 'G3 一般零售業', desc: '標準辦公/商場單元。', x: 290, y: 260, w: 60, h: 100 },
      { id: '2F-S13', name: 'S13 戶 (北向大戶)', ping: (83.61*0.3025).toFixed(2), sqm: '83.61', inner: '83.61 m²', bal: '0.00 m²', usage: 'G3 一般零售業', desc: '北側大面寬商務空間。', x: 150, y: 50, w: 85, h: 100 },
      { id: '2F-S28', name: 'S28 戶', ping: (80.64*0.3025).toFixed(2), sqm: '80.64', inner: '80.64 m²', bal: '0.00 m²', usage: 'G3 一般零售業', desc: '西北向大單元。', x: 550, y: 50, w: 85, h: 100 },
      { id: '2F-S29', name: 'S29 戶 (西側端戶)', ping: (94.04*0.3025).toFixed(2), sqm: '94.04', inner: '94.04 m²', bal: '0.00 m²', usage: 'G3 一般零售業', desc: '西側大坪數景觀商務單位。', x: 645, y: 50, w: 85, h: 100 }
    ]
  },
  '3F': {
    badge: '3F', title: '第參層 平面配置圖', isBasement: false,
    flTotal: '2,219.09 m²', flVol: '1,799.21 m²', flBal: '221.91 m²', height: '5.50 M', unitsCount: '10 戶 (C1~C11)',
    units: [
      { id: '3F-C1', name: 'C1 作業廠房 (旗艦大戶)', ping: (231.85*0.3025).toFixed(2), sqm: '231.85', inner: '231.85 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '東側超大面寬廠房，高載重無柱設計，適合研發總部。', x: 50, y: 50, w: 120, h: 140 },
      { id: '3F-C2', name: 'C2 作業廠房', ping: (262.11*0.3025).toFixed(2), sqm: '262.11', inner: '262.11 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '東南向大面積生產組裝線廠房。', x: 50, y: 200, w: 120, h: 160 },
      { id: '3F-C3', name: 'C3 作業廠房', ping: (155.93*0.3025).toFixed(2), sqm: '155.93', inner: '155.93 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '標準作業單元 (>150m² 合法合規)。', x: 180, y: 200, w: 80, h: 160 },
      { id: '3F-C5', name: 'C5 作業廠房', ping: (152.21*0.3025).toFixed(2), sqm: '152.21', inner: '152.21 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '標準高科技廠房單元。', x: 270, y: 200, w: 80, h: 160 },
      { id: '3F-C6', name: 'C6 作業廠房', ping: (152.96*0.3025).toFixed(2), sqm: '152.96', inner: '152.96 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '標準科技廠房。', x: 360, y: 200, w: 80, h: 160 },
      { id: '3F-C7', name: 'C7 作業廠房', ping: (150.75*0.3025).toFixed(2), sqm: '150.75', inner: '150.75 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '直通載重貨梯。', x: 450, y: 200, w: 80, h: 160 },
      { id: '3F-C8', name: 'C8 作業廠房', ping: (163.08*0.3025).toFixed(2), sqm: '163.08', inner: '163.08 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '西南向作業廠房。', x: 540, y: 200, w: 80, h: 160 },
      { id: '3F-C9', name: 'C9 作業廠房 (西側端戶)', ping: (175.40*0.3025).toFixed(2), sqm: '175.40', inner: '175.40 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '西側大採光廠房。', x: 630, y: 200, w: 90, h: 160 },
      { id: '3F-C10', name: 'C10 作業廠房', ping: (153.24*0.3025).toFixed(2), sqm: '153.24', inner: '153.24 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '西北向標準廠房。', x: 540, y: 50, w: 85, h: 140 },
      { id: '3F-C11', name: 'C11 作業廠房', ping: (153.24*0.3025).toFixed(2), sqm: '153.24', inner: '153.24 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '西北角標準廠房。', x: 635, y: 50, w: 85, h: 140 }
    ]
  },
  '4F': {
    badge: '4F', title: '第四層 平面配置圖', isBasement: false,
    flTotal: '2,219.09 m²', flVol: '1,799.21 m²', flBal: '221.91 m²', height: '5.50 M', unitsCount: '8 戶 (C1~C9)',
    units: [
      { id: '4F-C1', name: 'C1 作業廠房', ping: (231.85*0.3025).toFixed(2), sqm: '231.85', inner: '231.85 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '旗艦總部型廠房。', x: 50, y: 50, w: 120, h: 140 },
      { id: '4F-C2', name: 'C2 作業廠房', ping: (262.11*0.3025).toFixed(2), sqm: '262.11', inner: '262.11 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '大面積作業區。', x: 50, y: 200, w: 120, h: 160 },
      { id: '4F-C3', name: 'C3 作業廠房', ping: (161.10*0.3025).toFixed(2), sqm: '161.10', inner: '161.10 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '標準作業空間。', x: 180, y: 200, w: 85, h: 160 },
      { id: '4F-C5', name: 'C5 合併大戶廠房', ping: (300.00*0.3025).toFixed(2), sqm: '300.00', inner: '300.00 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '雙單元合併大跨距生產線。', x: 275, y: 200, w: 160, h: 160 },
      { id: '4F-C7', name: 'C7 作業廠房', ping: (150.75*0.3025).toFixed(2), sqm: '150.75', inner: '150.75 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '鄰近電梯服務核。', x: 445, y: 200, w: 80, h: 160 },
      { id: '4F-C8', name: 'C8 作業廠房', ping: (181.88*0.3025).toFixed(2), sqm: '181.88', inner: '181.88 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '西南向優質廠房。', x: 535, y: 200, w: 90, h: 160 },
      { id: '4F-C9', name: 'C9 西側合併大廠房', ping: (300.00*0.3025).toFixed(2), sqm: '300.00', inner: '300.00 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '全層西側完整大廠房。', x: 635, y: 100, w: 95, h: 260 }
    ]
  },
  '5F': {
    badge: '5F', title: '第五層 平面配置圖', isBasement: false,
    flTotal: '2,219.09 m²', flVol: '1,799.21 m²', flBal: '221.91 m²', height: '5.50 M', unitsCount: '10 戶 (C1~C11)',
    units: [
      { id: '5F-C1', name: 'C1 作業廠房', ping: (231.85*0.3025).toFixed(2), sqm: '231.85', inner: '231.85 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '高層研發廠房。', x: 50, y: 50, w: 120, h: 140 },
      { id: '5F-C2', name: 'C2 作業廠房', ping: (262.11*0.3025).toFixed(2), sqm: '262.11', inner: '262.11 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '大面積作業廠房。', x: 50, y: 200, w: 120, h: 160 },
      { id: '5F-C3', name: 'C3 作業廠房', ping: (155.93*0.3025).toFixed(2), sqm: '155.93', inner: '155.93 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '標準作業單元。', x: 180, y: 200, w: 80, h: 160 },
      { id: '5F-C5', name: 'C5 作業廠房', ping: (152.21*0.3025).toFixed(2), sqm: '152.21', inner: '152.21 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '標準高科技廠房。', x: 270, y: 200, w: 80, h: 160 },
      { id: '5F-C6', name: 'C6 作業廠房', ping: (152.96*0.3025).toFixed(2), sqm: '152.96', inner: '152.96 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '標準科技廠房。', x: 360, y: 200, w: 80, h: 160 },
      { id: '5F-C7', name: 'C7 作業廠房', ping: (150.75*0.3025).toFixed(2), sqm: '150.75', inner: '150.75 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '科技作業廠房。', x: 450, y: 200, w: 80, h: 160 },
      { id: '5F-C8', name: 'C8 作業廠房', ping: (163.08*0.3025).toFixed(2), sqm: '163.08', inner: '163.08 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '西南向作業廠房。', x: 540, y: 200, w: 80, h: 160 },
      { id: '5F-C9', name: 'C9 作業廠房', ping: (175.40*0.3025).toFixed(2), sqm: '175.40', inner: '175.40 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '西側大採光廠房。', x: 630, y: 200, w: 90, h: 160 },
      { id: '5F-C10', name: 'C10 作業廠房', ping: (153.24*0.3025).toFixed(2), sqm: '153.24', inner: '153.24 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '西北向廠房。', x: 540, y: 50, w: 85, h: 140 },
      { id: '5F-C11', name: 'C11 作業廠房', ping: (153.24*0.3025).toFixed(2), sqm: '153.24', inner: '153.24 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '西北角標準廠房。', x: 635, y: 50, w: 85, h: 140 }
    ]
  },
  '6F': {
    badge: '6F', title: '第六層 平面配置圖', isBasement: false,
    flTotal: '2,219.09 m²', flVol: '1,799.21 m²', flBal: '221.91 m²', height: '5.50 M', unitsCount: '10 戶 (C1~C11)',
    units: [
      { id: '6F-C1', name: 'C1 作業廠房', ping: (231.85*0.3025).toFixed(2), sqm: '231.85', inner: '231.85 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 50, y: 50, w: 120, h: 140 },
      { id: '6F-C2', name: 'C2 作業廠房', ping: (262.11*0.3025).toFixed(2), sqm: '262.11', inner: '262.11 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 50, y: 200, w: 120, h: 160 },
      { id: '6F-C3', name: 'C3 作業廠房', ping: (155.93*0.3025).toFixed(2), sqm: '155.93', inner: '155.93 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 180, y: 200, w: 80, h: 160 },
      { id: '6F-C5', name: 'C5 作業廠房', ping: (152.21*0.3025).toFixed(2), sqm: '152.21', inner: '152.21 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 270, y: 200, w: 80, h: 160 },
      { id: '6F-C6', name: 'C6 作業廠房', ping: (152.96*0.3025).toFixed(2), sqm: '152.96', inner: '152.96 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 360, y: 200, w: 80, h: 160 },
      { id: '6F-C7', name: 'C7 作業廠房', ping: (150.75*0.3025).toFixed(2), sqm: '150.75', inner: '150.75 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 450, y: 200, w: 80, h: 160 },
      { id: '6F-C8', name: 'C8 作業廠房', ping: (163.08*0.3025).toFixed(2), sqm: '163.08', inner: '163.08 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 540, y: 200, w: 80, h: 160 },
      { id: '6F-C9', name: 'C9 作業廠房', ping: (175.40*0.3025).toFixed(2), sqm: '175.40', inner: '175.40 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 630, y: 200, w: 90, h: 160 },
      { id: '6F-C10', name: 'C10 作業廠房', ping: (153.24*0.3025).toFixed(2), sqm: '153.24', inner: '153.24 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 540, y: 50, w: 85, h: 140 },
      { id: '6F-C11', name: 'C11 作業廠房', ping: (153.24*0.3025).toFixed(2), sqm: '153.24', inner: '153.24 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 635, y: 50, w: 85, h: 140 }
    ]
  },
  '7F': {
    badge: '7F', title: '第七層 平面配置圖', isBasement: false,
    flTotal: '2,219.09 m²', flVol: '1,799.21 m²', flBal: '221.91 m²', height: '5.50 M', unitsCount: '10 戶 (C1~C11)',
    units: [
      { id: '7F-C1', name: 'C1 作業廠房', ping: (231.85*0.3025).toFixed(2), sqm: '231.85', inner: '231.85 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '廠房頂層優質視野。', x: 50, y: 50, w: 120, h: 140 },
      { id: '7F-C2', name: 'C2 作業廠房', ping: (262.11*0.3025).toFixed(2), sqm: '262.11', inner: '262.11 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 50, y: 200, w: 120, h: 160 },
      { id: '7F-C3', name: 'C3 作業廠房', ping: (155.93*0.3025).toFixed(2), sqm: '155.93', inner: '155.93 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 180, y: 200, w: 80, h: 160 },
      { id: '7F-C5', name: 'C5 作業廠房', ping: (152.21*0.3025).toFixed(2), sqm: '152.21', inner: '152.21 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 270, y: 200, w: 80, h: 160 },
      { id: '7F-C6', name: 'C6 作業廠房', ping: (152.96*0.3025).toFixed(2), sqm: '152.96', inner: '152.96 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 360, y: 200, w: 80, h: 160 },
      { id: '7F-C7', name: 'C7 作業廠房', ping: (150.75*0.3025).toFixed(2), sqm: '150.75', inner: '150.75 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 450, y: 200, w: 80, h: 160 },
      { id: '7F-C8', name: 'C8 作業廠房', ping: (163.08*0.3025).toFixed(2), sqm: '163.08', inner: '163.08 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 540, y: 200, w: 80, h: 160 },
      { id: '7F-C9', name: 'C9 作業廠房', ping: (175.40*0.3025).toFixed(2), sqm: '175.40', inner: '175.40 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 630, y: 200, w: 90, h: 160 },
      { id: '7F-C10', name: 'C10 作業廠房', ping: (153.24*0.3025).toFixed(2), sqm: '153.24', inner: '153.24 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 540, y: 50, w: 85, h: 140 },
      { id: '7F-C11', name: 'C11 作業廠房', ping: (153.24*0.3025).toFixed(2), sqm: '153.24', inner: '153.24 m²', bal: '0.00 m²', usage: 'C2 作業廠房', desc: '同 5F 標準配置。', x: 635, y: 50, w: 85, h: 140 }
    ]
  },
  '8F': {
    badge: '8F', title: '第八層 平面配置圖', isBasement: false,
    flTotal: '1,931.98 m²', flVol: '1,602.79 m²', flBal: '193.20 m²', height: '4.20 M', unitsCount: '5 戶 (G1, G2, G3, G5, G6)',
    units: [
      { id: '8F-G1', name: 'G1 一般事務所', ping: (325.65*0.3025).toFixed(2), sqm: '325.65', inner: '325.65 m²', bal: '7.55 m²', usage: 'G2 一般事務所', desc: '東北向高樓景觀企業商務辦公室。', x: 50, y: 50, w: 140, h: 140 },
      { id: '8F-G2', name: 'G2 一般事務所', ping: (319.55*0.3025).toFixed(2), sqm: '319.55', inner: '319.55 m²', bal: '19.37 m²', usage: 'G2 一般事務所', desc: '東南向方正大戶辦公室。', x: 50, y: 210, w: 140, h: 150 },
      { id: '8F-G3', name: 'G3 一般事務所', ping: (300.15*0.3025).toFixed(2), sqm: '300.15', inner: '300.15 m²', bal: '7.60 m²', usage: 'G2 一般事務所', desc: '中央南向採光事務所。', x: 210, y: 210, w: 150, h: 150 },
      { id: '8F-G5', name: 'G5 企業總部事務所', ping: (308.20*0.3025).toFixed(2), sqm: '308.20', inner: '308.20 m²', bal: '15.50 m²', usage: 'G2 一般事務所', desc: '全景大落地窗景觀商務中心。', x: 550, y: 50, w: 170, h: 140 },
      { id: '8F-G6', name: 'G6 一般事務所', ping: (300.27*0.3025).toFixed(2), sqm: '300.27', inner: '300.27 m²', bal: '16.59 m²', usage: 'G2 一般事務所', desc: '西南向大型事務所。', x: 450, y: 210, w: 170, h: 150 }
    ]
  },
  '9F': {
    badge: '9F', title: '第九層 平面配置圖', isBasement: false,
    flTotal: '1,903.39 m²', flVol: '1,517.16 m²', flBal: '190.34 m²', height: '4.20 M (含挑空)', unitsCount: '5 戶 (G1, G2, G3, G5, G6)',
    units: [
      { id: '9F-G1', name: 'G1 頂層景觀事務所', ping: (282.68*0.3025).toFixed(2), sqm: '282.68', inner: '282.68 m²', bal: '15.89 m²', usage: 'G2 一般事務所', desc: '挑高可串連夾層複層樓中樓總裁辦公室。', x: 50, y: 50, w: 140, h: 140 },
      { id: '9F-G2', name: 'G2 景觀事務所', ping: (350.20*0.3025).toFixed(2), sqm: '350.20', inner: '350.20 m²', bal: '21.80 m²', usage: 'G2 一般事務所', desc: '東南向旗艦大坪數事務所。', x: 50, y: 210, w: 140, h: 150 },
      { id: '9F-G3', name: 'G3 景觀事務所', ping: (275.48*0.3025).toFixed(2), sqm: '275.48', inner: '275.48 m²', bal: '7.60 m²', usage: 'G2 一般事務所', desc: '南向商務空間。', x: 210, y: 210, w: 150, h: 150 },
      { id: '9F-G5', name: 'G5 頂層旗艦大戶', ping: (301.22*0.3025).toFixed(2), sqm: '301.22', inner: '301.22 m²', bal: '15.50 m²', usage: 'G2 一般事務所', desc: '視野遼闊無遮蔽。', x: 550, y: 50, w: 170, h: 140 },
      { id: '9F-G6', name: 'G6 景觀事務所', ping: (258.57*0.3025).toFixed(2), sqm: '258.57', inner: '258.57 m²', bal: '27.84 m²', usage: 'G2 一般事務所', desc: '西南向景觀辦公單元。', x: 450, y: 210, w: 170, h: 150 }
    ]
  },
  '9F_MEZZ': {
    badge: '夾層', title: '第九層夾層 平面配置圖', isBasement: false,
    flTotal: '457.39 m²', flVol: '457.39 m²', flBal: '18.95 m²', height: '3.00 M', unitsCount: '5 戶 (G1~G6 夾層)',
    units: [
      { id: 'MEZZ-G1', name: 'G1 夾層專用空間', ping: (85.74*0.3025).toFixed(2), sqm: '85.74', inner: '85.74 m²', bal: '11.55 m²', usage: 'G2 夾層事務所', desc: '依法核准夾層，適合高階主管室或會議室。', x: 60, y: 60, w: 110, h: 120 },
      { id: 'MEZZ-G2', name: 'G2 夾層專用空間', ping: (97.02*0.3025).toFixed(2), sqm: '97.02', inner: '97.02 m²', bal: '0.00 m²', usage: 'G2 夾層事務所', desc: '夾層專屬空間。', x: 60, y: 220, w: 110, h: 130 },
      { id: 'MEZZ-G3', name: 'G3 夾層專用空間', ping: (91.70*0.3025).toFixed(2), sqm: '91.70', inner: '91.70 m²', bal: '0.00 m²', usage: 'G2 夾層事務所', desc: '獨立私密夾層商務空間。', x: 230, y: 220, w: 110, h: 130 },
      { id: 'MEZZ-G5', name: 'G5 夾層專用空間', ping: (96.81*0.3025).toFixed(2), sqm: '96.81', inner: '96.81 m²', bal: '7.40 m²', usage: 'G2 夾層事務所', desc: '北側夾層會議中心。', x: 570, y: 60, w: 120, h: 120 },
      { id: 'MEZZ-G6', name: 'G6 夾層專用空間', ping: (86.12*0.3025).toFixed(2), sqm: '86.12', inner: '86.12 m²', bal: '0.00 m²', usage: 'G2 夾層事務所', desc: '夾層辦公區。', x: 470, y: 220, w: 120, h: 130 }
    ]
  },
  'RF': {
    badge: 'RF', title: '屋突一至頂層 平面配置圖', isBasement: false,
    flTotal: '270.45 m²', flVol: '免計入容積', flBal: '0.00 m²', height: '3.00 ~ 9.00 M', unitsCount: '屋頂突出物與綠化空間',
    units: [
      { id: 'RF-CORE', name: '電梯機房 / 水箱 / 樓梯間', ping: (270.45*0.3025).toFixed(2), sqm: '270.45', inner: '270.45 m²', bal: '0.00 m²', usage: '屋頂突出物機房', desc: '集中設置電梯機房、排煙機房、消防水箱與太陽能光電陣列板(835.37m²)。', x: 240, y: 100, w: 320, h: 220 }
    ]
  },
  'B1F': {
    badge: 'B1F', title: '地下一層 停車空間平面圖', isBasement: true,
    flTotal: '3,541.98 m²', flVol: '法定免計容積', flBal: '0.00 m²', height: '4.00 M', unitsCount: '停車空間 / 機電空間',
    slots: generateBasementSlots('B1F')
  },
  'B2F': {
    badge: 'B2F', title: '地下二層 停車空間平面圖', isBasement: true,
    flTotal: '3,541.98 m²', flVol: '法定免計容積', flBal: '0.00 m²', height: '3.60 M', unitsCount: '汽車停車位 (含身障)',
    slots: generateBasementSlots('B2F')
  },
  'B3F': {
    badge: 'B3F', title: '地下三層 防空避難與停車平面圖', isBasement: true,
    flTotal: '3,541.98 m²', flVol: '防空避難室 (全附建)', flBal: '0.00 m²', height: '3.60 M', unitsCount: '防空避難 / 車位',
    slots: generateBasementSlots('B3F')
  }
};
