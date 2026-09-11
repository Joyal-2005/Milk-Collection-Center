// Arun Traders - Milk Collection & Society Management System
// Complete Application Logic & State Management with Feed Sales & Credit Ledger

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// Initial Database & State
const DEFAULT_STATE = {
    currentUser: null, // { username, role, name, farmerId }
    currentView: 'login', // login, admin_dashboard, operator_dashboard, farmer_dashboard, farmers, milk_entry, morning_col, evening_col, rates, ledger, payments, reports, analytics, feed_sales, settings
    settings: {
        societyName: "Arun Traders – Milk Collection & Society Management System",
        companySupport: "Supported by VK Milk",
        tamilName: "அருண் டிரேடர்ஸ்",
        tamilSub: "பால் சேகரிப்பு மையம்",
        tamilSupport: "VKA Milk ஆதரவுடன்",
        address: "Thadikombu Main Road, Dindigul District, Tamil Nadu - 624709",
        phone: "+91 98421 23456",
        email: "support@aruntradersdairy.com",
        morningTime: "06:00 AM - 09:00 AM",
        eveningTime: "04:30 PM - 07:30 PM",
        paymentCycle: "Weekly (Every Monday)",
        currency: "₹"
    },
    farmers: [
        { id: "F001", name: "Ramesh Kumar", phone: "9842123456", address: "North Street", village: "Thadikombu", animalType: "Cow", cows: 2, buffaloes: 1, regDate: "2023-01-15", bank: "State Bank of India - 1234567890", upi: "ramesh@sbi", status: "Active" },
        { id: "F002", name: "Suresh", phone: "9712345678", address: "Main Bazaar", village: "Alagapuri", animalType: "Cow", cows: 3, buffaloes: 0, regDate: "2023-02-10", bank: "Canara Bank - 0987654321", upi: "suresh@oksbi", status: "Active" },
        { id: "F003", name: "Arun Kumar", phone: "9443122334", address: "East Colony", village: "Chinna Kovilankulam", animalType: "Mixed", cows: 1, buffaloes: 2, regDate: "2023-03-05", bank: "Indian Bank - 5678901234", upi: "arun@ybl", status: "Active" },
        { id: "F004", name: "Meena", phone: "9894011223", address: "West Street", village: "Thadikombu", animalType: "Cow", cows: 2, buffaloes: 0, regDate: "2023-03-20", bank: "IOB - 4321098765", upi: "meena@okhdfcbank", status: "Active" },
        { id: "F005", name: "Lakshmi", phone: "9384567890", address: "Temple Street", village: "Alagapuri", animalType: "Buffalo", cows: 0, buffaloes: 3, regDate: "2023-04-12", bank: "SBI - 1122334455", upi: "lakshmi@paytm", status: "Active" },
        { id: "F006", name: "Selvi", phone: "9943567812", address: "Pankajam Street", village: "Vadugapatti", animalType: "Mixed", cows: 1, buffaloes: 1, regDate: "2023-05-01", bank: "Canara - 2233445566", upi: "selvi@upi", status: "Active" },
        { id: "F007", name: "Kumar", phone: "9487123456", address: "New Colony", village: "Thadikombu", animalType: "Cow", cows: 4, buffaloes: 0, regDate: "2023-05-18", bank: "KVB - 3344556677", upi: "kumar@oksbi", status: "Active" },
        { id: "F008", name: "Murugan", phone: "9789012345", address: "Bus Stand Road", village: "Alagapuri", animalType: "Mixed", cows: 2, buffaloes: 2, regDate: "2023-06-20", bank: "SBI - 4455667788", upi: "murugan@ybl", status: "Active" },
        { id: "F009", name: "Priya", phone: "9655432109", address: "School Street", village: "Vadugapatti", animalType: "Cow", cows: 1, buffaloes: 0, regDate: "2023-07-11", bank: "IOB - 5566778899", upi: "priya@paytm", status: "Active" },
        { id: "F010", name: "Saravanan", phone: "9840123456", address: "Mill Road", village: "Chinna Kovilankulam", animalType: "Mixed", cows: 3, buffaloes: 1, regDate: "2023-08-01", bank: "Indian Bank - 6677889900", upi: "saravanan@oksbi", status: "Active" },
        { id: "F011", name: "Karthik", phone: "9842233445", address: "Gandhi Nagar", village: "Thadikombu", animalType: "Cow", cows: 2, buffaloes: 0, regDate: "2023-08-15", bank: "SBI - 7788990011", upi: "karthik@sbi", status: "Active" },
        { id: "F012", name: "Anitha", phone: "9712233445", address: "Nehru Street", village: "Alagapuri", animalType: "Mixed", cows: 1, buffaloes: 2, regDate: "2023-09-02", bank: "Canara - 8899001122", upi: "anitha@oksbi", status: "Active" },
        { id: "F013", name: "Vignesh", phone: "9443344556", address: "Pillayar Koil St", village: "Vadugapatti", animalType: "Cow", cows: 3, buffaloes: 0, regDate: "2023-09-20", bank: "KVB - 9900112233", upi: "vignesh@ybl", status: "Active" },
        { id: "F014", name: "Kavitha", phone: "9894556677", address: "Mariamman Koil St", village: "Chinna Kovilankulam", animalType: "Buffalo", cows: 0, buffaloes: 2, regDate: "2023-10-05", bank: "IOB - 1011121314", upi: "kavitha@paytm", status: "Active" },
        { id: "F015", name: "Rajesh", phone: "9384667788", address: "North Car St", village: "Thadikombu", animalType: "Cow", cows: 2, buffaloes: 1, regDate: "2023-10-22", bank: "SBI - 1516171819", upi: "rajesh@oksbi", status: "Active" },
        { id: "F016", name: "Divya", phone: "9943778899", address: "South Car St", village: "Alagapuri", animalType: "Mixed", cows: 1, buffaloes: 1, regDate: "2023-11-10", bank: "Canara - 2021222324", upi: "divya@upi", status: "Active" },
        { id: "F017", name: "Nataraj", phone: "9487889900", address: "Market Road", village: "Vadugapatti", animalType: "Cow", cows: 4, buffaloes: 0, regDate: "2023-11-28", bank: "Indian Bank - 2526272829", upi: "nataraj@oksbi", status: "Active" },
        { id: "F018", name: "Banu", phone: "9789990011", address: "Palani Road", village: "Chinna Kovilankulam", animalType: "Buffalo", cows: 2, buffaloes: 3, regDate: "2023-12-05", bank: "SBI - 3031323334", upi: "banu@ybl", status: "Active" },
        { id: "F019", name: "Senthil", phone: "9655112233", address: "Dindigul Road", village: "Thadikombu", animalType: "Cow", cows: 3, buffaloes: 0, regDate: "2023-12-18", bank: "IOB - 3536373839", upi: "senthil@paytm", status: "Active" },
        { id: "F020", name: "Malar", phone: "9840223344", address: "Kovil Street", village: "Alagapuri", animalType: "Mixed", cows: 1, buffaloes: 2, regDate: "2024-01-02", bank: "KVB - 4041424344", upi: "malar@oksbi", status: "Active" }
    ],
    feedProducts: [
        { id: "FEE-01", name: "Nutribest 50kg", category: "First Quality", price: 1450 },
        { id: "FEE-02", name: "Nutribest 70kg", category: "First Quality", price: 1980 },
        { id: "FEE-03", name: "Lactobest 50kg", category: "First Quality", price: 1400 },
        { id: "FEE-04", name: "Lactobest 70kg", category: "First Quality", price: 1920 },
        { id: "FEE-05", name: "Milky best 50kg", category: "Second Quality", price: 1350 },
        { id: "FEE-06", name: "Milky best 70kg", category: "Second Quality", price: 1850 },
        { id: "FEE-07", name: "Milky best 20kg", category: "Second Quality", price: 620 },
        { id: "FEE-08", name: "Dairybest 50kg", category: "Second Quality", price: 1300 },
        { id: "FEE-09", name: "Dairybest 70kg", category: "Second Quality", price: 1780 },
        { id: "FEE-10", name: "Dairybest 20kg", category: "Second Quality", price: 590 },
        { id: "FEE-11", name: "Delite 50kg", category: "Third Quality", price: 1250 },
        { id: "FEE-12", name: "Delite 70kg", category: "Third Quality", price: 1700 }
    ],
    feedSales: [
        { id: "FS-101", farmerId: "F001", farmerName: "Ramesh Kumar", date: "2024-08-05", feedName: "Nutribest 50kg", bags: 2, unitPrice: 1450, totalAmount: 2900, paidAmount: 1000, paymentMode: "Cash (Hand)", balanceDue: 1900 },
        { id: "FS-102", farmerId: "F002", farmerName: "Suresh", date: "2024-08-05", feedName: "Nutribest 70kg", bags: 1, unitPrice: 1980, totalAmount: 1980, paidAmount: 1980, paymentMode: "Online UPI", balanceDue: 0 },
        { id: "FS-103", farmerId: "F003", farmerName: "Arun Kumar", date: "2024-08-07", feedName: "Lactobest 50kg", bags: 4, unitPrice: 1400, totalAmount: 5600, paidAmount: 2000, paymentMode: "Partial Payment", balanceDue: 3600 },
        { id: "FS-104", farmerId: "F004", farmerName: "Meena", date: "2024-08-10", feedName: "Milky best 50kg", bags: 2, unitPrice: 1350, totalAmount: 2700, paidAmount: 2700, paymentMode: "Cash (Hand)", balanceDue: 0 },
        { id: "FS-105", farmerId: "F005", farmerName: "Lakshmi", date: "2024-08-12", feedName: "Dairybest 70kg", bags: 3, unitPrice: 1780, totalAmount: 5340, paidAmount: 1000, paymentMode: "Partial Payment", balanceDue: 4340 }
    ],
    rateCharts: [
        { id: 1, milkType: "Cow", fatMin: 3.0, fatMax: 3.4, snf: 8.3, rate: 36.0, bonus: 1.0, deduction: 0.0, effectiveFrom: "2024-01-01" },
        { id: 2, milkType: "Cow", fatMin: 3.5, fatMax: 3.9, snf: 8.5, rate: 40.0, bonus: 1.0, deduction: 0.0, effectiveFrom: "2024-01-01" },
        { id: 3, milkType: "Cow", fatMin: 4.0, fatMax: 4.4, snf: 8.5, rate: 44.0, bonus: 1.5, deduction: 0.0, effectiveFrom: "2024-01-01" },
        { id: 4, milkType: "Cow", fatMin: 4.5, fatMax: 5.0, snf: 8.7, rate: 48.0, bonus: 2.0, deduction: 0.0, effectiveFrom: "2024-01-01" },
        { id: 5, milkType: "Buffalo", fatMin: 5.0, fatMax: 5.9, snf: 9.0, rate: 52.0, bonus: 2.0, deduction: 0.0, effectiveFrom: "2024-01-01" },
        { id: 6, milkType: "Buffalo", fatMin: 6.0, fatMax: 6.9, snf: 9.2, rate: 60.0, bonus: 2.5, deduction: 0.0, effectiveFrom: "2024-01-01" },
        { id: 7, milkType: "Buffalo", fatMin: 7.0, fatMax: 9.0, snf: 9.5, rate: 68.0, bonus: 3.0, deduction: 0.0, effectiveFrom: "2024-01-01" },
        { id: 8, milkType: "Mixed", fatMin: 3.8, fatMax: 4.5, snf: 8.5, rate: 42.0, bonus: 1.0, deduction: 0.0, effectiveFrom: "2024-01-01" }
    ],
    collections: [
        { id: "MC1001", farmerId: "F001", farmerName: "Ramesh Kumar", date: "2024-05-20", time: "06:42 AM", shift: "Morning", milkType: "Cow", litres: 12.5, fat: 4.2, snf: 8.5, clr: 28.5, rate: 44.0, amount: 550.0, operatorId: "OP01", status: "Accepted" },
        { id: "MC1002", farmerId: "F002", farmerName: "Suresh", date: "2024-05-20", time: "06:50 AM", shift: "Morning", milkType: "Cow", litres: 15.0, fat: 4.5, snf: 8.7, clr: 29.0, rate: 48.0, amount: 720.0, operatorId: "OP01", status: "Accepted" },
        { id: "MC1003", farmerId: "F003", farmerName: "Arun Kumar", date: "2024-05-20", time: "07:05 AM", shift: "Morning", milkType: "Mixed", litres: 18.0, fat: 4.1, snf: 8.5, clr: 28.0, rate: 42.0, amount: 756.0, operatorId: "OP01", status: "Accepted" }
    ],
    payments: [
        { id: "PAY-501", farmerId: "F001", farmerName: "Ramesh Kumar", date: "2024-05-13", amount: 6450.0, method: "Bank Transfer", referenceNumber: "UTIB0001234", status: "Paid" }
    ],
    ledgers: [
        { farmerId: "F001", farmerName: "Ramesh Kumar", opening: 0, earnings: 8250, bonuses: 250, deductions: 50, advances: 500, payments: 6450, closing: 1500 }
    ],
    activeReceipt: null
};

