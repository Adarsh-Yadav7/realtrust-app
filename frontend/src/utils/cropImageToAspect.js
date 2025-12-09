// src/utils/cropImageToAspect.js

/**
 * Crop an image file to a fixed aspect ratio and size (default 450 x 350)
 * and return a base64 data URL.
 *
 * - file: File from <input type="file">
 * - outputWidth / outputHeight: final size in pixels
 */
export function cropImageToAspect(file, outputWidth = 450, outputHeight = 350) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("No file provided"));
      return;
    }

    const reader = new FileReader();

    reader.onerror = () => {
      reader.abort();
      reject(new Error("Failed to read image file"));
    };

    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        try {
          const aspect = outputWidth / outputHeight;
          const imgAspect = img.width / img.height;

          let sx, sy, sWidth, sHeight;

          if (imgAspect > aspect) {
            // Image is wider than target ratio -> crop sides
            sHeight = img.height;
            sWidth = img.height * aspect;
            sx = (img.width - sWidth) / 2;
            sy = 0;
          } else {
            // Image is taller than target ratio -> crop top/bottom
            sWidth = img.width;
            sHeight = img.width / aspect;
            sx = 0;
            sy = (img.height - sHeight) / 2;
          }

          const canvas = document.createElement("canvas");
          canvas.width = outputWidth;
          canvas.height = outputHeight;

          const ctx = canvas.getContext("2d");
          if (!ctx) {
            reject(new Error("Could not get canvas context"));
            return;
          }

          ctx.drawImage(
            img,
            sx,
            sy,
            sWidth,
            sHeight,
            0,
            0,
            outputWidth,
            outputHeight
          );

          const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
          resolve(dataUrl);
        } catch (err) {
          reject(err);
        }
      };

      img.onerror = () => reject(new Error("Failed to load image for cropping"));
      img.src = reader.result;
    };

    reader.readAsDataURL(file);
  });
}
