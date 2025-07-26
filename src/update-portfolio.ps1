# PowerShell commands to restructure your portfolio website
# This script removes About section, Accordion component, and adds Execution section

Write-Host "Starting portfolio restructure..." -ForegroundColor Cyan

# 1. Remove the About.tsx file
Write-Host "Removing About.tsx..." -ForegroundColor Yellow
Remove-Item -Path "src/components/sections/About.tsx" -Force

# 2. Remove the Accordion.tsx file (since it's not used)
Write-Host "Removing unused Accordion.tsx..." -ForegroundColor Yellow
Remove-Item -Path "src/components/ui/Accordion.tsx" -Force

# 3. Create the new ExecutionSection.tsx file
Write-Host "Creating ExecutionSection.tsx..." -ForegroundColor Yellow
$executionContent = @'
import React from 'react';
import { Section, Container } from '../ui';

export const ExecutionSection: React.FC = () => {
  return (
    <Section id="execution" variant="lighter">
      <Container>
        <h2 className="text-[28px] md:text-[48px] font-nunito font-semibold text-center mb-8">
          Execution that delivers real results
        </h2>
        <p className="text-[16px] md:text-[20px] font-nunito font-light text-center text-[#1D1D1F] max-w-4xl mx-auto leading-relaxed">
          I deliver real results because I've always been accountable for them. 
          With a full-stack PM background, startup founder experience, and a bias 
          for impact under pressure, I don't just plan—I ship what matters. 
          Go-to-market strategy is part of how I build from day one. Want to see 
          how that translates into real work? Jump into the projects below.
        </p>
      </Container>
    </Section>
  );
};
'@

New-Item -Path "src/components/sections/ExecutionSection.tsx" -ItemType File -Force
Set-Content -Path "src/components/sections/ExecutionSection.tsx" -Value $executionContent

# 4. Update the sections index.ts file
Write-Host "Updating sections/index.ts..." -ForegroundColor Yellow
$sectionsIndexContent = @'
export { Hero } from './Hero';
export { ExecutionSection } from './ExecutionSection';
export { Projects } from './Projects';
export { Blog } from './Blog';
export { Contact } from './Contact';
'@

Set-Content -Path "src/components/sections/index.ts" -Value $sectionsIndexContent

# 5. Update the ui index.ts file to remove Accordion export
Write-Host "Updating ui/index.ts to remove Accordion..." -ForegroundColor Yellow
$uiIndexContent = Get-Content -Path "src/components/ui/index.ts" -Raw
$uiIndexContent = $uiIndexContent -replace "export \{ Accordion \} from './Accordion';\r?\n", ""
Set-Content -Path "src/components/ui/index.ts" -Value $uiIndexContent.TrimEnd()

# 6. Update App.tsx - Replace About with ExecutionSection
Write-Host "Updating App.tsx..." -ForegroundColor Yellow
$appContent = Get-Content -Path "src/App.tsx" -Raw

# Update the import statement
$appContent = $appContent -replace "Hero,\s*About,\s*Projects", "Hero, ExecutionSection, Projects"

# Replace the About component with ExecutionSection
$appContent = $appContent -replace "<About />", "<ExecutionSection />"

# Also remove Accordion from any imports in App.tsx if present
$appContent = $appContent -replace ",?\s*Accordion\s*,?", ""

Set-Content -Path "src/App.tsx" -Value $appContent

Write-Host "`n✅ Successfully completed all changes!" -ForegroundColor Green
Write-Host "   - Removed About.tsx" -ForegroundColor Green
Write-Host "   - Removed Accordion.tsx" -ForegroundColor Green
Write-Host "   - Created ExecutionSection.tsx" -ForegroundColor Green
Write-Host "   - Updated all imports and exports" -ForegroundColor Green
Write-Host "`n🔄 Please restart your development server (npm start) to see the changes." -ForegroundColor Cyan