// Load state from localStorage if available
function initializeApp() {
    const savedState = localStorage.getItem('arun_traders_state');
    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            Object.assign(DEFAULT_STATE, parsed);
        } catch (e) {
            console.error("Error loading saved state", e);
        }
    }
    renderApp();
}

function saveState() {
    localStorage.setItem('arun_traders_state', JSON.stringify(DEFAULT_STATE));
}

function setView(viewName) {
    DEFAULT_STATE.currentView = viewName;
    renderApp();
}

// Authentication handlers
function handleLogin(role, customUsername = '', customFarmerId = '') {
    let name = "Admin User";
    let username = customUsername || "admin";
    let farmerId = "";

    if (role === 'admin') {
        name = "Society Admin (Arun Traders)";
        username = "admin";
    } else if (role === 'operator') {
        name = "Collection Operator (Murugan)";
        username = "operator";
    } else if (role === 'farmer') {
        farmerId = customFarmerId || "F001";
        const f = DEFAULT_STATE.farmers.find(item => item.id === farmerId);
        name = f ? f.name : "Ramesh Kumar";
        username = farmerId;
    }

    DEFAULT_STATE.currentUser = { username, role, name, farmerId };

    if (role === 'admin') DEFAULT_STATE.currentView = 'admin_dashboard';
    else if (role === 'operator') DEFAULT_STATE.currentView = 'operator_dashboard';
    else if (role === 'farmer') DEFAULT_STATE.currentView = 'farmer_dashboard';

    saveState();
    renderApp();
}

