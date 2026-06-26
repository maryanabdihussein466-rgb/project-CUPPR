/**
 * CUPRR - Centralized University Project Research & Repository
 * Vanilla JavaScript Core Engine (ES6+)
 * Features: LocalStorage ORM, Authentication, Dynamic Filtering, Live Search, Modals, Toasts
 */

/* ==========================================================================
   1. Initial Seed Data (University Research Repository)
   ========================================================================== */

const SEED_PROJECTS = [
  {
    id: "cuprr-001",
    title: "Quantum-Resistant Lattice Cryptography for Decentralized Academic Cloud Storage",
    faculty: "Computer & IT",
    author: "Alexandria Vance",
    supervisor: "Dr. Aris Thorne",
    year: 2026,
    rating: 5.0,
    featured: true,
    abstract: "As quantum computing advances toward breaking RSA and ECC encryption standards, this capstone research formulates a novel Ring-Learning With Errors (R-LWE) lattice cryptographic scheme optimized for low-latency university repository networks. Experimental trials demonstrate a 42% reduction in key-generation overhead compared to NIST baseline finalists while maintaining post-quantum provable security against Shor's algorithm.",
    references: [
      "NIST Post-Quantum Cryptography Standardization Report (2025)",
      "Thorne, A. & Vance, A. Lattice Structures in Distributed Consensus Networks (IEEE S&P, 2025)",
      "Regev, O. On lattices, learning with errors, random linear codes, and cryptography (J. ACM)"
    ]
  },
  {
    id: "cuprr-002",
    title: "Autonomous Drone Swarm Triangulation using Edge-AI Computer Vision in Wildfire Search & Rescue",
    faculty: "Computer & IT",
    author: "Marcus Chen",
    supervisor: "Prof. Elena Rostova",
    year: 2025,
    rating: 4.9,
    featured: true,
    abstract: "This project presents a decentralized real-time object detection architecture deployed on embedded NVIDIA Jetson modules aboard quadrotor UAVs. Utilizing a custom pruned YOLOv9 network fused with thermal infrared sensor telemetry, the swarm achieves sub-15ms inference latency in zero-visibility smoke plumes, successfully mapping survivor thermal signatures across 500 hectares of rugged terrain.",
    references: [
      "Rostova, E. Swarm Robotics in Extreme Thermal Environments (MIT Press, 2024)",
      "Redmon, J. et al. YOLO: Real-Time Object Detection at the Edge",
      "National Interagency Fire Center Aerial Telemetry Benchmarks (2025)"
    ]
  },
  {
    id: "cuprr-003",
    title: "Self-Healing Mycelium Nanocomposites for Sustainable High-Stress Bridge Suspension Cabling",
    faculty: "Engineering",
    author: "Liam O'Connor",
    supervisor: "Dr. Henrietta Sterling",
    year: 2026,
    rating: 4.9,
    featured: true,
    abstract: "Modern civil infrastructure faces catastrophic failure risks from micro-fissure corrosion in steel tensile tendons. By infusing dormant fungal mycelium spores within carbon-nanotube reinforced polyurethane matrices, this engineering thesis develops a bio-synthetic cabling material that autonomously calcifies and seals structural micro-fractures upon exposure to atmospheric moisture.",
    references: [
      "Sterling, H. Bio-Mimetic Infrastructure & Fungal Polymerization (Nature Materials, 2025)",
      "Ashby, M. F. Materials Selection in Mechanical Design (Butterworth-Heinemann)",
      "European Civil Engineering Structural Durability Guidelines (2024)"
    ]
  },
  {
    id: "cuprr-004",
    title: "Deep Reinforcement Learning for Algorithmic High-Frequency ESG Sentiment Arbitrage",
    faculty: "Business",
    author: "Sophia Al-Mansoor",
    supervisor: "Dr. Gregory Vance",
    year: 2025,
    rating: 4.8,
    featured: false,
    abstract: "Investigating the market efficiency of Environmental, Social, and Governance (ESG) disclosure shocks, this business analytics project trains a Proximal Policy Optimization (PPO) reinforcement learning agent on real-time NLP sentiment feeds. The model exploits momentary pricing inefficiencies across institutional dark pools, outperforming benchmark buy-and-hold indexes by 14.2% annualized Sharpe ratio.",
    references: [
      "Vance, G. Quantitative Behavioral Finance in High-Frequency Trading (Oxford Univ Press)",
      "Sutton, R. S. & Barto, A. G. Reinforcement Learning: An Introduction",
      "Bloomberg ESG Disclosure Volatility Index Whitepaper (2024)"
    ]
  },
  {
    id: "cuprr-005",
    title: "CRISPR-Cas13 Telemedicine Microfluidic Assay for Rapid Bedside Pathogen Typing",
    faculty: "Health Science",
    author: "Dr. Priya Nair (Grad)",
    supervisor: "Prof. Kenneth Alistair",
    year: 2026,
    rating: 5.0,
    featured: false,
    abstract: "Addressing diagnostic bottlenecks in rural clinics, this translational medical research engineers a smartphone-clip microfluidic cartridge utilizing CRISPR-Cas13 enzymatic collateral cleavage. Upon detecting target viral RNA biomarkers in patient saliva, the assay emits a quantifiable fluorescent signal interpreted by mobile neural networks in under 12 minutes.",
    references: [
      "Alistair, K. Point-of-Care Molecular Diagnostics (Lancet Infectious Diseases, 2025)",
      "Gootenberg, J. S. et al. Nucleic acid detection with CRISPR-Cas13a/c2c2",
      "World Health Organization Telemedicine Diagnostic Protocols (2025)"
    ]
  },
  {
    id: "cuprr-006",
    title: "Zero-Knowledge Proofs (zk-SNARKs) for Verifiable University Academic Credential Issuance",
    faculty: "Computer & IT",
    author: "Chloe Dubois",
    supervisor: "Dr. Aris Thorne",
    year: 2025,
    rating: 4.7,
    featured: false,
    abstract: "Degree fraud threatens institutional prestige worldwide. This project constructs an Ethereum Layer-2 smart contract framework permitting graduates to prove degree attainment and GPA thresholds to prospective employers without disclosing transcript personally identifiable information (PII), adhering strictly to GDPR privacy mandates.",
    references: [
      "Ben-Sasson, E. et al. SNARKs for C: Verifying Program Executions Succinctly",
      "European Higher Education Blockchain Registry Taskforce Report (2024)",
      "Thorne, A. Zero-Knowledge Cryptography in Public Administration (Springer)"
    ]
  },
  {
    id: "cuprr-007",
    title: "Piezoelectric Kinetic Energy Harvesting in Municipal Subway Rail Dampers",
    faculty: "Engineering",
    author: "Tariq Okafor",
    supervisor: "Dr. Henrietta Sterling",
    year: 2024,
    rating: 4.6,
    featured: false,
    abstract: "Subway deceleration generates vast uncaptured kinetic waste energy. This thesis prototypes heavy-duty lead zirconate titanate (PZT) transducer arrays embedded directly beneath rail tie pads. Field testing in metropolitan transit tunnels demonstrates continuous generation of 3.4 kW per train pass, sufficient to power subterranean station emergency lighting grids.",
    references: [
      "Okafor, T. & Sterling, H. Urban Transit Kinetic Reclamation (J. Renewable Energy, 2024)",
      "IEEE Standards for Piezoelectric Energy Harvesting Transducers (2023)"
    ]
  },
  {
    id: "cuprr-008",
    title: "Neuromorphic Haptic Feedback Glove for Robotic Tele-Surgery Grip Calibration",
    faculty: "Health Science",
    author: "Elena Rostova Jr.",
    supervisor: "Prof. Kenneth Alistair",
    year: 2025,
    rating: 4.9,
    featured: false,
    abstract: "Surgeons performing minimally invasive robotic procedures lack tactile force feedback, risking tissue trauma. By embedding flexible piezoresistive graphene micro-sensors across robotic end-effectors linked to a surgeon's fingertip pneumatic actuator glove, this project restores sub-millimeter tactile pressure perception with zero perceptible latency.",
    references: [
      "Alistair, K. Haptic Tele-Presence in Minimally Invasive Surgery (NEJM AI, 2024)",
      "Robotic Surgical Systems International Safety Benchmarks (2025)"
    ]
  }
];

