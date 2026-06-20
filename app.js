const guideCopy = {
  internet: "인터넷은 설치 주소, 현재 약정, 가족 모바일 통신사, 희망 속도를 준비하세요.",
  rental: "가전렌탈은 희망 품목, 설치 공간, 의무 사용 가능 기간, 관리 방식 선호도를 준비하세요.",
  funeral: "상조는 가입 목적, 월 납입 가능 금액, 제공 범위, 해지 환급 기준 질문을 준비하세요."
};

document.querySelector("[data-guide-button]")?.addEventListener("click", () => {
  const type = document.querySelector("[data-guide-type]")?.value || "internet";
  const result = document.querySelector("[data-guide-result]");
  if (result) result.textContent = guideCopy[type];
});