function handleLogout() {
    DEFAULT_STATE.currentUser = null;
    DEFAULT_STATE.currentView = 'login';
    saveState();
    renderApp();
}

// Main App Router & Renderer
function renderApp() {
    const root = document.getElementById('app-root');
    if (!root) return;

    if (!DEFAULT_STATE.currentUser || DEFAULT_STATE.currentView === 'login') {
        root.innerHTML = renderLoginPage();
        attachLoginListeners();
        return;
    }

    root.innerHTML = `
        <div class="min-h-screen flex flex-col md:flex-row bg-slate-50">
            <!-- Desktop Sidebar -->
            <aside class="hidden md:flex flex-col w-64 bg-slate-900 text-slate-100 border-r border-slate-800 shrink-0">
                ${renderSidebarContent()}
            </aside>

            <!-- Mobile / Tablet Header -->
            <div class="md:hidden flex items-center justify-between bg-slate-900 text-white p-4 sticky top-0 z-50">
                <div class="flex items-center space-x-2">
                    <span class="text-xl font-bold text-emerald-400">🥛 Arun Traders</span>
                </div>
                <button onclick="toggleMobileMenu()" class="p-2 text-slate-300 hover:text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>
            </div>

            <!-- Mobile Drawer Menu -->
            <div id="mobile-drawer" class="fixed inset-0 z-50 bg-slate-900/85 backdrop-blur-sm hidden md:hidden flex-col">
                <div class="w-64 bg-slate-900 h-full flex flex-col p-4 text-white">
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-xl font-bold text-emerald-400">Arun Traders</span>
                        <button onclick="toggleMobileMenu()" class="text-slate-400 hover:text-white text-xl font-bold">✕</button>
                    </div>
                    <div class="flex-1 overflow-y-auto space-y-1">
                        ${renderSidebarContent()}
                    </div>
                </div>
            </div>

            <!-- Main Content Area -->
            <div class="flex-1 flex flex-col min-w-0">
                <header class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 shadow-sm">
                    <div class="flex items-center space-x-4">
                        <h1 class="text-lg font-bold text-slate-800 flex items-center gap-2">
                            <span>${getViewTitle()}</span>
                        </h1>
                        <span class="hidden sm:inline-block text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-medium">
                            ${DEFAULT_STATE.settings.companySupport}
                        </span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="text-right hidden sm:block">
                            <div class="text-sm font-semibold text-slate-900">${DEFAULT_STATE.currentUser.name}</div>
                            <div class="text-xs text-slate-500 capitalize font-medium">${DEFAULT_STATE.currentUser.role}</div>
                        </div>
                        <button onclick="handleLogout()" class="bg-rose-50 hover:bg-rose-100 text-rose-600 px-3 py-1.5 rounded-lg text-sm font-medium transition flex items-center gap-1.5">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                            Logout
                        </button>
                    </div>
                </header>

                <main class="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto animate-fade-in">
                    ${renderCurrentView()}
                </main>

                <footer class="bg-white border-t border-slate-200 py-4 px-6 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div>© ${new Date().getFullYear()} Arun Traders – Milk Collection & Society Management System</div>
                    <div class="tamil-text text-emerald-700 font-medium">அருண் டிரேடர்ஸ் | பால் சேகரிப்பு மையம் | VKA Milk ஆதரவுடன்</div>
                </footer>
            </div>
        </div>

        ${DEFAULT_STATE.activeReceipt ? renderReceiptModal() : ''}
    `;

    attachViewListeners();
}

