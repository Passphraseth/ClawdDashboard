// Core System Types
export interface DashboardConfig {
  workspace: {
    path: string;
    watchEnabled: boolean;
    autoSave: boolean;
    backupEnabled: boolean;
  };
  auth: {
    enabled: boolean;
    providers: string[];
    adminUsers: string[];
  };
  features: {
    agentWorkspace: boolean;
    fileSystem: boolean;
    serverIntegration: boolean;
    marketingTools: boolean;
    adaptiveUI: boolean;
  };
}

// File System Types
export interface FileInfo {
  path: string;
  name: string;
  type: 'file' | 'directory';
  size: number;
  modified: Date;
  category: FileCategory;
  content?: string;
  metadata?: FileMetadata;
  status: 'saved' | 'modified' | 'syncing' | 'error';
}

export type FileCategory = 
  | 'agent-config'
  | 'memory'
  | 'strategy'
  | 'execution'
  | 'marketing'
  | 'analytics'
  | 'documentation'
  | 'other';

export interface FileMetadata {
  author?: string;
  lastEditor?: string;
  approvalRequired?: boolean;
  approver?: string;
  approvalStatus?: 'pending' | 'approved' | 'rejected';
  riskLevel?: 'low' | 'medium' | 'high';
  tags?: string[];
  linkedFiles?: string[];
}

// Agent Workspace Types
export interface AgentSession {
  id: string;
  status: 'active' | 'paused' | 'completed' | 'error';
  startedAt: Date;
  lastActivity: Date;
  task?: string;
  context?: Record<string, any>;
  tools: AgentTool[];
  messages: AgentMessage[];
}

export interface AgentTool {
  name: string;
  description: string;
  parameters: Record<string, any>;
  lastUsed?: Date;
  usageCount: number;
}

export interface AgentMessage {
  id: string;
  type: 'human' | 'agent' | 'system';
  content: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

// Server Integration Types
export interface ServerConnection {
  id: string;
  name: string;
  host: string;
  port: number;
  status: 'connected' | 'disconnected' | 'error';
  lastPing?: Date;
  credentials?: {
    username: string;
    keyPath?: string;
  };
  metrics?: ServerMetrics;
}

export interface ServerMetrics {
  cpu: number;
  memory: {
    used: number;
    total: number;
    percentage: number;
  };
  disk: {
    used: number;
    total: number;
    percentage: number;
  };
  uptime: number;
  timestamp: Date;
}

export interface CommandExecution {
  id: string;
  serverId: string;
  command: string;
  status: 'running' | 'completed' | 'failed';
  startTime: Date;
  endTime?: Date;
  output: string[];
  exitCode?: number;
}

// Team Management Types
export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: TeamRole;
  status: 'online' | 'offline' | 'away';
  avatar?: string;
  lastActivity?: Date;
  permissions: Permission[];
}

export type TeamRole = 'admin' | 'team-lead' | 'member' | 'viewer';

export interface Permission {
  resource: string;
  actions: ('read' | 'write' | 'delete' | 'approve')[];
}

// Marketing Integration Types
export interface MarketingCampaign {
  id: string;
  name: string;
  type: CampaignType;
  status: 'draft' | 'active' | 'paused' | 'completed';
  startDate: Date;
  endDate?: Date;
  budget?: number;
  metrics: CampaignMetrics;
  assets: MarketingAsset[];
}

export type CampaignType = 
  | 'content'
  | 'social'
  | 'email'
  | 'referral'
  | 'partnership'
  | 'plg';

export interface CampaignMetrics {
  impressions: number;
  clicks: number;
  conversions: number;
  cost: number;
  roi: number;
  timestamp: Date;
}

export interface MarketingAsset {
  id: string;
  type: 'image' | 'video' | 'document' | 'landing-page';
  name: string;
  url: string;
  status: 'draft' | 'approved' | 'published';
  createdAt: Date;
}