/* ==========================================================================
   2. State Management & LocalStorage Storage Engine
   ========================================================================== */

const STORAGE_KEYS = {
  PROJECTS: "cuprr_projects_v1",
  USER: "cuprr_current_user_v1"
};

class StorageEngine {
  static getProjects() {
    const raw = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(SEED_PROJECTS));
      return SEED_PROJECTS;
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      console.error("Corrupted LocalStorage data, resetting seeds:", e);
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(SEED_PROJECTS));
      return SEED_PROJECTS;
    }
  }

  static saveProjects(projects) {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  }

  static getCurrentUser() {
    const raw = localStorage.getItem(STORAGE_KEYS.USER);
    return raw ? JSON.parse(raw) : null;
  }

  static setCurrentUser(user) {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.USER);
    }
  }
}

/* Global Application State */
let appState = {
  projects: [],
  currentUser: null,
  activeFaculty: "All",
  searchQuery: "",
  searchBy: "all"
};

/* ==========================================================================
   3. Initialization & DOM Ready Setup
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Load State
  appState.projects = StorageEngine.getProjects();
  appState.currentUser = StorageEngine.getCurrentUser();

  // Initialize UI Components
  initNavbar();
  initCounters();
  initFeaturedProjects();
  initRepository();
  initModals();
  initAuth();
  initAdminDashboard();

  // Refresh Lucide Icons
  refreshIcons();
});

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   4. Navbar & Mobile Menu Logic
   ========================================================================== */

