# BAPS Image Selector Tool - Bal Prakash

## Overview
This tool allows users to easily extract, view, select, and download images from BAPS news and vicharan photos webpages.

## Features
- **Image Fetching**: Extract images from any BAPS news URL
- **Image Grid View**: Browse images in a responsive grid layout
- **Image Selection**: Select individual or all images on the current page
- **Pagination**: Navigate through large sets of images
- **Download Options**: Download selected images individually
- **Copy Image Links**: Copy URLs of selected images to clipboard
- **Image Details**: View detailed information about selected images
- **Mobile Responsive**: Works on desktop and mobile devices

## Usage Instructions

### Fetching Images
1. Enter a BAPS news URL in the input field
2. Click "Fetch Images" or press Enter
3. Wait for images to load in the grid view

### Selecting Images
- Click on an image or its checkbox to select/deselect
- Use "Select All" to select all images on the current page
- The counter at the top shows how many images are currently selected

### Working with Selected Images
- **Download Selected**: Downloads each selected image to your device
- **Copy Image Links**: Copies the URLs of all selected images to clipboard
- **Show Selected Details**: Displays additional information about selected images

### Image Details View
- Shows thumbnails, filenames, and URLs of selected images
- Provides quick copy buttons for individual image URLs
- Displays captions when available

## Technical Details

### Responsive Display
- Displays both horizontal and vertical images properly
- Uses CSS grid for responsive layout (4 columns on large screens, 2 on medium, 1 on mobile)
- Fixed container height with object-fit: contain to handle various image orientations

### Image Processing
- Handles various BAPS website structures to extract images
- Processes both relative and absolute URLs
- Extracts captions from surrounding elements when available
- Preserves original filenames for downloads

### Browser Compatibility
- Works on modern browsers (Chrome, Firefox, Safari, Edge)
- Uses fetch API for network requests
- Uses proxy to bypass CORS restrictions

## Notes for Developers
- The tool uses a CORS proxy (allorigins.win) to fetch content from BAPS websites
- Image selection state is maintained during pagination
- Download functionality uses individual fetch requests and browser download capabilities
- The UI provides visual feedback for loading states and operation success/failure
