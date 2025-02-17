class ToastNotify {
    constructor({ position = 'top-right', duration = 5000 } = {}) {
        this.config = {
            position,
            duration,
        };

        // Default messages moved here
        this.defaultMessages = {
            success: 'Operation completed successfully!',
            warning: 'Warning: Low disk space',
            error: 'Error: Unable to connect'
        };

        this.icons = {
            success: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"/></svg>`,
            warning: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"/></svg>`,
            error: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"/></svg>`
        };

        const container = document.createElement('div');
        container.id = 'toast-notify-container';
        container.className = `fixed ${position.split('-').map(p => p + '-4').join(' ')} flex flex-col gap-3 z-50 w-80`;
        document.body.appendChild(container);
        this.container = container;
    }

    show(type, message = null) {
        const toast = document.createElement('div');
        toast.className = 'bg-white rounded-lg shadow-lg overflow-hidden animate-slide-in';
        toast.innerHTML = `
            <div class="bg-${type === 'success' ? 'emerald' : type === 'warning' ? 'amber' : 'red'}-500 text-white px-4 py-2 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    ${this.icons[type]}
                    <span class="font-medium">${type.charAt(0).toUpperCase() + type.slice(1)}</span>
                </div>
                <button onclick="this.closest('.animate-slide-in').remove()" class="text-white hover:text-gray-100">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"/></svg>
                </button>
            </div>
            <div class="px-4 py-3 text-gray-600">${message || this.defaultMessages[type]}</div>
        `;

        this.container.appendChild(toast);
        setTimeout(() => {
            toast.classList.replace('animate-slide-in', 'animate-slide-out');
            toast.addEventListener('animationend', () => toast.remove());
        }, this.config.duration);
    }
}

window.ToastNotify = ToastNotify; 