function initNavbar() {
  const navbar = document.getElementById("mainNavbar");
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");

  // Sticky Blur & Shrink on Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile Toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
      const icon = mobileToggle.querySelector("i");
      if (navLinks.classList.contains("mobile-open")) {
        icon.setAttribute("data-lucide", "x");
      } else {
        icon.setAttribute("data-lucide", "menu");
      }
      refreshIcons();
    });
  }

  // Smooth Scroll & Active Links
  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSec = document.getElementById(targetId);
      if (targetSec) {
        if (navLinks) navLinks.classList.remove("mobile-open");
        targetSec.scrollIntoView({ behavior: "smooth" });
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });

  updateAuthUI();
}

/* ==========================================================================
   5. Hero Animated Counters
   ========================================================================== */

function initCounters() {
  const counterElements = document.querySelectorAll(".stat-number[data-target]");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterElements.forEach(counter => {
          const target = +counter.getAttribute("data-target");
          const suffix = counter.getAttribute("data-suffix") || "";
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const updateCount = () => {
            start += increment;
            if (start < target) {
              counter.innerText = Math.floor(start).toLocaleString() + suffix;
              requestAnimationFrame(updateCount);
            } else {
              counter.innerText = target.toLocaleString() + suffix;
            }
          };
          updateCount();
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSec = document.querySelector(".stats-grid");
  if (statsSec) observer.observe(statsSec);

  // Hero Search Form Handler
  const heroSearchBtn = document.getElementById("heroSearchBtn");
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const inputVal = document.getElementById("heroSearchInput").value;
      const facultyVal = document.getElementById("heroFacultySelect").value;
      const searchByVal = document.getElementById("heroSearchBy").value;

      appState.searchQuery = inputVal.trim();
      appState.searchBy = searchByVal;
      
      if (facultyVal !== "All") {
        appState.activeFaculty = facultyVal;
        document.querySelectorAll(".filter-tab").forEach(t => {
          t.classList.toggle("active", t.getAttribute("data-faculty") === facultyVal);
        });
      }

      // Sync repo search box
      const repoInput = document.getElementById("repoSearchInput");
      if (repoInput) repoInput.value = appState.searchQuery;

      renderRepository();
      
      const repoSec = document.getElementById("repository");
      if (repoSec) repoSec.scrollIntoView({ behavior: "smooth" });
      
      showToast(`Filtering Repository: ${facultyVal}`, "info");
    });
  }
}

