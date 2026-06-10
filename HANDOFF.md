# Design Handoff — MLK-ITA

## 0. Approval Record

- **Homepage options shown:** 3 (Faithful, Improved, Bold)
- **Selected option:** B — Improved (Professional Blue/Gray)
- **Preview artifact file paths:**
  - `output/mlk-ita/designs/homepage-option-a.png`
  - `output/mlk-ita/designs/homepage-option-b.png`
  - `output/mlk-ita/designs/homepage-option-c.png`
- **Pencil project paths used:**
  - `output/mlk-ita/designs/homepage-directions.pen`
  - `output/mlk-ita/designs/design.pen`
- **Confirmation:** Homepage previews covered the full homepage section flow
- **Confirmation:** `design.pen` and `design.png` came from the approved Pencil direction
- **Locked constraints:**
  - Primary color: #1E3A5F (navy blue)
  - Accent color: #FF6B35 (orange)
  - Font: Inter
  - Tone: Formal
  - Layout: Professional, clean

## 1. Frontend Build Map

### Homepage Section Sequence
1. Header (Navigation + CTA)
2. Hero (Title + Subtitle + CTA + Image)
3. Features (3 cards: QR tracking, Full reports, Emergency calls)

### Standalone Pages
- `/about` — About page
- `/services` — Services page
- `/product` — Equipment/Products page
- `/contact` — Contact page

### Components
- Header (Logo, Nav, CTA Button)
- Footer (Links, Contact info)
- HeroSection (Title, Subtitle, CTA, Image)
- FeatureCard (Icon, Title, Description)
- ServiceCard (Service details)
- EquipmentCard (Equipment info + QR)
- ContactForm (Form fields)
- EmergencyButton (Prominent CTA)
- StatsBar (Statistics display)

### Dynamic CMS Pages
- Blog listing (if enabled)
- Blog detail (if enabled)
- CMS pages for each section

## 2. erxes CMS Field Map

### Homepage Sections
1. Hero section
2. Features section
3. Services preview

### Page Slugs
- `home` — Homepage
- `about` — About Us
- `services` — Services
- `product` — Equipment/Products
- `contact` — Contact

### Menu Structure
**Header:**
- Нүүр (/)
- Бидний тухай (/about)
- Үйлчилгээ (/services)
- Тоног төхөөрөмж (/product)
- Холбоо барих (/contact)

**Footer:**
- Нүүр (/)
- Бидний тухай (/about)
- Үйлчилгээ (/services)
- Холбоо барих (/contact)
- Нууцлалын бодлого (/privacy)

### Translation
- Primary language: Mongolian (mn)
- No additional languages required

## 3. Design System

### Colors
- **Primary:** #1E3A5F (navy blue)
- **Primary Light:** #2D5A8E
- **Accent:** #FF6B35 (orange)
- **Text Primary:** #1A1A2E
- **Text Secondary:** #4A5568
- **Background:** #FFFFFF
- **Background Light:** #F0F4F8
- **Card Background:** #F7FAFC
- **Border:** #E2E8F0

### Typography
- **Font Family:** Inter (Google Fonts)
- **Display:** Inter Bold
- **Body:** Inter Regular
- **Mono:** JetBrains Mono (for code/technical content)

### Spacing
- **Base unit:** 4px
- **Page padding:** 40px
- **Section padding:** 64px
- **Card padding:** 24px
- **Gap (small):** 8px
- **Gap (medium):** 16px
- **Gap (large):** 24px
- **Gap (xl):** 32px

### Border Radius
- **Small:** 4px
- **Medium:** 8px
- **Large:** 12px
- **XL:** 16px

### Shadows
- **Small:** 0 1px 2px rgba(0,0,0,0.05)
- **Medium:** 0 4px 6px rgba(0,0,0,0.1)
- **Large:** 0 10px 15px rgba(0,0,0,0.1)

## 4. Animation Rules

### Motion Level: 2 (Alive)
- Smooth transitions
- Subtle hover effects
- Page transitions
- Scroll-triggered animations

### Micro-interactions
- **Buttons:** Scale 1.02 on hover, 200ms
- **Cards:** Lift effect on hover, 250ms
- **Links:** Color transition, 150ms
- **Form inputs:** Border color on focus, 200ms

### Page Transitions
- Fade in on page load
- Smooth scroll between sections

## 5. Interaction Rules

### Hover States
- Buttons: Scale up, shadow increase
- Cards: Lift up, shadow increase
- Links: Color change, underline

### Focus States
- Form inputs: Border color change, ring effect
- Buttons: Ring outline

### Active States
- Buttons: Scale down slightly
- Cards: Depress slightly

## 6. Responsive Behavior

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Mobile Adaptations
- Stack navigation into hamburger menu
- Stack feature cards vertically
- Hero image below text
- Full-width buttons

### Tablet Adaptations
- 2-column grid for cards
- Reduced padding
- Side-by-side layout maintained

## 7. Accessibility

### WCAG 2.1 Level AA
- Keyboard navigation support
- Screen reader compatibility
- Color contrast 4.5:1 minimum
- Focus indicators visible
- Alt text for images
- Form labels associated

### Mobile Accessibility
- Touch targets minimum 44x44px
- Zoom support
- Gesture alternatives

## 8. Content Tone

### Mongolian Language
- Formal tone
- Professional vocabulary
- Technical terms where appropriate
- Clear, concise messaging

## 9. Setup Commands

```bash
# Install dependencies
pnpm add framer-motion clsx tailwind-merge lucide-react next-themes

# Install shadcn components
npx shadcn add button card input dialog dropdown-menu navigation-menu sheet table tabs textarea badge separator skeleton
```

## 10. Source Audit Summary

**Source:** KFC Mongolia (https://www.kfcmongolia.com/index)
**Strategy:** Copy-site (faithful replication with industrial adaptation)

### Audited Pages
- Homepage (/index)

### Key Elements Extracted
- Navigation structure
- Hero section layout
- Color scheme (adapted from red to navy blue)
- Card-based content presentation
- CTA button style

### Adaptations Made
- Color: Red → Navy blue (professional/industrial)
- Content: Fast food → Industrial maintenance
- Tone: Casual → Formal
- Imagery: Food → Equipment/machinery

## 11. Asset Requirements

### Images Needed
- Hero image (industrial equipment)
- Service images (3)
- About page image
- Equipment/product images

### Icons Needed
- QR code icon
- Tools/wrench icon
- Truck/delivery icon
- Phone icon
- Email icon
- Location icon

## 12. Special Features

### QR Code Integration
- Equipment cards display QR codes
- QR scanner functionality
- Link to equipment details

### Emergency Call
- Prominent CTA button
- Direct phone integration
- Quick access from header

### Equipment Management
- Equipment listing page
- Detailed equipment view
- Maintenance history
- Parts inventory

## 13. Performance Considerations

### Initial Load
- Target: < 2 seconds
- Optimize images
- Lazy load below-fold content
- Minimize JavaScript bundle

### Runtime
- Smooth 60fps animations
- Efficient re-renders
- Optimized scroll performance

## 14. Security

### Authentication
- erxes Client Portal integration
- Role-based access control
- Secure API calls

### Data Protection
- Input validation
- XSS prevention
- CSRF protection
