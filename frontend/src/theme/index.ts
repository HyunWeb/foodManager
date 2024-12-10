import { createSystem, defineConfig } from "@chakra-ui/react";
// extendTheme로 Chakra UI 기본 테마 확장
const theme = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#FE8D00" },
        secondary: { value: "#00796B" },
      },
      fonts: {
        body: { value: `'Noto Sans KR', sans-serif` }, // 기본 본문 폰트}
        heading: { value: `'Noto Sans KR', sans-serif` }, // 제목 폰트}
        mono: { value: `'Courier New', monospace` }, // 고정폭 폰트}
      },
    },
  },
  // 추가적으로 필요한 테마 속성들도 설정 가능
});

export const system = createSystem(theme);
