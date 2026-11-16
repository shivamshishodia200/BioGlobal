$ProgressPreference = 'SilentlyContinue'
Add-Type -AssemblyName System.IO.Compression.FileSystem

$distPath = (Resolve-Path "dist").Path
$zipPath = Join-Path (Get-Location).Path "thebioglobal-deploy.zip"

if (Test-Path $zipPath) {
    Remove-Item -Force $zipPath
}

[System.IO.Compression.ZipFile]::CreateFromDirectory($distPath, $zipPath, [System.IO.Compression.CompressionLevel]::Optimal, $false)

Write-Host "Created ZIP file at: $zipPath"
$item = Get-Item $zipPath
Write-Host "Size: $([math]::Round($item.Length / 1MB, 2)) MB"

