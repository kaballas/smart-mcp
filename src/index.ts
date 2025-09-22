#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { SmartsheetAPI } from "./apis/smartsheet-api.js";
import { config } from "dotenv";
import { logger } from './logger.js';
import { getDiscussionTools } from "./tools/smartsheet-discussion-tools.js";
import { getFolderTools } from "./tools/smartsheet-folder-tools.js";
import { getSearchTools } from "./tools/smartsheet-search-tools.js";
import { getSheetTools } from "./tools/smartsheet-sheet-tools.js";
import { getUpdateRequestTools } from "./tools/smartsheet-update-request-tools.js";
import { getUserTools } from "./tools/smartsheet-user-tools.js";
import { getWorkspaceTools } from "./tools/smartsheet-workspace-tools.js";
import { testToolRegistration } from "./tools/test-sheet-tools.js";

// Load environment variables
config();

// Control whether deletion operations are enabled
const allowDeleteTools = process.env.ALLOW_DELETE_TOOLS === 'true';
logger.info('index', `Delete operations are ${allowDeleteTools ? 'enabled' : 'disabled'}`);

// Log safe environment info for debugging
logger.debug('index', 'Environment', {
  SMARTSHEET_ENDPOINT: process.env.SMARTSHEET_ENDPOINT || null,
  SMARTSHEET_API_KEY: process.env.SMARTSHEET_API_KEY ? '***masked***' : null,
  ALLOW_DELETE_TOOLS: process.env.ALLOW_DELETE_TOOLS || null,
  LOG_LEVEL: process.env.LOG_LEVEL || null,
});
  
// Initialize the MCP server
const server = new McpServer({
  name: "smartsheet",
  version: "1.0.0",
});

// Initialize the direct API client
const api = new SmartsheetAPI(process.env.SMARTSHEET_API_KEY, process.env.SMARTSHEET_ENDPOINT);

// Tool: Discussion tools
getDiscussionTools(server, api);

// Tool: Folder tools
getFolderTools(server, api);

// Tool: Search tools
getSearchTools(server, api);

// Tool: Sheet tools
logger.info('index', 'Loading sheet tools...');
getSheetTools(server, api, allowDeleteTools);
logger.info('index', 'Sheet tools loaded');

// Tool: Update Request tools
getUpdateRequestTools(server, api);

// Tool: User tools
getUserTools(server, api);

// Tool: Workspace tools
getWorkspaceTools(server, api); 

// Test tool registration
const registrationSuccess = testToolRegistration(server);
logger.info('index', `Test tool registration: ${registrationSuccess ? 'SUCCESS' : 'FAILED'}`);

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  logger.info('index', 'Smartsheet MCP Server running on stdio');
}

main().catch((error) => {
  logger.error('index', 'Fatal error in main()', { error });
  process.exit(1);
});