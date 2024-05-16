# Newman Reporter JSON Extra Light

The "newman-reporter-json-extralight" customizes Newman's reporting, providing a concise JSON summary of essential run data, omitting unnecessary details like stream-related information and test assertion scripts. It significantly reduces JSON size from 450MB to 6MB, enhancing performance and readability.

## Features:
- **Concise Reporting**: Focuses on key run data, improving readability.
- **Reduced JSON Size**: Significantly reduces JSON file size for improved efficiency.
- **Performance Enhancement**: Streamlined reporting enhances performance during data processing.
- **Easy Integration**: Easily installable via npm, seamlessly integrates into Newman workflows.

## How to Use:
1. Install the custom reporter via npm:
   ```bash
   npm install -g newman-reporter-json-extralight
   ```
2. Specify the reporter when running Newman:
   ```bash
   newman run <collection-file> --reporters json-extralight
   ```

Schema followed by the reporter:

```json
{
  "type": "object",
  "properties": {
    "stats": {
      "type": "object",
      "properties": {
        "iterations": {
          "type": "object",
          "properties": {
            "total": { "type": "integer" },
            "pending": { "type": "integer" },
            "failed": { "type": "integer" }
          }
        },
        "items": {
          "type": "object",
          "properties": {
            "total": { "type": "integer" },
            "pending": { "type": "integer" },
            "failed": { "type": "integer" }
          }
        },
        "scripts": {
          "type": "object",
          "properties": {
            "total": { "type": "integer" },
            "pending": { "type": "integer" },
            "failed": { "type": "integer" }
          }
        },
        "prerequests": {
          "type": "object",
          "properties": {
            "total": { "type": "integer" },
            "pending": { "type": "integer" },
            "failed": { "type": "integer" }
          }
        },
        "requests": {
          "type": "object",
          "properties": {
            "total": { "type": "integer" },
            "pending": { "type": "integer" },
            "failed": { "type": "integer" }
          }
        },
        "tests": {
          "type": "object",
          "properties": {
            "total": { "type": "integer" },
            "pending": { "type": "integer" },
            "failed": { "type": "integer" }
          }
        },
        "assertions": {
          "type": "object",
          "properties": {
            "total": { "type": "integer" },
            "pending": { "type": "integer" },
            "failed": { "type": "integer" }
          }
        },
        "testScripts": {
          "type": "object",
          "properties": {
            "total": { "type": "integer" },
            "pending": { "type": "integer" },
            "failed": { "type": "integer" }
          }
        },
        "prerequestScripts": {
          "type": "object",
          "properties": {
            "total": { "type": "integer" },
            "pending": { "type": "integer" },
            "failed": { "type": "integer" }
          }
        }
      }
    },
    "timings": {
      "type": "object",
      "properties": {
        "responseAverage": { "type": "number" },
        "responseMin": { "type": "number" },
        "responseMax": { "type": "number" },
        "responseSd": { "type": "number" },
        "dnsAverage": { "type": "number" },
        "dnsMin": { "type": "number" },
        "dnsMax": { "type": "number" },
        "dnsSd": { "type": "number" },
        "firstByteAverage": { "type": "number" },
        "firstByteMin": { "type": "number" },
        "firstByteMax": { "type": "number" },
        "firstByteSd": { "type": "number" },
        "started": { "type": "number" },
        "completed": { "type": "number" }
      }
    },
    "executions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "cursor": {
            "type": "object",
            "properties": {
              "position": { "type": "integer" },
              "iteration": { "type": "integer" },
              "length": { "type": "integer" },
              "cycles": { "type": "integer" },
              "empty": { "type": "boolean" },
              "eof": { "type": "boolean" },
              "bof": { "type": "boolean" },
              "cr": { "type": "boolean" },
              "ref": { "type": "string" },
              "httpRequestId": { "type": "string" }
            }
          },
          "item": {
            "type": "object",
            "properties": {
              "id": { "type": "string" },
              "name": { "type": "string" },
              "request": { "type": "object" },
              "response": { "type": "array" },
              "event": { "type": "array" },
              "protocolProfileBehavior": { "type": "object" }
            }
          },
          "request": { "type": "object" },
          "response": { "type": "object" },
          "id": { "type": "string" },
          "assertions": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "assertion": { "type": "string" },
                "skipped": { "type": "boolean" },
                "error": {
                  "type": "object",
                  "properties": {
                    "name": { "type": "string" },
                    "index": { "type": "integer" },
                    "test": { "type": "string" },
                    "message": { "type": "string" },
                    "stack": { "type": "string" }
                  }
                }
              }
            }
          }
        }
      }
    },
    "transfers": {
      "type": "object",
      "properties": {
        "responseTotal": { "type": "integer" }
      }
    },
    "failures": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "error": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "index": { "type": "integer" },
              "test": { "type": "string" },
              "message": { "type": "string" },
              "stack": { "type": "string" },
              "checksum": { "type": "string" },
              "id": { "type": "string" },
              "timestamp": { "type": "integer" },
              "stacktrace": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "fileName": { "type": "string" },
                    "lineNumber": { "type": "integer" },
                    "functionName": { "type": "string" },
                    "typeName": { "type": "string" },
                    "methodName": { "type": "string" },
                    "columnNumber": { "type": "integer" },
                    "native": { "type": "boolean" }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

## License:
This project is licensed under the MIT License