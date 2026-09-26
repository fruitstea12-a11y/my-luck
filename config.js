// Cloudflare Worker 주소. 끝에 / 없이.
window.LUCK_CONFIG = {
  API_BASE: 'https://my-luck-api.fruitstea12.workers.dev',
  // 관계 사용설명서 결제 오픈. PG 연동이 끝나면 true 로 바꾼다. false 면 '오픈 준비 중'으로 보인다.
  REL_SALE_OPEN: false,
  // ⑧ 관계 흐름 12개월 갱신 상품. 결제를 붙이면 true.
  REL_RENEW_OPEN: false
};

// ── 사업자 정보 ─────────────────────────────────────────────
// 사업자등록이 나오면 여기만 채우면 된다. 전 화면 하단과 정책 페이지에 자동으로 뜬다.
// 비어 있는 칸은 화면에 나오지 않는다.
// 전자상거래법상 통신판매 사이트에는 아래 항목을 표시해야 한다.
window.LUCK_BUSINESS = {
  name:     '내운사용설명서',   // 상호
  owner:    '윤미령',   // 대표자
  bizNo:    '160-34-01645',   // 사업자등록번호
  mailNo:   '신고 면제(간이과세자)',   // 통신판매업 신고번호
  address:  '서울특별시 노원구 덕릉로 595, 102동 1602호',   // 사업장 주소
  phone:    '0502-1935-0777',   // 전화
  email:    'help@mywoon.kr',   // 문의 이메일
  kakao:    'https://pf.kakao.com/_MMBaX/chat',   // 카카오톡 채널 1:1 채팅 주소
  privacyOfficer: '윤미령',   // 개인정보 보호책임자 (보통 대표자)
  hosting:  'GitHub, Inc. (GitHub Pages)',   // 호스팅 서비스 제공자
  effective:'2026년 10월 1일'                // 정책 시행일
};
