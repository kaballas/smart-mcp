# Smartsheet Search Handover Guide

## How to Search for "Final Production Verification Tests - Pre-Go-Live"

This document provides instructions on how to search for the "Final Production Verification Tests - Pre-Go-Live" section in the Smartsheet.

### Prerequisites
- Access to Smartsheet
- Permissions to view the "Production Deployment Runsheet - Master (HSS)" sheet
- Sheet ID: 3252036837527428

### Method 1: Using Smartsheet Web Interface

1. **Navigate to Smartsheet**
   - Open your web browser and go to https://app.smartsheet.com
   - Log in with your credentials

2. **Open the Correct Sheet**
   - Locate and open the "Production Deployment Runsheet - Master (HSS)" sheet
   - If you have the direct link, you can navigate to it directly

3. **Use the Search Function**
   - Press `Ctrl + F` (Windows) or `Cmd + F` (Mac) to open the search bar
   - Type "Final Production Verification Tests - Pre-Go-Live"
   - Review the search results to find the relevant rows

### Method 2: Using Smartsheet API (For Developers)

If you need to programmatically search for this content, you can use the Smartsheet API:

1. **API Endpoint**
   ```
   POST /search/sheets/{sheetId}
   ```

2. **Request Body**
   ```json
   {
     "query": "Final Production Verification Tests - Pre-Go-Live"
   }
   ```

3. **Sheet ID**
   - Use sheet ID: 3252036837527428

4. **Expected Response**
   - The search will return multiple results as there are several tasks under this section
   - Each result will include the object ID, context data, and other metadata

### Smartsheet API Row Management

The Smartsheet API provides comprehensive row management capabilities:

- **Endpoint**: `/sheets/{sheetId}/rows`
- **Supported Methods**: 
  - GET (retrieve rows)
  - POST (add rows)
  - PUT (update rows)
  - DELETE (delete rows)

- **Operations**:
  - Individual row operations are fine for targeted changes
  - Bulk operations can be large but should be used with caution
  - update_rows (PUT) - Modify existing row data
  - add_rows (POST) - Add new rows to the sheet
  - delete_rows (DELETE) - Remove rows from the sheet

- **Use Cases**:
  - Updating task status
  - Adding new tasks
  - Modifying task details
  - Removing obsolete tasks

### Using Smartsheet MCP Server to Update Row Columns

You can use the Smartsheet MCP server to update specific columns in rows:

1. **update_rows Tool**:
   - Updates rows in a sheet, including cell values, formatting, and formulae
   - Requires sheetId and rows parameters
   - Each row object needs an ID and cells array with columnId and value

2. **Example Usage**:
   ```json
   {
     "sheetId": "3252036837527428",
     "rows": [
       {
         "id": "427637009616772",
         "cells": [
           {
             "columnId": 3334976264425348,
             "value": "In Progress"
           }
         ]
       }
     ]
   }
   ```

3. **Common Column Updates**:
   - Status column (columnId: 3334976264425348) - Update task status
   - % Complete column (columnId: 8401525845217156) - Update progress percentage
   - Comments column (columnId: 7838575891795844) - Add notes or comments
   - Assigned To column (columnId: 1083176450740100) - Update task assignment

4. **Updating the Penny Test Task Comments**:
   - Row ID: 427637009616772
   - Comments Column ID: 7838575891795844
   - To update the comments with what's needed for this task, you would use:
   ```json
   {
     "sheetId": "3252036837527428",
     "rows": [
       {
         "id": "427637009616772",
         "cells": [
           {
             "columnId": 7838575891795844,
             "value": "Prerequisites: 1. Data Replication - UKG - Validation (Row ID: 2752854971355012) - Currently marked as 'Not Required' with 100% completion. 2. Additional predecessor with ID 27 that also needs to be completed. Requirements: Personnel - Kellie Kerr and Rob Germann are assigned to this task. Nick Yau needs to set one individual to F1 pay group to enable this task. Task Requirements - Validate that a $5 off-cycle payment can be processed for an employee. Confirm that the payment file can be successfully sent to the bank. Verify that the actual payment is made. Timeline - Deadline: FRIDAY 3rd (October 3rd, 2025). Scheduled Start: October 3rd, 2025 at 18:40. Estimated Duration: 4 hours. Dependencies - Part of 'Final Production Verification Tests - Pre-Go-Live' section. Depends on successful completion of data replication validation tasks. Specific Actions Required - 1. Select an employee for the test (must be in F1 pay group as noted by Nick Yau). 2. Process a $5 off-cycle payment for this employee. 3. Generate and send the payment file to the bank. 4. Confirm the payment is successfully processed. 5. Document the results. This test is critical for validating the payment processing system before go-live."
           }
         ]
       }
     ]
   }
   ```

### Specific Tasks Under "Final Production Verification Tests - Pre-Go-Live"

There are 13 specific tasks that need to be completed:

1. Movement back from Higher Duties - For a person on Higher Duties at go-live, return them to their Substantive position early.

