// 쿠팡 파트너스 상품 목록 (상품추천설계표의 [파트너스 링크] 시트와 같은 내용)
// active: true 인 상품만 배너에 나옵니다. 카테고리당 3개 이상 권장.
window.LUCK_PRODUCTS = {
  W1: [ // 식물·그린 소품
    { name: '테이블야자 미니 화분 세트', url: 'https://link.coupang.com/a/hfOCKXYDFk', img: 'https://img2a.coupangcdn.com/image/affiliate/banner/95c2c86bb508a69acfaa22a1290fef31@2x.jpg', active: true },
    // { name: '미니 다육이 화분 3종 세트', url: 'https://link.coupang.com/a/XXXXXX', price: 12900, active: false },
  ],
  W2: [ // 원목 데스크 소품
  ],
  W3: [ // 산책·스트레칭 용품
  ],
  W4: [ // 성장 기록 노트
  ],
  F1: [ // 따뜻한 조명·무드등
    { name: '수정구슬 크리스탈 무드등', url: 'https://link.coupang.com/a/hfOG6RpI72', img: 'https://image5.coupangcdn.com/image/affiliate/banner/32ad0a36445e68079cae77ac856e6185@2x.jpg', active: true },
  ],
  F2: [ // 향·캔들워머
    { name: '코코도르 캔들워머', url: 'https://link.coupang.com/a/hfONCACiOW', img: 'https://image5.coupangcdn.com/image/affiliate/banner/cebfdb67aa96bf5c32ec60bfb8292e54@2x.jpg', active: true },
  ],
  F3: [ // 레드 포인트 소품
  ],
  F4: [ // 표현·발표 도구
  ],
  T1: [ // 도자기·세라믹 머그
    { name: '포트메리온 머그컵 4종 세트', url: 'https://link.coupang.com/a/hfOUzjkGOW', img: 'https://img1a.coupangcdn.com/image/affiliate/banner/6d3733870da5237e8b5144a6e70359e3@2x.jpg', active: true },
  ],
  T2: [ // 플래너·다이어리
    { name: '데일리 타임 플래너 2개', url: 'https://link.coupang.com/a/hfOXFas1Ey', img: 'https://image3.coupangcdn.com/image/affiliate/banner/8d0e0ab6a40298c745aed5a73ffb8837@2x.jpg', active: true },
  ],
  T3: [ // 편안한 패브릭
  ],
  T4: [ // 홈카페·요리 도구
  ],
  G1: [ // 메탈 필기구
    { name: '펜텔 스털링 메탈 볼펜', url: 'https://link.coupang.com/a/hfU5mWmZ9o', img: 'https://img4c.coupangcdn.com/image/affiliate/banner/49ab5d8faf6d565e5b76771da4128ddf@2x.jpg', active: true },
  ],
  G2: [ // 시계·타이머
    { name: '드레텍 공부 타이머', url: 'https://link.coupang.com/a/hfPfsqklk4', img: 'https://img3a.coupangcdn.com/image/affiliate/banner/385a5721766dc6dac67c0444a8abd902@2x.jpg', active: true },
  ],
  G3: [ // 정리함·케이블 정리
    { name: '하이브 데스크 오거나이저', url: 'https://link.coupang.com/a/hfPlK14UTs', img: 'https://image8.coupangcdn.com/image/affiliate/banner/8ae762b5f88e25be5f1baeb9fab4ff23@2x.jpg', active: true },
  ],
  G4: [ // 실버 액세서리
  ],
  S1: [ // 텀블러·보틀
    { name: '내셔널지오그래픽 스텐 텀블러', url: 'https://link.coupang.com/a/hfPoLSbfOK', img: 'https://image12.coupangcdn.com/image/affiliate/banner/7c89d12a6a17fafe445351b784cb8cb3@2x.jpg', active: true },
  ],
  S2: [ // 가습기·물 소품
    { name: '홈플래닛 사과 미니 가습기', url: 'https://link.coupang.com/a/hfPrpGX7x2', img: 'https://image10.coupangcdn.com/image/affiliate/banner/ee1c7d1016108d9b0ab9adcdea2f0309@2x.jpg', active: true },
  ],
  S3: [ // 여행 파우치·이동 소품
  ],
  S4: [ // 네이비 문구·플래너
  ],
};

