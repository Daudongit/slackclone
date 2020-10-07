@php
    $config = [
        'appName' => config('app.name'),
    ];
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
</head>
<body>
    <div id="app"></div>

    {{-- Global configuration object --}}
    <script>
        window.config = @json($config);
    </script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
