import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SmartsheetAPI } from "../apis/smartsheet-api.js";
import { z } from "zod";
import { logger } from '../logger.js';

// Simple test function to verify tool registration
export function testToolRegistration(server: McpServer) {
    logger.info("test-sheet-tools", "Testing tool registration...");
    
    try {
        // Register a simple test tool
        server.tool(
            "registration_test",
            "Simple tool to test registration",
            {
                message: z.string().optional().describe("Optional test message"),
            },
            async ({ message }) => {
                return {
                    content: [
                        {
                            type: "text",
                            text: `Registration test successful! Message: ${message || 'No message provided'}`
                        }
                    ]
                };
            }
        );
        logger.info("test-sheet-tools", "Registration test tool registered successfully");
        return true;
    } catch (error) {
        logger.error("test-sheet-tools", "Failed to register test tool", error);
        return false;
    }
}