/* ==========================================================================
   6. Featured Projects Section
   ========================================================================== */

function initFeaturedProjects() {
  const container = document.getElementById("featuredGrid");
  if (!container) return;

  const featured = appState.projects.filter(p => p.featured).slice(0, 3);
  container.innerHTML = featured.map(proj => getProjectCardHTML(proj)).join("");
  refreshIcons();
}

function getFacultyBadgeClass(faculty) {
  switch (faculty) {
    case "Computer & IT": return "badge-cs";
    case "Engineering": return "badge-eng";
    case "Business": return "badge-bus";
    case "Health Science": return "badge-hs";
    default: return "badge-cs";
  }
}

function getProjectCardHTML(proj) {
  const badgeClass = getFacultyBadgeClass(proj.faculty);
  const starsHTML = "★".repeat(Math.floor(proj.rating)) + (proj.rating % 1 !== 0 ? "½" : "");

  return `
    <div class="glass-card project-card">
      <div class="card-top">
        <span class="faculty-badge ${badgeClass}">${proj.faculty}</span>
        <span class="project-year">${proj.year}</span>
      </div>
      <h3 class="project-title">${escapeHTML(proj.title)}</h3>
      <div class="project-meta">
        <span><i data-lucide="user"></i> ${escapeHTML(proj.author)}</span>
        <span><i data-lucide="award"></i> Supervisor: ${escapeHTML(proj.supervisor)}</span>
      </div>
      <p class="project-summary">${escapeHTML(proj.abstract)}</p>
      <div class="card-footer">
        <div class="rating">
          ${starsHTML} <span>${proj.rating.toFixed(1)}</span>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${proj.id}')">
          <span>View Details</span> <i data-lucide="arrow-right"></i>
        </button>
      </div>
    </div>
  `;
}

/* ==========================================================================
   7. Repository Section & Filtering Engine
   ========================================================================== */

function initRepository() {
  // Category Tabs
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      appState.activeFaculty = tab.getAttribute("data-faculty");
      renderRepository();
    });
  });

  // Live Search Input
  const repoInput = document.getElementById("repoSearchInput");
  if (repoInput) {
    repoInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value.trim().toLowerCase();
      renderRepository();
    });
  }

  // Sort Select
  const sortSelect = document.getElementById("repoSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      renderRepository();
    });
  }

  renderRepository();
}

