module.exports = {
  // 필요한 플러그인을 여기에 정의합니다.
  plugins: ["no-relative-import-paths"],
  extends: [
    // ✅ (필수) rushstack 컨피그를 가져옵니다.
    "@rushstack/eslint-config/profile/web-app",
  ],
  rules: {
    // 필요한 커스텀 규칙을 여기에 정의합니다.
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    // 공통으로 넣고 싶은 설정이 있으면 추가합니다.
  },
};
