export class Timer {
    private timerText: HTMLDivElement;
    private interval: number | null;
    private seconds: number;
    private minutes: number;
    private static INITIAL_TIME_SECONDS : number = 30 // TODO replace by user input
    
    public onTimerEnd: Array<() => void>

    constructor(elementId: string) {
        this.timerText = document.getElementById(elementId) as HTMLDivElement;
        this.interval = null;
        this.seconds = 0;
        this.minutes = 0;
        this.onTimerEnd = []
    }

    public start(): void {
        this.seconds = Timer.INITIAL_TIME_SECONDS % 60;
        this.minutes = Math.floor(Timer.INITIAL_TIME_SECONDS / 60 );
        this.resume()
    }

    public resume(): void {
        if (this.seconds > 0 || this.minutes > 0) {
            if (!this.interval) {
                this.updateDisplay();
                this.interval = window.setInterval(() => {
                    this.updateTimer();
                }, 1000);
            }
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
        this.updateDisplay();
    }

    public isRunning(): boolean {
        return this.interval !== null
    }

    private updateTimer(): void {
        --this.seconds;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        }
        this.updateDisplay();
        
        // End timer event
        if ( this.seconds <= 0) {
            this.stop()

            for (var timerEndMethod of this.onTimerEnd) {
                timerEndMethod()
            }
        }
    }

    private updateDisplay(): void {
        const minutes = this.minutes.toString().padStart(2, '0');
        const seconds = this.seconds.toString().padStart(2, '0');
        this.timerText.textContent = `${minutes}:${seconds}`;
    }
}
