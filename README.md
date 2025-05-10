# Hotel Booking App

This is a React + TypeScript application for a hotel booking form with real-time price calculation and booking summary.

## Bug Fixes

The following issues were fixed in this implementation:

1. **Incorrect Price Calculation:**
   - Fixed the extra fee from $20 to $80 per additional guest per night
   - Corrected the calculation to multiply the extra fee by the number of nights

2. **Layout Issues:**
   - Fixed the grid layout to display form and summary side-by-side on desktop
   - Added responsive design to stack components on mobile

3. **Styling Mistakes:**
   - Corrected the button styling with proper Tailwind classes (bg-blue-500)
   - Fixed typos in class names (e.g., "contianer" to "container", "grid-col-2" to "grid-cols-2")

4. **UI Text Alignment:**
   - Fixed the "Booking Summary" header centering (text-centre to text-center)

5. **Tests:**
   - Updated tests to verify correct price calculations

## Price Calculation Logic

The total price is calculated as follows:
- Base rate: $100 per night
- Additional guest fee: $80 per additional guest per night
- Formula: `nights * basePrice + (guests - 1) * extraFee * nights`

Example:
- 2 nights, 2 guests = 2 * $100 + (2-1) * $80 * 2 = $360

## Getting Started

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

2. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

3. Run tests:
   \`\`\`
   npm test