2. New Position Creation - Validate solution enables creation of new positions as required.

3. Leave Creation (Provisional) - Leave Solution Testing (including approval workflow). Validated using COVID Leave.

4. Reporting (Snowflake) - Review access to critical reports and where possible generate reports.

5. Claim Request creation - Employee requests a claim (e.g. Travel KM request). Request rejected by manager.

6. Create Concurrent employment and check the functionality is working as required.

7. Employee Termination - Validation of EC functionality plus integrations to UKG, ECP, AD, EDW, Reporting.

8. New Hire created - Validation of EC functionality plus integrations to UKG, ECP, AD, EDW, Reporting.

9. Pay Simulation - Validated PCC process, including timecard replication from UKG and time evaluation results.

10. Secondment out - Check the functionality is working as required to ensure employee moved to being an inactive employee.

11. Create a Higher Duties for an employee, validate the end is generated and data is correct for the duration including returning.

12. ESS Permissions - Employee without any direct reports logs in to SF EC and UKGD to check they can only view and edit information they are expecting.

13. Salary Packaging Load - Validate that the Salary Packaging program is generating the right outcome (requires creation of manual file to load then delete records).

14. MSS Permissions - Manager with direct reports logs in to SF EC and UKGD to check they can view information they are expecting to be able to for themselves and their team.

15. Penny Test ($5 offcycle payment to an employee) - Validate file can be sent to Bank and payment made - FRIDAY 3rd.

Note: Some of these tasks may be headers or duplicates. Verify each task to ensure it represents a unique action item.

### Penny Test - What's Needed to Make This Possible

**Task**: Penny Test ($5 offcycle payment to an employee) - Validate file can be sent to Bank and payment made - FRIDAY 3rd

#### Prerequisites
1. **Predecessor Task Completion**: 
   - Data Replication - UKG - Validation (Row ID: 2752854971355012) - Currently marked as "Not Required" with 100% completion
   - Additional predecessor with ID 27 that also needs to be completed

#### Requirements
- **Personnel**: 
  - Kellie Kerr and Rob Germann are assigned to this task
  - Nick Yau needs to set one individual to F1 pay group to enable this task

- **Task Requirements**:
  - Validate that a $5 off-cycle payment can be processed for an employee
  - Confirm that the payment file can be successfully sent to the bank
  - Verify that the actual payment is made

- **Timeline**:
  - Deadline: FRIDAY 3rd (October 3rd, 2025)
  - Scheduled Start: October 3rd, 2025 at 18:40
  - Estimated Duration: 4 hours

- **Dependencies**:
  - Part of "Final Production Verification Tests - Pre-Go-Live" section
  - Depends on successful completion of data replication validation tasks

- **Specific Actions Required**:
  1. Select an employee for the test (must be in F1 pay group as noted by Nick Yau)
  2. Process a $5 off-cycle payment for this employee
  3. Generate and send the payment file to the bank
  4. Confirm the payment is successfully processed
  5. Document the results

This test is critical for validating the payment processing system before go-live.

### Next Steps: Compiling a List of Tasks

Before starting work on these tasks, follow these steps to compile a complete task list:

1. **Review Each Task**
   - Examine each of the 13 tasks to understand the requirements
   - Identify any dependencies between tasks
   - Note any specific deadlines or time constraints

2. **Validate Task Uniqueness**
   - Check for duplicate or overlapping tasks
   - Consolidate similar tasks where appropriate
   - Remove any placeholder or header rows

3. **Assign Ownership**
   - Determine who is responsible for each task
   - Ensure each task has a clear owner
   - Document contact information for each owner

4. **Estimate Effort**
   - Determine the estimated time required for each task
   - Identify any resource requirements
   - Flag any tasks that may require external coordination

5. **Create a Master Task List**
   - Compile all validated tasks into a master list
   - Include task descriptions, owners, deadlines, and status tracking
   - Consider using a project management tool for tracking progress

6. **Identify Blocking Issues**
   - Note any tasks that cannot proceed due to external dependencies
   - Document any outstanding questions or clarifications needed
   - Escalate any critical blockers to project leadership

7. **Establish Reporting Mechanisms**
   - Set up regular check-ins to track progress
   - Define how task completion will be verified
   - Establish communication channels for status updates

### Common Issues and Troubleshooting

1. **No Results Found**
   - Double-check the spelling of the search term
   - Ensure you're searching in the correct sheet
   - Verify you have the necessary permissions

2. **Partial Results**
   - Try shortening the search term to just "Pre-Go-Live"
   - Check if your search is case-sensitive

3. **Access Issues**
   - Contact your Smartsheet administrator to verify your permissions
   - Ensure the sheet hasn't been moved or deleted

### Additional Notes

- This section contains critical verification tests that must be completed before any production go-live
- Each task under this section should be carefully reviewed and validated
- Some tasks have specific deadlines (e.g., Penny Test should be completed by FRIDAY 3rd)
- Ensure all tasks are completed and signed off before proceeding with the go-live process