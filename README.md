# Password Challenge

---

First of all, thank you very much for this opportunity. I hope I did everything correctly, but if there are any issues, I am open to suggestions to improve the code. I hope you enjoy it as much as I did while working on it.

---

## Observations

- I couldn't find the exact same icons used in the prototype, so I used similar ones available in the Material-UI library.
- During the development process, I considered using libraries like Formik or React Hook Form to handle form inputs more effectively, especially for larger and more complex forms. However, for the purpose of this challenge and to keep the project lightweight, I decided to manage the form state and validation manually without relying on external libraries. I preferred to minimize the use of external libraries to maintain simplicity and reduce dependencies.
- Regarding the requirement that the password "Has NO consecutive letters", I interpreted this to mean that the password cannot contain three or more letters that are consecutive in alphabetical order (e.g., "abc", "def"). I wasn't entirely sure if this was the correct interpretation, but I implemented the validation based on this assumption.
- Instead of passing the password requirements as plain strings, I opted to use enums. By using enums, the description is defined once in the enum, and then you can simply pass the enum value wherever the requirement is needed.
- I could have hardcoded the patterns for the consecutive characters regex but I thought it was cleaner to generate it with a function instead.

---

## Packages Installed

- **@mui/icons-material** - [Material-UI Icons](https://mui.com/material-ui/material-icons/)

---

## Technologies Used

- **TypeScript**
- **React**

---

## How to Run the Project

1. Clone the repository:

   ```sh
   git clone https://github.com/tmarenco/qventus-password-challenge.git
   ```

2. Access to the folder:

   ```sh
   cd qventus-password-challenge
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

---

## Personal Information

- **Name**: Tomás Marenco
- **Email**: tmarencocastello@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/tmarenco/

---
