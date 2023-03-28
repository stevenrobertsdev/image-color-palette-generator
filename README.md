# Image Color Palette Generator
This project and README were created by ChatGPT, a large language model trained by OpenAI. The goal of this project was to demonstrate how to build a web application that allows users to upload an image and generate a color palette based on the colors in the image.

This is a web application that allows users to upload an image and generate a color palette based on the colors in the image. The application is built using Node.js and Express, and uses the Color Thief library to extract colors from the uploaded image.

## Installation
To install the application, you can follow these steps:

Clone the repository to your local machine using the command git clone https://github.com/stevenrobertsdev/image-color-palette-generator.git.
Navigate to the project directory using the command cd image-color-palette-generator.
Install the required dependencies using the command npm install.

## Usage
To use the application, you can follow these steps:

Start the application using the command npm start.
Open your web browser and navigate to http://localhost:3000.
Click on the "Choose File" button and select an image file from your computer.
Click on the "Upload" button to generate the color palette based on the colors in the uploaded image.
The color palette will be displayed on the screen as a series of color blocks, along with the hex codes for each color. You can copy the hex codes and use them in your own design projects.

## Dependencies
The following dependencies are used in this project:

- `express`: for creating a web server
- `ejs`: for rendering dynamic HTML templates
- `multer`: for handling file uploads
- `node-vibrant`: for extracting colors from images

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute the code in any way you like. However, please note that the Color Thief library used in this project is licensed separately under the LGPLv3 License.

## Contributing
If you find a bug or have a suggestion for improving the application, please open an issue on the GitHub repository or submit a pull request. Contributions are always welcome!

## Demo
### Sample image from https://unsplash.com/
![sample-image](https://user-images.githubusercontent.com/33123465/228214891-46cf245a-3e6d-4557-b1e6-b246f572a745.jpg)
### Index.html
![starting-screen](https://user-images.githubusercontent.com/33123465/228214938-84d2040a-3870-41eb-8a30-56ba5698109f.jpg)
### Output 
![primary-colour-screen](https://user-images.githubusercontent.com/33123465/228214978-f69ad55f-e236-413b-8a32-064e2f6b1ba4.jpg)

