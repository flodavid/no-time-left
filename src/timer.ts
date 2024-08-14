class Timer {
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


let startButton: HTMLButtonElement, pauseButton: HTMLButtonElement, playButton: HTMLButtonElement, resetButton: HTMLButtonElement
const timer = new Timer('timer');

export function setupStartTimer (button: HTMLButtonElement) {
    console.log('start timer setup')
    startButton = button
  
    const start = () => {
      console.log('Starting timer')
      timer.start()
    
      startButton.disabled = true
      pauseButton.disabled = false
      resetButton.disabled = false
    }
    button.addEventListener('click', () => start())
}

export function setupPauseTimer (button: HTMLButtonElement) {
    console.log('stop timer setup')
    pauseButton = button

    const pause = () => {
      console.log('Stopping timer')
      timer.stop()
    
      pauseButton.style.display = 'none'
      playButton.style.display = 'inline'
    }
    button.addEventListener('click', () => pause())
}

export function setupPlayTimer (button: HTMLButtonElement) {
    console.log('stop timer setup')
    playButton = button

    const play= () => {
      console.log('Stopping timer')
      timer.start()
    
      pauseButton.style.display = 'inline'
      playButton.style.display = 'none'
    }
    button.addEventListener('click', () => play())
}

export function setupResetTimer (button: HTMLButtonElement) {
    console.log('reset timer setup')
    resetButton = button

    const reset = () => {
        console.log('Resetting timer')
        timer.reset();
      
        startButton.disabled = false
        pauseButton.disabled = true
        pauseButton.style.display = 'inline'
        playButton.style.display = 'none'
        resetButton.disabled = true
      }
      button.addEventListener('click', () => reset())
}
