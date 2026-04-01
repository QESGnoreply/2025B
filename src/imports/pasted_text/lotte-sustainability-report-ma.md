# 롯데물산 2026 지속가능경영보고서 메인페이지 (컨셉 2) — Figma Make 프롬프트

> **디자인 톤**: 에디토리얼 매거진 / 초대형 타이포그래피 / 다크 히어로 / 미니멀 모노톤 + 레드 포인트

---

## 프롬프트 (아래 내용을 Figma Make에 붙여넣기)

---

롯데물산(LOTTE P&D)의 2026 지속가능경영보고서 웹사이트 메인페이지를 디자인해줘.
에디토리얼 매거진 스타일로, 초대형 Bold 타이포그래피와 흑백 대비를 중심으로 한 강렬하고 미니멀한 디자인이야.
**Desktop 버전(1440×6000px)** 과 **Mobile 버전(375×7200px)** 두 프레임을 나란히 만들어줘.

---

### 디자인 시스템 (공통)

**컬러 팔레트 — 모노톤 + 레드 포인트**
- Primary Red: #DA291C (롯데 레드 — 수치 강조, 핵심 포인트에만 사용)
- Black: #111111 (주요 텍스트, 다크 배경)
- White: #FFFFFF
- Light Gray Background: #F9F9F9 (Performance 섹션 배경)
- Light Gray Background 2: #F4F4F4
- Text Gray: #666666 (보조 설명 텍스트)
- Label Gray: #888888 (섹션 라벨)
- Border: #EEEEEE

**타이포그래피**
- 영문 제목/숫자: Manrope (weight 200, 400, 600, 800)
- 한글 본문: Pretendard (weight 400, 500, 600, 700)
- 영문 우선, 한글 fallback
- letter-spacing: -0.03em (제목 전체 적용)
- 특징: **초대형 Display 타이포그래피** 적극 활용 (60px~180px)

**공통 스타일 규칙**
- 모서리: 대부분 0px (sharp edge), 이미지 호버용만 10px
- 그림자: 사용하지 않음 (플랫 디자인)
- 좌우 패딩: 5vw (Desktop 약 72px)
- 전체적으로 넉넉한 여백, 텍스트 중심 레이아웃
- 아이콘: Phosphor Icons (최소한으로 사용)

---

### 섹션 1: Header (mix-blend-mode: difference)

- 위치: 고정(fixed), 최상위 z-index
- 높이: 약 80px, 좌우 패딩 50px
- **배경 없음** (투명) — mix-blend-mode: difference 효과로 항상 흰색 텍스트 표시
- **왼쪽**: "LOTTE P&D" — 20px, 800 weight, 흰색
- **오른쪽**: "MENU" — 14px, 600 weight, 흰색
- **Mobile**: 동일 구조, 패딩만 축소 (좌우 20px)

> 피그마에서는 mix-blend-mode: difference를 직접 적용해줘. 다크 배경 위에서는 흰색, 밝은 배경 위에서도 반전되어 보이는 효과.

---

### 섹션 2: Hero (다크 시네마틱 풀스크린)

