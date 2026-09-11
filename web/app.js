// Arun Traders - Milk Collection & Society Management System
// Complete Application Logic & State Management

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// Initial Database & State
const DEFAULT_STATE = {
    currentUser: null, // { username, role, name, farmerId }
    currentView: 'login', // login, admin_dashboard, operator_dashboard, farmer_dashboard, farmers, milk_entry, morning_col, evening_col, rates, ledger, payments, reports, analytics, settings
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
        { id: "MC1003", farmerId: "F003", farmerName: "Arun Kumar", date: "2024-05-20", time: "07:05 AM", shift: "Morning", milkType: "Mixed", litres: 18.0, fat: 4.1, snf: 8.5, clr: 28.0, rate: 42.0, amount: 756.0, operatorId: "OP01", status: "Accepted" },
        { id: "MC1004", farmerId: "F004", farmerName: "Meena", date: "2024-05-20", time: "07:15 AM", shift: "Morning", milkType: "Cow", litres: 10.0, fat: 3.8, snf: 8.4, clr: 27.5, rate: 40.0, amount: 400.0, operatorId: "OP01", status: "Accepted" },
        { id: "MC1005", farmerId: "F005", farmerName: "Lakshmi", date: "2024-05-20", time: "07:30 AM", shift: "Morning", milkType: "Buffalo", litres: 14.0, fat: 6.5, snf: 9.2, clr: 30.5, rate: 60.0, amount: 840.0, operatorId: "OP01", status: "Accepted" },
        { id: "MC1006", farmerId: "F006", farmerName: "Selvi", date: "2024-05-20", time: "07:45 AM", shift: "Mixed", litres: 8.5, fat: 4.0, snf: 8.5, clr: 28.0, rate: 42.0, amount: 357.0, operatorId: "OP01", status: "Accepted" },
        { id: "MC1007", farmerId: "F007", farmerName: "Kumar", date: "2024-05-20", time: "08:00 AM", shift: "Morning", milkType: "Cow", litres: 22.0, fat: 4.6, snf: 8.8, clr: 29.5, rate: 48.0, amount: 1056.0, operatorId: "OP01", status: "Accepted" },
        { id: "MC1008", farmerId: "F008", farmerName: "Murugan", date: "2024-05-20", time: "08:15 AM", shift: "Morning", milkType: "Mixed", litres: 16.5, fat: 4.3, snf: 8.6, clr: 28.5, rate: 42.0, amount: 693.0, operatorId: "OP01", status: "Accepted" },
        { id: "MC1009", farmerId: "F009", farmerName: "Priya", date: "2024-05-20", time: "08:30 AM", shift: "Morning", milkType: "Cow", litres: 9.0, fat: 3.9, snf: 8.5, clr: 28.0, rate: 40.0, amount: 360.0, operatorId: "OP01", status: "Accepted" },
        { id: "MC1010", farmerId: "F010", farmerName: "Saravanan", date: "2024-05-20", time: "08:45 AM", shift: "Morning", milkType: "Mixed", litres: 20.0, fat: 4.4, snf: 8.7, clr: 29.0, rate: 42.0, amount: 840.0, operatorId: "OP01", status: "Accepted" },
        { id: "MC1011", farmerId: "F001", farmerName: "Ramesh Kumar", date: "2024-05-19", time: "05:30 PM", shift: "Evening", milkType: "Cow", litres: 10.0, fat: 4.3, snf: 8.6, clr: 28.8, rate: 44.0, amount: 440.0, operatorId: "OP01", status: "Accepted" },
        { id: "MC1012", farmerId: "F002", farmerName: "Suresh", date: "2024-05-19", time: "05:45 PM", shift: "Evening", milkType: "Cow", litres: 12.0, fat: 4.6, snf: 8.8, clr: 29.5, rate: 48.0, amount: 576.0, operatorId: "OP01", status: "Accepted" },
        { id: "MC1013", farmerId: "F003", farmerName: "Arun Kumar", date: "2024-05-19", time: "06:00 PM", shift: "Evening", milkType: "Mixed", litres: 14.0, fat: 4.2, snf: 8.5, clr: 28.2, rate: 42.0, amount: 588.0, operatorId: "OP01", status: "Accepted" },
        { id: "MC1014", farmerId: "F005", farmerName: "Lakshmi", date: "2024-05-19", time: "06:15 PM", shift: "Evening", milkType: "Buffalo", litres: 12.0, fat: 6.8, snf: 9.4, clr: 31.0, rate: 68.0, amount: 816.0, operatorId: "OP01", status: "Accepted" },
        { id: "MC1015", farmerId: "F007", farmerName: "Kumar", date: "2024-05-19", time: "06:30 PM", shift: "Evening", milkType: "Cow", litres: 18.0, fat: 4.5, snf: 8.7, clr: 29.0, rate: 48.0, amount: 864.0, operatorId: "OP01", status: "Accepted" }
    ],
    payments: [
        { id: "PAY-501", farmerId: "F001", farmerName: "Ramesh Kumar", date: "2024-05-13", amount: 6450.0, method: "Bank Transfer", referenceNumber: "UTIB0001234", status: "Paid" },
        { id: "PAY-502", farmerId: "F002", farmerName: "Suresh", date: "2024-05-13", amount: 7800.0, method: "UPI", referenceNumber: "UPI/413256789", status: "Paid" },
        { id: "PAY-503", farmerId: "F003", farmerName: "Arun Kumar", date: "2024-05-13", amount: 8920.0, method: "Bank Transfer", referenceNumber: "SBIN0987654", status: "Paid" },
        { id: "PAY-504", farmerId: "F004", farmerName: "Meena", date: "2024-05-13", amount: 4500.0, method: "Cash", referenceNumber: "CASH-098", status: "Paid" },
        { id: "PAY-505", farmerId: "F005", farmerName: "Lakshmi", date: "2024-05-13", amount: 9600.0, method: "Bank Transfer", referenceNumber: "CNRB0005678", status: "Paid" }
    ],
    ledgers: [
        { farmerId: "F001", farmerName: "Ramesh Kumar", opening: 0, earnings: 8250, bonuses: 250, deductions: 50, advances: 500, payments: 6450, closing: 1500 },
        { farmerId: "F002", farmerName: "Suresh", opening: 0, earnings: 9400, bonuses: 300, deductions: 0, advances: 1000, payments: 7800, closing: 900 },
        { farmerId: "F003", farmerName: "Arun Kumar", opening: 0, earnings: 10200, bonuses: 350, deductions: 100, advances: 500, payments: 8920, closing: 1030 }
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

    // Render Layout with Sidebar / Topbar / BottomNav
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
                <!-- Top Header Bar -->
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

                <!-- Dynamic View Container -->
                <main class="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto animate-fade-in">
                    ${renderCurrentView()}
                </main>

                <!-- Footer -->
                <footer class="bg-white border-t border-slate-200 py-4 px-6 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div>© ${new Date().getFullYear()} Arun Traders – Milk Collection & Society Management System</div>
                    <div class="tamil-text text-emerald-700 font-medium">அருண் டிரேடர்ஸ் | பால் சேகரிப்பு மையம் | VKA Milk ஆதரவுடன்</div>
                </footer>
            </div>
        </div>

        <!-- Receipt Modal if active -->
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
        case 'settings': return 'System Settings / அமைப்பு அமைப்புகள்';
        default: return 'Dashboard';
    }
}

