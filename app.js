// http 모듈은 node.js에서 기본으로 제공하는 모듈이므로 설치가 필요 없음.
const http = require('http');

const port = process.env.PORT || 3000;

// 서버가 실행된 후의 동작을 Callback Function으로 등록
// req : 요청 객체
// res : 응답 객체
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // 응답 정보 write
    res.write('Hello ');
    // 응답 정보 write+end
    res.end('sungsoo!!###%%%%%\n');
});

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});
