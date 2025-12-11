const config = {
    departments: [
        "CS", "ME", "ECE", "ENE", "ETC", "CT", "IT", 
        "AIDS", "AIML", "CSD", "IoT", "VLSI"
    ],
    categories: ["Technical", "Cultural", "Sports", "Academic" , "Art"],
    types: ["Workshop", "Competition", "Talk", "Fair"]
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Check if data.js is loaded
    if (typeof events === 'undefined') {
        console.error("Error: data.js is not loaded. Make sure the file exists!");
        return;
    }

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
            // FIX: We removed the check that was stopping the code.
            // Now we simply append the options to whatever is already there.
            data.forEach(item => {
                // Prevent adding duplicates if they already exist
                if (!select.innerHTML.includes(`value="${item}"`)) {
                    select.innerHTML += `<option value="${item}">${item}</option>`;
                }
            });
        });
    };

    fill('new-department', config.departments);
    fill('new-category', config.categories);
    fill('new-type', config.types);
    
    // Also fill the Sort filters if they exist
    fill('sort-department', config.departments);
    fill('sort-category', config.categories);
    fill('sort-type', config.types);
}

function createEventCard(event) {
    const dateObj = new Date(event.date);
    const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const timeStr = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

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
            
            <button class="btn btn-primary full-width" onclick="event.stopPropagation(); window.location.href='event-details.html?id=${event.id}'">
                Learn More <i class="fa-solid fa-arrow-right"></i>
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
        // We find the event object corresponding to this card's title
        const cardTitle = card.querySelector('h3').innerText;
        const event = events.find(e => e.title === cardTitle);
        
        if (event) {
             const mDept = dept === 'all' || event.department === dept;
             const mCat = cat === 'all' || event.category === cat;
             const mType = type === 'all' || event.type === type;
             card.style.display = (mDept && mCat && mType) ? 'block' : 'none';
        }
    });
}

// --- Carousel Logic ---
let slideIndex = 0;
const SLIDE_INTERVAL = 4000;

function renderCarousel() {
    const track = document.getElementById('carousel-track');
    if (!track) return;
    
    // Safety check if events are empty
    if(events.length === 0) return;

    const highlights = events.slice(0, 3); 

    track.innerHTML = highlights.map(event => `
        <div class="carousel-slide" style="background-image: linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('${event.image}'); background-size: cover;">
            <h2>${event.title}</h2>
            <p>${new Date(event.date).toDateString()} @ ${event.location}</p>
            <button class="btn btn-primary" onclick="window.location.href='event-details.html?id=${event.id}'">View Details</button>
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

// --- Modal Logic (For New Event) ---
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
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80"
    };

    events.push(newEvent);
    renderEvents(); 
    renderCarousel();
    
    alert('Event Submitted Successfully!');
    closeModal('new-event-modal');
    e.target.reset();
}