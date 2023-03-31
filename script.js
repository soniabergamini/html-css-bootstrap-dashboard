
// ************** START OF GRAPH JS ************** //
    const ctx = document.getElementById('GraphJS');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Never', 'Every few hours', 'Every hour', 'Multiple times per hour', 'Constantly'],
            datasets: [{
                label: '% of Votes',
                data: [18, 49, 11, 13, 9],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
// ************** END OF GRAPH JS ************** //