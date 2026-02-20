# 📱 Login Screen Mobile App

A modern **React Native + Expo** mobile application featuring a beautiful login screen with a warm, gradient-themed UI. Built with **TypeScript**, **NativeWind (Tailwind CSS)**, and **Expo Router** for seamless navigation.

---

## 💻 Source Code

🔗 **GitHub Repository:** [https://github.com/aniltanriverdiler/login-screen.git](https://github.com/aniltanriverdiler/login-screen.git)

---

## ✨ Features

### 🔐 Authentication Screen
- ✅ **Login Screen:** Beautiful login interface with username and password fields
- ✅ **Remember Me:** Checkbox option to remember user credentials
- ✅ **Forgot Password:** Link to password recovery functionality
- ✅ **Social Login:** UI buttons for Google and Apple authentication (ready for integration)

### 🎨 Design & UI
- 🌈 **Gradient Theme:** Warm gradient background with beige/cream tones (#FFF7E6 to #EFE2C8)
- ✨ **Modern UI:** Styled with **NativeWind (Tailwind CSS)** for React Native
- 📱 **Responsive Design:** Optimized for iOS and Android devices
- 🎨 **Custom Components:** Reusable input and checkbox components
- 🖼️ **Custom Icons:** Login icon and social media icons (Google, Apple)
- 📝 **Typography:** DM Sans and Inter font families for modern typography

### 📱 Mobile Features
- 📱 **Cross-Platform:** Works on both iOS and Android
- 🚀 **Expo Router:** File-based routing for seamless navigation
- ⚡ **Fast Performance:** Optimized React Native components
- 🎯 **Native Feel:** Uses native components for authentic mobile experience
- 🔄 **React Native Reanimated:** Smooth animations and transitions

---

## 📂 Project Structure
```
login-screen/
├─ app/                      # Expo Router app directory (file-based routing)
│  ├─ _layout.tsx           # Root layout component with theme provider
│  └─ login.tsx              # Login screen component
├─ assets/                   # Static assets (images, icons)
│  ├─ images/                # Image assets
│  └─ icons/                 # Icon assets (login-icon, google-icon, apple-logo-icon)
├─ components/               # Reusable React Native components
│  ├─ common/                # Common components
│  │   ├─ input.tsx          # Custom input component with icon support
│  │   └─ check-box.tsx      # Custom checkbox component
│  ├─ ui/                    # UI components
│  │   ├─ collapsible.tsx
│  │   └─ icon-symbol.tsx
│  ├─ themed-view.tsx        # Themed view wrapper
│  ├─ themed-text.tsx        # Themed text component
│  └─ ...
├─ constants/                # App constants
│  └─ theme.ts               # Theme configuration
├─ hooks/                    # Custom React hooks
│  ├─ use-color-scheme.ts    # Color scheme hook
│  └─ use-theme-color.ts     # Theme color hook
├─ scripts/                  # Build and utility scripts
│  └─ reset-project.js       # Project reset script
├─ .vscode/                  # VS Code settings
├─ app.json                  # Expo configuration
├─ package.json              # Dependencies and scripts
├─ tsconfig.json             # TypeScript configuration
├─ tailwind.config.js        # Tailwind CSS configuration
├─ metro.config.js           # Metro bundler configuration
├─ babel.config.js           # Babel configuration
├─ eslint.config.js          # ESLint configuration
├─ global.css                # Global styles
└─ README.md                 # Project documentation
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`) or use `npx expo`
- iOS Simulator (for Mac) or Android Studio (for Android development)
- Expo Go app (for testing on physical devices)

### Installation Steps

1️⃣ **Clone the repository:**
```bash
git clone https://github.com/aniltanriverdiler/login-screen.git
cd login-screen
```

2️⃣ **Install dependencies:**
```bash
npm install
```

3️⃣ **Start the development server:**
```bash
npm start
# or
npx expo start
```

4️⃣ **Run on your device:**
- **iOS:** Press `i` in the terminal or scan QR code with Expo Go app
- **Android:** Press `a` in the terminal or scan QR code with Expo Go app
- **Web:** Press `w` in the terminal

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint
- `npm run reset-project` - Reset project to blank template

---    

## 🏗️ Tech Stack

- ⚛️ **React Native 0.81.5** – Cross-platform mobile framework
- 🟦 **TypeScript ~5.9.2** – Type-safe development
- ⚛️ **React 19.1.0** – Latest React version
- 🚀 **Expo ~54.0.29** – Development platform and tooling
- 📱 **Expo Router ~6.0.19** – File-based routing for React Native
- 🎨 **NativeWind 4.2.1** – Tailwind CSS for React Native
- 🎨 **Tailwind CSS 3.4.19** – Utility-first CSS framework
- 🔄 **React Navigation 7.x** – Navigation library
- 📦 **@expo/vector-icons 15.0.3** – Icon library
- 🎯 **React Native Gesture Handler ~2.28.0** – Native gesture handling
- ⚡ **React Native Reanimated ~4.1.1** – High-performance animations
- 🎨 **Expo Linear Gradient ~15.0.8** – Gradient backgrounds
- 🔤 **Google Fonts** – DM Sans and Inter font families

---

## 🎮 How to Use

1️⃣ **Start the App** – Run `npm start` to launch the Expo development server  
2️⃣ **Open on Device** – Scan the QR code with Expo Go app (iOS/Android) or use simulator  
3️⃣ **Login Screen** – Enter your username and password in the input fields  
4️⃣ **Remember Me** – Check the checkbox to save your login credentials  
5️⃣ **Forgot Password** – Tap "Forgot Password?" link to recover your account  
6️⃣ **Social Login** – Tap "Log in with Google" or "Log in with Apple" buttons  
7️⃣ **Sign Up** – Tap "Sign Up" link at the bottom to navigate to registration (to be implemented)  

---

## 📱 Screens

- **🔐 Login** – Main authentication screen with:
  - Username/email input field
  - Password input field with lock icon
  - Remember me checkbox
  - Forgot password link
  - Login button
  - Social login options (Google & Apple)
  - Sign up navigation link

---

## 📌 Technical Notes

- **Cross-Platform** – Built with React Native for iOS and Android support
- **Expo Managed Workflow** – Uses Expo SDK for simplified development
- **File-Based Routing** – Expo Router provides automatic routing based on file structure
- **NativeWind Styling** – Tailwind CSS utilities for React Native components
- **TypeScript** – Full type safety throughout the application
- **Modern Architecture** – Built with latest React Native patterns and best practices
- **Performance Optimized** – Uses React Native optimizations and native components
- **New Architecture Enabled** – Expo new architecture is enabled in app.json
- **React Compiler** – Experimental React compiler enabled for better performance
- **Typed Routes** – Type-safe routing with Expo Router typed routes

---

## 🔮 Future Enhancements

- 📝 **Signup Screen** – User registration functionality
- 🔑 **Password Recovery** – Complete forgot password flow
- 🔐 **Social Authentication** – Integrate Google and Apple sign-in
- 💾 **Form Validation** – Input validation and error handling
- 🔒 **Secure Storage** – Store credentials securely
- 🌐 **API Integration** – Connect to backend authentication API
- 🎨 **Dark Mode** – Dark theme support
- 🌍 **Internationalization** – Multi-language support

---

## 🤝 Contributing

💡 Have an idea or found a bug?

- 🍴 **Fork the repository**
- 🌿 **Create a feature branch** (`git checkout -b feature/amazing-feature`)
- 💻 **Make your changes** and test thoroughly on both iOS and Android
- 📝 **Commit your changes** (`git commit -m 'Add amazing feature'`)
- 🚀 **Push to the branch** (`git push origin feature/amazing-feature`)
- 🔄 **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write clear commit messages
- Test on both iOS and Android platforms
- Ensure responsive design for different screen sizes
- Update documentation as needed
- Use TypeScript for type safety
- Follow React Native best practices

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Expo Team** – For the amazing React Native development platform
- **React Native Community** – For the incredible cross-platform framework
- **NativeWind** – For bringing Tailwind CSS to React Native
- **Open Source Community** – For the amazing libraries and tools
- **All Contributors** – Who help make this project better
