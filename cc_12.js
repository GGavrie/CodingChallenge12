//Task 1 Business Dashboard – DOM Element Selection and Creation
// Selecting the dashboard container using both methods
const dashboardContainer1 = document.getElementById('dashboard'); 
const dashboardContainer2 = document.querySelector('#dashboard'); 

// Creating a new div element for the revenue metric card
const revenueCard = document.createElement('div'); 

// Assigning a class and an ID to the new element
revenueCard.setAttribute('class', 'metric-card'); 
revenueCard.setAttribute('id', 'revenueCard'); 

// Creating elements for the title and value
const revenueCardTitle = document.createElement('h3'); 
revenueCardTitle.textContent = 'Revenue'; 

const revenueCardValue = document.createElement('p'); 
revenueCardValue.textContent = '$0'; 

// Appending the title and value to the metric card
revenueCard.appendChild(revenueCardTitle); 
revenueCard.appendChild(revenueCardValue); 

// Appending the metric card to the dashboard container
dashboardContainer1.appendChild(revenueCard); // Adds the metric card to the dashboard container

// Creating a new div element for the profit metric card
const profitCard = document.createElement('div'); 

// Assigning a class and an ID to the new element
profitCard.setAttribute('class', 'metric-card'); 
profitCard.setAttribute('id', 'profitCard'); 

// Creating elements for the title and value
const profitCardTitle = document.createElement('h3'); 
profitCardTitle.textContent = 'Profit'; 

const profitCardValue = document.createElement('p'); 
profitCardValue.textContent = '$0'; 

// Appending the title and value to the metric card
profitCard.appendChild(profitCardTitle); 
profitCard.appendChild(profitCardValue); 

// Appending the metric card to the dashboard container
dashboardContainer1.appendChild(profitCard); // Adds the metric card to the dashboard container

// Creating a new div element for the expenses metric card
const expensesCard = document.createElement('div'); 

// Assigning a class and an ID to the new element
expensesCard.setAttribute('class', 'metric-card'); 
expensesCard.setAttribute('id', 'expensesCard'); 

// Creating elements for the title and value
const expensesCardTitle = document.createElement('h3'); 
expensesCardTitle.textContent = 'Expenses'; 

const expensesCardValue = document.createElement('p'); 
expensesCardValue.textContent = '$0'; 

// Appending the title and value to the metric card
expensesCard.appendChild(expensesCardTitle); 
expensesCard.appendChild(expensesCardValue); 

// Appending the metric card to the dashboard container
dashboardContainer1.appendChild(expensesCard); // Adds the metric card to the dashboard container

//Task 2 
// Selecting all elements with the class "metric-card"
const metricCards = document.querySelectorAll('.metric-card');

// Converting the NodeList to an array
const metricCardsArray = Array.from(metricCards);

// Using forEach to update each card's inner text
metricCardsArray.forEach(card => {
    card.textContent = card.textContent + ' - Updated';
    card.style.backgroundColor = 'lightBlue';
});
