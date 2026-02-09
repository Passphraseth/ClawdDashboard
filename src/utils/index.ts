import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwindcss-merge';
import { FileCategory, FileInfo } from '@/types';

// Tailwind CSS class utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// File categorization utility
export function categorizeFile(filename: string): FileCategory {
  const name = filename.toLowerCase();
  
  if (name.includes('agent') || name.includes('soul') || name.includes('identity') || name.includes('tools')) {
    return 'agent-config';
  }
  
  if (name.includes('memory') || name.includes('heartbeat')) {
    return 'memory';
  }
  
  if (name.includes('strategy') || name.includes('roadmap') || name.includes('framework')) {
    return 'strategy';
  }
  
  if (name.includes('execution') || name.includes('tracking') || name.includes('coordination')) {
    return 'execution';
  }
  
  if (name.includes('marketing') || name.includes('campaign') || name.includes('content') || name.includes('plg')) {
    return 'marketing';
  }
  
  if (name.includes('analytics') || name.includes('metrics') || name.includes('dashboard') || name.includes('report')) {
    return 'analytics';
  }
  
  if (name.includes('readme') || name.includes('doc') || name.includes('guide')) {
    return 'documentation';
  }
  
  return 'other';
}

// File system utilities
export function getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() || '';
}

export function isMarkdownFile(filename: string): boolean {
  const ext = getFileExtension(filename);
  return ext === 'md' || ext === 'markdown';
}

export function isImageFile(filename: string): boolean {
  const ext = getFileExtension(filename);
  return ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext);
}

export function isCodeFile(filename: string): boolean {
  const ext = getFileExtension(filename);
  return ['js', 'jsx', 'ts', 'tsx', 'py', 'java', 'cpp', 'c', 'go', 'rs'].includes(ext);
}

// File size formatting
export function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(unitIndex > 0 ? 1 : 0)} ${units[unitIndex]}`;
}

// Date formatting utilities
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return 'just now';
}

// String utilities
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function camelToTitle(text: string): string {
  return text
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase());
}

// Validation utilities
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Color utilities for status indicators
export function getStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    online: 'text-green-500',
    connected: 'text-green-500',
    active: 'text-green-500',
    completed: 'text-green-500',
    
    offline: 'text-red-500',
    disconnected: 'text-red-500',
    error: 'text-red-500',
    failed: 'text-red-500',
    rejected: 'text-red-500',
    
    pending: 'text-yellow-500',
    processing: 'text-yellow-500',
    running: 'text-yellow-500',
    
    paused: 'text-gray-500',
    draft: 'text-gray-500',
  };
  
  return statusColors[status.toLowerCase()] || 'text-gray-500';
}

export function getStatusBgColor(status: string): string {
  const statusColors: Record<string, string> = {
    online: 'bg-green-500',
    connected: 'bg-green-500',
    active: 'bg-green-500',
    completed: 'bg-green-500',
    
    offline: 'bg-red-500',
    disconnected: 'bg-red-500',
    error: 'bg-red-500',
    failed: 'bg-red-500',
    rejected: 'bg-red-500',
    
    pending: 'bg-yellow-500',
    processing: 'bg-yellow-500',
    running: 'bg-yellow-500',
    
    paused: 'bg-gray-500',
    draft: 'bg-gray-500',
  };
  
  return statusColors[status.toLowerCase()] || 'bg-gray-500';
}

// Number formatting utilities
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function formatPercentage(num: number, decimals: number = 1): string {
  return `${num.toFixed(decimals)}%`;
}

export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

// Array utilities
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const group = String(item[key]);
    groups[group] = groups[group] || [];
    groups[group].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}

export function sortBy<T>(array: T[], key: keyof T, direction: 'asc' | 'desc' = 'asc'): T[] {
  return [...array].sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];
    
    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });
}

// Local storage utilities with type safety
export function getStoredValue<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function setStoredValue<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Silently fail
  }
}

// API utilities
export function handleApiError(error: any): string {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  if (error?.message) {
    return error.message;
  }
  return 'An unexpected error occurred';
}

export function createApiUrl(endpoint: string, params?: Record<string, any>): string {
  const url = new URL(endpoint, window.location.origin);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }
  
  return url.toString();
}

// Debounce utility
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle utility
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}