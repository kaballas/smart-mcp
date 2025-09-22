Configured MCP servers:

  🟢 smartsheet - Ready (33 tools)
    Tools:
    - add_rows:
        Adds new rows to a sheet
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "The ID of the sheet"
            },
            "rows": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "toTop": {
                    "type": "boolean",
                    "description": "Add row to the top of the sheet"
                  },
                  "toBottom": {
                    "type": "boolean",
                    "description": "Add row to the bottom of the sheet"
                  },
                  "cells": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "columnId": {
                          "type": [
                            "number",
                            "string"
                          ],
                          "description": "Column ID"
                        },
                        "value": {
                          "description": "Cell value"
                        },
                        "formula": {
                          "type": "string",
                          "description": "Cell formula"
                        },
                        "format": {
                          "type": "string",
                          "description": "Cell format"
                        }
                      },
                      "required": [
                        "columnId"
                      ],
                      "additionalProperties": false
                    },
                    "description": "Array of cell objects"
                  }
                },
                "required": [
                  "cells"
                ],
                "additionalProperties": false
              },
              "description": "Array of row objects to add"
            }
          },
          "required": [
            "sheetId",
            "rows"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - copy_sheet:
        Creates a copy of the specified sheet in the same folder
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "The ID of the sheet to copy"
            },
            "destinationName": {
              "type": "string",
              "description": "Name for the sheet copy"
            },
            "destinationFolderId": {
              "type": "string",
              "description": "ID of the destination folder (same as source if not specified)"
            }
          },
          "required": [
            "sheetId",
            "destinationName"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - create_folder:
        Creates a new folder in a folder
      Parameters:
        {
          "type": "object",
          "properties": {
            "folderId": {
              "type": "string",
              "description": "The ID of the folder to create the folder in"
            },
            "folderName": {
              "type": "string",
              "description": "The name of the new folder"
            }
          },
          "required": [
            "folderId",
            "folderName"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - create_row_discussion:
        Creates a new discussion on a row
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "ID of the sheet to create a discussion for"
            },
            "rowId": {
              "type": "string",
              "description": "ID of the row to create a discussion for"
            },
            "commentText": {
              "type": "string",
              "description": "Text of the comment to add"
            }
          },
          "required": [
            "sheetId",
            "rowId",
            "commentText"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - create_sheet:
        Creates a new sheet
      Parameters:
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "Name for the new sheet"
            },
            "columns": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "title": {
                    "type": "string",
                    "description": "Column title"
                  },
                  "type": {
                    "type": "string",
                    "description": "Column type"
                  },
                  "primary": {
                    "type": "boolean",
                    "description": "Whether this is the primary column"
                  }
                },
                "required": [
                  "title",
                  "type"
                ],
                "additionalProperties": false
              },
              "description": "Array of column objects"
            },
            "folderId": {
              "type": "string",
              "description": "ID of the folder where the sheet should be created"
            }
          },
          "required": [
            "name",
            "columns"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - create_sheet_discussion:
        Creates a new discussion on a sheet
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "ID of the sheet to create a discussion for"
            },
            "commentText": {
              "type": "string",
              "description": "Text of the comment to add"
            }
          },
          "required": [
            "sheetId",
            "commentText"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - create_update_request:
        Creates an update request for a sheet
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "The ID of the sheet"
            },
            "rowIds": {
              "type": "array",
              "items": {
                "type": "number"
              },
              "description": "Array of row IDs to include in the update request"
            },
            "columnIds": {
              "type": "array",
              "items": {
                "type": "number"
              },
              "description": "Array of column IDs to include in the update request"
            },
            "includeAttachments": {
              "type": "boolean",
              "description": "Whether to include attachments in the update request"
            },
            "includeDiscussions": {
              "type": "boolean",
              "description": "Whether to include discussions in the update request"
            },
            "message": {
              "type": "string",
              "description": "Message to include in the update request email"
            },
            "subject": {
              "type": "string",
              "description": "Subject line for the update request email"
            },
            "ccMe": {
              "type": "boolean",
              "description": "Whether to CC the sender on the update request email"
            },
            "sendTo": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "email": {
                    "type": "string",
                    "description": "Email address of the recipient"
                  }
                },
                "required": [
                  "email"
                ],
                "additionalProperties": false
              },
              "description": "Array of recipients for the update request"
            }
          },
          "required": [
            "sheetId",
            "sendTo"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - create_workspace:
        Creates a new workspace
      Parameters:
        {
          "type": "object",
          "properties": {
            "workspaceName": {
              "type": "string",
              "description": "The name of the new workspace"
            }
          },
          "required": [
            "workspaceName"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - create_workspace_folder:
        Creates a new folder in a workspace
      Parameters:
        {
          "type": "object",
          "properties": {
            "workspaceId": {
              "type": "string",
              "description": "The ID of the workspace to create the folder in"
            },
            "folderName": {
              "type": "string",
              "description": "The name of the new folder"
            }
          },
          "required": [
            "workspaceId",
            "folderName"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - get_cell_history:
        Retrieves the history of changes for a specific cell
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "The ID of the sheet"
            },
            "rowId": {
              "type": "string",
              "description": "The ID of the row"
            },
            "columnId": {
              "type": "string",
              "description": "The ID of the column"
            },
            "include": {
              "type": "string",
              "description": "Optional parameter to include additional information"
            },
            "pageSize": {
              "type": "number",
              "description": "Number of history entries to return per page"
            },
            "page": {
              "type": "number",
              "description": "Page number to return"
            }
          },
          "required": [
            "sheetId",
            "rowId",
            "columnId"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - get_current_user:
        Gets the current user's information
      Parameters:
        {
          "type": "object"
        }
    - get_discussions_by_row_id:
        Gets discussions by row ID
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "ID of the sheet to get discussions for"
            },
            "rowId": {
              "type": "string",
              "description": "ID of the row to get discussions for"
            },
            "include": {
              "type": "string",
              "description": "Optional parameter to include additional information (e.g., 'attachments')"
            },
            "pageSize": {
              "type": "number",
              "description": "Number of discussions to return per page"
            },
            "page": {
              "type": "number",
              "description": "Page number to return"
            },
            "includeAll": {
              "type": "boolean",
              "description": "Whether to include all results"
            }
          },
          "required": [
            "sheetId",
            "rowId"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - get_discussions_by_sheet_id:
        Gets discussions by sheet ID
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "The ID of the sheet"
            },
            "include": {
              "type": "string",
              "description": "Optional parameter to include additional information (e.g., 'attachments')"
            },
            "pageSize": {
              "type": "number",
              "description": "Number of discussions to return per page"
            },
            "page": {
              "type": "number",
              "description": "Page number to return"
            },
            "includeAll": {
              "type": "boolean",
              "description": "Whether to include all results"
            }
          },
          "required": [
            "sheetId"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - get_folder:
        Retrieves the current state of a folder, including its contents which can be sheets, reports, or other folders
      Parameters:
        {
          "type": "object",
          "properties": {
            "folderId": {
              "type": "string",
              "description": "The ID of the folder to retrieve"
            }
          },
          "required": [
            "folderId"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - get_row:
        Retrieves a specific row from a sheet
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "The ID of the sheet"
            },
            "rowId": {
              "type": "string",
              "description": "The ID of the row"
            },
            "include": {
              "type": "string",
              "description": "Comma-separated list of elements to include (e.g., 'format,formulas')"
            }
          },
          "required": [
            "sheetId",
            "rowId"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - get_sheet:
        Retrieves the current state of a sheet, including rows, columns, and cells
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "The ID of the sheet to retrieve"
            },
            "include": {
              "type": "string",
              "description": "Comma-separated list of elements to include (e.g., 'format,formulas')"
            },
            "pageSize": {
              "type": "number",
              "description": "Number of rows to return per page"
            },
            "page": {
              "type": "number",
              "description": "Page number to return"
            }
          },
          "required": [
            "sheetId"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - get_sheet_by_url:
        Retrieves the current state of a sheet, including rows, columns, and cells
      Parameters:
        {
          "type": "object",
          "properties": {
            "url": {
              "type": "string",
              "description": "The URL of the sheet to retrieve"
            },
            "include": {
              "type": "string",
              "description": "Comma-separated list of elements to include (e.g., 'format,formulas')"
            },
            "pageSize": {
              "type": "number",
              "description": "Number of rows to return per page"
            },
            "page": {
              "type": "number",
              "description": "Page number to return"
            }
          },
          "required": [
            "url"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - get_sheet_location:
        Gets the folder ID where a sheet is located
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "The ID of the sheet"
            }
          },
          "required": [
            "sheetId"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - get_sheet_version:
        Gets the current version number of a sheet
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "The ID of the sheet"
            }
          },
          "required": [
            "sheetId"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - get_user:
        Gets a user's information by ID
      Parameters:
        {
          "type": "object",
          "properties": {
            "userId": {
              "type": "string",
              "description": "ID of the user to get"
            }
          },
          "required": [
            "userId"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - get_workspace:
        Retrieves the current state of a Workspace, including its contents which can be sheets, reports, or other folders
      Parameters:
        {
          "type": "object",
          "properties": {
            "workspaceId": {
              "type": "string",
              "description": "The ID of the workspace to retrieve"
            }
          },
          "required": [
            "workspaceId"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - get_workspaces:
        Retrieves my Workspaces
      Parameters:
        {
          "type": "object",
          "properties": {},
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - list_users:
        Lists all users
      Parameters:
        {
          "type": "object"
        }
    - search_dashboards:
        Search for dashboards by name
      Parameters:
        {
          "type": "object",
          "properties": {
            "query": {
              "type": "string",
              "description": "Text to search for in dashboard names"
            }
          },
          "required": [
            "query"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - search_folders:
        Search for folders by name
      Parameters:
        {
          "type": "object",
          "properties": {
            "query": {
              "type": "string",
              "description": "Text to search for in folder names"
            }
          },
          "required": [
            "query"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - search_in_sheet:
        Search cell data and summary fields for a specific sheet
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "The ID of the sheet to retrieve"
            },
            "query": {
              "type": "string",
              "description": "Text to search for in sheet names, cell data, or summary fields"
            }
          },
          "required": [
            "sheetId",
            "query"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - search_in_sheet_by_url:
        Search cell data and summary fields for a specific sheet by URL
      Parameters:
        {
          "type": "object",
          "properties": {
            "url": {
              "type": "string",
              "description": "The URL of the sheet to retrieve"
            },
            "query": {
              "type": "string",
              "description": "Text to search for in sheet names, cell data, or summary fields"
            }
          },
          "required": [
            "url",
            "query"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - search_reports:
        Search for reports by name
      Parameters:
        {
          "type": "object",
          "properties": {
            "query": {
              "type": "string",
              "description": "Text to search for in report names"
            }
          },
          "required": [
            "query"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - search_sheets:
        Search for sheets by name, cell data, or summary fields
      Parameters:
        {
          "type": "object",
          "properties": {
            "query": {
              "type": "string",
              "description": "Text to search for in sheet names, cell data, or summary fields"
            }
          },
          "required": [
            "query"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - search_workspaces:
        Search for workspaces by name
      Parameters:
        {
          "type": "object",
          "properties": {
            "query": {
              "type": "string",
              "description": "Text to search for in workspace names"
            }
          },
          "required": [
            "query"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - update_rows:
        Updates rows in a sheet, including cell values, formatting, and formulae
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "The ID of the sheet"
            },
            "rows": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "description": "Row ID"
                  },
                  "cells": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "columnId": {
                          "type": [
                            "number",
                            "string"
                          ],
                          "description": "Column ID"
                        },
                        "value": {
                          "description": "Cell value"
                        },
                        "formula": {
                          "type": "string",
                          "description": "Cell formula"
                        },
                        "format": {
                          "type": "string",
                          "description": "Cell format"
                        }
                      },
                      "required": [
                        "columnId"
                      ],
                      "additionalProperties": false
                    },
                    "description": "Array of cell objects"
                  }
                },
                "required": [
                  "id",
                  "cells"
                ],
                "additionalProperties": false
              },
              "description": "Array of row objects to update"
            }
          },
          "required": [
            "sheetId",
            "rows"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - what_am_i_assigned_to_by_sheet_id:
        Search a sheet by ID to find assigned tasks
      Parameters:
        {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "string",
              "description": "The ID of the sheet to retrieve"
            }
          },
          "required": [
            "sheetId"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
    - what_am_i_assigned_to_by_sheet_url:
        Search a sheet by URL to find assigned tasks
      Parameters:
        {
          "type": "object",
          "properties": {
            "url": {
              "type": "string",
              "description": "The URL of the sheet to retrieve"
            }
          },
          "required": [
            "url"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }