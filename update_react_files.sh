#!/bin/bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
MAIN_DIR="$ROOT_DIR/app/src/main/assets/react-app"
DEBUG_DIR="$ROOT_DIR/app/src/debug/assets/react-app"
CLONE_DIR="$ROOT_DIR/build/tmp/qlarr-clone"
FRONTEND_DIR="$CLONE_DIR/frontend"
STAGE_DIR="$ROOT_DIR/build/tmp/qlarr-react-stage"
REPO_URL="https://github.com/qlarr-surveys/qlarr"

# Only ever removes scratch dirs, so a failed run leaves the current assets intact
cleanup() {
    echo "🧹 Cleaning up..."
    rm -rf "$CLONE_DIR"
    rm -rf "$STAGE_DIR"
    echo "🧹 Cleaning up finished"
}
trap cleanup EXIT

echo "🚀 Starting React asset preparation..."

cleanup

echo "Step 1: Cloning repository..."
git clone "$REPO_URL" "$CLONE_DIR"

if [ ! -f "$FRONTEND_DIR/package.json" ]; then
    echo "❌ $FRONTEND_DIR/package.json not found — the frontend repo layout has changed." >&2
    exit 1
fi

cd "$FRONTEND_DIR"

echo "Step 2: Installing dependencies..."
npm install

# Set environment variables for Android native build
export VITE_FRONT_END_HOST="localhost:3000"
export VITE_PROTOCOL="http"
export VITE_BE_URL="http://localhost:8080/"

echo "Step 3: Building production assets..."
rm -rf build
npm run build-android
[ -f build/index.html ] || { echo "❌ production build produced no index.html" >&2; exit 1; }

echo "Step 4: Staging production assets..."
mkdir -p "$STAGE_DIR/main"
cp -r build/. "$STAGE_DIR/main"

echo "Step 5: Building debug assets..."
rm -rf build
npm run build-android-debuggable
[ -f build/index.html ] || { echo "❌ debug build produced no index.html" >&2; exit 1; }

echo "Step 6: Staging debug assets..."
mkdir -p "$STAGE_DIR/debug"
cp -r build/. "$STAGE_DIR/debug"

echo "Step 7: Installing assets..."
rm -rf "$MAIN_DIR" "$DEBUG_DIR"
mkdir -p "$MAIN_DIR" "$DEBUG_DIR"
cp -r "$STAGE_DIR/main/." "$MAIN_DIR"
cp -r "$STAGE_DIR/debug/." "$DEBUG_DIR"

echo "✅ React asset preparation completed successfully."
