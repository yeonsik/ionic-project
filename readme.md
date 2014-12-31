

https://github.com/ccoenraets/ioconf 를 ionic framework 를 통해 빌드하여
모바일에도 정상적으로 빌드 및 실행(페이스북 로그인 처리도 모바일에서 되도록 수정) 할 수 있도록 수정한 버전.

# ioConf

Sample conference management application built with AngularJS and Ionic. The application allows conference attendees to browse through the list of sessions and speakers, and share information on Facebook.

## Hosted Version

You can try a hosted version of the app here: [http://ioconf-project.herokuapp.com/](http://ioconf-project.herokuapp.com/)

## Install your own version

1. Clone this repository or download the zip file

1. Navigate to the ioconf directory

    ```
    cd ioconf-project
    ```
    
1. Install the server dependencies
    
    ```
    npm install
    ```
 
2. Start the server

    ```
    node server
    ```
    
3. Open a browser and access [http://localhost:5000](http://localhost:5000) to run the application
    
## Running in Cordova

### Step 1: Install Ionic

1. Make sure you have an up-to-date version of Node.js installed on your system. If you don't have Node.js installed, you can install it from [here](http://nodejs.org/).

1. Open a terminal window (Mac) or a command window (Windows), and install Cordova and Ionic:

  ```
  npm install -g cordova ionic
  ```

  On a Mac, you may have to use **sudo** depending on your system configuration:

  ```
  sudo npm install -g cordova ionic
  ```

1. If you already have Cordova and Ionic installed on your computer, make sure you update to the latest version:

  ```
  npm update -g cordova ionic
  ```

  or

  ```
  sudo npm update -g cordova ionic
  ```


### Step 2: Building for Android

1. Navigate to the ioconf directory
    
    ```
    cd ioconf
    ```
2. Add support for the Android platform:

    ```
    ionic platform add android
    ```

3. Build the project:

    ```
    ionic build android
    ```
    
4. To build and run the application on an Android device connected to your computer using a USB cable:

    ```
    ionic run android
    ```
    
5. To build and run the application in the Android emulator:

    ```
    ionic emulate android
    ```

## Tutorial

You can build this application from scratch using this tutorial: [http://ccoenraets.github.io/ionic-tutorial/](http://ccoenraets.github.io/ionic-tutorial/)


