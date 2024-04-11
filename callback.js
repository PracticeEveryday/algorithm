const fs = require('fs');

// 콜백 함수를 사용하여 파일을 읽어오는 함수
function readFileWithCallback(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}

// 예시 파일 경로
const filePath = 'example.txt';

// 파일을 읽어와서 처리하는 콜백 함수
function processFile(err, fileData) {
    if (err) {
        console.error('파일 읽기 에러:', err);
    } else {
        // 파일 데이터를 줄 단위로 나누고 각 줄을 대문자로 변환하여 출력
        const lines = fileData.split('\n');
        lines.forEach((line, index) => {
            console.log(`줄 ${index + 1}: ${line.toUpperCase()}`);
        });
    }
}

// 파일 읽기 함수 호출
readFileWithCallback(filePath, processFile);
