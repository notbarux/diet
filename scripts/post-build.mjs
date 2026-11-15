import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const packageJson = JSON.parse(readFileSync(resolve(projectRoot, 'package.json'), 'utf8'))
const version = packageJson.version

function git(args, { quiet = false } = {}) {
  const result = spawnSync('git', args, {
    cwd: projectRoot,
    encoding: 'utf8',
    stdio: quiet ? 'ignore' : 'inherit',
  })
  if (result.error) {
    console.error(`Unable to execute git: ${result.error.message}`)
    process.exit(1)
  }
  return result
}

const repositoryCheck = git(['rev-parse', '--is-inside-work-tree'], { quiet: true })
if (repositoryCheck.status !== 0) {
  console.error('Build completed, but automatic commit/push requires running inside a Git repository.')
  process.exit(repositoryCheck.status ?? 1)
}

// Restore the tracked custom domain file after Vite has written docs/.
const restoreCname = git(['restore', '--source=HEAD', '--staged', '--worktree', '--', 'docs/CNAME'])
if (restoreCname.status !== 0) {
  console.error('Unable to restore docs/CNAME from HEAD; refusing to create a partial build commit.')
  process.exit(restoreCname.status ?? 1)
}

const stage = git(['add', '--all'])
if (stage.status !== 0) process.exit(stage.status ?? 1)

const stagedDiff = git(['diff', '--cached', '--quiet'], { quiet: true })
if (stagedDiff.status === 1) {
  const message = `chore: build for v${version}`
  const commit = git([
    '-c', 'user.name=notbarux',
    '-c', 'user.email=336620935+notbarux@users.noreply.github.com',
    'commit', '-m', message,
  ])
  if (commit.status !== 0) process.exit(commit.status ?? 1)
} else if (stagedDiff.status === 0) {
  console.log('Build succeeded; no changes to commit.')
} else {
  console.error('Unable to inspect staged Git changes.')
  process.exit(stagedDiff.status ?? 1)
}

const push = git(['push'])
if (push.status !== 0) process.exit(push.status ?? 1)
console.log(`Build commit pushed successfully (version ${version}).`)
