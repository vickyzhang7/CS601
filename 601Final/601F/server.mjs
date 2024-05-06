import fetch from 'node-fetch';

async function fetchData() {
    try {
        const response = await fetch('https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com');
        const data = await response.json();

        const domainTableBody = document.getElementById('domain-table-body');

        data.domains.forEach(domain => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${domain.domain}</td>
                <td>${domain.zone}</td>
                <td>${domain.create_time}</td>
                <td>${domain.update_time}</td>
                <td>${domain.isDead}</td>
                <td>${domain.a}</td>
            `;
            domainTableBody.appendChild(row);
        });
    } catch (error) {
        console.error('获取数据时出错:', error);
    }
}

// 调用函数以获取数据并构建表格
fetchData();
