// --- Data Source ---
let events = [
    { id: 1, title: "AI/ML Workshop", date: "2025-12-10T14:00", location: "CS Lab 301", description: "Hands-on session on neural networks and deep learning basics.", department: "CS", category: "Technical", type: "Workshop" },
    { id: 2, title: "CULTURA 2026", date: "2026-01-20T10:00", location: "Grand Auditorium", description: "The biggest cultural fest of the year. Music, Dance, and Drama.", department: "Arts", category: "Cultural", type: "Fair" },
    { id: 3, title: "Robotics Seminar", date: "2025-12-15T11:30", location: "EE Seminar Hall", description: "Guest lecture by Industry Experts on Automation.", department: "EE", category: "Technical", type: "Talk" },
    { id: 4, title: "Football Cup", date: "2026-02-05T09:00", location: "College Ground", description: "Inter-departmental football tournament finals.", department: "ME", category: "Sports", type: "Competition" },
    { id: 5, title: "Mega Job Fair", date: "2026-03-01T10:00", location: "Central Plaza", description: "Connect with top recruiters from MNCs.", department: "Arts", category: "Academic", type: "Fair" },
    { id: 6, title: "Hackathon v2.0", date: "2025-11-25T08:00", location: "Innovation Hub", description: "24-hour coding marathon to solve real-world problems.", department: "CS", category: "Technical", type: "Competition" }
];

const config = {
    departments: ["CS", "ME", "EE", "Arts"],
    categories: ["Technical", "Cultural", "Sports", "Academic"],
    types: ["Workshop", "Competition", "Talk", "Fair"]
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    populateDropdowns();
    renderEvents();
    renderCarousel();
    startCarousel();
});

// --- Rendering Functions ---

function populateDropdowns() {
    // Helper to fill select elements
    const fill = (id, data) => {
        const els = document.querySelectorAll(`#${id}`); // Use querySelectorAll to target filter & form dropdowns
        els.forEach(select => {
            // Keep default option for filters, remove for forms if needed
            if(id.startsWith('new-') || id.startsWith('reg-')) select.innerHTML = `<option value="">Select...</option>`; 
            
            data.forEach(item => {
                select.innerHTML += `<option value="${item}">${item}</option>`;
            });
        });
    };

    // Fill Filter Dropdowns
    const fillFilter = (id, data) => {
        const el = document.getElementById(id);
        data.forEach(item => el.innerHTML += `<option value="${item}">${item}</option>`);
    };

    fillFilter('sort-department', config.departments);
    fillFilter('sort-category', config.categories);
    fillFilter('sort-type', config.types);

    // Fill Form Dropdowns
    fill('new-department', config.departments);
    fill('new-category', config.categories);
    fill('new-type', config.types);
}

function createEventCard(event) {
    const dateObj = new Date(event.date);
    const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const timeStr = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    return `
        <article class="event-card" data-dept="${event.department}" data-cat="${event.category}" data-type="${event.type}">
            <div class="card-header">
                <span class="card-badge">${event.category}</span>
                <small style="color:var(--text-muted)">${event.type}</small>
            </div>
            <h3>${event.title}</h3>
            <div class="event-meta">
                <span><i class="fa-regular fa-calendar"></i> ${dateStr}, ${timeStr}</span>
                <span><i class="fa-solid fa-location-dot"></i> ${event.location}</span>
            </div>
            <p class="event-desc">${event.description}</p>
            <button class="btn btn-primary full-width" onclick="openRegisterModal(${event.id})">
                Register Now
            </button>
        </article>
    `;
}

function renderEvents() {
    const grid = document.getElementById('event-list');
    grid.innerHTML = events.map(event => createEventCard(event)).join('');
}

// --- Filter Logic ---

function filterEvents() {
    const dept = document.getElementById('sort-department').value;
    const cat = document.getElementById('sort-category').value;
    const type = document.getElementById('sort-type').value;

    const cards = document.querySelectorAll('.event-card');

    cards.forEach(card => {
        const mDept = dept === 'all' || card.dataset.dept === dept;
        const mCat = cat === 'all' || card.dataset.cat === cat;
        const mType = type === 'all' || card.dataset.type === type;

        card.style.display = (mDept && mCat && mType) ? 'block' : 'none';
    });
}

// --- Carousel Logic ---
let slideIndex = 0;
const SLIDE_INTERVAL = 4000;

function renderCarousel() {
    const track = document.getElementById('carousel-track');
    const highlights = events.slice(0, 3); // Take top 3

    track.innerHTML = highlights.map(event => `
        <div class="carousel-slide">
            <h2>${event.title}</h2>
            <p>${new Date(event.date).toDateString()} @ ${event.location}</p>
            <button class="btn btn-primary" onclick="openRegisterModal(${event.id})">View Details & Register</button>
        </div>
    `).join('');
}

function startCarousel() {
    const track = document.getElementById('carousel-track');
    // Simple auto-scroll
    setInterval(() => {
        slideIndex = (slideIndex + 1) % 3; // Assuming 3 slides
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

// Close modal if clicking outside content
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
        type: document.getElementById('new-type').value
    };

    events.push(newEvent);
    renderEvents(); // Update grid
    renderCarousel(); // Update slider (if logic includes new events)
    
    alert('Event Submitted Successfully!');
    closeModal('new-event-modal');
    e.target.reset();
}