function renderRepository() {
  const container = document.getElementById("repositoryGrid");
  const countSpan = document.getElementById("repoCountNum");
  if (!container) return;

  let filtered = appState.projects.filter(p => {
    // Faculty Filter
    if (appState.activeFaculty !== "All" && p.faculty !== appState.activeFaculty) {
      return false;
    }
    // Search Query
    if (appState.searchQuery) {
      const q = appState.searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchAuthor = p.author.toLowerCase().includes(q);
      const matchSup = p.supervisor.toLowerCase().includes(q);
      const matchAbs = p.abstract.toLowerCase().includes(q);

      if (appState.searchBy === "title") return matchTitle;
      if (appState.searchBy === "author") return matchAuthor;
      if (appState.searchBy === "supervisor") return matchSup;
      return matchTitle || matchAuthor || matchSup || matchAbs;
    }
    return true;
  });

  // Sorting
  const sortVal = document.getElementById("repoSortSelect") ? document.getElementById("repoSortSelect").value : "newest";
  if (sortVal === "newest") filtered.sort((a, b) => b.year - a.year);
  if (sortVal === "oldest") filtered.sort((a, b) => a.year - b.year);
  if (sortVal === "rating") filtered.sort((a, b) => b.rating - a.rating);
  if (sortVal === "title") filtered.sort((a, b) => a.title.localeCompare(b.title));

  if (countSpan) countSpan.innerText = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i data-lucide="folder-search"></i>
        <h3>No Research Papers Found</h3>
        <p>No projects match your current filter criteria ("${escapeHTML(appState.searchQuery || appState.activeFaculty)}"). Try broadening your keywords or selecting "All Faculties".</p>
        <button class="btn btn-secondary btn-sm" style="margin-top: 20px;" onclick="resetRepositoryFilters()">Reset Filters</button>
      </div>
    `;
  } else {
    container.innerHTML = filtered.map(proj => getRepoCardHTML(proj)).join("");
  }
  refreshIcons();
}

function resetRepositoryFilters() {
  appState.activeFaculty = "All";
  appState.searchQuery = "";
  appState.searchBy = "all";

  document.querySelectorAll(".filter-tab").forEach(t => {
    t.classList.toggle("active", t.getAttribute("data-faculty") === "All");
  });
  
  const repoInput = document.getElementById("repoSearchInput");
  if (repoInput) repoInput.value = "";
  
  renderRepository();
}

function getRepoCardHTML(proj) {
  const badgeClass = getFacultyBadgeClass(proj.faculty);
  const refCount = proj.references ? proj.references.length : 0;

  return `
    <div class="glass-card project-card">
      <div class="card-top">
        <span class="faculty-badge ${badgeClass}">${proj.faculty}</span>
        <span class="project-year">${proj.year} • ★ ${proj.rating.toFixed(1)}</span>
      </div>
      <h3 class="project-title">${escapeHTML(proj.title)}</h3>
      <div class="project-meta">
        <span><i data-lucide="user"></i> Author: <strong style="color:var(--text-main);">${escapeHTML(proj.author)}</strong></span>
        <span><i data-lucide="book-open"></i> Supervisor: ${escapeHTML(proj.supervisor)}</span>
      </div>
      <p class="project-summary">${escapeHTML(proj.abstract)}</p>
      <div class="card-footer">
        <span class="references-tag"><i data-lucide="library"></i> ${refCount} References Indexed</span>
        <button class="btn btn-primary btn-sm" onclick="openProjectModal('${proj.id}')">
          <span>View Details</span> <i data-lucide="external-link"></i>
        </button>
      </div>
    </div>
  `;
}

/* ==========================================================================
   8. View Details Modal & Citation Generator
   ========================================================================== */

function openProjectModal(projId) {
  const proj = appState.projects.find(p => p.id === projId);
  if (!proj) return;

  const titleEl = document.getElementById("detailModalTitle");
  const bodyEl = document.getElementById("detailModalBody");
  
  if (titleEl) titleEl.innerText = "Research Paper Specification";

  const refsHTML = (proj.references && proj.references.length > 0)
    ? proj.references.map(r => `<li>${escapeHTML(r)}</li>`).join("")
    : `<li>No external bibliographic references listed.</li>`;

  // APA Citation Format string
  const apaCitation = `${proj.author} (${proj.year}). ${proj.title}. Centralized University Project Research and Repository (CUPRR), ${proj.faculty} Faculty.`;

  bodyEl.innerHTML = `
    <div style="margin-bottom: 20px;">
      <span class="faculty-badge ${getFacultyBadgeClass(proj.faculty)}" style="font-size:0.85rem;">${proj.faculty}</span>
    </div>
    <h2 style="font-size:1.65rem; font-weight:800; line-height:1.3; color:var(--text-main); margin-bottom:20px;">${escapeHTML(proj.title)}</h2>
    
    <div class="detail-meta-box">
      <div class="detail-meta-item">
        <label>Principal Author</label>
        <p>🎓 ${escapeHTML(proj.author)}</p>
      </div>
      <div class="detail-meta-item">
        <label>Faculty Supervisor</label>
        <p>🔬 ${escapeHTML(proj.supervisor)}</p>
      </div>
      <div class="detail-meta-item">
        <label>Publication Year</label>
        <p>📅 ${proj.year}</p>
      </div>
      <div class="detail-meta-item">
        <label>Academic Rating</label>
        <p>⭐ ${proj.rating.toFixed(1)} / 5.0</p>
      </div>
    </div>

    <h4 class="detail-section-title"><i data-lucide="file-text"></i> Full Abstract & Findings</h4>
    <p style="color:var(--text-sub); font-size:1.05rem; line-height:1.7; margin-bottom:28px; background:rgba(0,0,0,0.2); padding:20px; border-radius:12px; border:1px solid rgba(255,255,255,0.05);">${escapeHTML(proj.abstract)}</p>

    <h4 class="detail-section-title"><i data-lucide="bookmark-check"></i> Bibliographic References</h4>
    <ul class="references-list" style="margin-bottom: 28px;">
      ${refsHTML}
    </ul>

    <div style="background:rgba(0, 242, 254, 0.05); border:1px solid rgba(0, 242, 254, 0.25); border-radius:12px; padding:18px; margin-bottom:24px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span style="font-size:0.8rem; font-weight:700; color:var(--accent-cyan); text-transform:uppercase; letter-spacing:0.5px;">📋 Generated APA Citation</span>
        <button class="btn btn-secondary btn-sm" onclick="copyToClipboard('${escapeAttr(apaCitation)}')">Copy Citation</button>
      </div>
      <p style="font-family:monospace; font-size:0.85rem; color:var(--text-muted); word-break:break-all;">${escapeHTML(apaCitation)}</p>
    </div>

    <div style="display:flex; justify-content:flex-end; gap:12px; border-top:1px solid var(--border-light); padding-top:20px;">
      <button class="btn btn-secondary" onclick="closeModal('detailModal')">Close Window</button>
      <button class="btn btn-emerald" onclick="simulateDownloadPDF('${escapeAttr(proj.title)}')">
        <i data-lucide="download"></i> Download Full Paper (PDF)
      </button>
    </div>
  `;

  openModal("detailModal");
  refreshIcons();
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("Citation copied to clipboard!", "success");
  }).catch(() => {
    showToast("Citation copied!", "success");
  });
}

function simulateDownloadPDF(title) {
  showToast(`Initiating secure download: ${title.substring(0, 30)}...`, "info");
  setTimeout(() => {
    showToast("PDF Download Complete! Check your browser downloads.", "success");
  }, 1500);
}

/* ==========================================================================
   9. Authentication System & User Management
   ========================================================================== */

function initAuth() {
  const loginBtn = document.getElementById("navLoginBtn");
  const loginForm = document.getElementById("loginForm");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      if (appState.currentUser) {
        // Logout
        appState.currentUser = null;
        StorageEngine.setCurrentUser(null);
        updateAuthUI();
        showToast("You have been logged out successfully.", "info");
      } else {
        // Open Login Modal
        openModal("loginModal");
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      performLogin(email, password);
    });
  }
}

function performLogin(email, password) {
  // Student Credential check from prompt: user@university.edu / password
  if (email === "user@university.edu" && password === "password") {
    appState.currentUser = { email: email, role: "student", name: "Alex Student" };
    StorageEngine.setCurrentUser(appState.currentUser);
    closeModal("loginModal");
    updateAuthUI();
    showToast("Welcome back, Alex! Logged in as Student.", "success");
    return;
  }

  // Admin Credential check from prompt: admin@university.edu / admin123
  if (email === "admin@university.edu" && password === "admin123") {
    appState.currentUser = { email: email, role: "admin", name: "Prof. System Admin" };
    StorageEngine.setCurrentUser(appState.currentUser);
    closeModal("loginModal");
    updateAuthUI();
    showToast("Admin access authorized! Dashboard activated.", "success");
    
    // Jump to dashboard smoothly
    setTimeout(() => {
      const dashSec = document.getElementById("admin-dashboard");
      if (dashSec) dashSec.scrollIntoView({ behavior: "smooth" });
    }, 500);
    return;
  }

  showToast("Invalid credentials! Use demo buttons below.", "error");
}

function quickDemoLogin(role) {
  if (role === "student") {
    document.getElementById("loginEmail").value = "user@university.edu";
    document.getElementById("loginPassword").value = "password";
    performLogin("user@university.edu", "password");
  } else if (role === "admin") {
    document.getElementById("loginEmail").value = "admin@university.edu";
    document.getElementById("loginPassword").value = "admin123";
    performLogin("admin@university.edu", "admin123");
  }
}

function updateAuthUI() {
  const loginBtnText = document.getElementById("loginBtnText");
  const loginBtnIcon = document.getElementById("loginBtnIcon");
  const userBadge = document.getElementById("userBadge");
  const userEmailSpan = document.getElementById("userBadgeEmail");
  const roleTag = document.getElementById("userRoleTag");
  const navDashLink = document.getElementById("navDashLink");
  const adminSec = document.getElementById("admin-dashboard");

  if (appState.currentUser) {
    if (loginBtnText) loginBtnText.innerText = "Logout";
    if (loginBtnIcon) loginBtnIcon.setAttribute("data-lucide", "log-out");
    
    if (userBadge) {
      userBadge.style.display = "flex";
      userBadge.className = `user-badge ${appState.currentUser.role === "admin" ? "admin" : ""}`;
    }
    if (userEmailSpan) userEmailSpan.innerText = appState.currentUser.email;
    if (roleTag) roleTag.innerText = appState.currentUser.role;

    if (appState.currentUser.role === "admin") {
      if (navDashLink) navDashLink.style.display = "block";
      if (adminSec) adminSec.classList.add("visible");
      renderAdminTable();
    } else {
      if (navDashLink) navDashLink.style.display = "none";
      if (adminSec) adminSec.classList.remove("visible");
    }
  } else {
    if (loginBtnText) loginBtnText.innerText = "Sign In";
    if (loginBtnIcon) loginBtnIcon.setAttribute("data-lucide", "log-in");
    if (userBadge) userBadge.style.display = "none";
    if (navDashLink) navDashLink.style.display = "none";
    if (adminSec) adminSec.classList.remove("visible");
  }

  refreshIcons();
}

/* ==========================================================================
   10. Admin Dashboard & Repository CRUD Engine
   ========================================================================== */

function initAdminDashboard() {
  const form = document.getElementById("projectForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      saveProjectForm();
    });
  }
}

function renderAdminTable() {
  const tbody = document.getElementById("adminTableBody");
  if (!tbody) return;

  tbody.innerHTML = appState.projects.map(proj => `
    <tr>
      <td>
        <strong style="color:var(--text-main); font-size:1.02rem;">${escapeHTML(proj.title)}</strong><br>
        <span style="font-size:0.8rem; color:var(--text-muted);">${escapeHTML(proj.author)}</span>
      </td>
      <td><span class="faculty-badge ${getFacultyBadgeClass(proj.faculty)}">${proj.faculty}</span></td>
      <td>${escapeHTML(proj.supervisor)}</td>
      <td><strong>${proj.year}</strong></td>
      <td>
        <div class="action-btns">
          <button class="btn-icon btn-edit" title="Edit Specification" onclick="openEditProjectModal('${proj.id}')">
            <i data-lucide="edit-3"></i>
          </button>
          <button class="btn-icon btn-del" title="Delete Paper" onclick="confirmDeleteProject('${proj.id}')">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join("");

  // Update stats summary row
  const totalPapersEl = document.getElementById("adminTotalPapers");
  const totalRefsEl = document.getElementById("adminTotalRefs");
  if (totalPapersEl) totalPapersEl.innerText = appState.projects.length;
  if (totalRefsEl) {
    const sumRefs = appState.projects.reduce((acc, p) => acc + (p.references ? p.references.length : 0), 0);
    totalRefsEl.innerText = sumRefs;
  }

  refreshIcons();
}

