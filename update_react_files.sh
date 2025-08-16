#!/bin/bash

set -euo pipefail

MAIN_DIR="app/src/main/assets/react-app"
DEBUG_DIR="app/src/debug/assets/react-app"
CLONE_DIR="build/tmp/qlarr-clone"
REPO_URL="https://github.com/qlarr-surveys/frontend"

# Cleanup function on success or error
cleanup() {
    echo "🧹 Cleaning up..."
    rm -rf "$CLONE_DIR"
    rm -rf "$MAIN_DIR"
    rm -rf "$DEBUG_DIR"
    echo "🧹 Cleaning up finished"
}
trap cleanup EXIT

echo "🚀 Starting React asset preparation..."

cleanup

echo "Step 2: Cloning repository..."
git clone "$REPO_URL" "$CLONE_DIR"

cd "$CLONE_DIR"

echo "Step 3: Installing dependencies..."
npm install

echo "Step 4: Building production assets..."
npm run build-android

echo "Step 5: Copying production assets..."
mkdir -p "../../../$MAIN_DIR"
cp -r build/* "../../../$MAIN_DIR"

echo "Step 6: Cleaning intermediate build..."
rm -rf build-android

echo "Step 7: Building debug assets..."
npm run build-android-debuggable

echo "Step 8: Copying debug assets..."
mkdir -p "../../../$DEBUG_DIR"
cp -r build/* "../../../$DEBUG_DIR"

# Disable trap on success so it doesn't delete outputs
trap - EXIT
rm -rf "$CLONE_DIR"

echo "✅ React asset preparation completed successfully."