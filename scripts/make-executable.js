import { promises as fs } from 'fs';
import { platform } from 'process';

async function makeExecutable() {
  // Only run chmod on Unix-like platforms
  if (platform !== 'win32') {
    const { exec } = await import('child_process');
    exec('chmod +x build/index.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error making file executable: ${error}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log('Made build/index.js executable');
    });
  }
}

makeExecutable();