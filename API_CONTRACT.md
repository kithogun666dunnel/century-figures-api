# Century Figures API – Response Contract

## Base URL

/api/v1

---

## Success Response Format

```json
{
  "status": "success",
  "data": {},
  "meta": {},
  "message": ""
}
```

### Rules:

- `status` is always present
- `data` present for successful responses
- `meta` used for pagination or additional info
- `message` optional but consistent

---

## Error Response Format

```json
{
  "status": "error",
  "message": ""
}
```

### Development Mode:

Includes stack trace.

### Production Mode:

Hides internal stack details.

---

## Pagination Meta Structure

```json
{
  "meta": {
    "page": 1,
    "limit": 5,
    "totalRecords": 20,
    "totalPages": 4
  }
}
```

---

## HTTP Status Usage

- 200 → Successful GET
- 201 → Resource Created (Location header included)
- 204 → No Content
- 400 → Bad Request (Validation errors)
- 404 → Resource Not Found
- 405 → Method Not Allowed
- 500 → Internal Server Error

---

## Error Handling Strategy

- All errors flow through centralized errorHandler
- Async errors wrapped using asyncHandler
- Custom AppError used for operational errors

```

```