// PLG System Types
export interface PLGMetrics {
  signups: number;
  activations: number;
  retention: {
    day1: number;
    day7: number;
    day30: number;
  };
  viral: {
    coefficient: number;
    referrals: number;
  };
  revenue: {
    mrr: number;
    arr: number;
    ltv: number;
  };
}

export interface ABTest {
  id: string;
  name: string;
  status: 'draft' | 'running' | 'completed';
  variants: ABVariant[];
  startDate: Date;
  endDate?: Date;
  sampleSize: number;
  winner?: string;
  results?: ABTestResults;
}

export interface ABVariant {
  id: string;
  name: string;
  description: string;
  traffic: number; // percentage
  metrics: ABVariantMetrics;
}

export interface ABVariantMetrics {
  visitors: number;
  conversions: number;
  conversionRate: number;
  confidence: number;
}

export interface ABTestResults {
  winner: string;
  confidence: number;
  improvement: number;
  significance: boolean;
}

// Adaptive UI Types
export interface UserBehavior {
  userId: string;
  sessionId: string;
  actions: UserAction[];
  preferences: UserPreferences;
  patterns: UsagePattern[];
}

export interface UserAction {
  type: 'click' | 'scroll' | 'hover' | 'resize' | 'navigate';
  target: string;
  timestamp: Date;
  context?: Record<string, any>;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  layout: 'default' | 'compact' | 'wide';
  shortcuts: Record<string, string>;
  notifications: {
    email: boolean;
    push: boolean;
    telegram: boolean;
  };
}

export interface UsagePattern {
  pattern: string;
  frequency: number;
  lastOccurrence: Date;
  context: Record<string, any>;
}

export interface AdaptiveRule {
  id: string;
  name: string;
  condition: string;
  action: string;
  active: boolean;
  priority: number;
  learnedFrom: UserBehavior[];
  effectiveness: number;
}

// Analytics Types
export interface AnalyticsEvent {
  id: string;
  type: string;
  properties: Record<string, any>;
  userId?: string;
  sessionId: string;
  timestamp: Date;
}

export interface DashboardMetrics {
  users: {
    total: number;
    active: number;
    new: number;
  };
  sessions: {
    total: number;
    average: number;
    bounce: number;
  };
  features: {
    mostUsed: string[];
    leastUsed: string[];
    timeSpent: Record<string, number>;
  };
  performance: {
    loadTime: number;
    errorRate: number;
    uptime: number;
  };
}

// Notification Types
export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actions?: NotificationAction[];
}

export interface NotificationAction {
  label: string;
  action: string;
  style?: 'primary' | 'secondary' | 'destructive';
}

// WebSocket Types
export interface WebSocketMessage {
  type: string;
  data: any;
  timestamp: Date;
  sender?: string;
}

export interface WebSocketConnection {
  id: string;
  userId?: string;
  status: 'connected' | 'disconnected';
  lastPing: Date;
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: Date;
}

export interface PaginatedResponse<T> extends APIResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// Store Types (Zustand)
export interface DashboardStore {
  // UI State
  sidebarOpen: boolean;
  activePanel: string;
  theme: 'light' | 'dark';
  layout: 'default' | 'compact' | 'wide';
  
  // Data State
  files: FileInfo[];
  servers: ServerConnection[];
  team: TeamMember[];
  notifications: Notification[];
  
  // Agent State
  agentSessions: AgentSession[];
  activeSession?: string;
  
  // Marketing State
  campaigns: MarketingCampaign[];
  plgMetrics: PLGMetrics;
  abTests: ABTest[];
  
  // Actions
  setSidebarOpen: (open: boolean) => void;
  setActivePanel: (panel: string) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  addNotification: (notification: Notification) => void;
  removeNotification: (id: string) => void;
  updateFileContent: (path: string, content: string) => void;
  addServer: (server: ServerConnection) => void;
  updateServerMetrics: (id: string, metrics: ServerMetrics) => void;
}