function getViewTitle() {
    const view = DEFAULT_STATE.currentView;
    switch(view) {
        case 'admin_dashboard': return 'Admin Dashboard / நிர்வாக டாஷ்போர்டு';
        case 'operator_dashboard': return 'Operator Dashboard / ஆபரேட்டர் டாஷ்போர்டு';
        case 'farmer_dashboard': return 'Farmer Portal / விவசாயி போர்டல்';
        case 'farmers': return 'Farmer Management / விவசாயி மேலாண்மை';
        case 'milk_entry': return 'Fast Milk Entry / பால் பதிவு நுழைவு';
        case 'morning_col': return 'Morning Collections / காலை பால் சேகரிப்பு';
        case 'evening_col': return 'Evening Collections / மாலை பால் சேகரிப்பு';
        case 'rates': return 'Rate Chart Management / விலை பட்டியல் மேலாண்மை';
        case 'ledger': return 'Farmer Financial Ledger / நிதி லெட்ஜர்';
        case 'payments': return 'Payment Management / பணப் பரிமாற்றம்';
        case 'reports': return 'Professional Reports / விரிவான அறிக்கைகள்';
        case 'analytics': return 'Advanced Analytics / மேம்பட்ட பகுப்பாய்வு';
        case 'feed_sales': return 'Feed Sales & Credit Ledger / தீவன விற்பனை கடன் கணக்கு';
        case 'settings': return 'System Settings / அமைப்பு அமைப்புகள்';
        default: return 'Dashboard';
    }
}

