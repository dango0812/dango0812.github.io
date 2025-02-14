import { join } from "path";
// fs
import { readFileSync, writeFileSync, existsSync } from "fs";

const distPath = "dist";
const destinations = ["career", "project", "project/detail", "blog", "404"];

destinations.forEach((dest) => {
  const filePath = join(distPath, dest, "index.html");

  if (existsSync(filePath)) {
    let html = readFileSync(filePath, "utf-8");

    html = html.replace(
      '<script type="module" src="/src/index.tsx"></script>',
      `<script type="module" src="/src/pages/${dest}/page.tsx"></script>`
    );

    writeFileSync(filePath, html);
    console.log(`✅ ${filePath} 업데이트 완료!`);
  } else {
    console.warn(`❌ ${filePath} 파일을 찾을 수 없습니다.`);
  }
});
