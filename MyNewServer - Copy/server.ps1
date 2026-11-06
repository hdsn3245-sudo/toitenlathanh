$root = "C:\MyNewServer"
$port = 8090

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

$listener.Start()

Write-Host "================================"
Write-Host " SHOP QUAN AO WEB SERVER"
Write-Host " URL: http://localhost:$port"
Write-Host "================================"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $path = $context.Request.Url.LocalPath

    if ($path -eq "/") {
        $path = "/index.html"
    }

    $file = Join-Path $root ($path.TrimStart("/") -replace "/", "\")

    if (Test-Path $file -PathType Leaf) {
        $content = [System.IO.File]::ReadAllBytes($file)
        $ext = [IO.Path]::GetExtension($file)

        switch ($ext) {
            ".html" { $context.Response.ContentType = "text/html; charset=utf-8" }
            ".css"  { $context.Response.ContentType = "text/css" }
            ".js"   { $context.Response.ContentType = "application/javascript" }
            ".png"  { $context.Response.ContentType = "image/png" }
            ".jpg"  { $context.Response.ContentType = "image/jpeg" }
            ".jpeg" { $context.Response.ContentType = "image/jpeg" }
            ".svg"  { $context.Response.ContentType = "image/svg+xml" }
        }

        $context.Response.StatusCode = 200
    }
    else {
        $content = [Text.Encoding]::UTF8.GetBytes("404 - Not Found")
        $context.Response.StatusCode = 404
    }

    $context.Response.ContentLength64 = $content.Length
    $context.Response.OutputStream.Write($content, 0, $content.Length)
    $context.Response.Close()
}
