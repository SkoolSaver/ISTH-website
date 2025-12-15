# Services Module

Business logic layer for API interactions.

## Purpose

Services encapsulate business logic and use the API client to interact with backend endpoints. This provides a clean separation between UI components and API calls.

## Structure

Create service files for each feature/domain:

```
lib/services/
├── contact.ts      # Contact form service
├── events.ts       # Events service
├── user.ts         # User service
└── index.ts        # Exports
```

## Usage Example

```ts
// lib/services/contact.ts
import { apiClient } from '@/lib/api'
import type { ApiResponse } from '@/lib/api'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export const contactService = {
  async submitForm(data: ContactFormData): Promise<ApiResponse<void>> {
    return apiClient.post('/api/contact', data)
  },
}

// In a component
import { contactService } from '@/lib/services'

const handleSubmit = async (formData: ContactFormData) => {
  const result = await contactService.submitForm(formData)
  if (result.success) {
    // Handle success
  }
}
```
