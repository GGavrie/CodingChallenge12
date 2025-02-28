//Task 1 Business Dashboard – DOM Element Selection and Creation
// Selecting the dashboard container using both methods
const dashboardContainer1 = document.getElementById('dashboard'); 
const dashboardContainer2 = document.querySelector('#dashboard'); 

// Creating a new div element for the metric card
const metricCard = document.createElement('div'); // 

// Assigning a class and an ID to the new element
metricCard.setAttribute('class', 'metric-card'); 
metricCard.setAttribute('id', 'revenueCard'); 

// Creating elements for the title and value
const cardTitle = document.createElement('h3'); 
cardTitle.textContent = 'Revenue'; 

const cardValue = document.createElement('p'); 
cardValue.textContent = '$0'; 

// Appending the title and value to the metric card
metricCard.appendChild(cardTitle); 
metricCard.appendChild(cardValue); 

// Appending the metric card to the dashboard container
dashboardContainer1.appendChild(metricCard); // Adds the metric card to the dashboard container