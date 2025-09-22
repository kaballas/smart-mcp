export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const LEVELS: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
};

const configuredLevel = (process.env.LOG_LEVEL || (process.env.DEBUG ? 'debug' : 'info')) as LogLevel;

function timestamp() {
  return new Date().toISOString();
}

function shouldLog(level: LogLevel) {
  return LEVELS[level] >= LEVELS[configuredLevel];
}

function maskToken(value?: string) {
  if (!value) return '';
  if (value.length <= 8) return '********';
  return value.slice(0, 4) + '...' + value.slice(-4);
}

function format(moduleName: string | undefined, level: LogLevel, msg: string, meta?: any) {
  const parts = [`[${timestamp()}]`, level.toUpperCase()];
  if (moduleName) parts.push(`[${moduleName}]`);
  parts.push(msg);
  if (meta) {
    try {
      // remove potentially sensitive fields
      const safeMeta = { ...meta };
      if (typeof safeMeta === 'object') {
        if ('accessToken' in safeMeta) safeMeta.accessToken = maskToken(String((safeMeta as any).accessToken));
        if (safeMeta.headers && typeof safeMeta.headers === 'object') {
          if ('Authorization' in safeMeta.headers) safeMeta.headers.Authorization = 'Bearer ' + maskToken(String(safeMeta.headers.Authorization || ''));
        }
      }
      parts.push(JSON.stringify(safeMeta));
    } catch (e) {
      parts.push(String(meta));
    }
  }
  return parts.join(' ');
}

export const logger = {
  debug(moduleName: string | undefined, msg: string, meta?: any) {
    if (!shouldLog('debug')) return;
    console.debug(format(moduleName, 'debug', msg, meta));
  },
  info(moduleName: string | undefined, msg: string, meta?: any) {
    if (!shouldLog('info')) return;
    console.info(format(moduleName, 'info', msg, meta));
  },
  warn(moduleName: string | undefined, msg: string, meta?: any) {
    if (!shouldLog('warn')) return;
    console.warn(format(moduleName, 'warn', msg, meta));
  },
  error(moduleName: string | undefined, msg: string, meta?: any) {
    if (!shouldLog('error')) return;
    console.error(format(moduleName, 'error', msg, meta));
  }
};

export default logger;
