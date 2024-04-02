const fs = require('fs');

async function asyncBlockIO() {
    try {
        console.log('Start asyncBlockIO');
        // 비동기 작업인 readFile이 끝날 떄까지 기다린다.
        const data = await fs.readFile('file1.txt', 'utf-8');
        console.log('Data:', data);
        console.log('End asyncBlockIO');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// asyncBlockIO();

function asyncNonBlockIO() {
    console.log('Start asyncNonBlockIO');
    setTimeout(async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();
            console.log('Data:', data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }, 0);
    console.log('End asyncNonBlockIO');
}

asyncNonBlockIO();


function syncNonBlockIO() {
    console.log('Start syncNonBlockIO');
    setTimeout(() => {
        try {
            const files = fs.readdirSync('./');
            console.log('Files:', files);
            console.log('End syncNonBlockIO');
        } catch (error) {
            console.error('Error:', error.message);
        }
    }, 0);
}

// syncNonBlockIO();


function syncBlockIO() {
    try {
        console.log('Start syncBlockIO');
        const data = fs.readFileSync('file1.txt', 'utf-8');
        console.log('Data:', data);
        console.log('End syncBlockIO');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// syncBlockIO();
