export class Timer {
    private element: HTMLElement;
    private interval: number | null;
    private seconds: number;
    private minutes: number;
    private hours: number;

    constructor(elementId: string) {
        this.element = document.getElementById(elementId) as HTMLElement;
        this.interval = null;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }

    public start(): void {
        if (!this.interval) {
            this.interval = window.setInterval(() => {
                this.updateTimer();
            }, 1000);
        }
    }

    public stop(): void {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    public reset(): void {
        this.stop();
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.updateDisplay();
    }

    private updateTimer(): void {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours++;
            }
        }
        this.updateDisplay();
    }

    private updateDisplay(): void {
        const hours = this.hours.toString().padStart(2, '0');
        const minutes = this.minutes.toString().padStart(2, '0');
        const seconds = this.seconds.toString().padStart(2, '0');
        this.element.textContent = `${hours}:${minutes}:${seconds}`;
    }
}
