# React Native FlatList Blank Screen Issue

This repository demonstrates a common performance issue with React Native's FlatList component when dealing with large datasets. The application initially displays a blank screen before eventually rendering the list, indicating a performance bottleneck.

The issue stems from the FlatList trying to render all items at once, which can overwhelm the UI thread, especially with many items and complex components.

## Solution

The provided solution utilizes techniques to improve performance such as `windowSize` and `initialNumToRender` props for optimal rendering and memory management.