function renderSidebarContent() {
    const role = DEFAULT_STATE.currentUser.role;
    let navItems = '';

    if (role === 'admin' || role === 'operator') {
        navItems = `
            <a href="#" onclick="setView('${role === 'admin' ? 'admin_dashboard' : 'operator_dashboard'}')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView.includes('dashboard') ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>📊</span> <span>Dashboard</span>
            </a>
            <a href="#" onclick="setView('farmers')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'farmers' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>👨‍🌾</span> <span>Farmers (விவசாயிகள்)</span>
            </a>
            <a href="#" onclick="setView('milk_entry')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'milk_entry' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>🥛</span> <span>Fast Milk Entry</span>
            </a>
            <a href="#" onclick="setView('feed_sales')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'feed_sales' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>🌾</span> <span>Feed Sales & Credit</span>
            </a>
            <a href="#" onclick="setView('morning_col')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'morning_col' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>🌅</span> <span>Morning Collection</span>
            </a>
            <a href="#" onclick="setView('evening_col')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'evening_col' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>🌇</span> <span>Evening Collection</span>
            </a>
            <a href="#" onclick="setView('rates')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'rates' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>📋</span> <span>Rate Chart (விலை விபரம்)</span>
            </a>
            <a href="#" onclick="setView('ledger')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'ledger' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>📖</span> <span>Financial Ledger</span>
            </a>
            <a href="#" onclick="setView('payments')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'payments' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>💰</span> <span>Payments (பணம்)</span>
            </a>
            <a href="#" onclick="setView('reports')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'reports' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>📈</span> <span>Reports (அறிக்கைகள்)</span>
            </a>
            <a href="#" onclick="setView('analytics')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'analytics' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>🔍</span> <span>Analytics & Insights</span>
            </a>
            ${role === 'admin' ? `
            <a href="#" onclick="setView('settings')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'settings' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>⚙️</span> <span>Settings (அமைப்புகள்)</span>
            </a>` : ''}
        `;
    } else if (role === 'farmer') {
        navItems = `
            <a href="#" onclick="setView('farmer_dashboard')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'farmer_dashboard' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>🏠</span> <span>My Dashboard</span>
            </a>
            <a href="#" onclick="setView('feed_sales')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'feed_sales' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>🌾</span> <span>My Feed Purchases</span>
            </a>
        `;
    }

    return `
        <div class="p-6 border-b border-slate-800">
            <div class="text-lg font-bold text-emerald-400">Arun Traders</div>
            <div class="text-xs text-slate-400">Milk Collection System</div>
            <div class="tamil-text text-xs text-emerald-300 mt-1">அருண் டிரேடர்ஸ் - VKA Milk</div>
        </div>
        <nav class="flex-1 p-4 space-y-1 overflow-y-auto">
            ${navItems}
        </nav>
        <div class="p-4 border-t border-slate-800 text-xs text-slate-400">
            <div class="font-medium text-slate-200">${DEFAULT_STATE.settings.companySupport}</div>
            <div class="tamil-text text-emerald-400 mt-0.5">VKA Milk ஆதரவுடன்</div>
        </div>
    `;
}

function toggleMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    if (drawer) {
        drawer.classList.toggle('hidden');
        drawer.classList.toggle('flex');
    }
}

