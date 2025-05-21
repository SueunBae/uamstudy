# uamstudy


<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>UAM 실험 링크 분배</title>
  <script>
    const links = [
      "https://moaform.com/q/z7cqiv", // A 조건
      "https://moaform.com/q/NOmwim", // B 조건
      "https://moaform.com/q/Az5wl7", // C 조건
      "https://moaform.com/q/SPwxcl"  // D 조건
    ];

    let count = localStorage.getItem("participantCount") || 0;
    let index = count % links.length;
    localStorage.setItem("participantCount", ++count);

    // 리디렉트
    window.location.href = links[index];
  </script>
</head>
<body>
  <p>잠시만 기다려주세요... 설문 링크로 이동 중입니다.</p>
</body>
</html>
