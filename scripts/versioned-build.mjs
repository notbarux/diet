import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'vite'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const packagePath = resolve(projectRoot, 'package.json')
const lockPath = resolve(projectRoot, 'package-lock.json')
const originalPackageContent = readFileSync(packagePath, 'utf8')
const originalLockContent = readFileSync(lockPath, 'utf8')
const packageJson = JSON.parse(originalPackageContent)
const lockJson = JSON.parse(originalLockContent)

const versionMatch = /^(\d+)\.(\d+)\.(\d+)$/.exec(packageJson.version || '')
if (!versionMatch) {
  console.error('Cannot auto-increment unsupported package version: ' + packageJson.version)
  process.exit(1)
}

if (!lockJson.packages || !lockJson.packages['']) {
  console.error('package-lock.json is missing its root package metadata; version was not changed.')
  process.exit(1)
}

const nextVersion = [
  Number(versionMatch[1]),
  Number(versionMatch[2]),
  Number(versionMatch[3]) + 1,
].join('.')

packageJson.version = nextVersion
lockJson.version = nextVersion
lockJson.packages[''].version = nextVersion

try {
  writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n')
  writeFileSync(lockPath, JSON.stringify(lockJson, null, 2) + '\n')
  // Vite reads package.json during this build, embedding nextVersion in the UI.
  await build({ root: projectRoot })
  console.log('Production bundle generated for v' + nextVersion + '.')
} catch (error) {
  // Keep package metadata unchanged when Vite fails.
  writeFileSync(packagePath, originalPackageContent)
  writeFileSync(lockPath, originalLockContent)
  console.error('Vite build failed; restored package metadata to v' + versionMatch[0] + '.')
  throw error
}
