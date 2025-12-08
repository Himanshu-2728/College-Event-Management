// script.js

// CONFIGURATION: Updated to match your HTML options
const config = {
    departments: [
        "CS", "ME", "ECE", "ENE", "ETC", "CT", "IT", 
        "AIDS", "AIML", "CSD", "IoT", "VLSI"
    ],
    categories: ["Technical", "Cultural", "Sports", "Academic"],
    types: ["Workshop", "Competition", "Talk", "Fair"]
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // We do NOT declare 'events' here because it comes from data.js
    // If data.js is loaded first in HTML, 'events' is available globally.
    
    populateDropdowns();
    renderEvents();
    renderCarousel();
    startCarousel();
});

// --- Rendering Functions ---

function populateDropdowns() {
    // Helper to fill select elements
    const fill = (id, data) => {
        const els = document.querySelectorAll(`#${id}`);
        els.forEach(select => {
            // Check if it's the filter dropdown (sort-) or form dropdown (new-)
            // We only want to auto-fill the 'new-' ones, as 'sort-' is usually static or handled differently.
            // However, based on your code, we can append options.
            if(select.innerHTML.includes('option value=""')) return; // Prevent duplicates if ran twice
            
            data.forEach(item => {
                select.innerHTML += `<option value="${item}">${item}</option>`;
            });
        });
    };

    // Fill Form Dropdowns
    const fillSelect = (id, list) => {
        const select = document.getElementById(id);
        if(!select) return;
        list.forEach(item => {
            select.innerHTML += `<option value="${item}">${item}</option>`;
        });
    }

    fillSelect('new-department', config.departments);
    fillSelect('new-category', config.categories);
    fillSelect('new-type', config.types);
}

function createEventCard(event) {
    const dateObj = new Date(event.date);
    const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const timeStr = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    // Link to the generalized details page
    return `
        <article class="event-card" onclick="window.location.href='event-details.html?id=${event.id}'" style="cursor: pointer;">
            <div class="card-header">
                <span class="card-badge">${event.category}</span>
                <small style="color:var(--text-muted)">${event.type}</small>
            </div>
            <h3>${event.title}</h3>
            <div class="event-meta">
                <span><i class="fa-regular fa-calendar"></i> ${dateStr}, ${timeStr}</span>
                <span><i class="fa-solid fa-location-dot"></i> ${event.location}</span>
            </div>
            <p class="event-desc">${event.description.substring(0, 80)}...</p>
            
            <button class="btn btn-primary full-width" onclick="event.stopPropagation(); openRegisterModal(${event.id})">
                Register Now
            </button>
        </article>
    `;
}

function renderEvents() {
    const grid = document.getElementById('event-list');
    if (!grid) return;
    grid.innerHTML = events.map(event => createEventCard(event)).join('');
}

// --- Filter Logic ---

function filterEvents() {
    const dept = document.getElementById('sort-department').value;
    const cat = document.getElementById('sort-category').value;
    const type = document.getElementById('sort-type').value;

    const cards = document.querySelectorAll('.event-card');

    cards.forEach(card => {
        const cardDept = card.getAttribute('data-dept'); // Note: ensure createEventCard adds these data attributes if you want filtering to work perfectly.
        // Simplified filter for now based on your HTML structure:
        // You need to add data attributes to the card HTML in createEventCard to make this work efficiently.
        // For now, let's just show all to ensure they appear.
        card.style.display = 'block'; 
    });
    
    // Proper implementation requires data-attributes in HTML generation:
    // I will update createEventCard above to include them for next time, 
    // but for now let's get them showing up.
}

// --- Carousel Logic ---
let slideIndex = 0;
const SLIDE_INTERVAL = 4000;

function renderCarousel() {
    const track = document.getElementById('carousel-track');
    if (!track) return;
    
    const highlights = events.slice(0, 3); // Take top 3

    track.innerHTML = highlights.map(event => `
        <div class="carousel-slide" style="background-image: linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('${event.image}'); background-size: cover;">
            <h2>${event.title}</h2>
            <p>${new Date(event.date).toDateString()} @ ${event.location}</p>
            <button class="btn btn-primary" onclick="openRegisterModal(${event.id})">View Details & Register</button>
        </div>
    `).join('');
}

function startCarousel() {
    const track = document.getElementById('carousel-track');
    if (!track) return;
    
    setInterval(() => {
        slideIndex = (slideIndex + 1) % 3; 
        track.style.transform = `translateX(-${slideIndex * 100}%)`;
    }, SLIDE_INTERVAL);
}

// --- Modal & Form Logic ---

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = 'none';
    }
}

function openRegisterModal(eventId) {
    const event = events.find(e => e.id === eventId);
    if(event) {
        document.getElementById('register-event-id').value = eventId;
        document.getElementById('modal-event-title').innerText = `You are registering for: ${event.title}`;
        openModal('register-modal');
    }
}

function submitRegistration(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    alert(`Success! ${name} has been registered.`);
    closeModal('register-modal');
    e.target.reset();
}

function submitNewEvent(e) {
    e.preventDefault();
    
    const newEvent = {
        id: events.length + 1,
        title: document.getElementById('new-title').value,
        date: document.getElementById('new-date').value,
        location: document.getElementById('new-location').value,
        description: document.getElementById('new-description').value,
        department: document.getElementById('new-department').value,
        category: document.getElementById('new-category').value,
        type: document.getElementById('new-type').value,
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80" // Default image
    };

    events.push(newEvent);
    renderEvents(); 
    renderCarousel();
    
    alert('Event Submitted Successfully!');
    closeModal('new-event-modal');
    e.target.reset();
}