// ── 오늘의 운 · 오늘의 아이템에 맞춘 상품 ─────────────────────
// 키는 오늘의 아이템 이름과 똑같이 쓴다.
// 값: 카테고리 코드('G1' 등, 위 목록의 첫 상품을 씀) 또는 { name, url, img, active } 객체(여러 개면 배열).
// gender: 'f' 또는 'm' 을 붙이면 그 성별 사용자에게만 보여준다. 없으면 모두에게.
// 비어 있는 아이템은 위 카테고리 상품으로 대신 보여준다.
window.LUCK_ITEM_PRODUCTS = {
  '볼펜': 'G1',
  '텀블러': 'S1',
  '머그컵': 'T1',
  '작은 식물': 'W1',
  '메모지': { name: '담곰이 듀얼 메모지', url: 'https://link.coupang.com/a/hfQowIJ3fM', img: 'https://image6.coupangcdn.com/image/affiliate/banner/e9f213d1463219c7d47849398a3f8976@2x.jpg', active: true },
  '메모장': { name: '포켓 미니수첩 4종 세트', url: 'https://link.coupang.com/a/hfQDGoJ7XU', img: 'https://image11.coupangcdn.com/image/affiliate/banner/e8027993b2f9c498ab58f43ae8f11d64@2x.jpg', active: true },
  '이어폰': [
    { name: '에어팟 5', url: 'https://link.coupang.com/a/hfQN3gyGC4', img: 'https://img5c.coupangcdn.com/image/affiliate/banner/6f7fd708a8e378ade2eccb1b1a780116@2x.jpg', active: true },
    { name: '필립스 무선 이어폰', url: 'https://link.coupang.com/a/hfQQ88avXo', img: 'https://img4c.coupangcdn.com/image/affiliate/banner/e5a51d8b1ea00535b4b6efabc1de69ad@2x.jpg', active: true },
  ],
  '작은 지갑': [
    { name: '소가죽 여성 반지갑', url: 'https://link.coupang.com/a/hfRmICigrk', img: 'https://static.coupangcdn.com/image/affiliate/banner/60631401e08fa47bde414a97176d28f7@2x.jpg', gender: 'f', active: true },
    { name: '미니 반지갑', url: 'https://link.coupang.com/a/hfQ4lAwS4W', img: 'https://img1a.coupangcdn.com/image/affiliate/banner/7214d4032805295dd3bf8c02f878b2c1@2x.jpg', gender: 'f', active: true },
    { name: '소가죽 슬림 카드 반지갑', url: 'https://link.coupang.com/a/hfRbVc0NqK', img: 'https://img1a.coupangcdn.com/image/affiliate/banner/72b072254d5fb9c82b430649fec5663e@2x.jpg', gender: 'm', active: true },
  ],
  '영수증 파우치': [
    { name: '담곰이 미니 파우치', url: 'https://link.coupang.com/a/hfRB0HSkVg', img: 'https://image1.coupangcdn.com/image/affiliate/banner/ce4a80895146400871f0234d0c444556@2x.jpg', active: true },
    { name: '리치 미니 파우치 2p', url: 'https://link.coupang.com/a/hfRD7rzJhA', img: 'https://image3.coupangcdn.com/image/affiliate/banner/773f2189bf2e988028b2b29afcb96074@2x.jpg', active: true },
  ],
  '가계부 노트': { name: '한눈에 가계부 미니 만년형', url: 'https://link.coupang.com/a/hfRKa9JWeq', img: 'https://img3a.coupangcdn.com/image/affiliate/banner/62b4eae6a9343dfb5b7d9cb4e39cc0ac@2x.jpg', active: true },
  '손목시계': [
    { name: '뱅글 팔찌 시계', url: 'https://link.coupang.com/a/hfRUrwcu3U', img: 'https://image13.coupangcdn.com/image/affiliate/banner/b707d554912f904db7753c80d7a28c8e@2x.jpg', gender: 'f', active: true },
    { name: '카시오 저소음 아날로그 손목시계', url: 'https://link.coupang.com/a/hfVbstOu60', img: 'https://image13.coupangcdn.com/image/affiliate/banner/57893a78eae7626de4c12511470988e9@2x.jpg', active: true },
  ],
  '클리어파일': { name: '베이직 클리어파일 A4 4종', url: 'https://link.coupang.com/a/hfR5NAGWGa', img: 'https://image9.coupangcdn.com/image/affiliate/banner/6ae1e9a8234ea0a13b85ebb8fd3dce0e@2x.jpg', active: true },
  '포스트잇': { name: '3M 포스트잇 대용량팩', url: 'https://link.coupang.com/a/hfSqymDx48', img: 'https://image2.coupangcdn.com/image/affiliate/banner/fed7d97cdee88f078ea74ea58cda3f10@2x.jpg', active: true },
  '책': [
    { name: '잘했고 잘하고 있고 잘될 것이다', url: 'https://link.coupang.com/a/hfSERKIv7s', img: 'https://img2c.coupangcdn.com/image/affiliate/banner/3d28b11c47659a21470f8881d0c949f2@2x.jpg', active: true },
    { name: '초경량 휴대용 독서대', url: 'https://link.coupang.com/a/hfSIU4i8qX', img: 'https://img1a.coupangcdn.com/image/affiliate/banner/383ee6db79bb7ed371e931af5bfd73b1@2x.jpg', active: true },
    { name: '기분이 태도가 되지 말자', url: 'https://link.coupang.com/a/hfToskmjS0', img: 'https://image3.coupangcdn.com/image/affiliate/banner/0316804f7470b1aa8fc660968ced62ac@2x.jpg', active: true },
    { name: '너를 미워할 시간에 나를 사랑하기로 했다', url: 'https://link.coupang.com/a/hfTtzvCr6G', img: 'https://img4a.coupangcdn.com/image/affiliate/banner/2866713c1c2049541df03d7ece7f5d72@2x.jpg', active: true },
  ],
  '무릎담요': [
    { name: '도톰 양털 극세사 담요', url: 'https://link.coupang.com/a/hfS0Wq4xEG', img: 'https://img5a.coupangcdn.com/image/affiliate/banner/9c0e4bfef1cf600b2629ce26e8c9653a@2x.jpg', active: true },
    { name: '이중 거즈 블랭킷', url: 'https://link.coupang.com/a/hfTd35rPqu', img: 'https://image8.coupangcdn.com/image/affiliate/banner/2d04d72bbd28b69563b8169ac6c96c86@2x.jpg', active: true },
  ],
};