// ==========================================
// LOGIN PAGE
// ==========================================
function renderLoginPage() {
    return `
        <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-950 to-sky-950 p-4">
            <div class="max-w-md w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20 p-8">
                <div class="text-center mb-8">
                    <div class="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full text-3xl mb-3 shadow-inner">
                        🥛
                    </div>
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Arun Traders</h2>
                    <p class="text-sm font-medium text-slate-600 mt-1">Milk Collection & Society Management System</p>
                    <div class="mt-2 inline-block bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                        ${DEFAULT_STATE.settings.companySupport}
                    </div>
                    <div class="tamil-text text-emerald-700 font-bold text-sm mt-2">
                        அருண் டிரேடர்ஸ் • பால் சேகரிப்பு மையம்<br>
                        <span class="text-xs font-normal text-slate-600">VKA Milk ஆதரவுடன்</span>
                    </div>
                </div>

                <form id="login-form" class="space-y-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Login Role</label>
                        <select id="login-role" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 text-slate-800 text-sm font-medium" onchange="toggleFarmerInput(this.value)">
                            <option value="admin">Admin / Society Owner</option>
                            <option value="operator">Collection Operator</option>
                            <option value="farmer">Farmer / Milk Supplier</option>
                        </select>
                    </div>

                    <div id="username-container">
                        <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Username / Mobile Number</label>
                        <input type="text" id="login-username" value="admin" required class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 text-slate-800 text-sm" placeholder="Enter username or mobile">
                    </div>

                    <div id="farmer-id-container" class="hidden">
                        <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Select Farmer</label>
                        <select id="login-farmer-id" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 text-slate-800 text-sm">
                            ${DEFAULT_STATE.farmers.map(f => `<option value="${f.id}">${f.id} - ${f.name} (${f.village})</option>`).join('')}
                        </select>
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Password</label>
                        <input type="password" id="login-password" value="admin123" required class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 text-slate-800 text-sm" placeholder="••••••••">
                    </div>

                    <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-emerald-600/30 text-sm">
                        Login to Dashboard
                    </button>
                </form>

                <div class="mt-6 pt-6 border-t border-slate-100">
                    <p class="text-xs text-center text-slate-500 mb-3 font-medium">Quick Demo Access (Click to Test):</p>
                    <div class="grid grid-cols-3 gap-2">
                        <button onclick="handleLogin('admin')" class="bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 py-2 rounded-lg text-xs font-semibold transition border border-slate-200">Admin</button>
                        <button onclick="handleLogin('operator')" class="bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 py-2 rounded-lg text-xs font-semibold transition border border-slate-200">Operator</button>
                        <button onclick="handleLogin('farmer', '', 'F001')" class="bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 py-2 rounded-lg text-xs font-semibold transition border border-slate-200">Farmer</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function toggleFarmerInput(role) {
    const userContainer = document.getElementById('username-container');
    const farmerContainer = document.getElementById('farmer-id-container');
    const userField = document.getElementById('login-username');

    if (role === 'farmer') {
        userContainer.classList.add('hidden');
        farmerContainer.classList.remove('hidden');
    } else {
        userContainer.classList.remove('hidden');
        farmerContainer.classList.add('hidden');
        userField.value = role === 'admin' ? 'admin' : 'operator';
    }
}

function attachLoginListeners() {
    const form = document.getElementById('login-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const role = document.getElementById('login-role').value;
            const farmerId = role === 'farmer' ? document.getElementById('login-farmer-id').value : '';
            const username = role === 'farmer' ? farmerId : document.getElementById('login-username').value;
            handleLogin(role, username, farmerId);
        });
    }
}

// ==========================================
// RENDER CURRENT VIEW ROUTER
// ==========================================
function renderCurrentView() {
    const view = DEFAULT_STATE.currentView;
    switch(view) {
        case 'admin_dashboard':
        case 'operator_dashboard':
            return renderDashboard();
        case 'farmer_dashboard':
            return renderFarmerDashboard();
        case 'farmers':
            return renderFarmersPage();
        case 'milk_entry':
            return renderMilkEntryPage();
        case 'morning_col':
            return renderCollectionPage('Morning');
        case 'evening_col':
            return renderCollectionPage('Evening');
        case 'rates':
            return renderRatesPage();
        case 'ledger':
            return renderLedgerPage();
        case 'payments':
            return renderPaymentsPage();
        case 'reports':
            return renderReportsPage();
        case 'analytics':
            return renderAnalyticsPage();
        case 'feed_sales':
            return renderFeedSalesPage();
        case 'settings':
            return renderSettingsPage();
        default:
            return renderDashboard();
    }
}

// ==========================================
// CATTLE FEED SALES & CREDIT LEDGER MODULE
// ==========================================
function renderFeedSalesPage() {
    const role = DEFAULT_STATE.currentUser.role;
    const isFarmer = role === 'farmer';
    const currentFarmerId = DEFAULT_STATE.currentUser.farmerId;

    let sales = DEFAULT_STATE.feedSales;
    if (isFarmer) {
        sales = sales.filter(s => s.farmerId === currentFarmerId);
    }

    const totalFeedSales = sales.reduce((acc, s) => acc + s.totalAmount, 0);
    const totalPaid = sales.reduce((acc, s) => acc + s.paidAmount, 0);
    const totalPendingDue = sales.reduce((acc, s) => acc + s.balanceDue, 0);
    const totalCash = sales.filter(s => s.paymentMode.includes('Cash')).reduce((acc, s) => acc + s.paidAmount, 0);
    const totalOnline = sales.filter(s => s.paymentMode.includes('Online')).reduce((acc, s) => acc + s.paidAmount, 0);

    return `
        <div class="space-y-6">
            <div class="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div class="text-xs uppercase tracking-wider font-semibold text-emerald-200">Arun Traders • Cattle Feed Management</div>
                    <h2 class="text-2xl font-bold mt-1">🌾 Feed Sales & Credit Ledger (தீவன விற்பனை கடன் கணக்கு)</h2>
                    <p class="text-sm text-emerald-100 mt-1">Manage Nutribest, Lactobest, Milky best, Dairybest & Delite feed distribution & credits.</p>
                </div>
                ${!isFarmer ? `
                <button onclick="openFeedSaleModal()" class="bg-white text-emerald-700 hover:bg-emerald-50 px-4 py-2.5 rounded-xl text-sm font-semibold shadow transition flex items-center gap-2">
                    <span>+</span> New Feed Sale / Credit Entry
                </button>` : ''}
            </div>

            <!-- KPI Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="dairy-card p-5">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Total Feed Sales</div>
                    <div class="text-2xl font-bold text-slate-900 mt-1">₹${totalFeedSales.toLocaleString()}</div>
                </div>
                <div class="dairy-card p-5">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Total Pending Due (Credit)</div>
                    <div class="text-2xl font-bold text-amber-600 mt-1">₹${totalPendingDue.toLocaleString()}</div>
                </div>
                <div class="dairy-card p-5">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Cash Collected (In Hand)</div>
                    <div class="text-2xl font-bold text-emerald-600 mt-1">₹${totalCash.toLocaleString()}</div>
                </div>
                <div class="dairy-card p-5">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Online Paid (UPI/Bank)</div>
                    <div class="text-2xl font-bold text-sky-600 mt-1">₹${totalOnline.toLocaleString()}</div>
                </div>
            </div>

            <!-- Feed Products Price List Reference -->
            <div class="dairy-card p-6">
                <h3 class="font-bold text-slate-900 text-base mb-3">🏷️ Available Cattle Feed Varieties & Pricing List</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    ${DEFAULT_STATE.feedProducts.map(p => `
                        <div class="bg-slate-50 p-3 rounded-xl border flex justify-between items-center text-xs">
                            <div>
                                <div class="font-bold text-slate-900">${p.name}</div>
                                <div class="text-[10px] text-emerald-700 font-medium">${p.category}</div>
                            </div>
                            <div class="text-right">
                                <div class="font-extrabold text-emerald-600 text-sm">₹${p.price}</div>
                                <div class="text-[10px] text-slate-500">per bag</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Feed Sales Ledger Table -->
            <div class="dairy-card overflow-hidden">
                <div class="p-4 border-b flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h3 class="font-bold text-slate-900 text-base">Feed Sales & Notebook Credit Ledger (${sales.length} transactions)</h3>
                    <input type="text" id="feed-search" placeholder="Search farmer or feed..." onkeyup="filterFeedTable()" class="px-3 py-2 border rounded-xl text-xs bg-slate-50 w-full sm:w-64">
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead class="bg-slate-100/70 text-slate-700 uppercase font-semibold text-[11px]">
                            <tr>
                                <th class="p-4">Tx ID & Date</th>
                                <th class="p-4">Farmer Name</th>
                                <th class="p-4">Feed Variety</th>
                                <th class="p-4">Bags</th>
                                <th class="p-4">Total Amount</th>
                                <th class="p-4">Paid Amount</th>
                                <th class="p-4">Payment Mode</th>
                                <th class="p-4 font-bold text-amber-700">Balance Due</th>
                                ${!isFarmer ? '<th class="p-4 text-right">Action</th>' : ''}
                            </tr>
                        </thead>
                        <tbody id="feed-table-body" class="divide-y text-slate-700 font-medium">
                            ${sales.map(s => `
                                <tr class="hover:bg-slate-50">
                                    <td class="p-4 font-bold text-emerald-700">${s.id}<br><span class="text-[10px] text-slate-400 font-normal">${s.date}</span></td>
                                    <td class="p-4 font-bold text-slate-900">${s.farmerName} (${s.farmerId})</td>
                                    <td class="p-4">${s.feedName}</td>
                                    <td class="p-4 font-bold">${s.bags} bags</td>
                                    <td class="p-4 font-semibold text-slate-900">₹${s.totalAmount}</td>
                                    <td class="p-4 font-semibold text-emerald-600">₹${s.paidAmount}</td>
                                    <td class="p-4"><span class="px-2 py-0.5 rounded text-[10px] font-bold ${s.paymentMode.includes('Cash') ? 'bg-amber-100 text-amber-800' : s.paymentMode.includes('Online') ? 'bg-sky-100 text-sky-800' : 'bg-rose-100 text-rose-800'}">${s.paymentMode}</span></td>
                                    <td class="p-4 font-extrabold ${s.balanceDue > 0 ? 'text-rose-600' : 'text-emerald-600'}">₹${s.balanceDue}</td>
                                    ${!isFarmer ? `
                                    <td class="p-4 text-right">
                                        ${s.balanceDue > 0 ? `<button onclick="openPayFeedModal('${s.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-lg text-xs font-semibold">Clear Due</button>` : '<span class="text-emerald-600 font-bold">Settled ✓</span>'}
                                    </td>` : ''}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- New Feed Sale Modal -->
        <div id="feed-sale-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm hidden items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
                <div class="flex justify-between items-center mb-4 border-b pb-3">
                    <h3 class="text-lg font-bold text-slate-900">New Feed Sale & Credit Entry (தீவன விற்பனை பதிவு)</h3>
                    <button onclick="closeFeedSaleModal()" class="text-slate-400 hover:text-slate-700 font-bold text-xl">✕</button>
                </div>
                <form id="feed-sale-form" onsubmit="submitFeedSale(event)" class="space-y-4 text-xs">
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Select Farmer / Customer</label>
                        <select id="fs-farmer-id" required class="w-full px-3 py-2.5 border rounded-xl bg-slate-50 font-medium">
                            ${DEFAULT_STATE.farmers.map(f => `<option value="${f.id}">${f.id} - ${f.name} (${f.village})</option>`).join('')}
                        </select>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Select Feed Variety</label>
                            <select id="fs-feed-id" onchange="updateFeedSaleCalc()" required class="w-full px-3 py-2.5 border rounded-xl bg-slate-50 font-medium">
                                ${DEFAULT_STATE.feedProducts.map(p => `<option value="${p.id}" data-price="${p.price}">${p.name} (₹${p.price})</option>`).join('')}
                            </select>
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Number of Bags</label>
                            <input type="number" id="fs-bags" value="1" min="1" required oninput="updateFeedSaleCalc()" class="w-full px-3 py-2.5 border rounded-xl bg-slate-50 font-bold">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border">
                        <div>
                            <span class="text-slate-500 font-medium">Total Feed Bill:</span>
                            <div class="text-xl font-bold text-slate-900 mt-0.5">₹<span id="fs-display-total">1450</span></div>
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Amount Paid Now (₹)</label>
                            <input type="number" id="fs-paid" value="0" min="0" required oninput="updateFeedSaleCalc()" class="w-full px-2.5 py-2 border rounded-xl bg-white font-bold text-emerald-600">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Payment Mode</label>
                            <select id="fs-mode" class="w-full px-3 py-2.5 border rounded-xl bg-slate-50 font-medium">
                                <option value="Cash (Hand)">Cash (In Hand)</option>
                                <option value="Online UPI">Online Pay (UPI / Bank)</option>
                                <option value="Partial Payment">Partial Payment (Credit Balance)</option>
                                <option value="Credit / Pending">Full Credit (Pending Due)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Remaining Balance Due (Added to Credit)</label>
                            <div class="text-lg font-extrabold text-rose-600 mt-1.5">₹<span id="fs-display-balance">1450</span></div>
                        </div>
                    </div>

                    <div class="flex justify-end gap-2 pt-3 border-t">
                        <button type="button" onclick="closeFeedSaleModal()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold">Cancel</button>
                        <button type="submit" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold shadow">Save Feed Sale Entry</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Clear Due / Pay Modal -->
        <div id="pay-feed-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm hidden items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl">
                <div class="flex justify-between items-center mb-4 border-b pb-3">
                    <h3 class="text-lg font-bold text-slate-900">Clear Feed Credit Due</h3>
                    <button onclick="closePayFeedModal()" class="text-slate-400 hover:text-slate-700 font-bold text-xl">✕</button>
                </div>
                <input type="hidden" id="pay-feed-tx-id">
                <div class="space-y-4 text-xs">
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Payment Method</label>
                        <select id="pay-feed-method" class="w-full px-3 py-2.5 border rounded-xl bg-slate-50">
                            <option value="Cash (Hand)">Cash (In Hand)</option>
                            <option value="Online UPI">Online Pay (UPI / Bank)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Amount to Pay (₹)</label>
                        <input type="number" id="pay-feed-amount" class="w-full px-3 py-2.5 border rounded-xl bg-slate-50 font-bold text-emerald-600">
                    </div>
                    <button onclick="confirmClearFeedDue()" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-semibold shadow">Confirm Payment</button>
                </div>
            </div>
        </div>
    `;
}

function openFeedSaleModal() {
    document.getElementById('feed-sale-modal').classList.remove('hidden');
    document.getElementById('feed-sale-modal').classList.add('flex');
    updateFeedSaleCalc();
}

function closeFeedSaleModal() {
    document.getElementById('feed-sale-modal').classList.add('hidden');
    document.getElementById('feed-sale-modal').classList.remove('flex');
}

function updateFeedSaleCalc() {
    const feedSelect = document.getElementById('fs-feed-id');
    const bagsInput = document.getElementById('fs-bags');
    const paidInput = document.getElementById('fs-paid');

    if (!feedSelect || !bagsInput || !paidInput) return;

    const selectedOption = feedSelect.options[feedSelect.selectedIndex];
    const price = parseFloat(selectedOption.getAttribute('data-price')) || 1450;
    const bags = parseInt(bagsInput.value) || 1;
    const total = price * bags;

    if (document.activeElement !== paidInput) {
        paidInput.value = 0;
    }
    const paid = parseFloat(paidInput.value) || 0;
    const balance = Math.max(0, total - paid);

    document.getElementById('fs-display-total').innerText = total.toFixed(2);
    document.getElementById('fs-display-balance').innerText = balance.toFixed(2);
}

function submitFeedSale(e) {
    e.preventDefault();
    const farmerId = document.getElementById('fs-farmer-id').value;
    const farmer = DEFAULT_STATE.farmers.find(f => f.id === farmerId);
    const feedSelect = document.getElementById('fs-feed-id');
    const feedName = feedSelect.options[feedSelect.selectedIndex].text.split(' (')[0];
    const unitPrice = parseFloat(feedSelect.options[feedSelect.selectedIndex].getAttribute('data-price'));
    const bags = parseInt(document.getElementById('fs-bags').value);
    const totalAmount = unitPrice * bags;
    const paidAmount = parseFloat(document.getElementById('fs-paid').value) || 0;
    const paymentMode = document.getElementById('fs-mode').value;
    const balanceDue = Math.max(0, totalAmount - paidAmount);

    const newSale = {
        id: "FS-" + (100 + DEFAULT_STATE.feedSales.length + 1),
        farmerId,
        farmerName: farmer ? farmer.name : "Unknown",
        date: new Date().toISOString().split('T')[0],
        feedName,
        bags,
        unitPrice,
        totalAmount,
        paidAmount,
        paymentMode: paidAmount === totalAmount ? paymentMode : (paidAmount > 0 ? "Partial Payment" : "Credit / Pending"),
        balanceDue
    };

    DEFAULT_STATE.feedSales.unshift(newSale);
    saveState();
    closeFeedSaleModal();
    renderApp();
}

function openPayFeedModal(txId) {
    const tx = DEFAULT_STATE.feedSales.find(s => s.id === txId);
    if (!tx) return;
    document.getElementById('pay-feed-tx-id').value = txId;
    document.getElementById('pay-feed-amount').value = tx.balanceDue;
    document.getElementById('pay-feed-modal').classList.remove('hidden');
    document.getElementById('pay-feed-modal').classList.add('flex');
}

function closePayFeedModal() {
    document.getElementById('pay-feed-modal').classList.add('hidden');
    document.getElementById('pay-feed-modal').classList.remove('flex');
}

function confirmClearFeedDue() {
    const txId = document.getElementById('pay-feed-tx-id').value;
    const payAmount = parseFloat(document.getElementById('pay-feed-amount').value) || 0;
    const method = document.getElementById('pay-feed-method').value;

    const tx = DEFAULT_STATE.feedSales.find(s => s.id === txId);
    if (tx) {
        tx.paidAmount += payAmount;
        tx.balanceDue = Math.max(0, tx.totalAmount - tx.paidAmount);
        tx.paymentMode = tx.balanceDue === 0 ? `${method} (Settled)` : "Partial Payment";
        saveState();
        closePayFeedModal();
        renderApp();
    }
}

function filterFeedTable() {
    const q = document.getElementById('feed-search').value.toLowerCase();
    const rows = document.querySelectorAll('#feed-table-body tr');
    rows.forEach(r => {
        r.style.display = r.innerText.toLowerCase().includes(q) ? '' : 'none';
    });
}
