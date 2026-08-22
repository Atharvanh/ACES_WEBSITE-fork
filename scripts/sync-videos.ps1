# Sync Videos Script for ACES Website
# Copies all .mp4 videos from C:\Users\rYie\Videos\aces to public/videos/

$sourceDir = "C:\Users\rYie\Videos\aces"
$destDir = Join-Path $PSScriptRoot "..\public\videos"

if (-not (Test-Path $sourceDir)) {
    Write-Host "Source directory $sourceDir not found!" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
}

$videos = Get-ChildItem -Path $sourceDir -Filter "*.mp4" | Sort-Object Name
$i = 1

Write-Host "Found $($videos.Count) videos in $sourceDir. Copying to $destDir..." -ForegroundColor Cyan

foreach ($vid in $videos) {
    $targetFile = Join-Path $destDir "reel-$i.mp4"
    Copy-Item $vid.FullName -Destination $targetFile -Force
    $sizeMB = [math]::Round($vid.Length / 1048576, 2)
    Write-Host " [OK] Copied $($vid.Name) -> reel-$i.mp4 ($sizeMB MB)" -ForegroundColor Green
    $i++
}

Write-Host "Done! All $($videos.Count) videos are synced to public/videos/." -ForegroundColor Green
