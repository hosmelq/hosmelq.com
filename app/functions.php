<?php

declare(strict_types=1);

namespace App;

use App\Enums\FlashKey;
use App\Enums\ToastVariant;
use Inertia\Inertia;

function toast(
    string $title,
    null|string $description = null,
    ToastVariant $variant = ToastVariant::Success,
    int $timeout = 5
): void {
    Inertia::flash(FlashKey::Toast(), array_filter([
        'description' => $description,
        'timeout' => $timeout * 1000,
        'title' => $title,
        'variant' => $variant->value,
    ], fn (null|int|string $value): bool => $value !== null));
}
