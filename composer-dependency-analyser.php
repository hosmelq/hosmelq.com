<?php

declare(strict_types=1);

use ShipMonk\ComposerDependencyAnalyser\Config\Configuration;
use ShipMonk\ComposerDependencyAnalyser\Config\ErrorType;

return new Configuration()
    ->addPathToScan(__DIR__.'/database/migrations', isDev: false)
    ->ignoreErrors([ErrorType::SHADOW_DEPENDENCY])
    ->ignoreErrorsOnPackages([
        'laravel/octane',
        'laravel/tinker',
        'laravel/wayfinder',
        'league/flysystem-aws-s3-v3',
        'thecodingmachine/safe',
    ], [ErrorType::UNUSED_DEPENDENCY]);
