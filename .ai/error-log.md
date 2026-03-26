# Error Log Bridge Tech

### [2026-03-26 20:25:00] Initial NPM Install Error (ENOTEMPTY)

- Context: Installing multiple dependencies at once in a new Vite project.
- Requested task: Setup dependencies.
- What was wrong: `npm install` failed with `ENOTEMPTY`.
- Root cause: Temporary filesystem lock or partial `node_modules` state after project initialization on Windows.
- Fix applied: Ran `npm install` in smaller batches.
- Prevention rule: On Windows, if `npm install` fails with `ENOTEMPTY`, try running it in smaller batches or clear `node_modules` first.
- Affected files: `package.json`
- Status: fixed

### [2026-03-26 21:10:00] PostCSS config error (caniuse-lite missing)

- Context: Running `npm run dev` for the first time.
- Requested task: Fix Vite/PostCSS error.
- What was wrong: Vite failed to load PostCSS config because `caniuse-lite/dist/unpacker/agents` was missing in `node_modules`.
- Root cause: Corrupted or partial installation of `caniuse-lite`. Standard `npm install` didn't fix it because it thought the package was already up to date despite missing internal files.
- Fix applied: Manually deleted `node_modules/caniuse-lite` and then ran `npm install caniuse-lite@latest` to force a clean re-installation.
- Prevention rule: If "Cannot find module" occurs inside a dependency that supposedly exists, manually delete its folder in `node_modules` and re-install.
- Affected files: `node_modules/caniuse-lite`
- Status: fixed (requires full cleanup if recurring)

### [2026-03-26 21:20:00] Stale Vite Cache & Lucide Missing Export

- Context: Restarting development server after partial fixes.
- Requested task: Fix `Twitter` icon export error.
- What was wrong: Vite reported missing export for `Twitter` even if the package seemed installed. Likely due to stale `.vite` cache and version mismatch (1.7.0 was installed instead of latest).
- Root cause: Running `npm run dev` while files were potentially locked, and using an outdated/partial `node_modules` state.
- Fix applied: Atomic cleanup: Killed all `node.exe` processes, deleted `node_modules` and `package-lock.json` completely, updated `package.json` with correct stable versions (`lucide-react@0.471.0`), and ran a clean `npm install`.
- Prevention rule: For cross-dependency "missing module" or "missing export" errors in Vite, do a full `node_modules` purge and kill hanging node processes first.
- Affected files: `node_modules`, `package.json`, `package-lock.json`
- Status: fixed

### [2026-03-26 21:30:00] ReferenceError: cn is not defined in About.jsx

- Context: Viewing the "About" section in the browser.
- Requested task: Address the runtime console error.
- What was wrong: `cn` utility was used in `About.jsx` but was not imported from `utils/cn.js`.
- Root cause: Overlooked import statement during the initial generation of the `About` section.
- Fix applied: Added `import { cn } from "../utils/cn";` to `src/sections/About.jsx`. Verified with `npx vite build`.
- Prevention rule: Always scan for used utilities (like `cn`, `motion`) before finalizing a component and ensure all are imported.
- Affected files: `src/sections/About.jsx`
- Status: fixed