function renderSidebarContent() {
    const role = DEFAULT_STATE.currentUser.role;
    let navItems = '';

    if (role === 'admin') {
        navItems = `
            <a href="#" onclick="setView('admin_dashboard')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'admin_dashboard' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>📊</span> <span>Dashboard</span>
            </a>
            <a href="#" onclick="setView('farmers')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'farmers' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>👨‍🌾</span> <span>Farmers (விவசாயிகள்)</span>
            </a>
            <a href="#" onclick="setView('milk_entry')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'milk_entry' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>🥛</span> <span>Fast Milk Entry</span>
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
            <a href="#" onclick="setView('settings')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'settings' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>⚙️</span> <span>Settings (அமைப்புகள்)</span>
            </a>
        `;
    } else if (role === 'operator') {
        navItems = `
            <a href="#" onclick="setView('operator_dashboard')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'operator_dashboard' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>📊</span> <span>Operator Dashboard</span>
            </a>
            <a href="#" onclick="setView('milk_entry')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'milk_entry' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>🥛</span> <span>Fast Milk Entry</span>
            </a>
            <a href="#" onclick="setView('morning_col')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'morning_col' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>🌅</span> <span>Morning Collection</span>
            </a>
            <a href="#" onclick="setView('evening_col')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'evening_col' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>🌇</span> <span>Evening Collection</span>
            </a>
            <a href="#" onclick="setView('farmers')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'farmers' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>👨‍🌾</span> <span>Farmers List</span>
            </a>
        `;
    } else if (role === 'farmer') {
        navItems = `
            <a href="#" onclick="setView('farmer_dashboard')" class="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium ${DEFAULT_STATE.currentView === 'farmer_dashboard' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'}">
                <span>🏠</span> <span>My Dashboard</span>
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

                    <div class="flex items-center justify-between text-xs">
                        <label class="flex items-center text-slate-600">
                            <input type="checkbox" class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 mr-2"> Remember me
                        </label>
                        <a href="#" onclick="alert('Please contact Arun Traders Admin to reset your password.')" class="text-emerald-600 hover:underline font-medium">Forgot password?</a>
                    </div>

                    <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-emerald-600/30 text-sm">
                        Login to Dashboard
                    </button>
                </form>

                <!-- Quick Demo Logins -->
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
        case 'settings':
            return renderSettingsPage();
        default:
            return renderDashboard();
    }
}

// ==========================================
// DASHBOARD VIEW
// ==========================================
function renderDashboard() {
    const totalFarmers = DEFAULT_STATE.farmers.length;
    const todayCols = DEFAULT_STATE.collections.filter(c => c.date === '2024-05-20');
    const activeToday = new Set(todayCols.map(c => c.farmerId)).size;
    const totalMilk = todayCols.reduce((acc, c) => acc + c.litres, 0);
    const morningMilk = todayCols.filter(c => c.shift === 'Morning').reduce((acc, c) => acc + c.litres, 0);
    const eveningMilk = todayCols.filter(c => c.shift === 'Evening').reduce((acc, c) => acc + c.litres, 0);

    const avgFat = todayCols.length > 0 ? (todayCols.reduce((acc, c) => acc + c.fat, 0) / todayCols.length).toFixed(1) : "4.2";
    const avgSnf = todayCols.length > 0 ? (todayCols.reduce((acc, c) => acc + c.snf, 0) / todayCols.length).toFixed(1) : "8.5";
    const totalAmount = todayCols.reduce((acc, c) => acc + c.amount, 0);

    return `
        <div class="space-y-6">
            <!-- Welcome Banner -->
            <div class="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div class="text-xs uppercase tracking-wider font-semibold text-emerald-200">Arun Traders • Society Management</div>
                    <h2 class="text-2xl font-bold mt-1">Today's Milk Collection Overview</h2>
                    <p class="text-sm text-emerald-100 mt-1">Live updates from society center • ${DEFAULT_STATE.settings.companySupport}</p>
                </div>
                <div class="flex items-center gap-3">
                    <button onclick="setView('milk_entry')" class="bg-white text-emerald-700 hover:bg-emerald-50 px-4 py-2.5 rounded-xl text-sm font-semibold shadow transition flex items-center gap-2">
                        <span>🥛</span> Fast Milk Entry
                    </button>
                    <button onclick="setView('reports')" class="bg-emerald-800/80 hover:bg-emerald-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition border border-emerald-500/30">
                        View Reports
                    </button>
                </div>
            </div>

            <!-- KPI Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="dairy-card p-5">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Farmers</p>
                            <h3 class="text-2xl font-bold text-slate-900 mt-1">${totalFarmers}</h3>
                        </div>
                        <div class="p-3 bg-emerald-50 text-emerald-600 rounded-xl text-xl">👨‍🌾</div>
                    </div>
                    <div class="mt-3 flex items-center text-xs text-emerald-600 font-medium">
                        <span>Active Today: ${activeToday} farmers</span>
                    </div>
                </div>

                <div class="dairy-card p-5">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Today's Total Milk</p>
                            <h3 class="text-2xl font-bold text-slate-900 mt-1">${totalMilk.toLocaleString()} L</h3>
                        </div>
                        <div class="p-3 bg-sky-50 text-sky-600 rounded-xl text-xl">🥛</div>
                    </div>
                    <div class="mt-3 flex items-center text-xs text-slate-600 font-medium justify-between">
                        <span>🌅 Morn: ${morningMilk} L</span>
                        <span>🌇 Eve: ${eveningMilk} L</span>
                    </div>
                </div>

                <div class="dairy-card p-5">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Average Quality</p>
                            <h3 class="text-2xl font-bold text-slate-900 mt-1">${avgFat}% FAT</h3>
                        </div>
                        <div class="p-3 bg-amber-50 text-amber-600 rounded-xl text-xl">⭐</div>
                    </div>
                    <div class="mt-3 flex items-center text-xs text-slate-600 font-medium">
                        <span>SNF: ${avgSnf}% | CLR: 28.6</span>
                    </div>
                </div>

                <div class="dairy-card p-5">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Today's Amount</p>
                            <h3 class="text-2xl font-bold text-emerald-600 mt-1">₹${totalAmount.toLocaleString()}</h3>
                        </div>
                        <div class="p-3 bg-teal-50 text-teal-600 rounded-xl text-xl">💰</div>
                    </div>
                    <div class="mt-3 flex items-center text-xs text-slate-600 font-medium">
                        <span>Estimated Payable Amount</span>
                    </div>
                </div>
            </div>

            <!-- Charts Section -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="dairy-card p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="font-bold text-slate-900 text-base">Morning vs Evening Collection (Last 7 Days)</h3>
                        <span class="text-xs text-slate-500 font-medium">Litres</span>
                    </div>
                    <div class="h-64 flex items-center justify-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                        <canvas id="collectionChart" class="max-h-56"></canvas>
                    </div>
                </div>

                <div class="dairy-card p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="font-bold text-slate-900 text-base">FAT & SNF Quality Trends</h3>
                        <span class="text-xs text-slate-500 font-medium">Percentage (%)</span>
                    </div>
                    <div class="h-64 flex items-center justify-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                        <canvas id="qualityChart" class="max-h-56"></canvas>
                    </div>
                </div>
            </div>

            <!-- Today's Collection Table -->
            <div class="dairy-card overflow-hidden">
                <div class="p-6 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h3 class="font-bold text-slate-900 text-lg">Today's Collection Records</h3>
                        <p class="text-xs text-slate-500">Real-time milk entries for May 20, 2024</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <input type="text" id="dash-search" placeholder="Search farmer..." class="px-3 py-2 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 bg-slate-50" onkeyup="filterDashTable()">
                        <button onclick="setView('milk_entry')" class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-xl text-xs font-semibold transition">
                            + Add Entry
                        </button>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr class="bg-slate-100/70 text-slate-700 uppercase font-semibold text-[11px] border-b border-slate-200">
                                <th class="p-4">Farmer ID</th>
                                <th class="p-4">Farmer Name</th>
                                <th class="p-4">Shift</th>
                                <th class="p-4">Milk Type</th>
                                <th class="p-4">Litres</th>
                                <th class="p-4">FAT</th>
                                <th class="p-4">SNF</th>
                                <th class="p-4">Rate/L</th>
                                <th class="p-4">Amount</th>
                                <th class="p-4">Time</th>
                                <th class="p-4">Status</th>
                            </tr>
                        </thead>
                        <tbody id="dash-table-body" class="divide-y divide-slate-100 text-slate-700 font-medium">
                            ${todayCols.map(c => `
                                <tr class="hover:bg-slate-50/80 transition">
                                    <td class="p-4 font-semibold text-emerald-700">${c.farmerId}</td>
                                    <td class="p-4 font-bold text-slate-900">${c.farmerName}</td>
                                    <td class="p-4"><span class="px-2 py-1 rounded-md text-[10px] font-semibold ${c.shift === 'Morning' ? 'bg-amber-100 text-amber-800' : 'bg-indigo-100 text-indigo-800'}">${c.shift}</span></td>
                                    <td class="p-4">${c.milkType}</td>
                                    <td class="p-4 font-semibold text-slate-900">${c.litres} L</td>
                                    <td class="p-4">${c.fat}%</td>
                                    <td class="p-4">${c.snf}%</td>
                                    <td class="p-4">₹${c.rate}</td>
                                    <td class="p-4 font-bold text-emerald-600">₹${c.amount.toFixed(2)}</td>
                                    <td class="p-4 text-slate-500">${c.time}</td>
                                    <td class="p-4"><span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[10px] font-semibold">${c.status}</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

setTimeout(() => {
    initCharts();
}, 100);

function initCharts() {
    const ctx1 = document.getElementById('collectionChart');
    if (ctx1 && window.Chart) {
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['May 14', 'May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20'],
                datasets: [
                    { label: 'Morning (L)', data: [710, 725, 730, 715, 740, 735, 742], backgroundColor: '#10b981', borderRadius: 6 },
                    { label: 'Evening (L)', data: [510, 520, 535, 525, 530, 540, 542], backgroundColor: '#0284c7', borderRadius: 6 }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
        });
    }

    const ctx2 = document.getElementById('qualityChart');
    if (ctx2 && window.Chart) {
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['May 14', 'May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20'],
                datasets: [
                    { label: 'Average FAT (%)', data: [4.1, 4.2, 4.1, 4.3, 4.2, 4.2, 4.2], borderColor: '#f59e0b', backgroundColor: '#f59e0b', tension: 0.3 },
                    { label: 'Average SNF (%)', data: [8.4, 8.5, 8.5, 8.6, 8.5, 8.5, 8.5], borderColor: '#6366f1', backgroundColor: '#6366f1', tension: 0.3 }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
        });
    }
}

// ==========================================
// FARMER MANAGEMENT PAGE
// ==========================================
function renderFarmersPage() {
    return `
        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div>
                    <h2 class="text-xl font-bold text-slate-900">Farmer Management (விவசாயிகள் மேலாண்மை)</h2>
                    <p class="text-xs text-slate-500 mt-0.5">Manage registered farmers, profiles, animal details and bank accounts.</p>
                </div>
                <button onclick="openAddFarmerModal()" class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition shadow flex items-center gap-2">
                    <span>+</span> Add New Farmer
                </button>
            </div>

            <!-- Filters & Search -->
            <div class="dairy-card p-4 flex flex-col sm:flex-row justify-between gap-4">
                <div class="flex items-center gap-2 flex-1">
                    <input type="text" id="farmer-search" placeholder="Search by name, ID or mobile..." onkeyup="filterFarmersTable()" class="px-4 py-2 border border-slate-200 rounded-xl text-sm w-full max-w-md focus:ring-2 focus:ring-emerald-500 bg-slate-50">
                </div>
                <div class="flex items-center gap-2">
                    <select id="farmer-status-filter" onchange="filterFarmersTable()" class="px-4 py-2 border border-slate-200 rounded-xl text-sm bg-slate-50 font-medium">
                        <option value="All">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
            </div>

            <!-- Farmers Table -->
            <div class="dairy-card overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr class="bg-slate-100/70 text-slate-700 uppercase font-semibold text-[11px] border-b border-slate-200">
                                <th class="p-4">Farmer ID</th>
                                <th class="p-4">Name</th>
                                <th class="p-4">Mobile</th>
                                <th class="p-4">Village</th>
                                <th class="p-4">Animal Type</th>
                                <th class="p-4">Cows / Buff</th>
                                <th class="p-4">Bank / UPI</th>
                                <th class="p-4">Status</th>
                                <th class="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody id="farmers-table-body" class="divide-y divide-slate-100 text-slate-700 font-medium">
                            ${DEFAULT_STATE.farmers.map(f => `
                                <tr class="hover:bg-slate-50/80 transition">
                                    <td class="p-4 font-bold text-emerald-700">${f.id}</td>
                                    <td class="p-4 font-bold text-slate-900">${f.name}</td>
                                    <td class="p-4">${f.phone}</td>
                                    <td class="p-4">${f.village}</td>
                                    <td class="p-4"><span class="px-2 py-0.5 bg-slate-100 rounded text-slate-800 font-semibold">${f.animalType}</span></td>
                                    <td class="p-4">🐄 ${f.cows} | 🐃 ${f.buffaloes}</td>
                                    <td class="p-4 text-slate-500 text-[11px]">${f.bank}</td>
                                    <td class="p-4"><span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[10px] font-semibold">${f.status}</span></td>
                                    <td class="p-4 text-right space-x-2">
                                        <button onclick="viewFarmerProfile('${f.id}')" class="bg-sky-50 hover:bg-sky-100 text-sky-700 px-3 py-1.5 rounded-lg text-xs font-semibold transition">View Profile</button>
                                        <button onclick="deleteFarmer('${f.id}')" class="bg-rose-50 hover:bg-rose-100 text-rose-600 px-2 py-1.5 rounded-lg text-xs font-semibold transition">Delete</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Add Farmer Modal Container -->
        <div id="farmer-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm hidden items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
                <div class="flex justify-between items-center mb-4 border-b pb-3">
                    <h3 class="text-lg font-bold text-slate-900">Add New Farmer (புதிய விவசாயி சேர்ப்பு)</h3>
                    <button onclick="closeAddFarmerModal()" class="text-slate-400 hover:text-slate-700 font-bold text-xl">✕</button>
                </div>
                <form id="add-farmer-form" onsubmit="submitNewFarmer(event)" class="space-y-4 text-xs">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Farmer ID</label>
                            <input type="text" id="new-f-id" value="F0${DEFAULT_STATE.farmers.length + 1}" required class="w-full px-3 py-2 border rounded-xl bg-slate-50">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Farmer Name</label>
                            <input type="text" id="new-f-name" required class="w-full px-3 py-2 border rounded-xl bg-slate-50" placeholder="Full Name">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Mobile Number</label>
                            <input type="text" id="new-f-phone" required class="w-full px-3 py-2 border rounded-xl bg-slate-50" placeholder="9842123456">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Village</label>
                            <input type="text" id="new-f-village" required class="w-full px-3 py-2 border rounded-xl bg-slate-50" placeholder="Thadikombu">
                        </div>
                    </div>
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Address</label>
                        <input type="text" id="new-f-address" class="w-full px-3 py-2 border rounded-xl bg-slate-50" placeholder="Street Name / Door No">
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Animal Type</label>
                            <select id="new-f-animal" class="w-full px-3 py-2 border rounded-xl bg-slate-50">
                                <option value="Cow">Cow</option>
                                <option value="Buffalo">Buffalo</option>
                                <option value="Mixed">Mixed</option>
                            </select>
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">No. of Cows</label>
                            <input type="number" id="new-f-cows" value="1" class="w-full px-3 py-2 border rounded-xl bg-slate-50">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">No. of Buffaloes</label>
                            <input type="number" id="new-f-buff" value="0" class="w-full px-3 py-2 border rounded-xl bg-slate-50">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Bank Details / Account</label>
                            <input type="text" id="new-f-bank" class="w-full px-3 py-2 border rounded-xl bg-slate-50" placeholder="State Bank - ACC">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">UPI ID</label>
                            <input type="text" id="new-f-upi" class="w-full px-3 py-2 border rounded-xl bg-slate-50" placeholder="name@sbi">
                        </div>
                    </div>
                    <div class="flex justify-end gap-2 pt-3 border-t">
                        <button type="button" onclick="closeAddFarmerModal()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold">Cancel</button>
                        <button type="submit" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold shadow">Save Farmer</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Farmer Profile Modal Container -->
        <div id="profile-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm hidden items-center justify-center p-4 z-50">
            <div id="profile-modal-content" class="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
                <!-- Dynamically populated -->
            </div>
        </div>
    `;
}

function openAddFarmerModal() {
    document.getElementById('farmer-modal').classList.remove('hidden');
    document.getElementById('farmer-modal').classList.add('flex');
}

function closeAddFarmerModal() {
    document.getElementById('farmer-modal').classList.add('hidden');
    document.getElementById('farmer-modal').classList.remove('flex');
}

function submitNewFarmer(e) {
    e.preventDefault();
    const newFarmer = {
        id: document.getElementById('new-f-id').value,
        name: document.getElementById('new-f-name').value,
        phone: document.getElementById('new-f-phone').value,
        village: document.getElementById('new-f-village').value,
        address: document.getElementById('new-f-address').value,
        animalType: document.getElementById('new-f-animal').value,
        cows: parseInt(document.getElementById('new-f-cows').value) || 0,
        buffaloes: parseInt(document.getElementById('new-f-buff').value) || 0,
        regDate: new Date().toISOString().split('T')[0],
        bank: document.getElementById('new-f-bank').value || 'SBI - 123456',
        upi: document.getElementById('new-f-upi').value || 'farmer@upi',
        status: 'Active'
    };

    DEFAULT_STATE.farmers.push(newFarmer);
    saveState();
    closeAddFarmerModal();
    renderApp();
}

function deleteFarmer(id) {
    if (confirm(`Are you sure you want to delete farmer ${id}?`)) {
        DEFAULT_STATE.farmers = DEFAULT_STATE.farmers.filter(f => f.id !== id);
        saveState();
        renderApp();
    }
}

function viewFarmerProfile(id) {
    const f = DEFAULT_STATE.farmers.find(item => item.id === id);
    if (!f) return;

    const fCols = DEFAULT_STATE.collections.filter(c => c.farmerId === id);
    const totalMilk = fCols.reduce((acc, c) => acc + c.litres, 0);
    const totalEarnings = fCols.reduce((acc, c) => acc + c.amount, 0);
    const avgFat = fCols.length > 0 ? (fCols.reduce((acc, c) => acc + c.fat, 0) / fCols.length).toFixed(1) : "4.0";
    const avgSnf = fCols.length > 0 ? (fCols.reduce((acc, c) => acc + c.snf, 0) / fCols.length).toFixed(1) : "8.5";

    const modal = document.getElementById('profile-modal');
    const content = document.getElementById('profile-modal-content');

    content.innerHTML = `
        <div class="flex justify-between items-center mb-6 border-b pb-4">
            <div>
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">${f.id}</span>
                <h3 class="text-xl font-bold text-slate-900 mt-1">${f.name}</h3>
                <p class="text-xs text-slate-500">Village: ${f.village} | Mobile: ${f.phone}</p>
            </div>
            <button onclick="closeProfileModal()" class="text-slate-400 hover:text-slate-700 font-bold text-xl">✕</button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div class="bg-slate-50 p-3 rounded-xl border">
                <div class="text-[11px] text-slate-500 font-semibold">Total Supplied</div>
                <div class="text-lg font-bold text-slate-900 mt-1">${totalMilk} L</div>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border">
                <div class="text-[11px] text-slate-500 font-semibold">Total Earnings</div>
                <div class="text-lg font-bold text-emerald-600 mt-1">₹${totalEarnings.toFixed(2)}</div>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border">
                <div class="text-[11px] text-slate-500 font-semibold">Average FAT</div>
                <div class="text-lg font-bold text-slate-900 mt-1">${avgFat}%</div>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border">
                <div class="text-[11px] text-slate-500 font-semibold">Average SNF</div>
                <div class="text-lg font-bold text-slate-900 mt-1">${avgSnf}%</div>
            </div>
        </div>

        <div class="space-y-4 text-xs">
            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-100 flex justify-between items-center">
                <div>
                    <span class="font-bold text-emerald-900 text-sm">Pending Payment: ₹1,500.00</span>
                    <p class="text-emerald-700 mt-0.5">Ready for weekly settlement cycle</p>
                </div>
                <button onclick="alert('Payment disbursement initiated!')" class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold shadow">Settle Payment</button>
            </div>

            <div>
                <h4 class="font-bold text-slate-900 text-sm mb-2">Collection History (${fCols.length} records)</h4>
                <div class="overflow-x-auto max-h-48 border rounded-xl">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead class="bg-slate-100 sticky top-0">
                            <tr>
                                <th class="p-3">Date</th>
                                <th class="p-3">Shift</th>
                                <th class="p-3">Milk Type</th>
                                <th class="p-3">Litres</th>
                                <th class="p-3">FAT/SNF</th>
                                <th class="p-3">Amount</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y">
                            ${fCols.length === 0 ? '<tr><td colspan="6" class="p-4 text-center text-slate-500">No collection records found.</td></tr>' : fCols.map(c => `
                                <tr>
                                    <td class="p-3">${c.date}</td>
                                    <td class="p-3">${c.shift}</td>
                                    <td class="p-3">${c.milkType}</td>
                                    <td class="p-3 font-semibold">${c.litres} L</td>
                                    <td class="p-3">${c.fat}% / ${c.snf}%</td>
                                    <td class="p-3 font-bold text-emerald-600">₹${c.amount}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="mt-6 flex justify-end gap-2 border-t pt-4">
            <button onclick="closeProfileModal()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold">Close</button>
            <button onclick="downloadStatement('${f.id}')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold">Download Statement</button>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeProfileModal() {
    document.getElementById('profile-modal').classList.add('hidden');
    document.getElementById('profile-modal').classList.remove('flex');
}

function filterFarmersTable() {
    const query = document.getElementById('farmer-search').value.toLowerCase();
    const statusFilter = document.getElementById('farmer-status-filter').value;
    const rows = document.querySelectorAll('#farmers-table-body tr');

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        const matchesQuery = text.includes(query);
        const matchesStatus = statusFilter === 'All' || text.includes(statusFilter.toLowerCase());
        row.style.display = matchesQuery && matchesStatus ? '' : 'none';
    });
}

// ==========================================
// FAST MILK ENTRY INTERFACE
// ==========================================
function renderMilkEntryPage() {
    return `
        <div class="max-w-3xl mx-auto space-y-6">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div class="flex justify-between items-center mb-4 border-b pb-3">
                    <div>
                        <h2 class="text-xl font-bold text-slate-900">Fast Milk Collection Entry (பால் பதிவு)</h2>
                        <p class="text-xs text-slate-500">Record morning or evening milk collection with instant rate & amount calculation.</p>
                    </div>
                    <span class="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">Operator Mode</span>
                </div>

                <form id="milk-entry-form" onsubmit="submitMilkCollection(event)" class="space-y-4 text-xs">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Select Farmer</label>
                            <select id="entry-farmer-id" required class="w-full px-3 py-2.5 border rounded-xl bg-slate-50 font-medium text-slate-800">
                                ${DEFAULT_STATE.farmers.map(f => `<option value="${f.id}">${f.id} - ${f.name} (${f.village})</option>`).join('')}
                            </select>
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Shift</label>
                            <select id="entry-shift" class="w-full px-3 py-2.5 border rounded-xl bg-slate-50 font-medium text-slate-800">
                                <option value="Morning">Morning (காலை)</option>
                                <option value="Evening">Evening (மாலை)</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Milk Type</label>
                            <select id="entry-milk-type" onchange="calculateMilkRate()" class="w-full px-3 py-2.5 border rounded-xl bg-slate-50 font-medium text-slate-800">
                                <option value="Cow">Cow Milk (பசு பால்)</option>
                                <option value="Buffalo">Buffalo Milk (எருமை பால்)</option>
                                <option value="Mixed">Mixed Milk (கலப்பு பால்)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Quantity (Litres)</label>
                            <input type="number" step="0.1" id="entry-litres" value="10.0" required oninput="calculateMilkRate()" class="w-full px-3 py-2.5 border rounded-xl bg-slate-50 font-bold text-slate-900">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Collection Date</label>
                            <input type="date" id="entry-date" value="2024-05-20" required class="w-full px-3 py-2.5 border rounded-xl bg-slate-50 font-medium text-slate-800">
                        </div>
                    </div>

                    <div class="grid grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border">
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">FAT %</label>
                            <input type="number" step="0.1" id="entry-fat" value="4.2" required oninput="calculateMilkRate()" class="w-full px-2.5 py-2 border rounded-xl bg-white font-bold">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">SNF %</label>
                            <input type="number" step="0.1" id="entry-snf" value="8.5" required oninput="calculateMilkRate()" class="w-full px-2.5 py-2 border rounded-xl bg-white font-bold">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">CLR (Lacto)</label>
                            <input type="number" step="0.1" id="entry-clr" value="28.5" class="w-full px-2.5 py-2 border rounded-xl bg-white font-bold">
                        </div>
                    </div>

                    <!-- Calculated Results Box -->
                    <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div>
                            <div class="text-xs text-emerald-800 font-semibold">Calculated Rate & Total Amount</div>
                            <div class="text-2xl font-extrabold text-emerald-700 mt-1">₹<span id="display-total-amount">440.00</span> <span class="text-xs font-normal text-slate-600">(Rate: ₹<span id="display-rate">44.0</span>/L)</span></div>
                        </div>
                        <div class="text-right">
                            <span class="text-[11px] bg-emerald-600 text-white px-3 py-1 rounded-full font-bold">Estimated nutritional value: ~68 kcal / 100ml</span>
                        </div>
                    </div>

                    <div class="flex justify-end gap-3 pt-4 border-t">
                        <button type="button" onclick="setView('admin_dashboard')" class="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold">Cancel</button>
                        <button type="submit" class="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-lg shadow-emerald-600/30">Submit Collection & Print Receipt</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

function calculateMilkRate() {
    const milkType = document.getElementById('entry-milk-type').value;
    const fat = parseFloat(document.getElementById('entry-fat').value) || 4.0;
    const litres = parseFloat(document.getElementById('entry-litres').value) || 10.0;

    const matchingRate = DEFAULT_STATE.rateCharts.find(r => r.milkType === milkType && fat >= r.fatMin && fat <= r.fatMax);
    const rate = matchingRate ? matchingRate.rate : (milkType === 'Buffalo' ? 60.0 : 42.0);
    const amount = litres * rate;

    const rateSpan = document.getElementById('display-rate');
    const amountSpan = document.getElementById('display-total-amount');

    if (rateSpan) rateSpan.innerText = rate.toFixed(1);
    if (amountSpan) amountSpan.innerText = amount.toFixed(2);
}

function submitMilkCollection(e) {
    e.preventDefault();
    const farmerId = document.getElementById('entry-farmer-id').value;
    const farmer = DEFAULT_STATE.farmers.find(f => f.id === farmerId);
    const milkType = document.getElementById('entry-milk-type').value;
    const shift = document.getElementById('entry-shift').value;
    const litres = parseFloat(document.getElementById('entry-litres').value);
    const fat = parseFloat(document.getElementById('entry-fat').value);
    const snf = parseFloat(document.getElementById('entry-snf').value);
    const clr = parseFloat(document.getElementById('entry-clr').value) || 28.0;
    const date = document.getElementById('entry-date').value;

    const matchingRate = DEFAULT_STATE.rateCharts.find(r => r.milkType === milkType && fat >= r.fatMin && fat <= r.fatMax);
    const rate = matchingRate ? matchingRate.rate : 42.0;
    const amount = litres * rate;

    const newRecord = {
        id: "MC" + (1000 + DEFAULT_STATE.collections.length + 1),
        farmerId,
        farmerName: farmer ? farmer.name : "Unknown",
        date,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        shift,
        milkType,
        litres,
        fat,
        snf,
        clr,
        rate,
        amount,
        operatorId: DEFAULT_STATE.currentUser.username,
        status: "Accepted"
    };

    DEFAULT_STATE.collections.unshift(newRecord);
    DEFAULT_STATE.activeReceipt = newRecord;
    saveState();
    renderApp();
}

// =======================
// DIGITAL RECEIPT MODAL
// =======================
function renderReceiptModal() {
    const c = DEFAULT_STATE.activeReceipt;
    if (!c) return '';

    return `
        <div class="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative" id="printable-receipt">
                <div class="text-center border-b pb-4 mb-4">
                    <div class="text-xl font-bold text-slate-900">Arun Traders</div>
                    <div class="text-xs font-semibold text-emerald-600">Milk Collection Receipt (பால் சேகரிப்பு ரசீது)</div>
                    <div class="tamil-text text-xs text-emerald-700 font-bold mt-1">அருண் டிரேடர்ஸ் • ${DEFAULT_STATE.settings.companySupport}</div>
                    <div class="text-[11px] text-slate-500 mt-1">${DEFAULT_STATE.settings.address}</div>
                </div>

                <div class="space-y-2 text-xs text-slate-700 mb-6">
                    <div class="flex justify-between py-1 border-b border-dashed">
                        <span class="font-semibold text-slate-500">Receipt ID:</span>
                        <span class="font-bold text-slate-900">${c.id}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-dashed">
                        <span class="font-semibold text-slate-500">Farmer Name:</span>
                        <span class="font-bold text-slate-900">${c.farmerName} (${c.farmerId})</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-dashed">
                        <span class="font-semibold text-slate-500">Date & Time:</span>
                        <span class="font-medium">${c.date} | ${c.time}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-dashed">
                        <span class="font-semibold text-slate-500">Shift & Type:</span>
                        <span class="font-medium">${c.shift} | ${c.milkType}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-dashed">
                        <span class="font-semibold text-slate-500">Quantity (Litres):</span>
                        <span class="font-bold text-slate-900">${c.litres} L</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-dashed">
                        <span class="font-semibold text-slate-500">FAT % / SNF %:</span>
                        <span class="font-medium">${c.fat}% / ${c.snf}% (CLR: ${c.clr})</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-dashed">
                        <span class="font-semibold text-slate-500">Rate per Litre:</span>
                        <span class="font-medium">₹${c.rate}</span>
                    </div>
                    <div class="flex justify-between py-2 bg-emerald-50 px-3 rounded-xl font-bold text-sm text-emerald-800">
                        <span>Total Amount:</span>
                        <span>₹${c.amount.toFixed(2)}</span>
                    </div>
                </div>

                <div class="flex gap-2 print:hidden">
                    <button onclick="window.print()" class="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-xl text-xs transition">Print Receipt</button>
                    <button onclick="downloadReceiptPDF()" class="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 rounded-xl text-xs transition">Download PDF</button>
                    <button onclick="closeReceiptModal()" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl text-xs transition">Done</button>
                </div>
            </div>
        </div>
    `;
}

function downloadReceiptPDF() {
    window.print();
}

function closeReceiptModal() {
    DEFAULT_STATE.activeReceipt = null;
    renderApp();
}

// ==========================================
// MORNING & EVENING COLLECTION PAGES
// ==========================================
function renderCollectionPage(shiftName) {
    const cols = DEFAULT_STATE.collections.filter(c => c.shift === shiftName);
    const totalFarmers = new Set(cols.map(c => c.farmerId)).size;
    const totalLitres = cols.reduce((acc, c) => acc + c.litres, 0);
    const avgFat = cols.length > 0 ? (cols.reduce((acc, c) => acc + c.fat, 0) / cols.length).toFixed(1) : "4.2";
    const avgSnf = cols.length > 0 ? (cols.reduce((acc, c) => acc + c.snf, 0) / cols.length).toFixed(1) : "8.5";
    const totalPayable = cols.reduce((acc, c) => acc + c.amount, 0);

    return `
        <div class="space-y-6">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 class="text-xl font-bold text-slate-900">${shiftName} Collection Summary (${shiftName === 'Morning' ? 'காலை பால் சேகரிப்பு' : 'மாலை பால் சேகரிப்பு'})</h2>
                    <p class="text-xs text-slate-500 mt-0.5">Comprehensive audit and logs for ${shiftName.toLowerCase()} shift collections.</p>
                </div>
                <button onclick="setView('milk_entry')" class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow">
                    + Add New Collection
                </button>
            </div>

            <!-- KPIs -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div class="dairy-card p-4">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Total Farmers</div>
                    <div class="text-2xl font-bold text-slate-900 mt-1">${totalFarmers}</div>
                </div>
                <div class="dairy-card p-4">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Total Litres</div>
                    <div class="text-2xl font-bold text-slate-900 mt-1">${totalLitres} L</div>
                </div>
                <div class="dairy-card p-4">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Average FAT</div>
                    <div class="text-2xl font-bold text-slate-900 mt-1">${avgFat}%</div>
                </div>
                <div class="dairy-card p-4">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Average SNF</div>
                    <div class="text-2xl font-bold text-slate-900 mt-1">${avgSnf}%</div>
                </div>
                <div class="dairy-card p-4">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Total Payable</div>
                    <div class="text-2xl font-bold text-emerald-600 mt-1">₹${totalPayable.toFixed(2)}</div>
                </div>
            </div>

            <!-- Table -->
            <div class="dairy-card overflow-hidden">
                <div class="p-4 border-b flex justify-between items-center">
                    <h3 class="font-bold text-slate-900">${shiftName} Records (${cols.length})</h3>
                    <input type="text" placeholder="Search records..." class="px-3 py-1.5 border rounded-xl text-xs bg-slate-50">
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead class="bg-slate-100/70 text-slate-700 uppercase font-semibold text-[11px]">
                            <tr>
                                <th class="p-4">Record ID</th>
                                <th class="p-4">Farmer</th>
                                <th class="p-4">Date & Time</th>
                                <th class="p-4">Milk Type</th>
                                <th class="p-4">Litres</th>
                                <th class="p-4">FAT</th>
                                <th class="p-4">SNF</th>
                                <th class="p-4">Rate</th>
                                <th class="p-4">Amount</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y text-slate-700 font-medium">
                            ${cols.map(c => `
                                <tr class="hover:bg-slate-50">
                                    <td class="p-4 font-bold text-emerald-700">${c.id}</td>
                                    <td class="p-4 font-bold text-slate-900">${c.farmerName} (${c.farmerId})</td>
                                    <td class="p-4 text-slate-500">${c.date} | ${c.time}</td>
                                    <td class="p-4">${c.milkType}</td>
                                    <td class="p-4 font-bold">${c.litres} L</td>
                                    <td class="p-4">${c.fat}%</td>
                                    <td class="p-4">${c.snf}%</td>
                                    <td class="p-4">₹${c.rate}</td>
                                    <td class="p-4 font-bold text-emerald-600">₹${c.amount.toFixed(2)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// RATE MANAGEMENT PAGE
// ==========================================
function renderRatesPage() {
    return `
        <div class="space-y-6">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex justify-between items-center">
                <div>
                    <h2 class="text-xl font-bold text-slate-900">Rate Chart Management (விலை பட்டியல் மேலாண்மை)</h2>
                    <p class="text-xs text-slate-500 mt-0.5">Admin-configured milk rate chart based on FAT, SNF, and Milk Type.</p>
                </div>
                <button onclick="alert('New rate slab added!')" class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow">
                    + Add Rate Slab
                </button>
            </div>

            <div class="dairy-card overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead class="bg-slate-100/70 text-slate-700 uppercase font-semibold text-[11px]">
                            <tr>
                                <th class="p-4">Milk Type</th>
                                <th class="p-4">FAT Min-Max</th>
                                <th class="p-4">SNF</th>
                                <th class="p-4">Rate / Litre</th>
                                <th class="p-4">Bonus</th>
                                <th class="p-4">Effective From</th>
                                <th class="p-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y text-slate-700 font-medium">
                            ${DEFAULT_STATE.rateCharts.map(r => `
                                <tr class="hover:bg-slate-50">
                                    <td class="p-4 font-bold text-slate-900">${r.milkType} Milk</td>
                                    <td class="p-4">${r.fatMin} - ${r.fatMax}%</td>
                                    <td class="p-4">${r.snf}%</td>
                                    <td class="p-4 font-bold text-emerald-600 text-sm">₹${r.rate.toFixed(2)}</td>
                                    <td class="p-4 text-emerald-700">+₹${r.bonus}</td>
                                    <td class="p-4 text-slate-500">${r.effectiveFrom}</td>
                                    <td class="p-4 text-right">
                                        <button onclick="alert('Edit rate slab')" class="bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg font-semibold text-slate-700">Edit</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// FINANCIAL LEDGER PAGE
// ==========================================
function renderLedgerPage() {
    return `
        <div class="space-y-6">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex justify-between items-center">
                <div>
                    <h2 class="text-xl font-bold text-slate-900">Farmer-wise Financial Ledger (நிதி லெட்ஜர்)</h2>
                    <p class="text-xs text-slate-500 mt-0.5">Opening balance, milk earnings, bonuses, deductions, advances, and closing balance.</p>
                </div>
                <div class="flex gap-2">
                    <button onclick="downloadStatement()" class="bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700">Download Statement</button>
                    <button onclick="window.print()" class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow">Print Ledger</button>
                </div>
            </div>

            <div class="dairy-card overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead class="bg-slate-100/70 text-slate-700 uppercase font-semibold text-[11px]">
                            <tr>
                                <th class="p-4">Farmer ID & Name</th>
                                <th class="p-4">Opening Balance</th>
                                <th class="p-4">Milk Earnings</th>
                                <th class="p-4">Bonuses</th>
                                <th class="p-4">Deductions</th>
                                <th class="p-4">Advances</th>
                                <th class="p-4">Payments</th>
                                <th class="p-4">Closing Balance</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y text-slate-700 font-medium">
                            ${DEFAULT_STATE.ledgers.map(l => `
                                <tr class="hover:bg-slate-50">
                                    <td class="p-4 font-bold text-slate-900">${l.farmerName} (${l.farmerId})</td>
                                    <td class="p-4">₹${l.opening}</td>
                                    <td class="p-4 font-semibold text-emerald-600">₹${l.earnings}</td>
                                    <td class="p-4 text-emerald-700">+₹${l.bonuses}</td>
                                    <td class="p-4 text-rose-600">-₹${l.deductions}</td>
                                    <td class="p-4 text-amber-600">₹${l.advances}</td>
                                    <td class="p-4 text-sky-600">₹${l.payments}</td>
                                    <td class="p-4 font-bold text-slate-900">₹${l.closing}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// PAYMENT MANAGEMENT PAGE
// ==========================================
function renderPaymentsPage() {
    return `
        <div class="space-y-6">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex justify-between items-center">
                <div>
                    <h2 class="text-xl font-bold text-slate-900">Payment Management (பணப் பரிமாற்றம்)</h2>
                    <p class="text-xs text-slate-500 mt-0.5">Manage farmer settlements via Cash, UPI, and Bank Transfer.</p>
                </div>
                <button onclick="alert('Bulk payment disbursement started')" class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow">
                    Disburse Weekly Payments
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div class="dairy-card p-4">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Total Pending</div>
                    <div class="text-2xl font-bold text-amber-600 mt-1">₹34,500</div>
                </div>
                <div class="dairy-card p-4">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Total Paid</div>
                    <div class="text-2xl font-bold text-emerald-600 mt-1">₹36,770</div>
                </div>
                <div class="dairy-card p-4">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Today's Payments</div>
                    <div class="text-2xl font-bold text-slate-900 mt-1">₹0.00</div>
                </div>
                <div class="dairy-card p-4">
                    <div class="text-xs font-semibold text-slate-500 uppercase">This Month</div>
                    <div class="text-2xl font-bold text-sky-600 mt-1">₹1,42,800</div>
                </div>
            </div>

            <div class="dairy-card overflow-hidden">
                <div class="p-4 border-b flex justify-between items-center">
                    <h3 class="font-bold text-slate-900">Payment History</h3>
                    <input type="text" placeholder="Search payment..." class="px-3 py-1.5 border rounded-xl text-xs bg-slate-50">
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead class="bg-slate-100/70 text-slate-700 uppercase font-semibold text-[11px]">
                            <tr>
                                <th class="p-4">Payment ID</th>
                                <th class="p-4">Farmer</th>
                                <th class="p-4">Date</th>
                                <th class="p-4">Amount</th>
                                <th class="p-4">Method</th>
                                <th class="p-4">Reference Number</th>
                                <th class="p-4">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y text-slate-700 font-medium">
                            ${DEFAULT_STATE.payments.map(p => `
                                <tr class="hover:bg-slate-50">
                                    <td class="p-4 font-bold text-slate-900">${p.id}</td>
                                    <td class="p-4 font-bold text-emerald-700">${p.farmerName} (${p.farmerId})</td>
                                    <td class="p-4 text-slate-500">${p.date}</td>
                                    <td class="p-4 font-bold text-emerald-600">₹${p.amount.toFixed(2)}</td>
                                    <td class="p-4"><span class="px-2 py-0.5 bg-slate-100 rounded">${p.method}</span></td>
                                    <td class="p-4 text-slate-500">${p.referenceNumber}</td>
                                    <td class="p-4"><span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold">${p.status}</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// PROFESSIONAL REPORTS SECTION
// ==========================================
function renderReportsPage() {
    return `
        <div class="space-y-6">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 class="text-xl font-bold text-slate-900">Professional Reports (விரிவான அறிக்கைகள்)</h2>
                    <p class="text-xs text-slate-500 mt-0.5">Generate, filter and export daily, monthly, quality and payment reports.</p>
                </div>
                <div class="flex gap-2">
                    <button onclick="downloadStatement()" class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow">Export Excel</button>
                    <button onclick="window.print()" class="bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700">Download PDF</button>
                </div>
            </div>

            <div class="dairy-card p-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Report Type</label>
                    <select id="report-type-select" class="w-full px-3 py-2 border rounded-xl text-xs bg-slate-50">
                        <option>Daily Collection Report</option>
                        <option>Morning Collection Report</option>
                        <option>Evening Collection Report</option>
                        <option>Farmer-wise Report</option>
                        <option>Milk Quality Report (FAT/SNF)</option>
                        <option>Payment & Ledger Report</option>
                        <option>Monthly Summary Report</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">From Date</label>
                    <input type="date" id="report-from-date" value="2024-05-01" class="w-full px-3 py-2 border rounded-xl text-xs bg-slate-50">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">To Date</label>
                    <input type="date" id="report-to-date" value="2024-05-20" class="w-full px-3 py-2 border rounded-xl text-xs bg-slate-50">
                </div>
                <div class="flex items-end">
                    <button onclick="runGenerateReport()" class="w-full bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-xl text-xs font-semibold shadow">Generate Report</button>
                </div>
            </div>

            <div id="report-results-container">
                <div class="dairy-card p-6 text-center py-12">
                    <div class="text-4xl mb-3">📈</div>
                    <h3 class="font-bold text-slate-900 text-base">Select report parameters above and click Generate Report</h3>
                    <p class="text-xs text-slate-500 mt-1">All reports are fully formatted for Arun Traders & ${DEFAULT_STATE.settings.companySupport}</p>
                </div>
            </div>
        </div>
    `;
}

function runGenerateReport() {
    const container = document.getElementById('report-results-container');
    if (!container) return;

    const reportType = document.getElementById('report-type-select')?.value || 'Daily Collection Report';
    const cols = DEFAULT_STATE.collections;
    const totalLitres = cols.reduce((acc, c) => acc + c.litres, 0);
    const totalAmount = cols.reduce((acc, c) => acc + c.amount, 0);

    container.innerHTML = `
        <div class="dairy-card p-6 space-y-4">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-2">
                <div>
                    <h3 class="font-bold text-slate-900 text-base">${reportType}</h3>
                    <p class="text-xs text-slate-500">Generated for Arun Traders • Total Records: ${cols.length}</p>
                </div>
                <div class="flex gap-2">
                    <button onclick="downloadStatement()" class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold">Export CSV</button>
                    <button onclick="window.print()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold">Print Report</button>
                </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div class="bg-slate-50 p-3 rounded-xl border">
                    <div class="text-[11px] text-slate-500 font-semibold">Total Quantity</div>
                    <div class="text-lg font-bold text-slate-900 mt-1">${totalLitres} Litres</div>
                </div>
                <div class="bg-slate-50 p-3 rounded-xl border">
                    <div class="text-[11px] text-slate-500 font-semibold">Total Payable Amount</div>
                    <div class="text-lg font-bold text-emerald-600 mt-1">₹${totalAmount.toFixed(2)}</div>
                </div>
                <div class="bg-slate-50 p-3 rounded-xl border">
                    <div class="text-[11px] text-slate-500 font-semibold">Average FAT / SNF</div>
                    <div class="text-lg font-bold text-slate-900 mt-1">4.2% / 8.5%</div>
                </div>
            </div>

            <div class="overflow-x-auto max-h-96 border rounded-xl">
                <table class="w-full text-left border-collapse text-xs">
                    <thead class="bg-slate-100 sticky top-0">
                        <tr>
                            <th class="p-3">Record ID</th>
                            <th class="p-3">Farmer Name</th>
                            <th class="p-3">Date & Shift</th>
                            <th class="p-3">Milk Type</th>
                            <th class="p-3">Litres</th>
                            <th class="p-3">FAT / SNF</th>
                            <th class="p-3">Rate</th>
                            <th class="p-3">Amount</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y font-medium text-slate-700">
                        ${cols.map(c => `
                            <tr>
                                <td class="p-3 font-bold text-emerald-700">${c.id}</td>
                                <td class="p-3 font-bold text-slate-900">${c.farmerName} (${c.farmerId})</td>
                                <td class="p-3 text-slate-500">${c.date} | ${c.shift}</td>
                                <td class="p-3">${c.milkType}</td>
                                <td class="p-3 font-bold">${c.litres} L</td>
                                <td class="p-3">${c.fat}% / ${c.snf}%</td>
                                <td class="p-3">₹${c.rate}</td>
                                <td class="p-3 font-bold text-emerald-600">₹${c.amount.toFixed(2)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function downloadStatement(farmerId = null) {
    let csv = "Arun Traders - Financial & Collection Statement\nDate,Farmer ID,Farmer Name,Shift,Milk Type,Litres,FAT,SNF,Rate,Amount\n";
    let records = DEFAULT_STATE.collections;
    if (farmerId) {
        records = records.filter(c => c.farmerId === farmerId);
    }
    records.forEach(c => {
        csv += `${c.date},${c.farmerId},${c.farmerName},${c.shift},${c.milkType},${c.litres},${c.fat},${c.snf},${c.rate},${c.amount}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ArunTraders_Statement_${farmerId || 'All'}_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// ==========================================
// ADVANCED ANALYTICS PAGE
// ==========================================
function renderAnalyticsPage() {
    return `
        <div class="space-y-6">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h2 class="text-xl font-bold text-slate-900">Advanced Analytics & Intelligence (மேம்பட்ட பகுப்பாய்வு)</h2>
                <p class="text-xs text-slate-500 mt-0.5">Deep insights, supply trends, and performance metrics for Arun Traders.</p>
            </div>

            <!-- Intelligent Insights Box -->
            <div class="bg-gradient-to-r from-teal-50 to-emerald-50 border border-emerald-200 p-5 rounded-2xl space-y-2">
                <div class="text-xs font-bold text-emerald-800 uppercase tracking-wider">💡 Intelligent Society Insights</div>
                <div class="text-sm font-semibold text-slate-800">"Evening collection increased by 12% compared with last week."</div>
                <div class="text-xs text-slate-600">• Ramesh Kumar supplied the highest quantity this month (384 L).</div>
                <div class="text-xs text-slate-600">• Average FAT improved from 4.1% to 4.3% across all chilling centers.</div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="dairy-card p-5">
                    <div class="text-xs font-semibold text-slate-500 uppercase">This Month Total</div>
                    <div class="text-2xl font-bold text-slate-900 mt-1">24,580 Litres</div>
                </div>
                <div class="dairy-card p-5">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Highest Collection Day</div>
                    <div class="text-2xl font-bold text-emerald-600 mt-1">1,420 L (May 12)</div>
                </div>
                <div class="dairy-card p-5">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Most Active Supplier</div>
                    <div class="text-2xl font-bold text-sky-600 mt-1">Ramesh Kumar</div>
                </div>
            </div>

            <div class="dairy-card p-6">
                <h3 class="font-bold text-slate-900 mb-4">Monthly Milk Collection Trend</h3>
                <div class="h-64 flex items-center justify-center bg-slate-50 rounded-xl border border-dashed">
                    <canvas id="analyticsChart" class="max-h-56"></canvas>
                </div>
            </div>
        </div>
    `;
}

setTimeout(() => {
    const ctx = document.getElementById('analyticsChart');
    if (ctx && window.Chart) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{ label: 'Monthly Litres', data: [5800, 6100, 6350, 6330], borderColor: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', fill: true, tension: 0.3 }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }
}, 200);

// ==========================================
// FARMER PORTAL / DASHBOARD
// ==========================================
function renderFarmerDashboard() {
    const farmerId = DEFAULT_STATE.currentUser.farmerId || "F001";
    const farmer = DEFAULT_STATE.farmers.find(f => f.id === farmerId) || DEFAULT_STATE.farmers[0];
    const fCols = DEFAULT_STATE.collections.filter(c => c.farmerId === farmer.id);
    const todayCol = fCols.find(c => c.date === '2024-05-20') || { litres: 12.5, fat: 4.2, snf: 8.5, amount: 550.0 };

    return `
        <div class="space-y-6">
            <div class="bg-gradient-to-r from-slate-900 to-emerald-950 rounded-2xl p-6 text-white shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <div class="text-xs uppercase tracking-wider text-emerald-400 font-semibold">Farmer Portal • ${farmer.id}</div>
                    <h2 class="text-2xl font-bold mt-1">Welcome, ${farmer.name}</h2>
                    <p class="text-xs text-slate-300 mt-1">Village: ${farmer.village} | Mobile: ${farmer.phone}</p>
                </div>
                <div class="bg-white/10 px-4 py-2 rounded-xl text-xs font-semibold backdrop-blur-md">
                    ${DEFAULT_STATE.settings.companySupport}
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div class="dairy-card p-5">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Today's Milk</div>
                    <div class="text-2xl font-bold text-slate-900 mt-1">${todayCol.litres} L</div>
                </div>
                <div class="dairy-card p-5">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Today's Quality</div>
                    <div class="text-2xl font-bold text-emerald-600 mt-1">${todayCol.fat}% FAT</div>
                </div>
                <div class="dairy-card p-5">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Today's Amount</div>
                    <div class="text-2xl font-bold text-emerald-600 mt-1">₹${todayCol.amount}</div>
                </div>
                <div class="dairy-card p-5">
                    <div class="text-xs font-semibold text-slate-500 uppercase">Pending Payment</div>
                    <div class="text-2xl font-bold text-amber-600 mt-1">₹1,500</div>
                </div>
            </div>

            <div class="dairy-card p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="font-bold text-slate-900">My Collection History</h3>
                    <button onclick="downloadStatement('${farmer.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold">Download Statement</button>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead class="bg-slate-100">
                            <tr>
                                <th class="p-3">Date</th>
                                <th class="p-3">Shift</th>
                                <th class="p-3">Milk Type</th>
                                <th class="p-3">Litres</th>
                                <th class="p-3">FAT / SNF</th>
                                <th class="p-3">Rate</th>
                                <th class="p-3">Amount</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y font-medium text-slate-700">
                            ${fCols.map(c => `
                                <tr>
                                    <td class="p-3">${c.date}</td>
                                    <td class="p-3">${c.shift}</td>
                                    <td class="p-3">${c.milkType}</td>
                                    <td class="p-3 font-bold">${c.litres} L</td>
                                    <td class="p-3">${c.fat}% / ${c.snf}%</td>
                                    <td class="p-3">₹${c.rate}</td>
                                    <td class="p-3 font-bold text-emerald-600">₹${c.amount}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// SETTINGS PAGE
// ==========================================
function renderSettingsPage() {
    return `
        <div class="max-w-2xl mx-auto space-y-6">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h2 class="text-xl font-bold text-slate-900">System Settings (அமைப்பு அமைப்புகள்)</h2>
                <p class="text-xs text-slate-500 mt-0.5">Configure society details, VKA Milk branding, collection timings, and rate parameters.</p>
            </div>

            <div class="dairy-card p-6 space-y-4 text-xs">
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Society Name</label>
                    <input type="text" value="${DEFAULT_STATE.settings.societyName}" class="w-full px-3 py-2 border rounded-xl bg-slate-50">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Company Support Branding</label>
                        <input type="text" value="${DEFAULT_STATE.settings.companySupport}" class="w-full px-3 py-2 border rounded-xl bg-slate-50">
                    </div>
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Tamil Branding</label>
                        <input type="text" value="${DEFAULT_STATE.settings.tamilName}" class="w-full px-3 py-2 border rounded-xl bg-slate-50">
                    </div>
                </div>
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Address</label>
                    <input type="text" value="${DEFAULT_STATE.settings.address}" class="w-full px-3 py-2 border rounded-xl bg-slate-50">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Morning Collection Time</label>
                        <input type="text" value="${DEFAULT_STATE.settings.morningTime}" class="w-full px-3 py-2 border rounded-xl bg-slate-50">
                    </div>
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Evening Collection Time</label>
                        <input type="text" value="${DEFAULT_STATE.settings.eveningTime}" class="w-full px-3 py-2 border rounded-xl bg-slate-50">
                    </div>
                </div>
                <button onclick="alert('Settings saved successfully!')" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl shadow">Save Settings</button>
            </div>
        </div>
    `;
}

function filterDashTable() {
    const q = document.getElementById('dash-search').value.toLowerCase();
    const rows = document.querySelectorAll('#dash-table-body tr');
    rows.forEach(r => {
        r.style.display = r.innerText.toLowerCase().includes(q) ? '' : 'none';
    });
}

function attachViewListeners() {
    // Attach additional view-specific handlers if needed
}
