import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 60 * 1000,
    expect: {
        timeout: 10000
    },
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 1,
    workers: 1,
    reporter: [['html'], ['list']],
    use: {
        baseURL: 'http://app:3000',
        trace: 'on',
        screenshot: 'on',
        video: 'on-first-retry',
        actionTimeout: 15000,
        navigationTimeout: 30000
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                viewport: { width: 1280, height: 720 },
                launchOptions: {
                    args: ['--no-sandbox', '--disable-setuid-sandbox']
                }
            }
        }
    ]
});
