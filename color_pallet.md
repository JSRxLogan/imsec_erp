
---

### 🎨 **Colors Used Till Now**

1. **Header**

   * Background: `#253973` (deep blue)
   * Text (IMSEC initials): “dark white” (≈ `#f5f5f5` or `#eaeaea`, not pure white)
   * Student ID text: same “dark white”
   * Dropdown menu items:

     * Background: `#ffc839` (yellow/gold)
     * Text: `#253973` (deep blue)

---

2. **Footer**

   * Background: `#f3f3f3` (light gray)
   * Text: default dark text (likely `#333` or `#555`)
   * Links (About, Contact): will inherit text color but hover can be styled (`hover:text-[#253973]`)

---

3. **Sidebar**

   * Background: `#ffffff` (white)
   * Text (main options): `#555` (medium-dark gray)
   * Icons: `#253973` (deep blue)
   * Sub-options: different background than main (not fully fixed yet, but we can use `#f3f3f3` for consistency)
   * Hover states: subtle darkening, e.g. `hover:bg-gray-100` with `cursor-pointer`
   * Transition: `transition-all duration-300`

---

4. **General Rules**

   * Nothing funky/Gen Z, keep professional.
   * Use hover, pointer → cursor, and **small latency transitions** for dropdowns + sidebar expand/collapse.
   * Responsiveness: Sidebar collapses for desktop, hamburger menu for mobile.

---

So far, the palette is basically:

* **Primary Blue**: `#253973`
* **Highlight Yellow**: `#ffc839`
* **Light Gray**: `#f3f3f3`
* **White**: `#ffffff`
* **Dark Gray (text)**: `#555`
* **Dark White (IMSEC, ID)**: `#f5f5f5`

---
