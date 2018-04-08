param (
    [Parameter(Mandatory = $true)]
    [string] $siteUrl
)

try {
  $result = @{ result = $siteUrl }
}
catch {
  $myError = @{
      Message = $_.Exception.Message
      Type    = $_.FullyQualifiedErrorID
  }
  $result = @{ Error = $myError }
}

ConvertTo-Json $result -Compress