- 높이: 100vh (Desktop 프레임에서 약 900px)
- **배경**: 검정(#000000) 위에 도시 고층빌딩 이미지, opacity 0.6
  - 이미지: https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80 (고층빌딩 저각도 촬영)
  - 실제 사이트는 비디오 배경이지만, 피그마에서는 이 이미지를 poster로 사용
- **콘텐츠** (정확히 수직·수평 가운데 정렬):
  1. 라벨: "2026 SUSTAINABILITY REPORT" — 14px, 600 weight, uppercase, letter-spacing 2px, #888
  2. 대제목 (두 줄, 각 줄이 별도 block):
     - 1행: "BEYOND"
     - 2행: "LANDMARK"
     - 스타일: clamp(60px, 10vw, 180px) — Desktop에서 약 144px, Mobile에서 약 60px
     - 800 weight, 흰색, letter-spacing -0.03em, line-height 1
  3. 라벨과 제목 모두 text-align center

- **전체 분위기**: 시네마틱하고 무게감 있는 다크 톤. 텍스트가 화면을 지배하는 느낌.

---

### 섹션 3: Intro (대형 리드 카피)

- 배경: #FFFFFF
- 패딩: 상하 200px, 좌우 5vw
- **텍스트만 있는 섹션** — 이미지 없음, 텍스트로 임팩트
- 내용 (왼쪽 정렬):

```
롯데물산은 도시의 스카이라인을 넘어,
지속가능한 삶의 기준을 높입니다.

우리는 2040 탄소중립을 향해
가장 높은 곳에서 변화를 시작합니다.
```

- 스타일: clamp(30px, 4vw, 60px) — Desktop에서 약 58px, Mobile에서 약 30px
- 600 weight, #111, line-height 1.3
- "지속가능한 삶의 기준" 부분만 #DA291C (빨간색) 강조
- 문단 사이 빈 줄(약 40px 간격)

---

### 섹션 4: Core Agenda — 2026 Focus Areas (호버 리스트)

- 배경: #FFFFFF
- 패딩: 상하 100px
- border-top: 1px #EEEEEE

**헤더 영역**:
- 라벨: "CORE AGENDA" — 14px, 600 weight, #888, uppercase, letter-spacing 2px
- 제목: "2026 Focus Areas" — 60px (Desktop) / 36px (Mobile), 800 weight

**리스트 (4개 항목, 세로 나열)**:
각 항목의 구조:

```
[번호]  [대제목]                                    [설명 텍스트]
─────────────────────────────────────────────────────────────────
```

| 번호 | 대제목 | 설명 |
|------|--------|------|
| 01 | Net Zero | 온실가스 감축 및 에너지 전환 |
| 02 | Safety First | 중대재해 Zero 안전 경영 실현 |
| 03 | Shared Growth | 협력사 동반성장 생태계 구축 |
| 04 | Governance | 투명한 이사회 운영 및 윤리경영 |

- 각 항목 레이아웃: 좌우로 번호+제목(왼쪽)과 설명(오른쪽, width 300px) 배치
- 번호(topic-idx): 16px, 600 weight, 번호 오른쪽 40px 간격 후 제목
- 제목(topic-name): **60px** (Desktop) / 40px (Mobile), **800 weight** — 매우 크고 Bold
- 설명(topic-desc): 18px, #666
- 각 항목 padding: 60px 0, 하단 border-bottom: 1px #EEEEEE
- **hover 효과**: padding-left 30px로 밀림 + border-bottom 색상 #111로 진해짐

**호버 이미지** (Desktop only, Mobile에서는 미표시):
- 각 항목에 hover 시 화면 중앙에 400×500px 이미지가 떠오름
- border-radius: 10px, filter: brightness(0.8)
- 각 항목별 이미지:
  - Net Zero: https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80 (자연/바람)
  - Safety First: https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80 (안전/기술)
  - Shared Growth: https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80 (협업/사람들)
  - Governance: https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80 (서류/거버넌스)

> 피그마에서는 hover state를 Component variant로 구현하거나, 리스트 옆에 4개 이미지를 참고 레이어로 배치해둬.

---

### 섹션 5: Key Highlights (초대형 숫자 퍼포먼스)

- 배경: #F9F9F9
- 패딩: 상하 150px

**헤더**:
- 라벨: "KEY HIGHLIGHTS" — 14px, 600 weight, #888, uppercase

**3열 그리드** (Desktop) / **1열 스택** (Mobile), gap 100px (Desktop) / 60px (Mobile)

| 숫자 | 단위 | 제목 | 설명 |
|------|------|------|------|
| 32 | % (빨간) | GHG Reduction | 수열 에너지를 활용하여 전년 대비 획기적인 탄소 배출 저감을 달성했습니다. |
| 0 | (없음) | Safety Incidents | 5년 연속 중대재해 발생 건수 0건을 기록하며 안전을 증명했습니다. |
| 200 | 억 (빨간) | Growth Fund | 파트너사와의 상생을 위해 200억원 규모의 동반성장 펀드를 조성했습니다. |

- **숫자 스타일**: **100px**, 800 weight, #111, line-height 0.9 — 화면을 압도하는 크기
- **단위(%, 억)**: 30px, vertical-align top, #DA291C (빨간)
- 숫자 아래 20px 간격 후:
  - border-top: 2px #DDD
  - padding-top: 20px
  - 제목: bold, 18px
  - 설명: 18px, #555, line-height 1.6

---

### 섹션 6: Our Portfolio (Sticky Scroll 레이아웃)

- 배경 없음 (좌측 검정 / 우측 흰색)
- **Desktop: 좌우 50/50 분할**
- **Mobile: 위아래 스택**

**왼쪽 패널 — 검정 고정 영역** (Desktop에서 sticky):
- 배경: #000000 (검정)
- width: 50% (720px)
- height: 100vh에 해당하는 높이로 표현 (약 900px)
- padding: 80px
- 수직 가운데 정렬:
  - 라벨: "OUR PORTFOLIO" — 14px, #888, uppercase
  - 대제목: "Designing Sustainable Velocity." — 60px (Desktop) / 40px (Mobile), 800 weight, 흰색, line-height 1.1
- **Mobile**: 검정 배경 풀폭, 높이 auto, padding 60px 20px

**오른쪽 패널 — 스크롤 콘텐츠** (3개 블록):
- 배경: #FFFFFF
- 각 블록 높이: 100vh (약 900px), padding 80px
- 블록 사이: border-bottom 1px #F0F0F0

**블록 1 — Lotte World Tower**:
- 이미지: https://images.unsplash.com/photo-1549429737-02052d921200?q=80&w=2000&auto=format&fit=crop
  - width 100%, height 60%, object-fit: cover
- 라벨: "01 PROPERTY" — 14px, #888
- 제목: "Lotte World Tower" — 40px, 800 weight
- 설명: "세계적인 친환경 랜드마크 운영 노하우"

**블록 2 — Asset Management**:
- 이미지: https://images.unsplash.com/photo-1497366216548-37526070297c?q=80 (오피스 인테리어)
- 라벨: "02 MANAGEMENT"
- 제목: "Asset Management" — 40px
- 설명: "프리미엄 자산 가치 제고 및 임대 관리"

**블록 3 — Eco Tech**:
- 이미지: https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80 (풍력/에코)
- 라벨: "03 SOLUTION"
- 제목: "Eco Tech" — 40px
- 설명: "건물 에너지 효율화 솔루션 (BEMS)"

> 피그마에서는 왼쪽 검정 패널을 고정(sticky) 느낌으로 배치하고, 오른쪽 3개 블록을 세로로 쌓아 스크롤되는 구조를 표현해줘. 프로토타입에서 sticky scroll을 구현하면 가장 좋음.

---

### 섹션 7: Social Impact (풀스크린 이미지 + 센터 오버레이)

- 높이: 100vh (약 900px)
- **배경 이미지**: https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80
  - center/cover, 고정(fixed) 느낌 — 자연/숲 이미지
- 이미지 위에 **흰색 카드 오버레이** (가운데 정렬):
  - 배경: #FFFFFF
  - padding: 80px
  - max-width: 600px
  - text-align: center
  - 내용:
    1. 대형 숫자: "245B" — **80px**, 800 weight, #DA291C
    2. 부제: "Social Value Created" — 24px, 700 weight, margin-top 20px
    3. 설명: "2026년, 롯데물산이 창출한 사회적 가치의 총액입니다. 우리는 숫자를 넘어 진정한 변화를 만듭니다." — 16px 기본, #666, margin-top 20px

- **Mobile**: 이미지 높이 줄이고(약 600px), 카드 padding 40px, 숫자 60px

---

### 섹션 8: Footer (미니멀 다크)

- 배경: #111111
- padding: 100px 5vw
- **2열 그리드** (Desktop) / **1열 스택** (Mobile), gap 50px

**왼쪽**:
- 로고: "LOTTE P&D" — **40px**, 800 weight, 흰색
- 위치: "Seoul, Korea" — opacity 0.5

**오른쪽** (하단 정렬, align-self: end):
- 링크 3개 가로 나열: "Privacy Policy" | "Contact Us" | "Download Report"
  - 14px, #888, 각 30px 간격
  - hover 시 흰색
- 하단 카피: "© 2026 LOTTE Property & Development." — 13px, opacity 0.3, margin-top 40px

**Mobile**: 1열 세로 스택, 링크도 세로 배치

---

### 인터랙션/프로토타입 참고사항

- **전체**: 스크롤 시 각 섹션 콘텐츠가 fade-up으로 등장 (opacity 0→1, translateY 50px→0)
- **Header**: mix-blend-mode: difference — 다크 배경에서도, 밝은 배경에서도 텍스트가 보임
- **Hero 배경**: 비디오 대신 정적 이미지 사용, 살짝 어두운 오버레이(opacity 0.6)
- **Focus Areas 리스트**: hover 시 왼쪽으로 30px 들여쓰기 + 밑줄 색상 변화 + 중앙에 이미지 팝업
- **Portfolio 섹션**: 왼쪽 패널 sticky, 오른쪽 패널 스크롤 — Figma prototype의 Scroll → Fixed position 활용
- **Social Impact**: 배경 이미지에 parallax(fixed attachment) 느낌 연출

---

### 추가 지시

- Auto Layout을 적극 활용하여 반응형 구조로 만들어줘
- 컴포넌트화 요소: Topic Item(default/hover variant), Performance Card, Business Block, Footer Link
- 레이어 네이밍은 영문으로 정리 (예: Header, Hero/Title-Line1, Topics/Item-01, Performance/Stat-01 등)
- **컨셉 1과의 차이점 핵심**: 이 디자인은 그림자/border-radius를 거의 사용하지 않는 플랫한 에디토리얼 스타일. 초대형 타이포그래피(100px+)로 시각적 무게감을 만들고, 흑백 대비와 빨간색 포인트로 긴장감 있는 분위기를 연출해줘.
- 전체 톤: 시네마틱, 에디토리얼, 대담하고 모던한 기업 보고서