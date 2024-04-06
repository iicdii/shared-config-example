module.exports = {
  // 플러그인 문서:
  // https://www.npmjs.com/package/eslint-plugin-react
  // https://github.com/ArnaudBarre/eslint-plugin-react-refresh
  // https://www.npmjs.com/package/eslint-plugin-jsx-a11y
  plugins: ["react", "react-refresh", "jsx-a11y"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],

  settings: {
    react: {
      // 현재 React 버전을 명시합니다.
      // 명시하지 않을 경우(기본값 'detect') React 라이브러리 전체를 불러오므로
      // 린트 과정에서 속도가 느려질 수 있습니다.
      version: "detect",
    },
  },

  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'react-refresh/only-export-components': 'off',
      },
    },
  ],

  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    // <img> 엘리먼트에 유의미한 대체 텍스트가 있는지 체크
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
      },
    ],
    // 유효한 aria-* 속성만 사용
    "jsx-a11y/aria-props": "warn",
    // 유효한 aria-* 상태/값만 사용
    "jsx-a11y/aria-proptypes": "warn",
    // DOM에서 지원되는 role, ARIA만 사용
    "jsx-a11y/aria-unsupported-elements": "warn",
    // 필수 ARIA 속성이 빠져있는지 체크
    "jsx-a11y/role-has-required-aria-props": "warn",
    // ARIA 속성은 지원되는 role에서만 사용
    "jsx-a11y/role-supports-aria-props": "warn",
    // DOM에 정의되지 않은 속성을 사용했는지 체크 (emotion css 속성 등 예외 케이스가 있으므로 기본은 off)
    "react/no-unknown-property": "off",
    // 정의한 props 중에 빠진게 있는지 체크 (NextPage 등 일부 추상화 컴포넌트에서 복잡해지므로 기본은 off)
    "react/prop-types": "off",
  },
};
