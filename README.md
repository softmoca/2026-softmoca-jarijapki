# 2026-softmoca-jarijapki

첫 자취생을 위한 자취 정착 도우미 — 방 구할 때 체크리스트 + 자취 백과 (우테코 레벨3 개인 프로젝트)

기획·스펙·검증 규율은 [`CLAUDE.md`](./CLAUDE.md)와 [`docs/`](./docs)를 참조한다.

## 스택

Vite + React 18 + TypeScript + Tailwind CSS + Vercel

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:5173
```

## 빌드

```bash
npm run build    # tsc + vite build → dist/
npm run preview  # 빌드 결과 미리보기 (http://localhost:4173)
```

## 배포 (Vercel)

- GitHub `main` 브랜치에 푸시하면 Vercel이 자동 배포한다.
- Framework preset: **Vite**(자동 감지), Build Command: `npm run build`, Output Directory: `dist`.
- 클라이언트 라우팅(BrowserRouter) 딥링크가 404 나지 않도록 `vercel.json`에 SPA rewrite를 둔다.
- 백엔드·환경변수·시크릿 없음. repo `Settings > Security`에서 **Secret scanning**은 켜 둔다.
