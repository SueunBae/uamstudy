document.addEventListener('DOMContentLoaded', function() {
    // 링크 데이터 - 실제 사용할 링크 정보로 수정하세요
    const links = [
        {
            url: 'https://moaform.com/q/z7cqiv',
            title: '첫 번째 링크',
            description: '첫 번째 링크에 대한 설명입니다.'
        },
        {
            url: 'https://moaform.com/q/NOmwim',
            title: '두 번째 링크',
            description: '두 번째 링크에 대한 설명입니다.'
        },
        {
            url: 'https://moaform.com/q/Az5wl7',
            title: '세 번째 링크',
            description: '세 번째 링크에 대한 설명입니다.'
        },
        {
            url: 'https://moaform.com/q/SPwxcl',
            title: '네 번째 링크',
            description: '네 번째 링크에 대한 설명입니다.'
        }
    ];

    const linkContainer = document.getElementById('linkContainer');
    linkContainer.innerHTML = ''; // 기존 텍스트 제거

    // 링크를 순차적으로 표시하는 함수
    function showLinksSequentially(index) {
        if (index >= links.length) return;

        // 링크 요소 생성
        const linkElement = document.createElement('div');
        linkElement.className = 'link-item';
        
        // 링크 내용 설정
        linkElement.innerHTML = `
            <a href="${links[index].url}" target="_blank">${links[index].title}</a>
            <p class="link-description">${links[index].description}</p>
        `;
        
        // 컨테이너에 추가
        linkContainer.appendChild(linkElement);
        
        // 링크를 보이게 애니메이션 처리
        setTimeout(() => {
            linkElement.classList.add('visible');
            
            // 다음 링크 표시 예약
            setTimeout(() => {
                showLinksSequentially(index + 1);
            }, 1000); // 다음 링크까지의 지연 시간 (1초)
        }, 100); // 작은 지연으로 CSS 애니메이션 적용
    }

    // 첫 번째 링크부터 시작
    setTimeout(() => {
        showLinksSequentially(0);
    }, 500); // 초기 지연 시간 (0.5초)
});