function openAddProjectModal() {
  const modalTitle = document.getElementById("projectModalTitle");
  if (modalTitle) modalTitle.innerText = "➕ Add New Repository Paper";
  
  document.getElementById("projectForm").reset();
  document.getElementById("editProjectId").value = "";
  
  openModal("projectModal");
}

function openEditProjectModal(projId) {
  const proj = appState.projects.find(p => p.id === projId);
  if (!proj) return;

  const modalTitle = document.getElementById("projectModalTitle");
  if (modalTitle) modalTitle.innerText = "✏️ Edit Research Specification";

  document.getElementById("editProjectId").value = proj.id;
  document.getElementById("formTitle").value = proj.title;
  document.getElementById("formFaculty").value = proj.faculty;
  document.getElementById("formAuthor").value = proj.author;
  document.getElementById("formSupervisor").value = proj.supervisor;
  document.getElementById("formYear").value = proj.year;
  document.getElementById("formRating").value = proj.rating;
  document.getElementById("formAbstract").value = proj.abstract;
  document.getElementById("formReferences").value = (proj.references ? proj.references.join("\n") : "");

  openModal("projectModal");
}

function saveProjectForm() {
  const id = document.getElementById("editProjectId").value;
  const title = document.getElementById("formTitle").value.trim();
  const faculty = document.getElementById("formFaculty").value;
  const author = document.getElementById("formAuthor").value.trim();
  const supervisor = document.getElementById("formSupervisor").value.trim();
  const year = +document.getElementById("formYear").value;
  const rating = +document.getElementById("formRating").value;
  const abstract = document.getElementById("formAbstract").value.trim();
  const refsRaw = document.getElementById("formReferences").value.trim();

  const references = refsRaw ? refsRaw.split("\n").map(r => r.trim()).filter(r => r.length > 0) : [];

  if (!title || !author || !supervisor || !abstract) {
    showToast("Please complete all required specification fields.", "error");
    return;
  }

  if (id) {
    // Update existing
    const idx = appState.projects.findIndex(p => p.id === id);
    if (idx !== -1) {
      appState.projects[idx] = {
        ...appState.projects[idx],
        title, faculty, author, supervisor, year, rating, abstract, references
      };
      showToast("Repository specification updated successfully!", "success");
    }
  } else {
    // Add new
    const newProject = {
      id: "cuprr-" + Date.now(),
      title, faculty, author, supervisor, year, rating, abstract, references,
      featured: false
    };
    appState.projects.unshift(newProject);
    showToast("New research paper indexed into CUPRR!", "success");
  }

  StorageEngine.saveProjects(appState.projects);
  closeModal("projectModal");

  // Re-render
  initFeaturedProjects();
  renderRepository();
  renderAdminTable();
}

