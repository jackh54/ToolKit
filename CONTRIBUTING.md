# Contributing to ToolKit

Thank you for considering contributing to ToolKit! ToolKit is a community-driven project focused on creating a collection of practical, ad-free tools. This document provides guidelines to help ensure all contributions are consistent, functional, and easy for others to use.

---

## Getting Started

### 1. Fork the Repository
- Start by forking the ToolKit repository to your own GitHub account.

### 2. Clone Your Fork
- Clone your fork locally to begin making changes:
  ```bash
  git clone https://github.com/jackh54/ToolKit.git
  cd ToolKit
  ```

### 3. Create a New Branch
- To keep things organized, create a new branch for your contribution:
  ```bash
  git checkout -b add-your-tool-name
  ```

---

## Adding Your Tool

### Tool Structure
- **Categories**: Navigate to the appropriate category folder in `tools/` (e.g., `tools/rgb-utilities/`, `tools/minecraft/`). If your tool doesn't fit into an existing category, consider adding a new category folder.
- **Files**: Each tool should include:
  - `index.html`: Tool-specific HTML.
  - `your-tool-name.js`: Tool-specific JavaScript functionality.
  - If additional styling is necessary, add to the shared `style.css` in `assets/css/` and follow the existing style conventions.

### Tool Requirements
- **Naming**: Use descriptive names for tools and files. For example, "RGB Picker" should be in `tools/rgb-utilities/rgb-picker/`.
- **Shared Styling**: All tools use a shared `style.css` to maintain consistency. If additional styles are necessary, add them sparingly and follow the established CSS naming conventions.
- **Documentation**: Each tool should contain a brief usage description at the top of `index.html` or within the tool's code. This ensures users can understand and use the tool effectively.

---

## Testing Your Tool

1. **Local Testing**: Open `index.html` in a browser to check your tool's functionality and integration with ToolKit.
2. **Validation**: Ensure your tool is responsive, accessible, and compatible with the current site design.
3. **Cross-Browser Testing**: If possible, test on multiple browsers to ensure consistency.

---

## Submitting a Pull Request

1. **Commit Your Changes**: Once you’re happy with your tool, commit your changes with a clear, concise message:
   ```bash
   git add .
   git commit -m "Add [tool name] to [category]"
   ```

2. **Push to Your Branch**:
   ```bash
   git push origin add-your-tool-name
   ```

3. **Open a Pull Request**:
   - Go to the original repository on GitHub.
   - Open a pull request from your branch, describing your tool and any key details.

### Pull Request Requirements
- Describe the purpose of your tool.
- Mention the category and where it can be accessed.
- Add yourself to the `contributors.json` file with your name and GitHub profile link.

---

## Code of Conduct

Please maintain respectful communication and constructive feedback when reviewing or commenting on pull requests. ToolKit is a collaborative environment built on mutual respect and shared learning.

---

Thank you for helping make ToolKit a better resource for everyone!
