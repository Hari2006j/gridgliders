
// ThingSpeak Credentials
export const THINGSPEAK_CHANNEL_ID = '3073745';
export const THINGSPEAK_READ_API_KEY = '9MGGSIKUD4MCAJE3';

// Alert Thresholds
export const DUST_INDEX_THRESHOLD = 30;
export const TEMPERATURE_THRESHOLD = 60;
export const SOC_THRESHOLD = 20;

// Data staleness threshold in milliseconds
export const NODE_OFFLINE_THRESHOLD = 2 * 60 * 1000; // 2 minutes

// Default user credentials
export const DEFAULT_USERNAME = 'USER_1';
export const DEFAULT_PASSWORD = '12345678';

// Monthly efficiency data for the graph
export const INITIAL_EFFICIENCY_DATA = [
    { month: 'Jan', before: 320, after: null },
    { month: 'Feb', before: 350, after: 402 },
    { month: 'Mar', before: 380, after: null },
    { month: 'Apr', before: 410, after: 471 },
    { month: 'May', before: 450, after: null },
    { month: 'Jun', before: 430, after: null },
    { month: 'Jul', before: 440, after: 495 },
    { month: 'Aug', before: 460, after: null },
    { month: 'Sep', before: 420, after: null },
    { month: 'Oct', before: 390, after: null },
    { month: 'Nov', before: 340, after: null },
    { month: 'Dec', before: 310, after: null },
];
