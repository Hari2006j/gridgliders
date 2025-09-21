
export interface ThingSpeakFeed {
  created_at: string;
  entry_id: number;
  field1: string | null; // Voltage
  field2: string | null; // Current
  field3: string | null; // Power
  field4: string | null; // SOC
  field5: string | null; // Temperature
  field6: string | null; // DustIndex
  field7: string | null; // AlertFlag
  field8: string | null; // DeviceID
}

export interface LiveData {
  voltage: number;
  current: number;
  power: number;
  soc: number;
  temperature: number;
  dustIndex: number;
  alertFlag: number;
  deviceId: string;
  lastUpdate: Date;
}

export interface LogEntry {
  timestamp: Date;
  action: string;
  user: string;
}

export interface EfficiencyDataPoint {
  month: string;
  before: number;
  after: number | null;
}

export enum AppState {
  SPLASH,
  LOGIN,
  DASHBOARD,
}

export enum AlertStatus {
  SAFE = 'safe',
  WARNING = 'warning',
  CRITICAL = 'critical',
}
