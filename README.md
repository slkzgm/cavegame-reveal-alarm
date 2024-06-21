# cavegame-reveal-alarm

Simple alarm that triggers when the cave you're monitoring has its map revealed.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- A terminal or command-line interface (Command Prompt, PowerShell, Terminal, etc.)

## How to Use

1. **Download or Clone the Repository**

    If you have Git installed, download a local copy of the project using the following command in your terminal:
    ```sh
    git clone https://github.com/yourusername/cavegame-reveal-alarm.git
    ```

    If you don't have Git, you can download the project as a ZIP file from the GitHub repository page. Click on the "Code" button and then "Download ZIP". Extract the ZIP file to a directory of your choice.

    Navigate into the project directory:
    ```sh
    cd cavegame-reveal-alarm
    ```

2. **Install Dependencies**

    Install the necessary dependencies using npm:
    ```sh
    npm install
    ```

3. **Edit Configuration**

    Open the `index.js` file in a text editor. If you don't have a code editor, you can use a simple text editor like Notepad (Windows) or TextEdit (Mac). Replace `YOUR_WEB3_TOKEN` and `YOUR_CAVE_ID` with your actual Web3 token and cave ID:
    ```js
    const web3Token = 'YOUR_WEB3_TOKEN';
    const caveId = 'YOUR_CAVE_ID';
    ```

4. **Run the Application**

    Start the application by running:
    ```sh
    node .
    ```

## Additional Information

### Troubleshooting

- **Node.js and npm Installation**: If you encounter issues installing Node.js or npm, refer to the [official Node.js installation guide](https://nodejs.org/en/download/package-manager/).
- **Editing Files**: If you're unfamiliar with editing files, you can use a simple text editor like Notepad (Windows) or TextEdit (Mac), or a more advanced editor like [Visual Studio Code](https://code.visualstudio.com/).

### Frequently Asked Questions

1. **How do I get a Web3 token?**
    - Web3 tokens can usually be obtained from the service or platform you're interacting with. Check their documentation or support for detailed instructions.

2. **Where do I find my cave ID?**
    - The cave ID should be provided by the application or service you're monitoring. Look for it in the account settings or profile section.

3. **I receive an error when running `node .`**
    - Ensure that all dependencies are correctly installed. Run `npm install` again to verify. Check for typos in your `index.js` file.

## Contributing

If you have suggestions or improvements, feel free to submit a pull request or open an issue.