let deleteCandidateId = null;

function confirmDeleteProject(projId) {
  deleteCandidateId = projId;
  const proj = appState.projects.find(p => p.id === projId);
  const nameEl = document.getElementById("deleteTargetName");
  if (nameEl && proj) nameEl.innerText = `"${proj.title}"`;

  openModal("deleteConfirmModal");
}

function executeDeleteProject() {
  if (!deleteCandidateId) return;

  appState.projects = appState.projects.filter(p => p.id !== deleteCandidateId);
  StorageEngine.saveProjects(appState.projects);
  
  closeModal("deleteConfirmModal");
  showToast("Project deleted permanently from repository.", "info");
  
  deleteCandidateId = null;
  initFeaturedProjects();
  renderRepository();
  renderAdminTable();
}

/* ==========================================================================
   11. Modal System Overlay Controllers
   ========================================================================== */

function initModals() {
  // Close on Escape key or backdrop click
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach(el => el.classList.remove("active"));
    }
  });

  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
  }
}

/* ==========================================================================
   12. Toast Notification Engine
   ========================================================================== */

function showToast(message, type = "info") {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let iconName = "info";
  if (type === "success") iconName = "check-circle";
  if (type === "error") iconName = "alert-circle";

  toast.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <span>${escapeHTML(message)}</span>
  `;

  container.appendChild(toast);
  refreshIcons();

  setTimeout(() => {
    toast.classList.add("removing");
    toast.addEventListener("animationend", () => {
      toast.remove();
    });
  }, 3500);
}

/* ==========================================================================
   13. Security Helpers (HTML Sanitization)
   ========================================================================== */

function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(str) {
  if (!str) return "";
  return String(str)
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/"/g, '&quot;');
}
// 
