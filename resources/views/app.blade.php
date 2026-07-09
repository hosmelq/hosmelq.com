<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', Config::string('app.locale')) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta
            name="description"
            content="I help startups and teams ship great products through code."
        />
        <link rel="canonical" href="https://hosmelq.com/" />
        <link rel="icon" type="image/png" href="{{ url('favicon.png') }}" />

        <meta name="theme-color" content="#ffffff" />

        @fonts(['instrument', 'sans'])

        @viteReactRefresh
        @vite('resources/js/app.tsx')

        <x-inertia::head>
            <title>Hosmel Quintana</title>
        </x-inertia::head>
    </head>

    <body class="bg-background text-foreground font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
